import { createStore, Store } from "redux";
import { TicketBookingResponse } from "./TicketBooking/TicketBooking.types";
import rootReducer from "./rootReducer";

export interface ApplicationState {
  ticketBooking: TicketBookingResponse;
}

export default function configureStore(): Store {
  const store = createStore(
    rootReducer,
    {},
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
