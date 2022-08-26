import React, { useEffect, useState } from "react";

const AUTO_REFRESH_INTERVAL_IN_SECONDS = Number(
  process.env.REACT_APP_AUTO_REFRESH_INTERVAL_IN_SECONDS
);
const ONE_SECOND = 1000;

type Props = {
  onRefresh: () => void;
};

export function AutoRefresh({ onRefresh: refresh }: Props) {
  const [time, setTime] = useState(AUTO_REFRESH_INTERVAL_IN_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        if (time < 1) {
          refresh();
          return AUTO_REFRESH_INTERVAL_IN_SECONDS;
        }

        return time - 1;
      });
    }, ONE_SECOND);

    return () => {
      clearInterval(interval);
    };
  }, [refresh]);

  return <div>{time > 0 ? time : "REFRESHING"}</div>;
}
