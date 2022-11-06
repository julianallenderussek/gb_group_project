let wallets = [
  {
    
      address: "1a1a1a1",
      balance: 250
  },
  {
    address: "1b1b1b1",
    balance: 200
  },
  {
    address: "1c1c1c1",
    balance: 200
  },
  {
    address: "1d1d1d1",
    balance: 200
  },
]
let transactions = [
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: wallets[1],
    to: wallets[3],
    value: 250,
    currency: "ETH",
    gas_user: 21000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: wallets[1],
    to: wallets[3],
    value: 250,
    currency: "ETH",
    gas_user: 25000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: wallets[3],
    to: wallets[2],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: wallets[2],
    to: wallets[1],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
  {
    hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
    status: "SUCCESS",
    timestamp: Date.now(),
    from: wallets[2],
    to: wallets[0],
    value: 250,
    currency: "ETH",
    gas_user: 30000
  },
]

export {
  wallets, transactions
}