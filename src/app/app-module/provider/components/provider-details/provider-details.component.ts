import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/classes/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {

  provider: User;

  constructor( private activatedRoute: ActivatedRoute, private userSerive: UserService) {
    this.provider = new User();
   }

  ngOnInit(): void {
  }

  getProvider(){
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userSerive.getById(params['id']).subscribe((provider)=>{
        this.provider = provider;
      }, ((error)=>{
        console.log(error);
      }))
    
    })
  }

}
