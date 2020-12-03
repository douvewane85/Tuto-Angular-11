import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology';
import { TypeTechnology } from '../models/type-technology';
import { TechnologyService } from '../services/technology-services.service';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.scss']
})
export class TechnoAddComponent implements OnInit {
  formData:Technology;
  
  types:TypeTechnology[]
  constructor(private technoService:TechnologyService) { }

  ngOnInit(): void {
     this.types=this.technoService.getTypeTechnologies();
     this.formData=this.initData()
  }
  handleAdd(form:any){
      this.technoService.addTechnologies(this.formData);
      
      
  }
  private initData():Technology{
    return {
      id:0,
     libelle:"",
     description:"",
     type:null
    }
  }

}
