export type Solana_bridge = {
  version: "0.1.0";
  name: "staking_contract";
  instructions: [
    {
      name: "initialize";
      accounts: [
        { name: "stakingAccount"; isMut: true; isSigner: false },
        { name: "admin"; isMut: true; isSigner: true },
        { name: "systemProgram"; isMut: false; isSigner: false },
        { name: "rent"; isMut: false; isSigner: false }
      ];
      args: [{ name: "bump"; type: "u8" }];
    },
    {
      name: "deposit";
      accounts: [
        { name: "user"; isMut: true; isSigner: true },
        { name: "userAta"; isMut: true; isSigner: false },
        { name: "stakingAccount"; isMut: true; isSigner: false },
        { name: "vaultAta"; isMut: true; isSigner: false },
        { name: "userStake"; isMut: true; isSigner: true },
        { name: "mint"; isMut: false; isSigner: false },
        { name: "tokenProgram"; isMut: false; isSigner: false },
        { name: "systemProgram"; isMut: false; isSigner: false },
        { name: "rent"; isMut: false; isSigner: false },
        { name: "associatedTokenProgram"; isMut: false; isSigner: false }
      ];
      args: [{ name: "amount"; type: "u64" }];
    },
    {
      name: "addRewards";
      accounts: [
        { name: "admin"; isMut: true; isSigner: true },
        { name: "stakingAccount"; isMut: true; isSigner: false }
      ];
      args: [{ name: "amount"; type: "u64" }];
    },
    {
      name: "withdraw";
      accounts: [
        { name: "user"; isMut: true; isSigner: true },
        { name: "stakingAccount"; isMut: true; isSigner: false },
        { name: "userAta"; isMut: true; isSigner: false },
        { name: "vaultAta"; isMut: true; isSigner: false },
        { name: "userStake"; isMut: true; isSigner: false },
        { name: "mint"; isMut: false; isSigner: false },
        { name: "tokenProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "StakingAccount";
      type: {
        kind: "struct";
        fields: [
          { name: "totalStaked"; type: "u64" },
          { name: "rewardRate"; type: "u64" },
          { name: "bump"; type: "u8" }
        ];
      };
    },
    {
      name: "UserStake";
      type: {
        kind: "struct";
        fields: [{ name: "amount"; type: "u64" }, { name: "bump"; type: "u8" }];
      };
    }
  ];
};

export const IDL: Solana_bridge = {
  version: "0.1.0",
  name: "staking_contract",
  instructions: [
    {
      name: "initialize",
      accounts: [
        { name: "stakingAccount", isMut: true, isSigner: false },
        { name: "admin", isMut: true, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
        { name: "rent", isMut: false, isSigner: false },
      ],
      args: [{ name: "bump", type: "u8" }],
    },
    {
      name: "deposit",
      accounts: [
        { name: "user", isMut: true, isSigner: true },
        { name: "userAta", isMut: true, isSigner: false },
        { name: "stakingAccount", isMut: true, isSigner: false },
        { name: "vaultAta", isMut: true, isSigner: false },
        { name: "userStake", isMut: true, isSigner: true },
        { name: "mint", isMut: false, isSigner: false },
        { name: "tokenProgram", isMut: false, isSigner: false },
        { name: "systemProgram", isMut: false, isSigner: false },
        { name: "rent", isMut: false, isSigner: false },
        { name: "associatedTokenProgram", isMut: false, isSigner: false },
      ],
      args: [{ name: "amount", type: "u64" }],
    },
    {
      name: "addRewards",
      accounts: [
        { name: "admin", isMut: true, isSigner: true },
        { name: "stakingAccount", isMut: true, isSigner: false },
      ],
      args: [{ name: "amount", type: "u64" }],
    },
    {
      name: "withdraw",
      accounts: [
        { name: "user", isMut: true, isSigner: true },
        { name: "stakingAccount", isMut: true, isSigner: false },
        { name: "userAta", isMut: true, isSigner: false },
        { name: "vaultAta", isMut: true, isSigner: false },
        { name: "userStake", isMut: true, isSigner: false },
        { name: "mint", isMut: false, isSigner: false },
        { name: "tokenProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "StakingAccount",
      type: {
        kind: "struct",
        fields: [
          { name: "totalStaked", type: "u64" },
          { name: "rewardRate", type: "u64" },
          { name: "bump", type: "u8" },
        ],
      },
    },
    {
      name: "UserStake",
      type: {
        kind: "struct",
        fields: [
          { name: "amount", type: "u64" },
          { name: "bump", type: "u8" },
        ],
      },
    },
  ],
};
