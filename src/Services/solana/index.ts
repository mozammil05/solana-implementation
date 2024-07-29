import { AnchorProvider, Program, web3, BN } from "@project-serum/anchor";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { AnchorWallet } from "@solana/wallet-adapter-react";

import {
  Token_PROGRAM_INTERFACE,
  TOKEN_PROGRAM_ID,
  commitmentLevel,
  connection,
  mintAccount,
  tokenProgram,
  initial,
  pdaAta,
  stakingAccount,
  userStake,
  vaultAta,
} from "./utils/constants";
import { Solana_bridge } from "./types/solana_bridge";
import { ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";

export const SolanaServiceTransactions = async (
  amount: any,
  destinationChainId: any,
  EVM_Target_Address: any,
  wallet: AnchorWallet
) => {
  console.log("amount", amount, destinationChainId);
  try {
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: commitmentLevel,
    });

    const userAccount = wallet.publicKey;

    // Get the associated token account address
    const ATA = getAssociatedTokenAddressSync(mintAccount, userAccount);

    if (!provider) return;
    const program = new Program(
      Token_PROGRAM_INTERFACE,
      TOKEN_PROGRAM_ID,
      provider
    ) as Program<Solana_bridge>;

    const depositTransaction: any = await program.methods
      .depositSplTokens(
        new BN(amount),
        new BN(destinationChainId),
        EVM_Target_Address
      )
      .accounts({
        depositer: userAccount,
        depositerAta: ATA,
        pdaAta: pdaAta, // Use the PDA
        initial: initial, // Use the initial
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: tokenProgram, // Use the token program
        //---------------------
        vaultAta: vaultAta, // Define vaultAta in your config
        userStake: userStake, // Define userStake in your config
        mint: mintAccount, // Use the mint account from your config
        stakingAccount: stakingAccount, // Define stakingAccount in your config
        user: userAccount, // User account
        rent: web3.SYSVAR_RENT_PUBKEY,
        // associatedTokenProgram: web3.ASSOCIATED_TOKEN_PROGRAM_ID,
      })
      .rpc();
    console.log("depositTransaction", depositTransaction);
    return depositTransaction;
  } catch (error) {
    console.error("Transaction error ", error);
    throw error;
  }
};
