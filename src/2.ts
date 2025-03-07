  import {Component} from '@angular/core';
@Component({
    selector: 'app-mathclass',
    templateUrl: './mathclass.component.html',
    styleUrls: ['./mathclass.component.css']
})
export class MathclassComponent {
    title = "MathClass";
    numbers = [1,2,3,4,5];
    evenNumbers = this.numbers.filter(num => num % 2 === 0);
    oddNumbers = this.numbers.filter(num => num % 2 !== 0);
    total = this.evenNumbers.reduce((acc,curr) => acc + curr, 0);
}