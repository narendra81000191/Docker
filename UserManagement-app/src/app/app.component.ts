import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementComponent } from './components/usermanagement/usermanagement.component';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserManagement-app';
  //userList!:User[];
  
  userList=[{uid:1,uname:'nikku',email:'nikku@gmail.com',role:'employee'},
      {uid:2,uname:'anmol',email:'anmol@gmail.com',role:'admin'},
      {uid:3,uname:'harsha',email:'ahsrah@gmail.com',role:'javadev'},
      {uid:4,uname:'jhonceena',email:'wwe@gmail.com',role:'wrestler'},
      {uid:5,uname:'brokelesner',email:'sooon@gmail.com',role:'wrestler'}
    ]
  
 addtoUserList(user:any){
  this.userList.push(user)
 }
 
 deletefromuser(uid: number) {
    this.userList = this.userList.filter(user => user.uid !== uid);
  }

}