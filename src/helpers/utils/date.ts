import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
dayjs.locale('pt-br');

export const Date = (date: string) => {
  return dayjs(date).format('DD/MM/YYYY');
}