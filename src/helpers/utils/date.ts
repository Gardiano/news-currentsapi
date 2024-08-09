import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'
dayjs.locale('en-gb');

export const Date = (date: string) => {
  return dayjs(date).format('DD/MM/YY');
}