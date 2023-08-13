export function convertToDateString(unixTimestamp) {
  const offsetInSeconds = 5.5 * 3600;

  const date = new Date((unixTimestamp + offsetInSeconds) * 1000);
  const gmtTimeString = date.toUTCString();

  return gmtTimeString;
}
