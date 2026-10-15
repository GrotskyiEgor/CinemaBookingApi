import type { MovieSession } from "../../domain/session/entity";

export interface SessionService {
    getAllSessions(): Promise<MovieSession[]>
    getSessionById(id: number): Promise<MovieSession>
}