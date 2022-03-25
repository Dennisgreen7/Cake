import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {

  constructor() { }
  //cake: { cakeName: string, cakeType: string, tags: string } = { cakeName: '', cakeType: '', tags: '' };
  cake: any = {};
  isShown: boolean = false;
  isEmpty: boolean = false;
  isCarrot: boolean = false;
  ngOnInit(): void {
  }
  tagsArr:string[] = [];
  handleSumbit(formData: any) {
    this.cake = formData;
    if(this.cake.cakeType == 'Carrot'){
      this.isCarrot = !this.isCarrot;
    }
    this.isShown = !this.isShown;
    if(this.cake.tags.length! > 0) {
      this.tagsArr=this.cake.tags.split(",");
      this.isEmpty = !this.isEmpty;
    }
  }
}
