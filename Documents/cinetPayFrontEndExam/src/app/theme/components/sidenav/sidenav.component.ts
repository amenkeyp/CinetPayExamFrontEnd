import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';
import {User} from "../../../pages/users/user.model";
import {UsersService} from "../../../pages/users/users.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})
export class SidenavComponent implements OnInit {
  public user: User;
  public userImage= '';
  public name = '';
  public campany = '';
  public menuItems:Array<any>;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public menuService:MenuService,public usersService:UsersService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
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
      this.campany = 'Je racontre quelque problème de connexion'}
    );
  }
  public closeSubMenus(){
    let menu = document.getElementById("vertical-menu");
    if(menu){
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if(child){
          if(child.children[0].classList.contains('expanded')){
              child.children[0].classList.remove('expanded');
              child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}
