import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c-signin',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './c-signin.component.html',
  styleUrl: './c-signin.component.css'
})
export class CSigninComponent implements OnInit {

  @ViewChild('login')
  ngForm!: NgForm;

  send() {

    this.login();
    this.ngForm.ngSubmit.emit();
  }


  mail : any ;
  mdp : any ;

  message : any ;

  constructor(private router : Router , private elementRef : ElementRef) { }

  ngOnInit(): void {

  }

  // ngAfterViewInit(){
  //   this.elementRef.nativeElement.ownerDocument
  //       .body.style.backgroundColor = '#000000';
  // }

  login(){

  }

}
