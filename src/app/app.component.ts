import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';


const filters = [
  (item : WishItem) => item, 
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

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
  listFilter : any = '0';

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter])
  };

  title = 'Wish List';
  
  filterChanged(value:any){
    console.log(value);
  }
}
