import {
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  EventEmitter, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  Output, 
  SimpleChanges 
} from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UserManagementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() userList!: User[];
  @Output() addUserEvent=new EventEmitter<any>
  @Output() deleteUserEvent = new EventEmitter<number>();
  
  constructor() {
    console.log("1. constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2. ngOnChanges called");
  }

  ngOnInit(): void {
    console.log("3. ngOnInit called");
  }

  ngDoCheck(): void {
    console.log("4. ngDoCheck called");
  }

  ngAfterViewInit(): void {
    console.log("5. ngAfterViewInit called");
  }

  ngAfterViewChecked(): void {
    console.log("6. ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("7. ngOnDestroy called");
  }
  adduser(){
    const  user={uid:234,uname:"amit",email:'ramu@gmail.com',role:'admin'};
    this.addUserEvent.emit(user);

    }
  deleteUser(uid:number){
    this.deleteUserEvent.emit(uid)
    
  }

  
}