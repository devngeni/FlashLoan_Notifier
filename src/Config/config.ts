require("dotenv").config();
import { ethers } from "ethers";
import { abi } from "../utils/abi";
const { WSS_URL } = process.env;

//Tokens
export const USDCAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
export const DaiAddress = "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3";
export const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const USDTAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

//FlashLoanProviderAddress
export const FlashLoanProviderAddress =
  "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640";

export const provider = new ethers.providers.WebSocketProvider(WSS_URL!);

export const USDCContract = new ethers.Contract(USDCAddress, abi, provider);
