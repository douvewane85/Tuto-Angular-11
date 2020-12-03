import { Component, Input, OnInit } from '@angular/core';
import { TechnologyService } from '../services/technology-services.service';
import { Technology } from '../models/technology';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.scss']
})
export class TechnoListComponent implements OnInit {


  constructor(private technoService:TechnologyService) { }
  technos:Technology[];
  ngOnInit(): void {
      this.technos=this.technoService.getTechnologies(); 
  }

  
}
