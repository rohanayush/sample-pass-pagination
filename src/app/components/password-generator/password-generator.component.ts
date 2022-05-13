import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Choices } from './model/choices';
@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {

  // @ViewChild("check") chk1: ElementRef;
  // check 
  password='Your passwords and errors go here';

  lowerCase=[]
  upperCase=[]
  numbers=[]
  specials=[]
  ar=[];
  // custom backgroun based on error or password
  bg="cadetblue"
  choices:Choices={
    length:8,
    alphabets:false,
    numbers:false,
    special:false
    
  };

  constructor() {
    this.lowerCase= this.generateArray(97,122);
    this.upperCase= this.generateArray(65,90);
    this.numbers= this.generateArray(48,57);
    this.specials= this.generateArray(33,47).concat(
      this.generateArray(58,64)).concat(
        this.generateArray(91,96)
      ).concat(
        this.generateArray(123,126)
      );


      console.log(this.specials)
   }
   

  generateArray(low,high){
       var arr=[]
       for(var i=low; i<= high;i++){
         arr.push(i);
       }
       return arr;
  }
  ngOnInit(): void {
  }
  
  // For better mixture of password
  shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  generatePassword() {
    this.ar=[]
       if(this.choices.length<8 || this.choices.length>30){
         this.password="Please make sure your password length is greater than 7 and less than 31";
         this.bg='orangered';
       }
       else if(this.choices.length>=8 && this.choices.length<=30 ){
        
         if(this.choices.alphabets || this.choices.numbers || this.choices.special ){
           this.bg='cadetblue';
               if(this.choices.alphabets) {
                 if(this.ar.length ===0){
                   this.ar=this.upperCase;
                   this.ar=this.ar.concat(this.lowerCase);
                 }
                 else if(this.ar.length !=0){
                this.ar=  this.ar.concat(this.lowerCase).concat(this.upperCase);
                 }
                 
               }
               
              if(this.choices.numbers) {
                if(this.ar.length ===0){
                  this.ar=this.numbers;
                }
                else if(this.ar.length !=0){
                  this.ar=  this.ar.concat(this.numbers);
                }
              }
              if(this.choices.special) {
                if(this.ar.length ===0){
                  this.ar=this.specials;
                }
                else if(this.ar.length !=0){
                  this.ar=   this.ar.concat(this.specials);
                }
              }
              this.ar=this.shuffle(this.ar);
              // alert(this.ar)
              const password=[]
              for(var i=0; i< this.choices.length;i++){
                const chars=this.ar[Math.floor(Math.random()*this.choices.length)]
                password.push(String.fromCharCode(chars));
              this.ar=this.shuffle(this.ar);

              }
              this.password= password.join("");
              console.log("password made is ",this.password)

         }
         else{
          this.password ="Please check atleast one of the choices to generate a password";
          this.bg="orange";
         }
       }
  }
}
