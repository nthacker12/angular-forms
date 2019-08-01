import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    const url = 'https://putsreq.com/OnVuEO0IJXkXVoltk4n3';

    return this.http.post(url, userSettings);
  }
}
