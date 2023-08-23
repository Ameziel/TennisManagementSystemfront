import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TennisManagementSystemfront';

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => matches),
      shareReplay(),
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

/**
 *
 * app
 *  - shared (partagée: composants réutilisable dans n'importe quel module etc)
 *
 *  https://angular.io/cli/generate#module-command generer les modules avec les routes =>
 *
 *  - cours (module coursModule) (...)
 *  - moniteurs (..) <- composant qui affiche uniquement un ou plusieurs moniteurs
 *  - eleves  (..) <- formulaire pour un eleve etc  etc
 *
 *
 * git checkout -b feat/layout
 * git commit -m "mon message"
 *
 * git push
 */
