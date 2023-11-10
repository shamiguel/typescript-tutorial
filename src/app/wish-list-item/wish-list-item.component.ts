import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from './../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})

export class WishListItemComponent implements OnInit {

  @Input() wish! : WishItem; //no need to supply a value here, the parent takes care of that 
                             // a ! at the end of a variable means non null assertion operator
                             // this wishText is a non null property, its a trick for the compiler (the compiler would yell at us)


  get cssClass(){
    //return this.fulfilled ? ['strikeout','text-muted' ]: [];
    return {'strikeout text-muted' : this.wish.isComplete}
  }

  ngOnInit(): void {
    
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete
    //this.wish.isComplete.emit(this.this.wish.isComplete)
  }

  removeWish(){
    events.emit('removeWish', this.wish.wishText);
  }

}
