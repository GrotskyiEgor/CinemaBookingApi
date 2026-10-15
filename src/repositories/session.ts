import type { SessionRepostiory } from "../domain/session/repository";
import { db } from '../prisma/db.js';

export function createSessionRepository(): SessionRepostiory {
    return {
        async getAllSession() {
            return await db.orm.public.MovieSession.all()
        },

        async getSessionById(id: number) {
            return await db.orm.public.MovieSession.where({ id: id }).first()
        }
    };
}