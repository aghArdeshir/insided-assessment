const ONE_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

export function getHumanReadableDate(date: Date) {
  const intervalInMilliSeconds = new Date().getTime() - date.getTime();
  const intervalInSeconds = Math.floor(intervalInMilliSeconds / ONE_SECOND);
  const intervalInMinutes = Math.floor(intervalInSeconds / SECONDS_IN_MINUTE);
  const intervalInHours = Math.floor(intervalInMinutes / MINUTES_IN_HOUR);

  if (intervalInSeconds < 3) {
    return "Just now";
  } else if (intervalInSeconds < SECONDS_IN_MINUTE) {
    return intervalInSeconds + " seconds ago";
  } else if (intervalInMinutes < MINUTES_IN_HOUR) {
    return intervalInMinutes + " minutes ago";
  } else if (intervalInHours < HOURS_IN_DAY) {
    return intervalInHours + " hours ago";
  } else {
    return date.toString();
  }
}
