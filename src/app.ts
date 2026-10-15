import { Temporal } from '@js-temporal/polyfill';
(globalThis as any).Temporal = Temporal;

import express from 'express';


import { createSessionRepository } from "./repositories/session";
import { createSessionService } from "./services/session/session";
import { createSessionHandlers } from "./handler/session/session";
import { createSesionRouters } from "./routers/session";

import { createSeatRepository } from "./repositories/seat";
import { createSeatService } from "./services/seat/seat";
import { createSeatHandlers } from "./handler/seats/seat";
import {createSeatRouter} from "./routers/seat";


const sessionRepository = createSessionRepository()
const sessionService = createSessionService(sessionRepository)
const sessionHandler = createSessionHandlers(sessionService)
const sessionRouter = createSesionRouters(sessionHandler)

const seatRepository = createSeatRepository();
const seatService = createSeatService(seatRepository, sessionRepository);
const seatHandler = createSeatHandlers(seatService);
const seatRouter = createSeatRouter(seatHandler);

const app = express();

app.use(express.json())

const PORT = 3000
const HOST = 'localhost'

app.use(sessionRouter)
app.use(seatRouter)

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);  
});
