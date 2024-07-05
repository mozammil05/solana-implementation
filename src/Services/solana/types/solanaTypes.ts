export type TokenProgram = {
  version: "0.1.0";
  name: "token_program";
  constants: [
    {
      name: "CONFIG_TAG";
      type: "bytes";
      value: "[99, 111, 110, 102, 105, 103]";
    },
    {
      name: "MINT_TAG";
      type: "bytes";
      value: "[109, 105, 110, 116]";
    },
    {
      name: "MAINTAINERS_TAG";
      type: "bytes";
      value: "[109, 97, 105, 110, 116, 97, 105, 110, 101, 114, 115]";
    },
    {
      name: "WHITELIST_TAG";
      type: "bytes";
      value: "[119, 104, 105, 116, 101, 108, 105, 115, 116]";
    },
    {
      name: "PARTIAL_FREEZE_TAG";
      type: "bytes";
      value: "[112, 97, 114, 116, 105, 97, 108, 95, 102, 114, 101, 101, 122, 101]";
    }
  ];
  instructions: [
    {
      name: "init";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
          docs: ["TODO: Use reallocation for 100 account allocation"];
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "manageAdmin";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "address";
          type: "publicKey";
        }
      ];
    },
    {
      name: "addSubAdminAccounts";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "addresses";
          type: {
            vec: "publicKey";
          };
        }
      ];
    },
    {
      name: "removeSubAdminAccounts";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "addresses";
          type: {
            vec: "publicKey";
          };
        }
      ];
    },
    {
      name: "create";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "CreateTokenParams";
          };
        }
      ];
    },
    {
      name: "mintToken";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "whitelist";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "toAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "TokenParams";
          };
        }
      ];
    },
    {
      name: "burnToken";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "from";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "TokenParams";
          };
        }
      ];
    },
    {
      name: "burnTokenFrom";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "whitelist";
          isMut: false;
          isSigner: false;
        },
        {
          name: "partialFreeze";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "from";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "TokenParams";
          };
        }
      ];
    },
    {
      name: "freezeUserAccount";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        }
      ];
    },
    {
      name: "unfreezeUserAccount";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        }
      ];
    },
    {
      name: "whitelistUser";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "whitelist";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "WhitelistParams";
          };
        }
      ];
    },
    {
      name: "transferTokens";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "whitelist";
          isMut: false;
          isSigner: false;
        },
        {
          name: "partialFreeze";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "fromAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "toAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "TransferParams";
          };
        }
      ];
    },
    {
      name: "forceTransferTokens";
      accounts: [
        {
          name: "maintainers";
          isMut: true;
          isSigner: false;
        },
        {
          name: "fromWhitelist";
          isMut: false;
          isSigner: false;
        },
        {
          name: "toWhitelist";
          isMut: false;
          isSigner: false;
        },
        {
          name: "partialFreeze";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "fromAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "toAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "ForceTransferParams";
          };
        }
      ];
    },
    {
      name: "partialFreezeAccount";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "partialFreeze";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "partialUnfreezeAccount";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "partialFreeze";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "updateTokenLimitByToken";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "limit";
          type: "u64";
        }
      ];
    },
    {
      name: "addCountryCodesByToken";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "codes";
          type: {
            vec: "u16";
          };
        }
      ];
    },
    {
      name: "removeCountryCodesByToken";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "codes";
          type: {
            vec: "u16";
          };
        }
      ];
    },
    {
      name: "updateIssuerByToken";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "address";
          type: "publicKey";
        }
      ];
    },
    {
      name: "updateTokenizationAgentByToken";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "address";
          type: "publicKey";
        }
      ];
    },
    {
      name: "updateTransferAgentByToken";
      accounts: [
        {
          name: "maintainers";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "caller";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "token";
          type: "string";
        },
        {
          name: "address";
          type: "publicKey";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "maintainers";
      type: {
        kind: "struct";
        fields: [
          {
            name: "subAdmins";
            docs: ["Sub Admins"];
            type: {
              vec: "publicKey";
            };
          },
          {
            name: "admin";
            docs: ["Admin"];
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "partialFreeze";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            docs: ["Frozen Amount"];
            type: "u64";
          }
        ];
      };
    },
    {
      name: "tokenConfiguration";
      type: {
        kind: "struct";
        fields: [
          {
            name: "tokenLimit";
            docs: [
              "token limit for each token holder (eg. token limit for each user = 1000,",
              "users can only hold up to 1000 tokens."
            ];
            type: "u64";
          },
          {
            name: "countryCodes";
            docs: ["Country code"];
            type: {
              vec: "u16";
            };
          },
          {
            name: "frozenTokens";
            docs: ["Frozen Tokens"];
            type: "u64";
          },
          {
            name: "issuer";
            docs: [
              "Issuer with mint, burn, freeze, unfreeze and force transfer rights"
            ];
            type: "publicKey";
          },
          {
            name: "transferAgent";
            docs: [
              "Transfer Agent with freeze, unfreeze and force transfer rights"
            ];
            type: "publicKey";
          },
          {
            name: "tokenizationAgent";
            docs: ["Issuer with mint and burn rights"];
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "whitelistedUser";
      type: {
        kind: "struct";
        fields: [
          {
            name: "countryCode";
            docs: ["Country Code"];
            type: "u16";
          }
        ];
      };
    },
    {
      name: "createTokenParams";
      docs: ["The struct containing instructions for creating tokens"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            docs: ["Unique id"];
            type: "string";
          },
          {
            name: "name";
            docs: ["Token Name"];
            type: "string";
          },
          {
            name: "symbol";
            docs: ["Token Symbol"];
            type: "string";
          },
          {
            name: "uri";
            docs: ["Token URI"];
            type: "string";
          },
          {
            name: "tokenLimit";
            docs: [
              "token limit for each token holder (eg. token limit for each user = 1000,",
              "users can only hold up to 1000 tokens."
            ];
            type: "u64";
          },
          {
            name: "countryCodes";
            docs: ["Country code"];
            type: {
              vec: "u16";
            };
          },
          {
            name: "issuer";
            docs: [
              "Issuer with mint, burn, freeze, unfreeze and force transfer rights"
            ];
            type: "publicKey";
          },
          {
            name: "transferAgent";
            docs: [
              "Transfer Agent with freeze, unfreeze and force transfer rights"
            ];
            type: "publicKey";
          },
          {
            name: "tokenizationAgent";
            docs: ["Issuer with mint and burn rights"];
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "tokenParams";
      docs: ["The struct containing instructions for mint and burn tokens"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            docs: ["Token Name"];
            type: "string";
          },
          {
            name: "toAccount";
            docs: ["Token Name"];
            type: "publicKey";
          },
          {
            name: "amount";
            docs: ["Amount of tokens to be minted."];
            type: "u64";
          }
        ];
      };
    },
    {
      name: "transferParams";
      docs: ["The struct containing instructions for transferring tokens"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "token";
            docs: ["Token Name"];
            type: "string";
          },
          {
            name: "toAccount";
            docs: ["To Token"];
            type: "publicKey";
          },
          {
            name: "amount";
            docs: ["Amount of tokens to be transferred"];
            type: "u64";
          }
        ];
      };
    },
    {
      name: "forceTransferParams";
      docs: [
        "The struct containing instructions for force transferring tokens"
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "token";
            docs: ["Token Name"];
            type: "string";
          },
          {
            name: "fromAccount";
            docs: ["From Account"];
            type: "publicKey";
          },
          {
            name: "toAccount";
            docs: ["To Account"];
            type: "publicKey";
          },
          {
            name: "amount";
            docs: ["Amount of tokens to be transferred"];
            type: "u64";
          }
        ];
      };
    },
    {
      name: "whitelistParams";
      docs: ["The struct containing instructions for whitelisting"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "token";
            docs: ["Token Name"];
            type: "string";
          },
          {
            name: "user";
            docs: ["User to be whitelisted"];
            type: "publicKey";
          },
          {
            name: "code";
            docs: ["Country Code"];
            type: "u16";
          }
        ];
      };
    },
    {
      name: "blacklistParams";
      docs: ["The struct containing instructions for blacklisting"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "token";
            docs: ["Token Name"];
            type: "string";
          },
          {
            name: "user";
            docs: ["User to be whitelisted"];
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "partialFreezeParams";
      docs: ["The struct containing instructions for partial freeze"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "token";
            docs: ["Token Name"];
            type: "string";
          },
          {
            name: "amount";
            docs: ["Country Code"];
            type: "u64";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "InitEvent";
      fields: [
        {
          name: "admin";
          type: "publicKey";
          index: false;
        },
        {
          name: "subAdmin";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "CreateTokenEvent";
      fields: [
        {
          name: "id";
          type: "string";
          index: false;
        },
        {
          name: "name";
          type: "string";
          index: false;
        }
      ];
    },
    {
      name: "MintEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "TransferEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "from";
          type: "publicKey";
          index: false;
        },
        {
          name: "to";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "ForceTransferEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "from";
          type: "publicKey";
          index: false;
        },
        {
          name: "to";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "BurnEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "FreezeEvent";
      fields: [
        {
          name: "address";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "PartialFreezeEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "address";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "total";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "PartialUnfreezeEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "address";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "total";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "UnfreezeEvent";
      fields: [
        {
          name: "address";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "WhitelistEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "address";
          type: "publicKey";
          index: false;
        },
        {
          name: "countryCode";
          type: "u16";
          index: false;
        }
      ];
    },
    {
      name: "UpdateAdminEvent";
      fields: [
        {
          name: "from";
          type: "publicKey";
          index: false;
        },
        {
          name: "to";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AddSubAdminsEvent";
      fields: [
        {
          name: "addresses";
          type: {
            vec: "publicKey";
          };
          index: false;
        }
      ];
    },
    {
      name: "RemoveSubAdminsEvent";
      fields: [
        {
          name: "addresses";
          type: {
            vec: "publicKey";
          };
          index: false;
        }
      ];
    },
    {
      name: "UpdateTokenLimitEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "oldLimit";
          type: "u64";
          index: false;
        },
        {
          name: "newLimit";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "UpdateCountryCodesEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "oldCodes";
          type: {
            vec: "u16";
          };
          index: false;
        },
        {
          name: "newCodes";
          type: {
            vec: "u16";
          };
          index: false;
        }
      ];
    },
    {
      name: "UpdateIssuerEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "old";
          type: "publicKey";
          index: false;
        },
        {
          name: "new";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "UpdateTokenizationAgentEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "old";
          type: "publicKey";
          index: false;
        },
        {
          name: "new";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "UpdateTransferAgentEvent";
      fields: [
        {
          name: "token";
          type: "string";
          index: false;
        },
        {
          name: "old";
          type: "publicKey";
          index: false;
        },
        {
          name: "new";
          type: "publicKey";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InsufficientFunds";
      msg: "Error: Your balance is not enough!";
    },
    {
      code: 6001;
      name: "AmountCantBeZero";
      msg: "Error: Amount can't be zero!";
    },
    {
      code: 6002;
      name: "CountryCodeAuthorizationFailed";
      msg: "Error: Country_code authentication failed!";
    },
    {
      code: 6003;
      name: "Unauthorized";
      msg: "Error: Unauthorized User!";
    },
    {
      code: 6004;
      name: "TokenLimitExceeded";
      msg: "Error: Token Limit exceeded!";
    },
    {
      code: 6005;
      name: "AccountFrozen";
      msg: "Error: Account is frozen!";
    },
    {
      code: 6006;
      name: "BalanceFrozen";
      msg: "Error: Balance is frozen!";
    }
  ];
};

export const IDL: TokenProgram = {
  version: "0.1.0",
  name: "token_program",
  constants: [
    {
      name: "CONFIG_TAG",
      type: "bytes",
      value: "[99, 111, 110, 102, 105, 103]",
    },
    {
      name: "MINT_TAG",
      type: "bytes",
      value: "[109, 105, 110, 116]",
    },
    {
      name: "MAINTAINERS_TAG",
      type: "bytes",
      value: "[109, 97, 105, 110, 116, 97, 105, 110, 101, 114, 115]",
    },
    {
      name: "WHITELIST_TAG",
      type: "bytes",
      value: "[119, 104, 105, 116, 101, 108, 105, 115, 116]",
    },
    {
      name: "PARTIAL_FREEZE_TAG",
      type: "bytes",
      value:
        "[112, 97, 114, 116, 105, 97, 108, 95, 102, 114, 101, 101, 122, 101]",
    },
  ],
  instructions: [
    {
      name: "init",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
          docs: ["TODO: Use reallocation for 100 account allocation"],
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "manageAdmin",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "address",
          type: "publicKey",
        },
      ],
    },
    {
      name: "addSubAdminAccounts",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "addresses",
          type: {
            vec: "publicKey",
          },
        },
      ],
    },
    {
      name: "removeSubAdminAccounts",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "addresses",
          type: {
            vec: "publicKey",
          },
        },
      ],
    },
    {
      name: "create",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CreateTokenParams",
          },
        },
      ],
    },
    {
      name: "mintToken",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "whitelist",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "toAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "TokenParams",
          },
        },
      ],
    },
    {
      name: "burnToken",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "from",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "TokenParams",
          },
        },
      ],
    },
    {
      name: "burnTokenFrom",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "whitelist",
          isMut: false,
          isSigner: false,
        },
        {
          name: "partialFreeze",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "from",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "TokenParams",
          },
        },
      ],
    },
    {
      name: "freezeUserAccount",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
      ],
    },
    {
      name: "unfreezeUserAccount",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
      ],
    },
    {
      name: "whitelistUser",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "whitelist",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "WhitelistParams",
          },
        },
      ],
    },
    {
      name: "transferTokens",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "whitelist",
          isMut: false,
          isSigner: false,
        },
        {
          name: "partialFreeze",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "fromAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "toAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "TransferParams",
          },
        },
      ],
    },
    {
      name: "forceTransferTokens",
      accounts: [
        {
          name: "maintainers",
          isMut: true,
          isSigner: false,
        },
        {
          name: "fromWhitelist",
          isMut: false,
          isSigner: false,
        },
        {
          name: "toWhitelist",
          isMut: false,
          isSigner: false,
        },
        {
          name: "partialFreeze",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "fromAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "toAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ForceTransferParams",
          },
        },
      ],
    },
    {
      name: "partialFreezeAccount",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "partialFreeze",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "partialUnfreezeAccount",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "partialFreeze",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "updateTokenLimitByToken",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "limit",
          type: "u64",
        },
      ],
    },
    {
      name: "addCountryCodesByToken",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "codes",
          type: {
            vec: "u16",
          },
        },
      ],
    },
    {
      name: "removeCountryCodesByToken",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "codes",
          type: {
            vec: "u16",
          },
        },
      ],
    },
    {
      name: "updateIssuerByToken",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "address",
          type: "publicKey",
        },
      ],
    },
    {
      name: "updateTokenizationAgentByToken",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "address",
          type: "publicKey",
        },
      ],
    },
    {
      name: "updateTransferAgentByToken",
      accounts: [
        {
          name: "maintainers",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "caller",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "token",
          type: "string",
        },
        {
          name: "address",
          type: "publicKey",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "maintainers",
      type: {
        kind: "struct",
        fields: [
          {
            name: "subAdmins",
            docs: ["Sub Admins"],
            type: {
              vec: "publicKey",
            },
          },
          {
            name: "admin",
            docs: ["Admin"],
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "partialFreeze",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            docs: ["Frozen Amount"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "tokenConfiguration",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tokenLimit",
            docs: [
              "token limit for each token holder (eg. token limit for each user = 1000,",
              "users can only hold up to 1000 tokens.",
            ],
            type: "u64",
          },
          {
            name: "countryCodes",
            docs: ["Country code"],
            type: {
              vec: "u16",
            },
          },
          {
            name: "frozenTokens",
            docs: ["Frozen Tokens"],
            type: "u64",
          },
          {
            name: "issuer",
            docs: [
              "Issuer with mint, burn, freeze, unfreeze and force transfer rights",
            ],
            type: "publicKey",
          },
          {
            name: "transferAgent",
            docs: [
              "Transfer Agent with freeze, unfreeze and force transfer rights",
            ],
            type: "publicKey",
          },
          {
            name: "tokenizationAgent",
            docs: ["Issuer with mint and burn rights"],
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "whitelistedUser",
      type: {
        kind: "struct",
        fields: [
          {
            name: "countryCode",
            docs: ["Country Code"],
            type: "u16",
          },
        ],
      },
    },
    {
      name: "createTokenParams",
      docs: ["The struct containing instructions for creating tokens"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            docs: ["Unique id"],
            type: "string",
          },
          {
            name: "name",
            docs: ["Token Name"],
            type: "string",
          },
          {
            name: "symbol",
            docs: ["Token Symbol"],
            type: "string",
          },
          {
            name: "uri",
            docs: ["Token URI"],
            type: "string",
          },
          {
            name: "tokenLimit",
            docs: [
              "token limit for each token holder (eg. token limit for each user = 1000,",
              "users can only hold up to 1000 tokens.",
            ],
            type: "u64",
          },
          {
            name: "countryCodes",
            docs: ["Country code"],
            type: {
              vec: "u16",
            },
          },
          {
            name: "issuer",
            docs: [
              "Issuer with mint, burn, freeze, unfreeze and force transfer rights",
            ],
            type: "publicKey",
          },
          {
            name: "transferAgent",
            docs: [
              "Transfer Agent with freeze, unfreeze and force transfer rights",
            ],
            type: "publicKey",
          },
          {
            name: "tokenizationAgent",
            docs: ["Issuer with mint and burn rights"],
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "tokenParams",
      docs: ["The struct containing instructions for mint and burn tokens"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            docs: ["Token Name"],
            type: "string",
          },
          {
            name: "toAccount",
            docs: ["Token Name"],
            type: "publicKey",
          },
          {
            name: "amount",
            docs: ["Amount of tokens to be minted."],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "transferParams",
      docs: ["The struct containing instructions for transferring tokens"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "token",
            docs: ["Token Name"],
            type: "string",
          },
          {
            name: "toAccount",
            docs: ["To Token"],
            type: "publicKey",
          },
          {
            name: "amount",
            docs: ["Amount of tokens to be transferred"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "forceTransferParams",
      docs: [
        "The struct containing instructions for force transferring tokens",
      ],
      type: {
        kind: "struct",
        fields: [
          {
            name: "token",
            docs: ["Token Name"],
            type: "string",
          },
          {
            name: "fromAccount",
            docs: ["From Account"],
            type: "publicKey",
          },
          {
            name: "toAccount",
            docs: ["To Account"],
            type: "publicKey",
          },
          {
            name: "amount",
            docs: ["Amount of tokens to be transferred"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "whitelistParams",
      docs: ["The struct containing instructions for whitelisting"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "token",
            docs: ["Token Name"],
            type: "string",
          },
          {
            name: "user",
            docs: ["User to be whitelisted"],
            type: "publicKey",
          },
          {
            name: "code",
            docs: ["Country Code"],
            type: "u16",
          },
        ],
      },
    },
    {
      name: "blacklistParams",
      docs: ["The struct containing instructions for blacklisting"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "token",
            docs: ["Token Name"],
            type: "string",
          },
          {
            name: "user",
            docs: ["User to be whitelisted"],
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "partialFreezeParams",
      docs: ["The struct containing instructions for partial freeze"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "token",
            docs: ["Token Name"],
            type: "string",
          },
          {
            name: "amount",
            docs: ["Country Code"],
            type: "u64",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "InitEvent",
      fields: [
        {
          name: "admin",
          type: "publicKey",
          index: false,
        },
        {
          name: "subAdmin",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "CreateTokenEvent",
      fields: [
        {
          name: "id",
          type: "string",
          index: false,
        },
        {
          name: "name",
          type: "string",
          index: false,
        },
      ],
    },
    {
      name: "MintEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "TransferEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "from",
          type: "publicKey",
          index: false,
        },
        {
          name: "to",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "ForceTransferEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "from",
          type: "publicKey",
          index: false,
        },
        {
          name: "to",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "BurnEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "FreezeEvent",
      fields: [
        {
          name: "address",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "PartialFreezeEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "address",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "total",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "PartialUnfreezeEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "address",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "total",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UnfreezeEvent",
      fields: [
        {
          name: "address",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "WhitelistEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "address",
          type: "publicKey",
          index: false,
        },
        {
          name: "countryCode",
          type: "u16",
          index: false,
        },
      ],
    },
    {
      name: "UpdateAdminEvent",
      fields: [
        {
          name: "from",
          type: "publicKey",
          index: false,
        },
        {
          name: "to",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AddSubAdminsEvent",
      fields: [
        {
          name: "addresses",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
      ],
    },
    {
      name: "RemoveSubAdminsEvent",
      fields: [
        {
          name: "addresses",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
      ],
    },
    {
      name: "UpdateTokenLimitEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "oldLimit",
          type: "u64",
          index: false,
        },
        {
          name: "newLimit",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UpdateCountryCodesEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "oldCodes",
          type: {
            vec: "u16",
          },
          index: false,
        },
        {
          name: "newCodes",
          type: {
            vec: "u16",
          },
          index: false,
        },
      ],
    },
    {
      name: "UpdateIssuerEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "old",
          type: "publicKey",
          index: false,
        },
        {
          name: "new",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "UpdateTokenizationAgentEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "old",
          type: "publicKey",
          index: false,
        },
        {
          name: "new",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "UpdateTransferAgentEvent",
      fields: [
        {
          name: "token",
          type: "string",
          index: false,
        },
        {
          name: "old",
          type: "publicKey",
          index: false,
        },
        {
          name: "new",
          type: "publicKey",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InsufficientFunds",
      msg: "Error: Your balance is not enough!",
    },
    {
      code: 6001,
      name: "AmountCantBeZero",
      msg: "Error: Amount can't be zero!",
    },
    {
      code: 6002,
      name: "CountryCodeAuthorizationFailed",
      msg: "Error: Country_code authentication failed!",
    },
    {
      code: 6003,
      name: "Unauthorized",
      msg: "Error: Unauthorized User!",
    },
    {
      code: 6004,
      name: "TokenLimitExceeded",
      msg: "Error: Token Limit exceeded!",
    },
    {
      code: 6005,
      name: "AccountFrozen",
      msg: "Error: Account is frozen!",
    },
    {
      code: 6006,
      name: "BalanceFrozen",
      msg: "Error: Balance is frozen!",
    },
  ],
};