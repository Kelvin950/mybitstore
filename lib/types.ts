export interface Currency {
  symbol: string;
  name: string;
  icon: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  selected?: boolean;
}