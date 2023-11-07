import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
   /*  new WishItem("To Learn Angular"), 
    new WishItem("To Learn TypeScript"),
    new WishItem("To Create a great Angular App!!!"),
    new WishItem("Get Coffee", true) */ 
  ]
  title = 'Wish List';
  
  toggleItem(item: WishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }

  newWishText = "";

  addNewWish(){
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = '';
  }
}
