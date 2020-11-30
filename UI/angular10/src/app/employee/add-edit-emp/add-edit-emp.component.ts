import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  Id: string;
  Name: string;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  DepartmentsList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(): void {
    this.service.getAllDepartmentNames()
      .subscribe((data: any) => {
        this.DepartmentsList = data;
        this.Id = this.emp.Id;
        this.Name = this.emp.Name;
        this.Department = this.emp.Department;
        this.DateOfJoining = this.emp.DateOfJoining;
        this.PhotoFileName = this.emp.PhotoFileName;
        this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
        console.log('name', this.PhotoFileName)
        console.log('path', this.PhotoFilePath)
      });
  }

  addEmployee(): void {
    var val = {
      Id: this.Id,
      Name: this.Name,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };

    this.service.addEmployee(val)
      .subscribe(res => {
        alert(res.toString());
      });
  }

  updateEmployee(): void {
    var val = {
      Id: this.Id,
      Name: this.Name,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };

    this.service.updateEmployee(val)
      .subscribe(res => {
        alert(res.toString());
      });
  }

  uploadPhoto(event: any): void {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

}

