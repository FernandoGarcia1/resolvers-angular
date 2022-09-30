import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, concatMap, Observable, of, tap } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterResolver implements Resolve<any> {

  constructor(private characterService: RequestService, private  router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    //console.log('resolver***** ',route);

    /*
    return of({
      message: 'Hola desde Resolver'
    });*/
    return this.characterService.getCharacters()
      .pipe(
        tap((res) =>{
          console.log('Tap',res);
        }),
        concatMap( (res:any) =>{
          return this.characterService.getCharacter(res.results[6].name);
        }
        ),
        catchError((err:any) =>{
          if(err.status === 404){
            this.router.navigate(['404'])
          }
          console.error(err)
          return err;
        }
        )
      )
    ;
  }
}
