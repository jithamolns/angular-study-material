import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  public name = 'Jitha';
  public str = '';
  public counter = 0;
  public evenOrOdd = 'even';
  public count = 0;

  ngOnInit(){

  }
  buttonGmgClick(){
    this.str = 'Good Morning';
  }
  buttonGftClick(){
    this.str = 'Good Afternoon';
  }
  customColor(){
    return "yellow";
  }

  
  functionEvenOrOdd(){
    if(this.counter%2 == 0){
      this.evenOrOdd = 'Even';       
    }else{
      this.evenOrOdd = 'Odd';
    }
  }
  functionIncrement(){
    this.counter+=1;
    this.functionEvenOrOdd();
  }
  functionDecrement(){
    this.counter-=1;
    this.functionEvenOrOdd();
  }

  functionNumber(){
    if(this.count % 2 == 0){
      this.evenOrOdd = 'Even';
    }else{
      this.evenOrOdd = 'Odd';
    }
  }
  

}

