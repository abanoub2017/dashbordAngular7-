import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiBasUrl = environment.apiBasUrl;

  constructor(private http: HttpClient) { }

  happeniss(language, channel, fromDate, toDate) {
    console.log('ServicesService.happeniss()');
    return this.http.post(`${this.apiBasUrl}/support/summary/happiness`, {language, channel, fromDate, toDate});
  }

  happinessDetails(){
    return this.http.post(`${this.apiBasUrl}/support/summary/happiness/details`,{})
   };

   complaints(language,channel){
    return this.http.post(`${this.apiBasUrl}/support/complaints/overdue/details`,{language,channel})

   };

   TransactionPerUser(language,channel,fromDate,toDate){
    return this.http.post(`${this.apiBasUrl}/ticket/trans/managerTotalTransPerEmp`,{language,channel,fromDate,toDate})

   };

   TransactionPerDepartment(language,channel,fromDate,toDate){
    return this.http.post(`${this.apiBasUrl}/ticket/trans/managerTotalTransPerDept`,{language,channel,fromDate,toDate})

   };

   IncomePerUser(language,channel,fromDate,toDate){
    return this.http.post(`${this.apiBasUrl}/ticket/trans/managerTotalIncomePerEmp`,{language,channel,fromDate,toDate})

   };

   IncomePerDepartment(language,channel,fromDate,toDate){
    return this.http.post(`${this.apiBasUrl}/ticket/trans/managerTotalIncomePerDept`,{language,channel,fromDate,toDate})

   };
}
