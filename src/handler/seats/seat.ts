import type { SeatService } from "../../services/seat/types.js";
import type { SeatHandler } from "./types.js";

export function createSeatHandlers(seatService: SeatService): SeatHandler {
    return {
        async getSessionSeats(req, res) {
            const sessionId = Number(req.params.id);

            if (!Number.isInteger(sessionId) || sessionId <= 0) {
                res.status(400).json({ message: "Id must be a positive integer" })
                
                return
            }

            try {
                const seats = await seatService.getSessionSeats(sessionId)

                res.status(200).json(seats);
            } catch (error) {
                console.log(error)

                res.status(500).json({ message: "Failed to fetch session seats" })
            }
        },


        async bookSeat(req, res) {
            const sessionId = Number(req.params.id);

            if (!Number.isInteger(sessionId) || sessionId <= 0) {
                res.status(400).json({ message: "Id must be a positive integer" })

                return;
            }

            const body = req.body;

            if (!body || Array.isArray(body)) {
                res.status(422).json({ message: "Invalid request body" })
                
                return;
            }

            const { seatId } = body

            if (typeof seatId !== "number" || !Number.isInteger(seatId) || seatId <= 0) {
                res.status(422).json({ message: "Invalid or missing seatId" })

                return
            }

            try {
                const success = await seatService.bookSeat(sessionId, seatId)

                if (!success) {
                    res.status(409).json({ message: "Seat is already booked on this session" })

                    return;
                }

                res.status(201).json({ message: "Seat successfully booked" })
            } catch (error) {
                console.log(error)


                res.status(500).json({ message: "Failed to book seat" })
            }
        },
    };
}