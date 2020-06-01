import { CreateContractorGQL } from './../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addContractor',
  templateUrl: './addContractor.component.html',
  styleUrls: ['./addContractor.component.css']
})
export class AddContractorComponent implements OnInit {
addContractorForm:FormGroup;
  constructor(private fb:FormBuilder,private CreateContractor:CreateContractorGQL,private toastr: ToastrService) {
    this.addContractorForm=this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: [0, Validators.required],
      phoneNo:['', Validators.required],
      email:['',[Validators.required,Validators.email]]
    })
   }
   get name(){
    return this.addContractorForm.get('name');
   }
   get type(){
    return this.addContractorForm.get('type');
   }
   get email(){
    return this.addContractorForm.get('email');
   }
   get price(){
    return this.addContractorForm.get('price');
   }
   get phoneNo(){
    return this.addContractorForm.get('phoneNo');
   }

  ngOnInit() {
    
  }
  submit(){
    this.CreateContractor.mutate({...this.addContractorForm.value}).subscribe(result=>{
      if(result.data.CreateContractor&&result.data.CreateContractor._id){
        this.toastr.success('added successfully','success');
        return;
      }
      this.toastr.success('Error during creation','UnSuccessfully');
    })
  }

}
