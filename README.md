# crypto-fortune-cookie 🥠

> Your onchain fortune. Deterministic. Meaningless. Accurate.

Crack open a **crypto fortune cookie** — your fortune is generated from your wallet address, the current gas price on Base, and the current hour. Every wallet gets a unique fortune. It changes every hour.

## Usage

```bash
# With your wallet address
node src/index.js 0xYourWalletAddress

# Anonymous fortune (zero address)
node src/index.js
```

## Example Output

```
  ╔══════════════════════════════════════════════════╗
  ║           🥠  CRYPTO FORTUNE COOKIE  🥠          ║
  ╚══════════════════════════════════════════════════╝

  "WAGMI, but also NGMI. The universe contains multitudes."

  ─────────────────────────────────────────────────
  Lucky Token:  BASE
  Lucky Number: 42
  Lucky Action: touch grass
  ─────────────────────────────────────────────────

  Fortune changes every hour. Not financial advice.
  Fortunes are deterministic. The universe is not.
```

## How It Works

Your fortune is deterministically derived from:
- **Your wallet address** — unique to you
- **Current Base gas price** — changes with network conditions
- **Current hour** — so your fortune evolves throughout the day

Same inputs = same fortune. Every time.

## Setup

```bash
npm install
node src/index.js 0xYourAddress
```

## Notes

- Fortune changes **every hour**
- No two wallets get the same fortune at the same time
- Works on Base mainnet (fetches live gas price)
- Falls back gracefully if network is unavailable
- **No financial advice. Obviously.**

---

*The fortune cookie knows. The fortune cookie always knows.*