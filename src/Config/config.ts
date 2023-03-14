/** @format */

require("dotenv").config();
import { ethers } from "ethers";
import { abi } from "../utils/abi";
const { WSS_URL } = process.env;

//Tokens
export const USDCAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
export const DaiAddress = "";
export const WETHAddress = "";
export const USDTAddress = "";

//FlashLoanProviderAddress
export const FlashLoanProviderAddress =
  "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640";

export const provider = new ethers.providers.WebSocketProvider(WSS_URL!);

export const USDCContract = new ethers.Contract(USDCAddress, abi, provider);
