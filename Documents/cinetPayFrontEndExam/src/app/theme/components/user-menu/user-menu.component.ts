import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../../../pages/users/user.model";
import {UsersService} from "../../../pages/users/users.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public user: User;
  public userImage = '';
  public name = '';
  public campany = '';
  constructor(public usersService:UsersService) { }

  ngOnInit() {
    this.getUser();
  }


  public getUser(): void {
    //   this.users = null; //for show spinner each time
    this.usersService.getConnectUser().subscribe((response: User) =>{ this.user = response;
          console.log(this.user);
          this.userImage =this.user.avatar_url;
          this.name =this.user.login;
          this.campany = this.user.campany;
        },
        (error : HttpErrorResponse) =>{
      this.userImage ='../assets/img/users/user.jpg';
      this.name = 'Mes exscuses';
      this.campany = 'problèmes de connexion';}
    );
  }
}
