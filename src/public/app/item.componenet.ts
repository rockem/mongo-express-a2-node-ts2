import {Component, Input} from '@angular/core';
import {Item} from "./items-list.component";

@Component({
    selector: 'item',
    templateUrl: './app/item.html'
})
export class ItemComponent {

    @Input()
    item: Item;
}
