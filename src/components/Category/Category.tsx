import * as React from "react";
import { Row } from "../../store/TicketBooking/TicketBooking.types";
import RowComponent from "../Row/Row";

export interface CategoryProps {
  name: string;
  price: number;
  currency: string;
  rows: Row[];
}

const Category: React.FC<CategoryProps> = (
  props: CategoryProps
): React.ReactElement => {
  return (
    <>
      <div className="row">
        <div className="col">
          {props.name} - {props.currency} {props.price}
        </div>
      </div>
      {props.rows.map(
        (row): React.ReactElement => (
          <RowComponent key={row.name} {...row} />
        )
      )}
    </>
  );
};

export default Category;
