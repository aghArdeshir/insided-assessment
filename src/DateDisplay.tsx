import { useEffect, useState } from "react";
import styled from "styled-components";
import { getHumanReadableDate } from "./services/dateService";

const ONE_SECOND = 1000;

const StyledH5 = styled.h5`
  color: #00000080;
`;

type Props = { date: Date };

export function DateDisplay({ date }: Props) {
  const [humanReadableDate, setHumanReadableDate] = useState(
    getHumanReadableDate(date)
  );

  useEffect(() => {
    setInterval(() => {
      setHumanReadableDate(getHumanReadableDate(date));
    }, ONE_SECOND);
  }, [date]);

  return <StyledH5>{humanReadableDate}</StyledH5>;
}
