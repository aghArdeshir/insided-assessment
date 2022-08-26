import { useEffect, useState } from "react";
import { getHumanReadableDate } from "./services/dateService";
import { intervalService } from "./services/IntervalService";

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

  return <h5>{humanReadableDate}</h5>;
}
