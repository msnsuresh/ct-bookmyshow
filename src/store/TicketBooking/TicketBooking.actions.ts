import { action } from "typesafe-actions";
import {
  SeatSelected,
  SelectSeatActionType,
  TicketBookingActionTypes,
} from "./TicketBooking.types";

export const selectSeat = (data: SeatSelected): SelectSeatActionType =>
  action(TicketBookingActionTypes.SELECT_SEAT, data);
