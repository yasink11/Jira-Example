import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/service/board.service';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.css']
})
export class ViewBoardDialogComponent implements OnInit {

  title: string = '';
  tasks: Array<string> = [""];
  tasksLoop: any = [false];

  constructor(private dialogRef: MatDialogRef<ViewBoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public srv: BoardService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.data.editMode) {
      this.title = this.srv.boards[this.data.boardIndex].cards[this.data.cardIndex].title;
      this.tasksLoop = this.srv.boards[this.data.boardIndex].cards[this.data.cardIndex].status;
      this.tasks = this.srv.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist;
    }
  }

  deleteTask(i: number) {
    this.tasks.splice(i,1);
    this.tasksLoop.splice(i,1);
  }

  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);

  }

  close() {
    this.dialogRef.close()
  }

  create() {
    if (this.tasks.some((element: string) => element === "")) {
      this.snackbar.open("Yeni Taskı Giriniz", "Ok");
    }
    else {
      if (!this.data.editMode) {
        this.srv.boards[this.data.boardIndex].cards.push({
          title: this.title,
          checklist: this.tasks,
          status: this.tasksLoop
        });
      }
      else {
        this.srv.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title;
        this.srv.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop;
        this.srv.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks;
      }
      this.srv.UpdateDataToLocaleStorage();
      this.close();
    }

  }

}
