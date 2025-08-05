interface QuoteData {
  model: string;
  storage: string;
  condition: string;
  estimatedValue: number;
}

export function generateQuoteMessage(data: QuoteData): string {
  return `Hi DeliWer! I'm interested in trading my ${data.model} (${data.storage}, ${data.condition} condition) for AED ${data.estimatedValue}. Please provide more details about the trade-in process.`;
}

export function openWhatsApp(phone: string, message?: string): void {
  const defaultMessage = 'Hi DeliWer! I want to learn more about the trade-in program.';
  const text = encodeURIComponent(message || defaultMessage);
  const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${text}&type=phone_number&app_absent=0`;
  window.open(url, '_blank');
}

export function openWhatsAppSupport(message?: string): void {
  openWhatsApp('971567148381', message);
}
