import { ApplicationState } from "../store";
import {
  Category,
  SeatSelected,
  TicketBookingResponse,
} from "./TicketBooking.types";

export const updatedCategories = (
  state: TicketBookingResponse,
  payload: SeatSelected
): Category[] => {
  let selectedCategory = state.categories.filter(
    (category): boolean => category.name === payload.category
  )[0];
  let selectedRow = selectedCategory.rows.filter(
    (row): boolean => row.name === payload.row
  )[0];
  let selectedSeat = selectedRow.seats.filter(
    (seat): boolean => seat.seatNo === payload.seat
  )[0];
  selectedSeat.selected = true;

  return state.categories;
};

export const getTicketBooking = (
  state: ApplicationState
): TicketBookingResponse => {
  return state.ticketBooking;
};
