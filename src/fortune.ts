// All fortunes are deterministic based on seed
// No network needed for the core logic

const FORTUNES = [
  "The next candle will be green. Or red. The blockchain knows.",
  "Your private key is safe. Probably. Don't click that link.",
  "You will soon make a transaction you slightly regret.",
  "Gas will be cheaper in 5 minutes. It will also be more expensive.",
  "An airdrop is coming. You are not eligible.",
  "Someone on CT is wrong right now. It is not your job to fix this.",
  "WAGMI, but also NGMI. The universe contains multitudes.",
  "Your seed phrase is the most important 12 words you own. More important than 'I love you.'",
  "The best time to buy was yesterday. The second best time is never, according to your past self.",
  "Not financial advice: everything is financial advice.",
  "You will deploy a smart contract. It will have one bug. You will find it after deployment.",
  "A wise person once said DYOR. They lost everything anyway.",
  "Your wallet has been on a journey. Some of that journey was painful. The blockchain remembers.",
  "The mempool is busy tonight. Like your mind. Full of pending things.",
  "Decentralization is the goal. Your exchange still has your funds. Curious.",
  "Someone is about to mint an NFT. You will think it is overpriced. You will be correct.",
  "A protocol you trust will get hacked next year. No, we won't tell you which one.",
  "Your next transaction will confirm in 12 seconds. The one after that, 47 minutes.",
  "Ethereum gas is never cheap. But it was cheaper in 2018. Some of us remember.",
  "You hold more tokens than you can name. This is the way.",
  "The market will do something unexpected. You will claim you saw it coming.",
  "Every contract is a commitment. Read the code before you sign. (You won't read the code.)",
  "Yield farming sounds simple. It is not simple. Many have learned this the hard way.",
  "Your future self is watching your current transactions. They are concerned.",
  "In the end, we are all just wallet addresses to the blockchain. But some addresses are luckier than others.",
];

const LUCKY_TOKENS = ["ETH", "BASE", "USDC", "wstETH", "cbBTC", "AERO", "DEGEN", "TOSHI"];
const LUCKY_NUMBERS = [4, 7, 21, 42, 69, 100, 1337, 8453];
const LUCKY_ACTIONS = [
  "hold for 30 days", "DCA this week", "close your Uniswap tab", "touch grass",
  "read a whitepaper", "check your allowances", "update your hardware wallet firmware",
  "backup your seed phrase", "revoke an old approval", "help someone understand gas",
];

export function generateFortune(seed: string): {
  fortune: string; luckyToken: string; luckyNumber: number; luckyAction: string;
} {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const abs = Math.abs(hash);
  return {
    fortune: FORTUNES[abs % FORTUNES.length],
    luckyToken: LUCKY_TOKENS[abs % LUCKY_TOKENS.length],
    luckyNumber: LUCKY_NUMBERS[abs % LUCKY_NUMBERS.length],
    luckyAction: LUCKY_ACTIONS[abs % LUCKY_ACTIONS.length],
  };
}