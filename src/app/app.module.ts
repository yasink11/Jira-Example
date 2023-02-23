import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { BoardsComponent } from './boards/boards.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BoardsDialogComponent } from './boards/boards-dialog/boards-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ViewBoardComponent } from './view-board/view-board.component';
import { ViewBoardDialogComponent } from './view-board/view-board-dialog/view-board-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsComponent,
    BoardsDialogComponent,
    ViewBoardComponent,
    ViewBoardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
