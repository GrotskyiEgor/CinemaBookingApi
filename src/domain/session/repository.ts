import type { MovieSession } from "./entity"


export interface SessionRepostiory {
    getAllSession(): Promise<MovieSession[]>;
    getSessionById(id: number): Promise<MovieSession | null>;
}