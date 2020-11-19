import * as React from "react";
import { SeatWrapper } from "./Seat.styled";

export interface SeatProps {
  text: string;
  visible: boolean;
  available: boolean;
  selected?: boolean;
}

const Seat: React.FC<SeatProps> = (props: SeatProps): React.ReactElement => {
  return (
    <>
      <SeatWrapper visible={props.visible} available={props.available}>
        {props.visible && props.text}
      </SeatWrapper>
    </>
  );
};

export default Seat;
