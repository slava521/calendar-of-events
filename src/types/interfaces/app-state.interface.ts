import { ICalendarDateState } from "./calendar-date-state.interface";
import { ICalendarEvent } from "./calendar-event.interface";

export interface IAppState {
  events: Array<ICalendarEvent>;
  currentDate: ICalendarDateState;
}