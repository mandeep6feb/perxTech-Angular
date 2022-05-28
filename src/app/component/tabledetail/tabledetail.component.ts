import { Component, OnInit } from '@angular/core';
import * as mydata from '../../mydata.json';
@Component({
  selector: 'app-tabledetail',
  templateUrl: './tabledetail.component.html',
  styleUrls: ['./tabledetail.component.scss']
})
export class TabledetailComponent implements OnInit {
  displayedColumns: string[] = ['Id','Type','Link','Display','Display Image','Content','Authors','Publishers'];
  tableJson = mydata;
  dataSource: any = [];
  filter: any = [];
  sortData: boolean = false;
  showFiller = true;
  constructor() { 
  }

  ngOnInit(): void {
    this.sortDa(false, 'id')
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    let finalData = this.tableJson.data.filter((it:any) => 
    it.attributes.content.includes(filterValue) || 
    it.attributes.display_properties.type.includes(filterValue)
    ).map( (ol: any) => {
      return ol;
    })
    this.dataSource = finalData
  }
  sortDa = async(check:Boolean, type: any) => {
    if(check == true) {
      let filterData = await this.tableJson.data.sort((n1:any,n2:any) => n2[type] - n1[type])
      this.sortData = true;
      this.dataSource = filterData
    } 
    if(check == false){
      let filterData = await this.tableJson.data.sort((n1:any,n2:any) => n1[type] - n2[type]).filter( (item:any )=> item.id > 0);
      this.sortData = false;
      this.dataSource = filterData
    }
    
  }
}
