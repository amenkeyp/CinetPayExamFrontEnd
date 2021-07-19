import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User} from './user.model';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
    public users: User[] = [];
    public searchText: string;
    public searchProfil: string;
    public page:any;
    public settings: Settings;

    constructor(public appSettings:AppSettings,public usersService:UsersService){
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUsers()
    }
    ngAfterViewInit(){
        this.settings.loadingSpinner = false;
    }
   public getUsers(): void {
     //   this.users = null; //for show spinner each time
        this.usersService.getUsers().subscribe((response: User []) =>{ this.users = response;
            console.log(this.users) ;
            localStorage.setItem('users', JSON.stringify(this.users));
        });
    }
    public addUser(user:User){
        this.usersService.addUser(user).subscribe(user => this.getUsers());
    }
    public updateUser(user:User){
        this.usersService.updateUser(user).subscribe(user => this.getUsers());
    }
    public deleteUser(user:User){
       this.usersService.deleteUser(user.id).subscribe(user => this.getUsers());
    }

    public onPageChanged(event){
        this.page = event;
        this.getUsers();
        if(this.settings.fixedHeader){      
            document.getElementById('main-content').scrollTop = 0;
        }
        else{
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public getUsersFromLocalCache(): User[] {
      if(localStorage.getItem('users') as any) {
          return JSON.parse(localStorage.getItem('users') as any);
      }
      return null as any;
    }

    public searchUsersProfile(searchTerm: string): void {
        const results : User [] = [];
        for(const user of this.getUsersFromLocalCache()){
            console.log(user);
            if(user.language != null){
            if(user.language.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                results.push(user);
                console.log(results);
            }
            }
        }
        this.users = results;
        if(results.length === 0 ){
            this.users = this.getUsersFromLocalCache();
        }
    }
}