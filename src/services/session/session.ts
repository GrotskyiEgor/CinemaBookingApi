import type { SessionRepostiory } from "../../domain/session/repository";
import type { SessionService } from "./types";


export function createSessionService(sessionRepository: SessionRepostiory): SessionService {
    return {

        async getAllSessions() {
          return await sessionRepository.getAllSession()
        },

        async getSessionById(sessionId) {
            const session = await sessionRepository.getSessionById(sessionId)
            
            if (!session) {
                throw new Error(`Session not found with ID ${sessionId}`)
            }
            
            return session
        }
    }
}