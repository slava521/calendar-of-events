export interface ICalendarDateState {
  currentDay: number;
  currentMonth: number;
  currentYear: number;
  isDateSelected: boolean;
  changeDay: (date: any) => void;
  selectDate: () => void;
  showMonth: () => void;
  changeMonthYear: (date: any) => void;
}