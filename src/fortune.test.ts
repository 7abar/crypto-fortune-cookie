import { describe, it, expect } from "vitest";
import { generateFortune } from "./fortune.js";

describe("generateFortune", () => {
  it("returns a fortune string", () => {
    const f = generateFortune("0xabc123:0x1:1234567");
    expect(typeof f.fortune).toBe("string");
    expect(f.fortune.length).toBeGreaterThan(10);
  });
  it("is deterministic", () => {
    const seed = "0xtest:0x1:999";
    expect(generateFortune(seed)).toEqual(generateFortune(seed));
  });
  it("returns different results for different seeds", () => {
    const a = generateFortune("0xAAAA:0x1:1");
    const b = generateFortune("0xBBBB:0x2:2");
    const same = a.fortune === b.fortune && a.luckyToken === b.luckyToken;
    expect(same).toBe(false);
  });
  it("always returns a valid lucky token", () => {
    const f = generateFortune("anyseed");
    expect(["ETH","BASE","USDC","wstETH","cbBTC","AERO","DEGEN","TOSHI"]).toContain(f.luckyToken);
  });
});