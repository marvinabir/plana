import { Event } from "./event";

export interface TicketType {
    id: number;
    type: string;
    price: number;
    availability: number;
    eventId: Event;
    createdAt: Date;
    updatedAt: Date;
  }
  