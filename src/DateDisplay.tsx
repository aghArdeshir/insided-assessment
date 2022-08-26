import { useEffect, useState } from "react";
import styled from "styled-components";
import { getHumanReadableDate } from "./services/dateService";
import { intervalService } from "./services/IntervalService";

const StyledH5 = styled.h5`
  color: #00000080;
`;

type Props = { date: Date };

export function DateDisplay({ date }: Props) {
  const [humanReadableDate, setHumanReadableDate] = useState(
    getHumanReadableDate(date)
  );

  useEffect(() => {
    const updateHumanReadableDateCallback = () => {
      setHumanReadableDate(getHumanReadableDate(date));
    };
    intervalService.addCallback(updateHumanReadableDateCallback);

    return () => {
      intervalService.removeCallback(updateHumanReadableDateCallback);
    };
  }, [date]);

  return <StyledH5>{humanReadableDate}</StyledH5>;
}
