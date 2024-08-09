import dayjs from 'dayjs';
import 'dayjs/locale/en';
dayjs.locale('en');

export const classifyNewsByDate = (date: string) => {
  let type = '';
  const published = dayjs(date);
  const now = dayjs();
  published.isBefore(now, 'day') ? type = 'New' : type = 'Today';
  return type;
};