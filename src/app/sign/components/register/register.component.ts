import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/core/services/sector.service';
import { Sector } from 'src/app/core/classes/Sector';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderBean } from 'src/app/core/classes/ProviderBean';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   sectors: Sector[];
   providerBean: ProviderBean;
   registerForm!:FormGroup;
  constructor(
    private sectorService: SectorService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.sectors = [];
    this.providerBean = new ProviderBean();
   }

  ngOnInit(): void {
    this.getAllSector()
    this.formInit()
  }

  formInit(){
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl(null, Validators.required ),
      lastName: new FormControl(null, Validators.required ),
      phoneNumber: new FormControl(null, Validators.required ),
      email: new FormControl(null, Validators.required ),
      idSector:new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required ),
      cfpassword: new FormControl(null, Validators.required )

    })
  }
   getAllSector(){
    this.sectorService.getAllSectors().subscribe((sectors)=>{
      this.sectors = sectors;
    })
  }

  registerProvider(){
    const formValue = this.registerForm.value;
    this.providerBean.firstName = formValue.firstName;
    this.providerBean.lastName = formValue.lastName;
    this.providerBean.phoneNumber = formValue.phoneNumber;
    this.providerBean.email = formValue.email;
    this.providerBean.idSector = formValue.idSector;
    this.providerBean.password = formValue.password;
    if(formValue.password != formValue.cfpassword){
      alert("password are diferents !");
    }
    console.log(this.providerBean);

    this.saveProvider(this.providerBean);
  }

  saveProvider(provider: ProviderBean){
    this.userService.saveProvider(provider).subscribe((user)=>{
      this.router.navigateByUrl(
        `check-email/${user.email}`
      );
      console.log(user);
    })
  }
}
