import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { TECHNOGIES } from '../data/mockTechnology';
import { Technology } from '../models/technology';
import { TypeTechnology } from '../models/type-technology';
import { TYPE_TECHNOGIES } from '../data/mockTypeTechnology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyServicesService {
  type_techologies:TypeTechnology[]
  techologies:Technology[]
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
  addTechnologies(techno:Technology){
   this.techologies=[techno, ...this.techologies];
  }
}
