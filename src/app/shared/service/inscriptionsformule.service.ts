import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environments";
import {InscriptionFormule} from "../models/inscriptionFormule";

@Injectable({
  providedIn: 'root'
})
export class InscriptionsformuleService {

  constructor(private http: HttpClient) {
  }

  public getAllInscriptionsFormule(): Observable<Array<InscriptionFormule>> {
    return this.http.get<Array<InscriptionFormule>>(environment.backendHost + "/inscriptionsformule")
  }

  public getInscriptionFormuleById(id: string): Observable<InscriptionFormule> {
    return this.http.get<InscriptionFormule>(environment.backendHost + "/inscriptionsformule/" + id);
  }

  public updateInscriptionFormule(inscriptionFormule: InscriptionFormule): Observable<InscriptionFormule> {
    return this.http.put<InscriptionFormule>(environment.backendHost + "/inscriptionsformule/" + inscriptionFormule.id, inscriptionFormule);
  }

  public saveInscriptionFormule(inscriptionFormule: InscriptionFormule): Observable<InscriptionFormule> {
    return this.http.post<InscriptionFormule>(environment.backendHost + "/inscriptionsformule", inscriptionFormule);
  }

  public deleteInscriptionFormule(id: string) {
    return this.http.delete(environment.backendHost + "/inscriptionsformule/" + id);
  }
}
