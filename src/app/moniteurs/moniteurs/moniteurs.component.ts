import {Component} from '@angular/core';
import {MoniteursService} from "../../shared/service/moniteurs.service";

@Component({
  selector: 'app-moniteurs',
  templateUrl: './moniteurs.component.html',
  styleUrls: ['./moniteurs.component.css']
})
export class MoniteursComponent {
  displayedColumns: string[] = ["nom","prenom","email","telephone", "qualification", "edit"];
  // dataSource: MatTableDataSource<Eleve>;
  readonly moniteurs$ = this.moniteurService.getAllMoniteurs();


  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private moniteurService : MoniteursService) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.eleves);
  }


  ngAfterViewInit() {
    // @ts-ignore
    // this.dataSource.paginator = this.paginator;
    // @ts-ignore
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    //   // if (this.dataSource.paginator) {
    //   //   this.dataSource.paginator.firstPage();
    // }
  }
}
