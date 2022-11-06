let addressess = [
  "1a1a1a1",
  "1b1b1b1",
  "1c1c1c1",
  "1d1d1d1",
]
let transactions = [
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: addressess[1],
    to: addressess[3],
    value: 250,
    currency: "ETH",
    gas_user: 21000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: addressess[1],
    to: addressess[3],
    value: 250,
    currency: "ETH",
    gas_user: 25000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: addressess[3],
    to: addressess[2],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: addressess[2],
    to: addressess[1],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: addressess[2],
    to: addressess[0],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
]

export {
  addressess, transactions
}