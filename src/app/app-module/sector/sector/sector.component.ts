import { Component, OnInit, ViewChild } from '@angular/core';
import { Sector } from 'src/app/core/classes/Sector';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SectorService } from 'src/app/core/services/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  sectorForm!:FormGroup;
  sectorFormUpdate!: FormGroup;

  sectors: Sector[];
  sector: Sector = new Sector();

  @ViewChild('closeCreateSectorModal') closeModal: any;
  @ViewChild('closeUpdateSectorModal') closeModalUpdate: any;
  

  constructor(private sectorService: SectorService, private formBuilder: FormBuilder) {
    this.sectors = [];
  }

  ngOnInit(): void {
    this.getAllSector();
    this.formInit();
  }

  formInit(){
    this.sectorForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required )
    })


    this.sectorFormUpdate = this.formBuilder.group({
      id: new FormControl(null, Validators.required ),
      name: new FormControl(null, Validators.required )
    })
  }
  getAllSector(){
    this.sectorService.getAllSectors().subscribe((sectors)=>{
      this.sectors = sectors;
    })
  }

  createSector(){
    const formValue = this.sectorForm.value;
      this.sector.name = formValue.name;
      this.saveSector(this.sector);
  }

  saveSector(sector: Sector){
    this.sectorService.saveSector(sector).subscribe((sectorSaved)=>{
      this.getAllSector();
      this.closeModal.nativeElement.click();
    }, ((error)=>{
      console.log(error)
    }))
  }
 
  delete(idSector: number){
    this.sectorService.deleteSector(idSector).subscribe(()=>{
      this.getAllSector();
    }, ((error)=>{
      console.log(error)
    }))
  }

  async showUpdateForm(sector: Sector){
    this.sector = sector;
  }

  updateSectorForm(){
    const formValue = this.sectorFormUpdate.value;
    this.sector.idSector = formValue.id; 
    this.sector.name = formValue.name; 
    this.updateSector(this.sector.idSector, this.sector);
  }

  updateSector(idSector: number, sector: Sector){
    this.sectorService.updateSector(idSector, sector).subscribe((sector)=>{
      console.log(sector)
      this.closeModalUpdate.nativeElement.click();
    }, ((error)=>{
      console.log(error)
    }))
  }

}
