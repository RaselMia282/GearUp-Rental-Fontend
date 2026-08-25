export interface IGear {
  id: string;
  title: string;
  description: string;
  brand: string;
  pricePerDay: number;
  imgURL: string | null;
}

export interface IRentalItem {
  id: string;
  quantity: number;
  priceAtRental: number;
  gears: IGear;
}

export interface IRentalOrder {
  id: string;
  totalPrice: number;
  status: "PENDING" | "APPROVED" | "COMPLETED" | "CANCELLED";
  startDate: string;
  endDate: string;
  createdAt: string;
  items: IRentalItem[];
}