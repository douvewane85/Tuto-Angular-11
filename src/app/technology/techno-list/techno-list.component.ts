import { Component, Input, OnInit } from '@angular/core';
import { TechnologyService } from '../services/technology-services.service';
import { Technology } from '../models/technology';
import { TypeTechnology } from '../models/type-technology';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.scss']
})
export class TechnoListComponent implements OnInit {


  constructor(private technoService:TechnologyService) { }
  technos:Technology[];
  types:TypeTechnology[]
  typeSelected:number=0
  ngOnInit(): void {
      this.technos=this.technoService.getTechnologies(); 
      this.types=this.technoService.getTypeTechnologies();
  }

  handleGetTechnoByType(){
   /*
        Filtre sans Pipe
        if(this.typeSelected!=0){
           this.technos=this.technoService.getTechnologieByType(this.typeSelected)
 
        }else{
      this.technos=this.technoService.getTechnologies(); 
    }
   */
    
   
  }

  delete(techno:Technology){
    this.technos=this.technoService.deleteTechnologies(techno.id)
  }
}
