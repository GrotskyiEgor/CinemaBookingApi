import { Router } from "express";
import type { SessionHandler } from "../handler/session/types";

export function createSesionRouters(sessionHandler: SessionHandler): Router {
    const router: Router = Router()

    router.get("/sessions", sessionHandler.getSessions)
    router.get("/sessions/:id", sessionHandler.getSessionById)
    
    return router
}

