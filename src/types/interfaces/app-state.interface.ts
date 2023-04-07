import {ICalendarDateState} from "./calendar-date-state.interface";
import {ICalendarEvent} from "./calendar-event.interface";
import {IAddEventsState} from "./add-event-state.interface";

export interface IAppState {
    events: Array<ICalendarEvent>;
    currentDate: ICalendarDateState;
    addEvents: IAddEventsState;
}