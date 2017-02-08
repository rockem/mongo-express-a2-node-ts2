import { Component } from '@angular/core';

@Component({
    selector: 'items-list',
    templateUrl: './app/items-list.html'
})
export class ItemsListComponent {
    name = 'Angular';
    items:Array<Item> = [new Item("Go to the bunk"), new Item("Get up early")];

}

export class Item {

    constructor(public title:string) {}
}
