/** @format */

// import { ethers } from "ethers";
import {
  FlashLoanProviderAddress,
  USDCContract,
  WETHContract
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

  const filterFromWETH = WETHContract.filters.Transfer(
    FlashLoanProviderAddress
  );
  USDCContract.on(
    filterFromWETH,
    async (
      from: any,
      to: any,
      value: any,
      event: { transactionHash: string }
    ) => {
      value = (value / 1e6).toFixed(2);
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
