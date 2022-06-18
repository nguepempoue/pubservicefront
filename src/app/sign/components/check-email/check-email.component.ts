import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from 'src/app/core/classes/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.css']
})
export class CheckEmailComponent implements OnInit {

  email: string = ""
  user: User;
  constructor(
     private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.user = new User();
   }

  ngOnInit(): void {
    this.email = this.route.snapshot.params["email"]
    this.getUserByEmail(this.email);
  }
  getUserByEmail(email: string){
    this.userService.getByEmail(email).subscribe((user)=>{
      console.log(user);
      this.user = user;
    }, ((error)=>{
      console.log(error);
    }))
  }

}
