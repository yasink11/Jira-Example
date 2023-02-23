import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
public boards:Array<any>=[]
  constructor() {

    let local= localStorage.getItem('jira');
    if(local != null){
      this.boards=JSON.parse(local);
    }
   }

  public createBoard(title:any){
    let newBoardObj={
      title:title,
      cards:[]
    }
    this.boards.push(newBoardObj);
    localStorage.setItem('jira', JSON.stringify(this.boards));
  }


  public deleteBoard(boardNumber: number){
    this.boards.splice(boardNumber,1);
    localStorage.setItem('jira', JSON.stringify(this.boards));
  }
  
  public UpdateDataToLocaleStorage(){
    localStorage.setItem('jira',JSON.stringify(this.boards));
  }


}
