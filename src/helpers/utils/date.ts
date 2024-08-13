import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'
dayjs.locale('en-gb');

export const Date = (date: string) => {
  let day = date.slice(8,10);
  return dayjs(date).format(`MMM ${day}, YYYY`);
}