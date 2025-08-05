export const DirhemFormatter = new Intl.NumberFormat('en-AE', {
  style: 'currency',
  currency: 'AED',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatAED(amount: number): string {
  return DirhemFormatter.format(amount);
}
