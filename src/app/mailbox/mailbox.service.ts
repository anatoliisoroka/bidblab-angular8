import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

let Mails = [
];
  
@Injectable({
    providedIn: 'root'
})
export class MailboxService {

    constructor(
      public httpClient:HttpClient
    ) { }

    sendMessage(body) {
        return this.httpClient.post(
          `${environment.apiUrl}/api/common/sendMessage`,
          body
        );
    } 

    archiveMessage(body) {
        return this.httpClient.post(
          `${environment.apiUrl}/api/common/archiveMessage`,
          body
        );
    } 
    
    getMails(limit?, offset?, search?, type?, active?, direction?): Observable<any>  {
        return this.httpClient.get<any>(
          `${environment.apiUrl}/api/common/getMails?limit=${limit ||
            10}&offset=${offset || 0}&search=${search || ''}&type=${type ||
            ''}&active=${active || ''}&direction=${direction || ''}`
        );
    }

    applyRoleOfMails(body, roleType, apply){
        return this.httpClient.post(
            `${environment.apiUrl}/api/common/applyRoleOfMails/${roleType}/${apply}`,
            body
        );
    }

    public getMail(id: number | string) {
        return Mails.find(mail => mail.id === +id);
    }
}