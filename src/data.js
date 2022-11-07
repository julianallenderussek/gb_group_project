
export const addresses = [
  "1a1a1a1",
  "1b1b1b1",
  "1c1c1c1",
  "1d1d1d1",
]

export const currentTransactions = [
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now() - 10000,
    from: addresses[1],
    to: addresses[3],
    value: 250,
    currency: "ETH",
    gas_user: 21000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now() - 30000,
    from: addresses[1],
    to: addresses[3],
    value: 250,
    currency: "ETH",
    gas_user: 25000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now() - 50000,
    from: addresses[3],
    to: addresses[2],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now() - 100000,
    from: addresses[2],
    to: addresses[1],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now() - 200000,
    from: addresses[2],
    to: addresses[0],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  }
]