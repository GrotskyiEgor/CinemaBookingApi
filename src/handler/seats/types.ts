import type { Request, Response } from "express";

export interface SeatHandler {
    getSessionSeats(req: Request<{ id: string }>, res: Response): Promise<void>;
    bookSeat(req: Request<{ id: string }, {}, {seatId: number}>, res: Response): Promise<void>;
}