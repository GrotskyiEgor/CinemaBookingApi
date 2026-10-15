import type { Request, Response } from "express";
import type { SessionService } from "../../services/session/types.js";
import type { SessionHandler } from "./types.js";

export function createSessionHandlers(sessionService: SessionService): SessionHandler {
    return {
        async getSessions(req, res) {
            try {
                const sessions = await sessionService.getAllSessions()

                res.status(200).json(sessions)
            } catch (error) {
                console.log(error)
                res.status(500).json({ message: "Failed to fetch sessions" })
            }
        },

        async getSessionById(req, res) {
            const sessionId = Number(req.params.id)

            if (!Number.isInteger(sessionId) || sessionId <= 0) {
                res.status(400).json({ message: "Id must be a positive integer" })
                return
            }

            try {
                const session = await sessionService.getSessionById(sessionId)

                if (!session) {
                    res.status(404).json({ message: "Session not found" })
                    return
                }

                res.status(200).json(session)
            } catch (error) {
                console.log(error)
                res.status(500).json({ message: "Failed to fetch session" })
            }
        },
    };
}