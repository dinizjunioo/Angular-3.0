import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  //template: `<app-quiz></app-quiz>`
})
export class CommentComponent implements OnInit{

  aut = "";
  tut = "";
  comments =
  [
    {
      id: 1,
      author: '',
      comentario:''
    },
  ];

  constructor(){}

  ngOnInit() {
    for (let i=1; i < this.comments.length; i++)
    {
      let vet = this.comments[i];
    }
  }
  post()
  {
    this.comments.push(
      {
      ...this.comments,
      id: Math.random(),
      author: this.aut,
      comentario: this.tut
      }
    )
  }

}
