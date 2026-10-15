import type { Request, Response } from "express";


export interface SessionHandler {
    getSessions(req: Request, res: Response): Promise<void>
    getSessionById(req: Request, res: Response): Promise<void>
}