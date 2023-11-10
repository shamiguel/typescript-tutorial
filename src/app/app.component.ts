import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items : WishItem[] = [
    new WishItem("To Learn Angular"), 
    new WishItem("To Learn TypeScript"),
    new WishItem("To Create a great Angular App!!!"),
    new WishItem("Get Coffee", true) 
  ]


  constructor(){
    events.listen('removeWish', (wish)=>{
      //todo remove wish from items
      console.log(wish)
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1)
    })
  }
  title = 'Wish List';
  filter: any;

  //Observer Pattern/Observable Object
}
