import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from 'src/app/core/classes/User';
import { UserLogin } from 'src/app/core/classes/UserLogin';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { SupUtilityService } from 'src/app/core/services/suputility.service';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: number = 0;
  loginForm!:FormGroup;
  user:User;
  userLogin: UserLogin;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private authenticationService: AuthentificationService,
    private suputilityservice: SupUtilityService,
    private formBuilder: FormBuilder) {
    this.user = new User();
    this.userLogin = new UserLogin();
    }

  ngOnInit(): void {
    this.formInit();
    this.id = this.route.snapshot.params["id"]
    this.getUserById(this.id);
  }

  formInit(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, Validators.required ),
      password: new FormControl(null, Validators.required )
    })
  }

  login(){
    const formValue = this.loginForm.value;
    this.userLogin.email = formValue.email;
    this.userLogin.password = formValue.password;
    this.authUser(this.userLogin);
  }

  getUserById(id: number){
    this.userService.getById(id).subscribe((user)=>{
      console.log(user);
      this.conformToken(user.token)
    }, ((error)=>{
      console.log(error);
    }))
  }

  conformToken(token: string){
    this.userService.confirmToken(token).subscribe((user)=>{
      console.log(user);
    }, ((error)=>{
      console.log(error);
    }))
  }

  authUser(user: UserLogin){
    this.authenticationService.login(user).subscribe(
      (result) => {
        var jwtToken = result.headers.get('Authorization');
        console.log(jwtToken);
        this.suputilityservice.saveToken(jwtToken);
         this.router.navigateByUrl("dashboard");

      }, ((error)=>{
        if (error.status == 403) {
          this.suputilityservice.deleteToken();
        }
      }))
  }

}
