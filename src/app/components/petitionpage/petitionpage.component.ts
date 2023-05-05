import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-petitionpage',
  templateUrl: './petitionpage.component.html',
  styleUrls: ['./petitionpage.component.css']
})
export class PetitionpageComponent {
  
  petitionForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.petitionForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      pnumber: [''],
      comment: ['']
    })
  }

  
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddPetition(this.petitionForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/confirmation'))
      }, (err) => {
        console.log(err);
    });
  }
}
