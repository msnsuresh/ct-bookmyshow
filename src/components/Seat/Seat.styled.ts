import styled from "styled-components";

export const SeatWrapper = styled.span<{
  visible: boolean;
  available: boolean;
  selected?: boolean;
}>`
  display: inline-block;
  min-width: 1.5rem;
  height: 1.5rem;
  background: ${(props) =>
    props.visible
      ? props.available
        ? props.selected
          ? "green"
          : "white"
        : "grey"
      : "transparent"};
  text-align: center;
  border: ${(props) => props.available && "1px solid black"};
  border-radius: 6px;
  margin: 0 2px;
  cursor: ${(props) => props.visible && props.available && "pointer"};
  font-size: 0.75rem;
  line-height: 1.5rem;
`;
