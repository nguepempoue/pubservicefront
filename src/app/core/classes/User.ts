import { Role } from "./Role";
import { Sector } from "./Sector";

export class User{
  idUser: number = 0;
  firstName: string = "";
  lastName: string = "";
  email: string ="";
  password: string="";
  phoneNumber:number=0;
  token: string="";
  sector: Sector = new Sector();
  role: Role = new Role();;
}
