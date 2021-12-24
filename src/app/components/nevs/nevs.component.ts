import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nevs',
  templateUrl: './nevs.component.html',
  styleUrls: ['./nevs.component.css']
})
export class NevsComponent implements OnInit {
 
 //定义数据
  public title='我是title';
  msg='我是msg';//默认public
  public username:string='张三';//指定类型

  public student:any='我是一个学生的属性';

  public userinfo:any={
    username:'张三',
    age:'20',
  };

  public message:any;

//定义 数组
public arr=['111','222','333'];

public list:any[]=['我是第一个新闻','2222222','我是第二条新闻'];


  constructor() {
    this.message='这是给属性赋值';
  }

  ngOnInit(): void {
  }

}

//声明属性的方式：
// public      共有（默认）   可以在这个类里面使用，也可以在类外使用
// protected   保护类型       他只有在当前类和它的子类里面可以访问
// private     私有           只有在当前类才可以访问这个属性
