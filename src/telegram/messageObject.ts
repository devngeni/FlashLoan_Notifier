/** @format */

export function messageObject(
  token: string,
  txHash: string,
  value: any,
  to: any
) {
  // Creating a message to send as a notification
  let message = `<b>${token}</b>`;
  message += `\n\n<b>TxHash</b>: https://etherscan.io/tx/${txHash}`;
  message += `\n\n<b>Amount</b>: ${value}`;
  message += `\n\n<b>To</b>: ${to}`;

  return message;
}
