import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // การประกาศตัวแปรแบบระบุประเภทตัวแปร
  isTrue: Boolean // ตัวแปรประเภทboolean
  prize: Number // ตัวแปรประเภทnumber
  name: string // ตัวแปรประเภทstring
  product: object // ตัวแปรประเภทobject
  lists: string[] // ตัวแปรประเภทstringในarray
  any // ตัวแปรประเภทไม่ได้กำหนด

  // ตัวแปรไว้ใช้ในวิธีแบบAngular
  inputValue_Angular: String // ตัวแปรรับจากinput
  lists_Angular: String[] // Arrayที่จะใช่เก็บเป็นlist

  constructor() {
    // ตัวอย่าง การประกาศตัวแปรแบบระบุประเภทตัวแปร
    this.isTrue = true
    this.prize = 12
    this.name = "สวัสดี"
    this.product = {name: "HTML", description: "ภาษาเว็บ"}
    this.lists = ["hello", "welcome"]
    this.any = [ // ตัวอย่างตัวแปรแบบobjectในarray
      {language: "English", score: 123, isHard: true},
      {language: "Thai", score: 223, isHard: false},
    ]

    this.lists_Angular = [
      "list แรกฝั่ง Angular"
    ]
  }



  // วิธีเปิดconsoleดูค่า ให้ใช่ console.log(ตัวแปร)
  // เปิดconsoleได้ที่ browser โดยการกดคลิกขวาแล้วinspect
  logInConsole() {
    console.log( this.isTrue)
    console.log( this.prize)
    console.log( this.name)
    console.log( this.product)
    console.log( this.lists)
    console.log( this.any )
  }

  // วิธีแบบjavascriptปกติ
  // function ที่ปุ่มใส่เรียกใช้
  addTodo_normalJavascript() {
    // รับค่า
    let inputText = (<HTMLInputElement>document.getElementById("inputBlock")).value;
    // สร้างบลอก
    const addDivBlock = document.createElement('div');
    addDivBlock.classList.add("card-normaljs")  // เนื่องด้วยวิธีนี้เป็นjavascriptปกติ ไม่ได้ผ่านangular classจึงถูกดึงมาใช้จากglobal.scss
    addDivBlock.innerHTML = inputText;
    // เอาบล๊อกใส่container
    const containerBlock = document.getElementById('container-normaljs');
    containerBlock.appendChild(addDivBlock)
  }

  // วิธีแบบAngular
  // function ที่ปุ่มเพิ่มเรียกใช้
  addTodo_angular = function() {
    // array.push(ตัวแปร) คือการใส่ตัวแปรไปต่อตัวท้ายสุดในarray
    this.lists_Angular.push(this.inputValue_Angular)
  }
  
  // function ที่ngIfเรียกใช้
  isLongWord = function(word) {
    if (word.length >= 10) { // ถ้าwordมากกว่า10ตัวอักษร
      return true
    } else {
      return false
    }
  }
  
}
