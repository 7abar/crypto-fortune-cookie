#!/usr/bin/env node
import { generateFortune } from "./fortune.js";

async function getGasPrice(): Promise<string> {
  try {
    const res = await fetch("https://mainnet.base.org", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", method: "eth_gasPrice", params: [], id: 1 }),
    });
    const data = await res.json() as { result: string };
    return data.result;
  } catch {
    return "0x1";
  }
}

async function main() {
  const address = process.argv[2] ?? "0x0000000000000000000000000000000000000000";
  const gasHex = await getGasPrice();
  const seed = `${address.toLowerCase()}:${gasHex}:${Math.floor(Date.now() / 3600000)}`;

  const { fortune, luckyToken, luckyNumber, luckyAction } = generateFortune(seed);

  const lines = [
    "",
    "  ╔══════════════════════════════════════════════════╗",
    "  ║           🥠  CRYPTO FORTUNE COOKIE  🥠          ║",
    "  ╚══════════════════════════════════════════════════╝",
    "",
    `  "${fortune}"`,
    "",
    "  ─────────────────────────────────────────────────",
    `  Lucky Token:  ${luckyToken}`,
    `  Lucky Number: ${luckyNumber}`,
    `  Lucky Action: ${luckyAction}`,
    "  ─────────────────────────────────────────────────",
    "",
    "  Fortune changes every hour. Not financial advice.",
    "  Fortunes are deterministic. The universe is not.",
    "",
  ];
  console.log(lines.join("\n"));
}

main().catch(console.error);