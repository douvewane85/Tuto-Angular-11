import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from '../models/technology';
import { TechnologyService } from '../services/technology-services.service';

@Component({
  selector: 'app-techno-details-list',
  templateUrl: './techno-details-list.component.html',
  styleUrls: ['./techno-details-list.component.scss']
})
export class TechnoDetailsListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private technoService:TechnologyService) { }
  id: string
  techno:Technology
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.techno=this.technoService.getTechnologieById(parseInt(this.id));

  }

}
