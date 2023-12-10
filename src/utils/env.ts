import { PublicKey } from "@solana/web3.js";

export const getEndpoint = () =>
  process?.env?.NEXT_PUBLIC_ENDPOINT || "http://localhost:8899";

/**
 * CDN hostserver.
 */
export const CDN_HOST = process?.env?.NEXT_PUBLIC_CDN_URL || "";
