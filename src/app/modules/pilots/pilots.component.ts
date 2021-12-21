import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegisterPilotComponent } from 'src/app/components/register-pilot/register-pilot.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'age', 'years_experience','nationality','role','options',];
  dataSource: any;
  dataSources: any = [{}];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private _serviceAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.getPilot();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getPilot = () => {
    let users: any = this._serviceAuth.getUser();
    this.dataSource = new MatTableDataSource<{
      name: string,
      lastName: string,
      age: number,
      years_experience: number,
      nationality: string,
      role: string,
    }>(users)
  }

  registerPilot = () => {
    const dialogRef = this.dialog.open(RegisterPilotComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPilot();
    })

  }

  modPilot = (element: any) => {
    const dialogRef = this.dialog.open(RegisterPilotComponent, {
      width: '250px',
      data: {
        element: element
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPilot();
    });
  }

  delPilot = (id: number) => {
    this._serviceAuth.removeUser(id);
    this.getPilot();
  }
}
