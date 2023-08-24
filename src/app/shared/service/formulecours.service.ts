import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Formulecours} from "../models/formulecours.model";
import {environment} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class FormulecoursService {

  constructor(private http: HttpClient) {
  }

  public getAllFormules(): Observable<Array<Formulecours>> {
    return this.http.get<Array<Formulecours>>(environment.backendHost + "/formulescours");
  }

  public getFormuleCoursById(id: string): Observable<Formulecours> {
    return this.http.get<Formulecours>(environment.backendHost + "/formulescours/" + id);
  }

  public updateFormuleCours(formulecours: Formulecours): Observable<Formulecours> {
    return this.http.put<Formulecours>(environment.backendHost + "/formulescours/" + formulecours.id, formulecours);
  }

  public saveFormuleCours(formulecours: Formulecours): Observable<Formulecours> {
    return this.http.post<Formulecours>(environment.backendHost + "/formulescours", formulecours);
  }

  public deleteFormuleCours(id: string) {
    return this.http.delete(environment.backendHost + "/formulescours/" + id);
  }
}
