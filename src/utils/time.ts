export function getTimeAgo(timestamp: Date, locale = "en") {
  const diff = (new Date().getTime() - timestamp.getTime()) / 1000;
  const seconds = Math.floor(diff);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const dateFormatter = new Intl.RelativeTimeFormat(locale, {
    numeric: "auto",
  });

  if (years > 0) {
    return dateFormatter.format(-years, "year");
  }
  if (months > 0) {
    return dateFormatter.format(-months, "month");
  }
  if (days > 0) {
    return dateFormatter.format(-days, "day");
  }
  if (hours > 0) {
    return dateFormatter.format(-hours, "hour");
  }
  if (minutes > 0) {
    return dateFormatter.format(-minutes, "minute");
  }
  if (seconds > 10) {
    return dateFormatter.format(-seconds, "second");
  }
  return "just now";
}
