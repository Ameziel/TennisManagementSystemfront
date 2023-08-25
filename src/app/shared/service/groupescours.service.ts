import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environments";
import {GroupeCours} from "../models/groupeCours";

@Injectable({
  providedIn: 'root'
})
export class GroupescoursService {

  constructor(private http: HttpClient) {
  }

  public getAllGroupesCours(): Observable<Array<GroupeCours>> {
    return this.http.get<Array<GroupeCours>>(environment.backendHost + "/groupescours")
  }

  public getGroupeCoursById(id: string): Observable<GroupeCours> {
    return this.http.get<GroupeCours>(environment.backendHost + "/groupescours/" + id);
  }

  public saveGroupeCours(groupeCours: GroupeCours): Observable<GroupeCours> {
    return this.http.post<GroupeCours>(environment.backendHost + "/groupescours/" + groupeCours.id, groupeCours);
  }

  public updateGroupeCours(groupeCours: GroupeCours): Observable<GroupeCours> {
    return this.http.put<GroupeCours>(environment.backendHost + "/groupescours", groupeCours);
  }

  public deleteGroupeCours(id: string) {
    return this.http.delete(environment.backendHost + "/groupescours/" + id);
  }
}
