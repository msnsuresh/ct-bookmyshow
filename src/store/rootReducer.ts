import { combineReducers } from "redux";
import { TicketBookingReducer } from "./TicketBooking/TicketBooking.reducer";

export default combineReducers({
  ticketBooking: TicketBookingReducer,
});
