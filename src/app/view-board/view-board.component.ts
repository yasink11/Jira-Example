import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../service/board.service';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit{
  boardIndex:any=0;
  boardTitle:string="";

  constructor(private activetedRoute:ActivatedRoute,
    public srv:BoardService,
    private dialog:MatDialog
    ){ }

  ngOnInit(): void { 
   this.boardIndex=this.activetedRoute.snapshot.paramMap.get('boardIndex');
   this.boardTitle= this.srv.boards[this.boardIndex].title;

  }
  openNewCardDialog(){
    const dialogRef = this.dialog.open(ViewBoardDialogComponent,{
      height: '400px',
      width:  '400px',
      data:{boardIndex:this.boardIndex,editMode:false}
    });
  }

  deleteCard(indexCard:number){
    this.srv.boards[this.boardIndex].cards.splice(indexCard,1);
    this.srv.UpdateDataToLocaleStorage();
  }


  editCard(indexCard:number, card:any){

    const dialogRef = this.dialog.open(ViewBoardDialogComponent,{
      height: '400px',
      width:  '400px',
      data:{boardIndex:this.boardIndex,cardIndex:indexCard, editMode:true}
    });
  }








}
