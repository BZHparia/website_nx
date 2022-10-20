import { BoardComponent } from "./board/board.component";
import { CellComponent } from "./cell/cell.component";
import { CursorComponent } from "./cursor/cursor.component";
import { GolComponent } from "./gol/gol.component";
import { GridEffectComponent } from "./gridEffect/gridEffect.component";
import { PlaygroundComponent } from "./playground/playground.component";

export * from "./board/board.component";
export * from "./cell/cell.component";
export * from "./cursor/cursor.component";
export * from "./gol/gol.component";
export * from "./gridEffect/gridEffect.component";
export * from "./playground/playground.component";


export const COMPONENTS = [
    GolComponent,
    GridEffectComponent,
    BoardComponent,
    CellComponent,
    PlaygroundComponent,
    CursorComponent,
];