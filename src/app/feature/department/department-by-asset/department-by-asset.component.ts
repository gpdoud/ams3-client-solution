import { Component, OnInit } from '@angular/core';
import { SystemService } from '@system/system.service'
import { DepartmentService } from '@department/department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '@feat/vehicle/vehicle.service';
import { EquipmentService } from '@feat/equipment/equipment.service';
import { Vehicle } from '@feat/vehicle/vehicle';
import { Equipment } from '@feat/equipment/equipment';



@Component({
  selector: 'app-department-by-asset',
  templateUrl: './department-by-asset.component.html',
  styleUrls: ['./department-by-asset.component.css']
})
export class DepartmentByAssetComponent implements OnInit {
  pagetitle: string
  vehicles: Vehicle[] = [];
  equipments: Equipment[] = [];
   
  constructor(
    private departmentsvc: DepartmentService,
    private syssvc: SystemService,
    private route: ActivatedRoute, 
    private vs: VehicleService,
    private es: EquipmentService
  ) { }

  ngOnInit() {
  this.syssvc.checkLogin();
  let id = this.route.snapshot.params.id;
  this.pagetitle = this.route.snapshot.params.name;
  this.vs.list()
  .subscribe(resp => {
    let data = resp.data;
      for(let x in data){
        if(data[x] != null && data[x].asset.departmentId == id) {
        this.vehicles.push(data[x])
        }
      }
    });
  this.es.list()
  .subscribe(resp => {
    let info = resp.data;
      for (let y in info){
        if(info[y] != null && info[y].asset.departmentId == id){
          this.equipments.push(info[y])
        }
      }
    });
  }

}
