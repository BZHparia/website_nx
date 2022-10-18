import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CellComponent } from './components/cell/cell.component';
import { GolComponent } from './components/gol/gol.component';
import { GridEffectComponent } from './components/gridEffect/gridEffect.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
];

@NgModule({
  declarations: [AppComponent, GolComponent, BoardComponent, CellComponent, GridEffectComponent],
  imports: [RouterModule.forChild(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
