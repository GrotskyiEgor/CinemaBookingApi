import { Router } from "express";
import type { SeatHandler } from "../handler/seats/types";

export function createSeatRouter(seatHandler: SeatHandler): Router {
    const router: Router = Router()

    router.get("/sessions/:id/seats", seatHandler.getSessionSeats)
    router.post("/sessions/:id/book", seatHandler.bookSeat)

    return router
}
