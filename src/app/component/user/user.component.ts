import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  userForm!: FormGroup;
  users: User[] = [];
 
  constructor() {
       //Write your logic here
  }

  createForm(): void {
   //Write your logic here
  }

  createUser(): void {
    //Write your logic here
  }
  ngOnInit(): void {
      //Write your logic here
  }
  getAllUsers(): void {
     //Write your logic here
  }

  updateUser(): void {
    //Write your logic here
  }

  deleteUser(id: number): void {
     //Write your logic here
  }

  getUserById(userId: number): void {
    //Write your logic here
  }

  searchByTitle(): void {
  //Write your logic here
  }
 
  searchByStartDate(): void {
     //Write your logic here
  }
 
}
