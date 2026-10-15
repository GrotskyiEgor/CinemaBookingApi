import type { Seat } from "./entity";

    
export interface SeatRepository {
    getAllSeats(): Promise<Seat[]>;
    getAllBookedSeats(id: number): Promise<Seat[] | null>;
    bookSeats(sessionId:number, seatId: number): Promise<void>;
}   