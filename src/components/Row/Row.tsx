import * as React from "react";
import { Seat } from "../../store/TicketBooking/TicketBooking.types";
import SeatCmponent from "../Seat/Seat";

export interface RowProps {
  name: string;
  seats: Seat[];
}

const Row: React.FC<RowProps> = (props: RowProps): React.ReactElement => {
  return (
    <>
      <div className="row py-2">
        <div className="col-1">{props.name}</div>
        <div className="col">
          {props.seats.map(
            (seat): React.ReactElement => (
              <SeatCmponent
                key={seat.seatNo}
                text={seat.seatNo.toString()}
                {...seat}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Row;
