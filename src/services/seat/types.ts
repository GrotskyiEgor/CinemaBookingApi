import type { Seat } from "../../transport/dto/seat/request";


export interface SeatService {
    getSessionSeats(id: number): Promise<Seat[]>
    bookSeat(sessionId: number, seatId: number): Promise<boolean>
}