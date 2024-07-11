import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef,GridApi,GridReadyEvent } from 'ag-grid-community';
@Component({
  selector: 'app-ag-grid-use',
  templateUrl: './ag-grid-use.component.html',
  styleUrls: ['./ag-grid-use.component.css']
})
export class AgGridUseComponent implements OnInit {

  private gridApi!: GridApi<any>;

  userList: any []=[];

  public rowSelection: 'single' | 'multiple' = 'multiple';
  colDefs: ColDef[] = [
    { field: "id", headerName:'Story Id',headerCheckboxSelection: true, checkboxSelection: true,
      cellRenderer:(item:any)=>{
        return "EMP-"+ item.value
      }
    },
    { field: "by", headerName: 'Name',filter:'agTextColumnFilter' },
    { field: "descendants", headerName:'User Name' },
    { field: "kids" ,headerName:'kids', editable: true},
    { field: "score" ,headerName:'score', editable: true},
    { field: "time" ,headerName:'time', editable: true},
    { field: "title" ,headerName:'title', editable: true},
    { field: "type" ,headerName:'type', editable: true},
    { field: "url" ,headerName:'url', editable: true},
   
  ];

  defaultColDef = {
    flex:1,
    minWdith:100
  }

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.getUser();
  }
  onGridReady(event: GridReadyEvent<any>) {
    this.gridApi = event.api;
  }

  onBtExport() {
    this.gridApi.exportDataAsCsv();
  }

  getUser() {
    this.http.get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty').subscribe((res:any)=>{
      this.userList =  res;
    })
  }
}
