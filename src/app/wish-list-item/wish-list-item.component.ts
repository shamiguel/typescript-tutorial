import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})

export class WishListItemComponent implements OnInit {

  @Input() wishText! : string; //no need to supply a value here, the parent takes care of that 
                               // a ! at the end of a variable means non null assertion operator
                              // this wishText is a non null property, its a trick for the compiler (the compiler would yell at us)

  @Input() fulfilled! : boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();


  get cssClass(){
    //return this.fulfilled ? ['strikeout','text-muted' ]: [];
    return {'strikeout text-muted' : this.fulfilled}
  }

  ngOnInit(): void {
    
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled
    this.fulfilledChange.emit(this.fulfilled)
  }
}
