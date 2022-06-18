import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/classes/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) {
    this.users = []
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((users)=>{
      this.users = users;
      console.log("users: ", this.users);
      console.log("get users");
    })
  }

}
