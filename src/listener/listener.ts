import { BigNumber, ethers, utils } from "ethers";
import { notification } from "../telegram/telegram";
import ABI from "../../contract-abi.json";
import { FlashLoanProviderAddress, USDCAddress, wssProvider } from "../Config/config";
export const ListeningEvents = async () => {

  const provider = new ethers.providers.WebSocketProvider(wssProvider);

  const USDCContract = new ethers.Contract(USDCAddress, ABI, provider);

  const USDCfilterFrom = USDCContract.filters.Transfer(
    FlashLoanProviderAddress
  );


  USDCContract.on(USDCfilterFrom, async (from, to, value, event) => {

     value = (value / 1e6);
    console.log("Your data is:", to, value, event.transactionHash);
    if (Number(value) >= 10) {
      let message = `Flashloan transaction notification :`;
      message += `\n\ntxHash:https://etherscan.io/tx/${event.transactionHash}`;
      message += `\n\namount: ${value} USDC`;
      message += `\n\nto:https://etherscan.io/address/${to}`;
      await notification(message);
    }
  });

 
};
