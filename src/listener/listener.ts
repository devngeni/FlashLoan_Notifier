/** @format */

// import { ethers } from "ethers";
import {
  DAIContract,
  FlashLoanProviderAddress,
  USDCContract,
  USDTContract,
  WETHContract,
} from "../Config/config";
import { messageObject } from "../telegram/messageObject";
import { notification } from "../telegram/telegram";

export const ListeningEvents = async () => {
  //checking for USDC
  const filterFrom = USDCContract.filters.Transfer(FlashLoanProviderAddress);
  USDCContract.on(
    filterFrom,
    async (
      from: any,
      to: any,
      value: any,
      event: { transactionHash: string }
    ) => {
      value = (value / 1e6).toFixed(2);
      const message = messageObject("USDC", event.transactionHash, value, to);

      if (Number(value) >= 10) {
        await notification(message);
      }
    }
  );

  //checking for Dai
  const filterFromDai = DAIContract.filters.Transfer(FlashLoanProviderAddress);
  DAIContract.on(
    filterFromDai,
    async (
      from: any,
      to: any,
      value: any,
      event: { transactionHash: string }
    ) => {
      value = (value / 1e18).toFixed(2);
      const message = messageObject("DAI", event.transactionHash, value, to);

      if (Number(value) >= 10) {
        await notification(message);
      }
    }
  );

  //checking for USDT
  const filterFromUSDT = USDTContract.filters.Transfer(
    FlashLoanProviderAddress
  );
  USDTContract.on(
    filterFromUSDT,
    async (
      from: any,
      to: any,
      value: any,
      event: { transactionHash: string }
    ) => {
      value = (value / 1e6).toFixed(2);
      const message = messageObject("USDT", event.transactionHash, value, to);

      if (Number(value) >= 10) {
        await notification(message);
      }
    }
  );

  //checking for WETH
  const filterFromWETH = WETHContract.filters.Transfer(
    FlashLoanProviderAddress
  );
  WETHContract.on(
    filterFromWETH,
    async (
      from: any,
      to: any,
      value: any,
      event: { transactionHash: string }
    ) => {
      value = (value / 1e18).toFixed(2);
      const message = await messageObject(
        "WETH",
        event.transactionHash,
        value,
        to
      );

      if (Number(value) >= 10) {
        await notification(message);
      }
    }
  );
};
