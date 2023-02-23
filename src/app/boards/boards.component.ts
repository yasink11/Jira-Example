import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from '../service/board.service';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  
  constructor(private diaolog:MatDialog, public srv:BoardService){

  }
  
  ngOnInit(): void {
  }


  openNewBoardDialog(){
    const dialogRef = this.diaolog.open(BoardsDialogComponent,{
      height: '250px',
      width: '400px',
    });
  }

  deleteBoard(index : number){
    this.srv.deleteBoard(index);
  }

}
