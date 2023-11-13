import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent {
  items : WishItem[] = [];

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any) => {
      this.items = data;
    },
      (error: any) => {
        alert(error.message);
      }
    )
  }

  constructor(events: EventService, private wishService: WishService){
    events.listen('removeWish', (wish)=>{
      console.log(wish)
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1)
    })
  }

  filter: any;

}
