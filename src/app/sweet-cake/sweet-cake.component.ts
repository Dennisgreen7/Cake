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
  cheaseCakeImg: string = "https://s3-us-west-2.amazonaws.com/melingoimages/Images/15662.jpg";
  chocolateCakeImg: string = "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/109778.jpg?output-format=auto&output-quality=auto&resize=600:*";
  carrotCakeImg: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW4GGM6NFKasNOH-kpOHmMvj3FyhfTWMibQ&usqp=CAU";
  isShown: boolean = false;
  isEmpty: boolean = false;
  isCarrot: boolean = false;
  ngOnInit(): void {
  }
  tagsArr: string[] = [];
  handleSumbit(formData: any) {
    this.cake = formData;
    if (this.cake.cakeType == 'Carrot') {
      this.isCarrot = true;
    }
    else {
      this.isCarrot = false;
    }
    this.isShown = !this.isShown;
    if (this.cake.tags.length! > 0) {
      this.tagsArr = this.cake.tags.split(",");
      this.isEmpty = true;
    }
    else {
      this.isEmpty = false;
    }
  }
}
