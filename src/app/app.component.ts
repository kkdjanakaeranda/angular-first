import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  count = 0;
  number="even";


  public increment() {
    this.count += 1;
    if (this.count % 2 == 0){
      this.number = "even"
    }
    else {
      this.number = "odd"
    }
  }

  // public check_odd_even(){
  //   if (this.count % 2 == 0){
  //     this.number = "even"
  //   }
  //   else {
  //     this.number = "odd"
  //   }
  // }
  public result='';
  public h=0;
  public w=0;

  public calculateBMI() {

  }
}
