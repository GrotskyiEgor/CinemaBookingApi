import { db } from "../prisma/db.js";
import type { Seat } from "../domain/seat/entity.js";
import type { SeatRepository } from "../domain/seat/repository.js";


export function createSeatRepository(): SeatRepository {
    return{
        async getAllSeats() {
            return await db.orm.public.Seat.all();
        }, 

        async getAllBookedSeats(id) {
            const session = await db.orm.public.MovieSession
                .where({ id: id })
                .include("seats")
                .first()

            if (!session) {
                return null
            }

            const bookedSeatIds = new Set(session.seats.map((s: any) => s.seatId))
            const allSeats = await db.orm.public.Seat.all()

            const bookedSeats = allSeats.filter(seat => bookedSeatIds.has(seat.id))

            return bookedSeats
        },

        async bookSeats(sessionId, seatId) {
            await db.orm.public.SessionSeat.create({
                sessionId: sessionId,
                seatId: seatId
            })
        },
    };
}        

