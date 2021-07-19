import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histo',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  public projects = []
  constructor() {  this.getData(); }

  ngOnInit() {

  }
  getData() {
   for(let i=0; i<localStorage.length ; i++) {
     this.projects.push(localStorage.getItem(localStorage.key(i)));
   }
   return this.projects;
  }

  removeAll(){
      this.projects = [];
  }

    delete(i){
      localStorage.removeItem(localStorage.key(i))
        this.projects.slice(i);
  this.projects.shift();
    }

}
