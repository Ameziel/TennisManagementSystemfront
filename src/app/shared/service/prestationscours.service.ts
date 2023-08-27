import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environments";
import {PrestationCours} from "../models/prestationCours";

@Injectable({
  providedIn: 'root'
})
export class PrestationscoursService {
  constructor(private http: HttpClient) {
  }

  public getAllPrestationsCours(): Observable<Array<PrestationCours>> {
    return this.http.get<Array<PrestationCours>>(environment.backendHost + "/prestationscours")
  }

  public getPrestationCoursById(id: string): Observable<PrestationCours> {
    return this.http.get<PrestationCours>(environment.backendHost + "/prestationscours/" + id);
  }

  public updatePrestationCours(prestationCours: PrestationCours): Observable<PrestationCours> {
    return this.http.put<PrestationCours>(environment.backendHost + "/prestationscours/" + prestationCours.id, prestationCours);
  }

  public savePrestationCours(prestationCours: PrestationCours): Observable<PrestationCours> {
    return this.http.post<PrestationCours>(environment.backendHost + "/prestationscours", prestationCours);
  }

  public deletePrestationCours(id: string) {
    return this.http.delete(environment.backendHost + "/prestationscours/" + id);
  }
}
