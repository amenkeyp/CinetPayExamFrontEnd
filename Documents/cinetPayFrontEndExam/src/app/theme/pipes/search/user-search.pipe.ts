import { Pipe, PipeTransform } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
    historiquesearch : string;
    constructor(private httpClient: HttpClient){}
    ngOnInit(){
        this.httpClient.get("assets/data/historiqueusersearch.json").subscribe(data =>{
            console.log(data);
            //this.products = data;
        })
    }
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
      let searchProfil = new RegExp(args, 'ig');

    if (value) {
      return value.filter(user => {
       if (user.name) {
           if(searchText.source !="(?:)"){
               this.historiquesearch = searchText.source.substr(0,searchText.source.length) + " Date" + new Date();
               //Ajout d'un objet dans la mémoire de l'ordinateur
               localStorage.setItem(searchText.source,  this.historiquesearch);
           this.httpClient.post(user,"assets/data/historiqueusersearch.json");
           }
          return user.name.search(searchText) !== -1;
        }
        else if(user.language){
          return user.language.search(searchText) !== -1;
        }
      });
    }
  }
}