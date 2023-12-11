import { Component,ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
@ViewChild('myInput') myInput!:ElementRef;
myfunction(){
  console.log(this.myInput.nativeElement.value);
}
}
