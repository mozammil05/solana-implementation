import idl from "../idl/solana_bridge.json";
// import idl from "../idl/calculator.json";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

/** Constants for RPC Connection the Solana Blockchain */

// processed is the fastest
// finalized is most safe
// confirmed is somewhere balance of both
export const commitmentLevel = "processed";
export const endpoint = clusterApiUrl("devnet"); // Set Network on which You Are Working
export const connection = new Connection(endpoint, commitmentLevel);

/** Constants for our deployed calculator  Program */

export const TOKEN_PROGRAM_ID = new PublicKey(idl.metadata.address); // program ID(smartContract address )
export const Token_PROGRAM_INTERFACE = JSON.parse(JSON.stringify(idl));

export const mintAccount = new PublicKey(
  "CwMLxTdkGbvdWHV4i1v43431tcJXuBVXYQ91hmh1aDmh"
);
// Program Derived Address (PDA) for Associated Token Account (ATA)
export const pdaAta = new PublicKey(
  "FA2eNqr4FCfv9CprP7pPNqwGys1JaCo1HtgCLnk9jY2a"
);
// Initial
export const initial = new PublicKey(
  "Cbxs2YHFAhYtGJyfgaxZ8JPZfRAcvbh8z3K4WpeYwZof"
);
// Program ID for the Token program
export const tokenProgram = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

export const vaultAta = new PublicKey("VAULT_PUBLIC_KEY_HERE");

export const userStake = new PublicKey("USER_STAKE_PUBLIC_KEY_HERE");

export const stakingAccount = new PublicKey("STAKING_ACCOUNT_PUBLIC_KEY_HERE");
