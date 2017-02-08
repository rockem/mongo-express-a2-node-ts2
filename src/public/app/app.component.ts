import {Component} from '@angular/core';
import {ItemsListComponent} from './items-list.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
    <item-adder></item-adder>
    <items-list></items-list>`
})
export class AppComponent {
    name = 'Angular';
}
