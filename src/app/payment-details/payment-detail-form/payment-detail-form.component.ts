import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from "@angular/forms"
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html'
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
  }
 
  onSubmit(form: NgForm) {
    console.log(this.service.formData.id )
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  // data add call
  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      (result: NgForm) => {
        this.service.refreshList();
        this.resetFrom(form);
      });
  }

  // update call
  updateRecord(form: NgForm) {

    this.service.putPaymentDetail().subscribe(
      (result: NgForm) => {
        this.resetFrom(form);
        this.service.refreshList();
       
      });
  }

  resetFrom(form: NgForm) {
    form.form
  }
  // form reset value
}
