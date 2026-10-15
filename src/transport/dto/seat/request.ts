import type { MovieSession } from "../session/requests";


export interface Seat {
    id: number;
    row: number;
    column: number;
    sessions?: MovieSession[];
}