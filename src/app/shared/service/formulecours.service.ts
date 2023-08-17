import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Formulecours} from "../models/formulecours.model";

@Injectable({
  providedIn: 'root'
})
export class FormulecoursService {

  constructor(private http: HttpClient) { }

  public getAllFormules():Observable<Array<Formulecours>> {
      return this.http.get<Array<Formulecours>>(environment.backendHost + "/formulecours");
    }

  public getFormuleCoursById(id : string) : Observable<Formulecours> {
      return this.http.get<Formulecours>(environment.backendHost + "/formulecours/" + id);
    }

  public updateFormuleCours(formulecours : Formulecours) : Observable<Formulecours> {
      return this.http.put<Formulecours>( environment.backendHost + "/formulecours/" + formulecours.id, formulecours);
    }

  public saveFormuleCours(formulecours : Formulecours):Observable<Formulecours> {
      return this.http.post<Formulecours>( environment.backendHost + "/formulecours", formulecours);
    }

  public deleteFormuleCours(id : string){
      return this.http.delete( environment.backendHost + "/formulecours/" + id);
    }
}
