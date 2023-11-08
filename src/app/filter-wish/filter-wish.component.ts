import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item : WishItem) => item, 
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'filter-wish',
  templateUrl: './filter-wish.component.html',
  styleUrls: ['./filter-wish.component.css']
})

export class FilterWishComponent implements OnInit{
  @Input() filter: any;

  @Output() filterChange = new EventEmitter<any>();
  constructor() {};
  
  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter : any = '0';

  changeFilter(value : any){
    this.filter.emit(filters[value]);
  }
}
