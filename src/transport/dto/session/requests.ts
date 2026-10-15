import type { db } from "../../../prisma/db.js";
import type { Seat } from "../seat/request.js";


type PrismaMovieSession = Awaited<ReturnType<typeof db.orm.public.MovieSession.all>>[number];

export interface MovieSession {
    id: number;
    movieTitle: string;
    startsAt: PrismaMovieSession["startsAt"];
    seats?: Seat[];
}