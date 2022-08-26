import styled from "styled-components";
import { getHumanReadableDate } from "./services/dateService";

const StyledH5 = styled.h5`
  color: #00000080;
`;

type Props = { date: Date };

export function DateDisplay({ date }: Props) {
  return <StyledH5>{getHumanReadableDate(date)}</StyledH5>;
}
