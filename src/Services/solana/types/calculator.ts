
export type CrudWorld = {
  version: "0.1.0";
  name: "calculator";
  instructions: [
    {
      name: "createAccount";
      accounts: [
        { name: "account"; isMut: true; isSigner: true },
        { name: "payer"; isMut: true; isSigner: true },
        { name: "systemProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "calculate";
      accounts: [
        { name: "account"; isMut: true; isSigner: false },
        { name: "payer"; isMut: true; isSigner: true }
      ];
      args: [
        { name: "perform"; type: { defined: "PerformSomeCalculation" } },
        { name: "x"; type: "f64" },
        { name: "y"; type: "f64" }
      ];
    }
  ];
  accounts: [
    {
      name: "accountData";
      type: {
        kind: "struct";
        fields: [{ name: "result"; type: "f64" }];
      };
    }
  ];
  types: [
    {
      name: "PerformSomeCalculation";
      type: {
        kind: "enum";
        variants: [
          { name: "Addition" },
          { name: "Subtraction" },
          { name: "Multiplication" },
          { name: "Division" }
        ];
      };
    }
  ];
  
};
// {

export const IDL: CrudWorld = {
  version: "0.1.0",
  name: "calculator",
  instructions: [
    {
      name: "createAccount",
      accounts: [
        { name: "account", isMut: true, isSigner: true },
        { name: "payer", isMut: true, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "calculate",
      accounts: [
        { name: "account", isMut: true, isSigner: false },
        { name: "payer", isMut: true, isSigner: true },
      ],
      args: [
        { name: "perform", type: { defined: "PerformSomeCalculation" } },
        { name: "x", type: "f64" },
        { name: "y", type: "f64" },
      ],
    },
  ],
  accounts: [
    {
      name: "accountData",
      type: {
        kind: "struct",
        fields: [{ name: "result", type: "f64" }],
      },
    },
  ],
  types: [
    {
      name: "PerformSomeCalculation",
      type: {
        kind: "enum",
        variants: [
          { name: "Addition" },
          { name: "Subtraction" },
          { name: "Multiplication" },
          { name: "Division" },
        ],
      },
    },
  ]
};