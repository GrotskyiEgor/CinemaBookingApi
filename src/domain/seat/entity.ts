import type { MovieSession } from "../session/entity";


export interface Seat {
    id: number;
    row: number;
    column: number;
    sessions?: MovieSession[];
}