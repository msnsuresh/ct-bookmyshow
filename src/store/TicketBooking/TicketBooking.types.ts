export interface Seat {
  index: number;
  seatNo: number;
  visible: boolean;
  available: boolean;
  selected?: boolean;
}
export interface Row {
  index: number;
  name: string;
  seats: Seat[];
}

export interface Category {
  name: string;
  price: number;
  rows: Row[];
}

export interface TicketBookingResponse {
  maxSeat: number;
  currency: string;
  categories: Category[];
}

export interface SeatSelected {
  category: string;
  row: string;
  seat: number;
}

export enum TicketBookingActionTypes {
  SELECT_SEAT = "@@CT/SELECT_SEAT",
}

export interface SelectSeatActionType {
  type: TicketBookingActionTypes.SELECT_SEAT;
  payload: SeatSelected;
}
