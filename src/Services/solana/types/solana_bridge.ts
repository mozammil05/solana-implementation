export type Solana_bridge = {
    "version": "0.1.0",
    "name": "bridge",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "deployer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "pda",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "admin",
                    "type": "publicKey"
                },
                {
                    "name": "token",
                    "type": "publicKey"
                },
                {
                    "name": "platformFee",
                    "type": "u64"
                },
                {
                    "name": "chainId",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "depositSplTokens",
            "accounts": [
                {
                    "name": "depositer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "depositerAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "destinationChainId",
                    "type": "u64"
                },
                {
                    "name": "to",
                    "type": "string"
                }
            ]
        },
        {
            "name": "claimSplTokens",
            "accounts": [
                {
                    "name": "claimer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "pda",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "to",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "toAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "id",
                    "type": "u64"
                },
                {
                    "name": "destinationChainId",
                    "type": "u64"
                },
                {
                    "name": "sourceChainId",
                    "type": "u64"
                },
                {
                    "name": "userTo",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "changeClaimer",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "claimer",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "adminAddLiquidity",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "adminAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "adminWithdrawLiquidity",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "pda",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "adminAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "Claim",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "amount",
                        "type": "u64"
                    },
                    {
                        "name": "id",
                        "type": "u64"
                    },
                    {
                        "name": "destinationChainId",
                        "type": "u64"
                    },
                    {
                        "name": "sourceChainId",
                        "type": "u64"
                    },
                    {
                        "name": "userTo",
                        "type": "publicKey"
                    }
                ]
            }
        },
        {
            "name": "Initial",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "token",
                        "type": "publicKey"
                    },
                    {
                        "name": "platformFee",
                        "type": "u64"
                    },
                    {
                        "name": "chainId",
                        "type": "u64"
                    },
                    {
                        "name": "count",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "Claim",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "claim",
                        "type": "publicKey"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "DepositError",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "InvalidDestinationId"
                    }
                ]
            }
        },
        {
            "name": "ClaimError",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "InvalidDestinationId"
                    }
                ]
            }
        }
    ],
    "events": [
        {
            "name": "Deposit",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "destinationChainId",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "to",
                    "type": "string",
                    "index": false
                },
                {
                    "name": "depositId",
                    "type": "u64",
                    "index": false
                }
            ]
        },
        {
            "name": "Claim",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "id",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "destinationChainId",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "sourceChainId",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "userTo",
                    "type": "publicKey",
                    "index": false
                }
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidAmount",
            "msg": "amount must be greater than zero"
        },
        {
            "code": 6001,
            "name": "InsufficientBalance",
            "msg": "insufficient balance"
        }
    ]
}

export const IDL: Solana_bridge = {
    "version": "0.1.0",
    "name": "bridge",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "deployer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "pda",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "admin",
                    "type": "publicKey"
                },
                {
                    "name": "token",
                    "type": "publicKey"
                },
                {
                    "name": "platformFee",
                    "type": "u64"
                },
                {
                    "name": "chainId",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "depositSplTokens",
            "accounts": [
                {
                    "name": "depositer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "depositerAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "destinationChainId",
                    "type": "u64"
                },
                {
                    "name": "to",
                    "type": "string"
                }
            ]
        },
        {
            "name": "claimSplTokens",
            "accounts": [
                {
                    "name": "claimer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "pda",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "to",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "toAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "id",
                    "type": "u64"
                },
                {
                    "name": "destinationChainId",
                    "type": "u64"
                },
                {
                    "name": "sourceChainId",
                    "type": "u64"
                },
                {
                    "name": "userTo",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "changeClaimer",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "claimer",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "adminAddLiquidity",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "adminAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "adminWithdrawLiquidity",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "pda",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pdaAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "adminAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "initial",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "claim",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "Claim",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "amount",
                        "type": "u64"
                    },
                    {
                        "name": "id",
                        "type": "u64"
                    },
                    {
                        "name": "destinationChainId",
                        "type": "u64"
                    },
                    {
                        "name": "sourceChainId",
                        "type": "u64"
                    },
                    {
                        "name": "userTo",
                        "type": "publicKey"
                    }
                ]
            }
        },
        {
            "name": "Initial",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "token",
                        "type": "publicKey"
                    },
                    {
                        "name": "platformFee",
                        "type": "u64"
                    },
                    {
                        "name": "chainId",
                        "type": "u64"
                    },
                    {
                        "name": "count",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "Claim",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "claim",
                        "type": "publicKey"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "DepositError",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "InvalidDestinationId"
                    }
                ]
            }
        },
        {
            "name": "ClaimError",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "InvalidDestinationId"
                    }
                ]
            }
        }
    ],
    "events": [
        {
            "name": "Deposit",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "destinationChainId",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "to",
                    "type": "string",
                    "index": false
                },
                {
                    "name": "depositId",
                    "type": "u64",
                    "index": false
                }
            ]
        },
        {
            "name": "Claim",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "id",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "destinationChainId",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "sourceChainId",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "userTo",
                    "type": "publicKey",
                    "index": false
                }
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidAmount",
            "msg": "amount must be greater than zero"
        },
        {
            "code": 6001,
            "name": "InsufficientBalance",
            "msg": "insufficient balance"
        }
    ]
}