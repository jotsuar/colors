import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private toastr: ToastrService, private _clipboardService: ClipboardService) { }

  page:number = 1;
  colorSelected:object = {};
  colors:[]   = [];

  ngOnInit() {
    this.listData()
  }

  callList(page:number)
  {
    this.page = page;
    this.colorSelected = {};
    this.listData();
    this.toastr.clear();
  }

  listData(){
    this.listService.getColors(this.page).subscribe((colors:any) => {
      this.colors = colors.data;
    })
  }

  selectColor(color:object){
    this.colorSelected = color;
    this.toastr.success('', color["color"]);
    this._clipboardService.copyFromContent(color["color"])
    setTimeout(() => {
      this.colorSelected = {}
    }, 3000);
  }

  copy(text: string){
    this._clipboardService.copyFromContent(text)
  }

}
