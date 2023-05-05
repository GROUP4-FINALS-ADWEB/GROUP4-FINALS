import { Component } from '@angular/core';
import { CrudService } from './../../service/crud.service';
 

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css']
})
export class ListpageComponent {
   
  Petitions:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetPetitions().subscribe(res => {
      console.log(res)
      this.Petitions =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deletePetition(id).subscribe((res) => {
        this.Petitions.splice(i, 1);
      })
    }
  }
}
