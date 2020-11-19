import {
  TicketBookingActionTypes,
  TicketBookingResponse,
} from "./TicketBooking.types";
import data from "./data.json";
import { Reducer } from "redux";
import { updatedCategories } from "./TicketBooking.selector";

const initialState: TicketBookingResponse = {
  ...data,
};

const reducer: Reducer<TicketBookingResponse> = (
  state: TicketBookingResponse = initialState,
  action
) => {
  switch (action.type) {
    case TicketBookingActionTypes.SELECT_SEAT: {
      return {
        ...state,
        categories: updatedCategories(state, action.payload),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export { reducer as TicketBookingReducer };
