import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Form, NgForm } from '@angular/forms';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PaymentDetailService {

  constructor(private http: HttpClient) { }


  readonly baseUrl = 'http://localhost:3000/PaymentDetail'
  // model class initialing with new instence
  formData: PaymentDetail = new PaymentDetail();
  // paymentlist: PaymentDetail[] = new Array();
  list: PaymentDetail[];


 
  postPaymentDetail(): Observable<NgForm> {
    return this.http.post<NgForm>(this.baseUrl, this.formData, headerOption);
  }


  putPaymentDetail(): Observable<NgForm> {
    return this.http.put<NgForm>(this.baseUrl + '/' + this.formData.id, this.formData, headerOption);
  }
  // delete data
  deletePaymentDetail(id:Number): Observable<PaymentDetail> {
    return this.http.delete<PaymentDetail>(this.baseUrl + '/' + id, headerOption);
  }
  async refreshList() {

    return this.http.get<PaymentDetail[]>(this.baseUrl, headerOption).subscribe(
      (data: PaymentDetail[]) => {
        this.list = data;
        console.table(this.list);
        
      });
  }
}

//#2 creating a property of type model class in service class