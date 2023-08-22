import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Moniteur} from "../models/moniteur.model";

@Injectable({
  providedIn: 'root'
})
export class MoniteursService {

  constructor(private http: HttpClient) {
  }

  public getAllMoniteurs(): Observable<Array<Moniteur>> {
    return this.http.get<Array<Moniteur>>(environment.backendHost + "/moniteurs")
  }

  public searchMoniteurByName(keyword: string): Observable<Array<Moniteur>> {
    return this.http.get<Array<Moniteur>>(environment.backendHost + "/moniteurs/search?keyword=" + keyword)
  }

  public getMoniteurById(id: string): Observable<Moniteur> {
    return this.http.get<Moniteur>(environment.backendHost + "/moniteurs/" + id);
  }

  public updateMoniteur(moniteur: Moniteur): Observable<Moniteur> {
    return this.http.put<Moniteur>(environment.backendHost + "/moniteurs/" + moniteur.id, moniteur);
  }

  public saveMoniteur(moniteur: Moniteur): Observable<Moniteur> {
    return this.http.post<Moniteur>(environment.backendHost + "/moniteurs", moniteur);
  }

  public deleteMoniteur(id: string) {
    return this.http.delete(environment.backendHost + "/moniteurs/" + id);
  }

}
