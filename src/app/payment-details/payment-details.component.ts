import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }
  //  for read data when slect row

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe(
        (data) => {
          this.service.refreshList();
        });
    }
  }
}
