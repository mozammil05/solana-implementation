import { AnchorProvider, Program, BN, web3 } from "@project-serum/anchor";
import {
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";

import { ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Solana_bridge } from "./types/solana_bridge";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import {
  Token_PROGRAM_INTERFACE,
  commitmentLevel,
  connection,
  mintAccount,
  stakingAccount,
  tokenProgram,
  userStake,
} from "./utils/constants";

export const SolanaServiceTransactions = async (
  amount: any,
  wallet: AnchorWallet
) => {
  console.log("Amount:", amount);
  console.log("Wallet PublicKey:", wallet.publicKey.toString());
  try {
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: commitmentLevel,
    });

    const userAccount = wallet.publicKey;

    // Get the associated token account address
    const ATA = getAssociatedTokenAddressSync(mintAccount, userAccount);
    const vaultAta = getAssociatedTokenAddressSync(mintAccount, userAccount);

    if (!provider) return;
    const program = new Program(
      Token_PROGRAM_INTERFACE,
      TOKEN_PROGRAM_ID,
      provider
    ) as Program<Solana_bridge>;

    const depositTransaction: any = await program.methods
      .deposit(new BN(amount))
      .accounts({
        user: userAccount, // Change from depositer to user
        userAta: ATA, // Change from depositerAta to userAta
        // pdaAta: pdaAta, // Use the PDA
        // initial: initial, // Use the initial
        vaultAta: vaultAta, // Ensure this is defined in your IDL
        stakingAccount: stakingAccount, // Define stakingAccount in your config
        userStake: userStake, // Define userStake in your config
        mint: mintAccount, // (SPL Token) Use the mint account from your config
        tokenProgram: tokenProgram, // Use the token program
        systemProgram: web3.SystemProgram.programId,
        rent: web3.SYSVAR_RENT_PUBKEY,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      })
      .rpc();
    console.log("depositTransaction", depositTransaction);
    return depositTransaction;
  } catch (error) {
    console.error("Transaction error ", error);
    throw error;
  }
};
