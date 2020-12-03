import { Injectable } from '@angular/core';
import { TECHNOGIES } from '../data/mockTechnology';
import { Technology } from '../models/technology';
import { TypeTechnology } from '../models/type-technology';
import { TYPE_TECHNOGIES } from '../data/mockTypeTechnology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  type_techologies:TypeTechnology[]
  techologies:Technology[]
  static nbreTechno:number=5;
  constructor() { 
      this.techologies=[...TECHNOGIES]
      this.type_techologies=[...TYPE_TECHNOGIES]
  }

  getTypeTechnologies():TypeTechnology[]{
    return this.type_techologies;
  }

  getTechnologies():Technology[]{
    return this.techologies;
  }
  getTechnologieById(id:number):Technology{
     return (this.techologies.find(techno=>techno.id==id)) ;

  }

  getTechnologieByType(id:number):Technology[]{
    return this.techologies.filter(techno=>techno.type.id==id) ;

 }
  addTechnologies(techno:Technology){
    techno.id=++TechnologyService.nbreTechno;
    this.techologies=[techno, ...this.techologies];

  }
  deleteTechnologies(id:number):Technology[]{
    return this.techologies=[... this.techologies.filter(techno=>techno.id!=id)] ;
  }
}
