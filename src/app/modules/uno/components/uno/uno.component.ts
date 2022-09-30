import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent {


  public character$!: Observable<any>;
  constructor(private activeRoute: ActivatedRoute) { 
    this.character$ = this.activeRoute.data.pipe(
      tap(console.log)  
    );
    
  }
/*
  ngOnInit(): void {
    
    console.log('In component')
    this.activeRoute.data.subscribe({
      next: (resp) => {
        console.log('Uno component: ', resp);
      }
    }
    )
  
  }
  */
}
