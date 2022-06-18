import { Component, OnInit } from '@angular/core';
import { SupUtilityService } from 'src/app/core/services/suputility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private suputilityservice: SupUtilityService) { }

  ngOnInit(): void {
  }

  logout(){
    this.suputilityservice.deleteToken();
  }

}
