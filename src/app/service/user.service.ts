import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = '';
  constructor(private http: HttpClient) { }

  createUser(user: User){ 
    //Write your logic here
    return null;
  }

  getUser(id: number) {
    //Write your logic here
    return null;    
  }

  getAllUsers(){ 
     //Write your logic here
     return null;  
  }

  updateUser(id: number, user: User) {   
     //Write your logic here
     return null;
  }

  deleteUser(id: number) {  
     //Write your logic here
     return null;
  }

  searchByTitle(title: string) {
     //Write your logic here
     return null;
  }

  searchByStartDate(startDate: Date) { 
     //Write your logic here
     return null;
  }

}
