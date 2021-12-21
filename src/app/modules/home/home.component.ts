import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterFlightComponent } from 'src/app/components/register-flight/register-flight.component';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['location', 'arrival', 'output', 'passengers','pilot','options'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,

    private _serviceFlight: FlightsService
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights = () => {
    let flight: any = this._serviceFlight.getFlights();
    this.dataSource = new MatTableDataSource<{
      location: string;
      arrival: string;
      output: string;
      passengers: number;
      pilot: string;
    }>(flight);
  }

  registerFlight = () => {
    const dialogRef = this.dialog.open(RegisterFlightComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getFlights();
    });
  }

  modFlight = (element: any) => {
    const dialogRef = this.dialog.open(RegisterFlightComponent, {
      width: '250px',
      data: {
        element: element
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getFlights();
    });
  }

  delFlight = (id: number) => {
    this._serviceFlight.removeFlights(id);
    this.getFlights();
  }
}
