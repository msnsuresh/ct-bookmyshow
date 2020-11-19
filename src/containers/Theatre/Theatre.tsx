import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryComponent from "../../components/Category/Category";
import { getTicketBooking } from "../../store/TicketBooking/TicketBooking.selector";
// import data from "../../store/TicketBooking/data.json";

export interface TheatreProps {}

const Theatre: React.FC<TheatreProps> = (
  props: TheatreProps
): React.ReactElement => {
  const dispatch = useDispatch();
  const { currency, categories } = useSelector(getTicketBooking);

  return (
    <>
      <div className="py-4">
        {categories.map(
          (category): React.ReactElement => (
            <CategoryComponent
              key={category.name}
              currency={currency}
              {...category}
              // onSeatSelected={() => { let categoryName = category.name; }
            />
          )
        )}
      </div>
    </>
  );
};

export default Theatre;
