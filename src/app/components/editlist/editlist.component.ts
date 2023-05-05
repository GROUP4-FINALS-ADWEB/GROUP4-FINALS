import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent {

  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.crudService.GetPetition(this.getId).subscribe(res => {
      this.updateForm.setValue({
        fname: res['fname'],
        lname: res['lname'],
        email: res['email'],
        pnumber: res['pnumber'],
        comment: res['comment']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      fnamne: [''],
      lnamne: [''],
      email: [''],
      pnumber: [''],
      comment: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.crudService.updatePetition(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        alert("Petition Updated successfully!");
        this.ngZone.run(() => this.router.navigateByUrl('/list'))
      }, (err) => {
        console.log(err);
    });
  }
}
