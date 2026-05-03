export const invoicePaymentNotes = {
  binancePay: (email: string) =>
    `Método de pago: Criptomoneda USDT - Binance Pay\nCorreo de la cuenta: ${email}`,

  wallet: (address: string) =>
    `Método de pago: Criptomoneda USDT - Red TRC20\nDirección wallet: ${address}`,
};
