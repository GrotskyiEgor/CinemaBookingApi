
import type { SeatService } from "./types";
import type { SeatRepository } from "../../domain/seat/repository.js";
import type { SessionRepostiory } from "../../domain/session/repository";


export function createSeatService(seatRepository: SeatRepository, sessionRepository: SessionRepostiory): SeatService {
    return {
        async getSessionSeats(id) {
            const allBookedSeats  = await seatRepository.getAllBookedSeats(id)

            if (!allBookedSeats) {
                throw new Error(`Session not found with ID ${id}`)
            }

            return allBookedSeats
        },

        async bookSeat(sessionId, seatId) {
            const session = await sessionRepository.getSessionById(sessionId)

            if (!session){
                throw new Error(`Session not found with ID ${sessionId}`)
            }

            await seatRepository.bookSeats(sessionId, seatId)
            
            return true
        }
    }
}