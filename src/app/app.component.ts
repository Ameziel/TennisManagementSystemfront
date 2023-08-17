import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TennisManagementSystemfront';
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