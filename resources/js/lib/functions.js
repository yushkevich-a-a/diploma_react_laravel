export const getHoursAndMinutes = (minutes) => {
  const timeMinutes = ConvertingStringNumbersToTwoCharacters(minutes % 60);
  const timeHours = ConvertingStringNumbersToTwoCharacters((minutes - timeMinutes) / 60);
  return `${timeHours}:${timeMinutes}`;
}

export const ConvertingStringNumbersToTwoCharacters = (value) => {
  const result = (value < 10) ? '0' + value : value;
  return String(result);
}

export const getMinutesFromStartDay = (date) => {
  
}