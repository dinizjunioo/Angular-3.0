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
    if((this.aut.length > 0) && (this.tut.length > 9))
    {

    this.comments.push(
      {
      ...this.comments,
      id: Math.random(),
      author: this.aut,
      comentario: this.tut
      }
    )
    }else{
      if (this.aut.length==0)
      alert("O campo 'nome' está vazio");
      else{
        alert("O campo comentário precisa de ao menos 10 caracteres");
      }
    }
  }

}
