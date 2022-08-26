import React, { useEffect, useState } from "react";
import { ONE_SECOND } from "./services/dateService";

const AUTO_REFRESH_INTERVAL_IN_SECONDS = Number(
  process.env.REACT_APP_AUTO_REFRESH_INTERVAL_IN_SECONDS
);

type Props = {
  onRefresh: () => void;
  style: React.CSSProperties;
};

export function AutoRefresh({ onRefresh: refresh, style }: Props) {
  const [time, setTime] = useState(AUTO_REFRESH_INTERVAL_IN_SECONDS);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setTime((time) => {
        if (time < 1) {
          refresh();
          return AUTO_REFRESH_INTERVAL_IN_SECONDS;
        }

        return time - 1;
      });
    }, ONE_SECOND);

    return () => {
      clearInterval(intervalRef);
    };
  }, [refresh]);

  return (
    <div style={style} title={`Auto Refresh in ...`}>
      {time > 0 ? time : "REFRESHING"}
    </div>
  );
}
