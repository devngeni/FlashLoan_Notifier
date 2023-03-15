/** @format */

require("dotenv").config();
import { ethers } from "ethers";
import { abi } from "../utils/abi";
const { WSS_URL } = process.env;

//Tokens
export const USDCAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
export const DaiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
export const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const USDTAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

//FlashLoanProviderAddress
export const FlashLoanProviderAddress =
  "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640";


export const provider = new ethers.providers.WebSocketProvider(WSS_URL!);

//USDC contract instance
export const USDCContract = new ethers.Contract(USDCAddress, abi, provider);

//Dai contract instance
export const DAIContract = new ethers.Contract(DaiAddress, abi, provider);

//USDT contract instance
export const USDTContract = new ethers.Contract(USDTAddress, abi, provider);

//WETH contract instance
export const WETHContract = new ethers.Contract(WETHAddress, abi, provider);
