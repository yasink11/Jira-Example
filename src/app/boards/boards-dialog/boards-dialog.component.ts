import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/service/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent {

  constructor( private dialogRef:MatDialogRef<BoardsDialogComponent>, private srv:BoardService){

  }

  boardForm= new FormGroup({
    title:new FormControl(null,[Validators.required])
  })


  close(){
    this.dialogRef.close()
  }

  create(){
    this.srv.createBoard(this.boardForm.get('title')?.value);
    this.dialogRef.close()
  }
}
