import { Injectable, OnInit } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Params
} from '@angular/router';
import { catchError, concatMap, Observable, of, tap } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterResolver implements Resolve<any> {
  

  constructor(private characterService: RequestService, private  router: Router, public activatedRoute: ActivatedRoute) { }
  

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    let exists: boolean = false;
    let characters : any[] = [];
    let paramName = route.queryParams['name'];
    
    //console.log('resolver***** ',route);

    /*
    return of({
      message: 'Hola desde Resolver'
    });*/

    
    return this.characterService.getCharacters()
      .pipe(
        tap((res : any) =>{
          characters = res.results          
          console.log(typeof  characters)
          characters.forEach(character =>{
            console.log(character['id'],'-',character['name'])
              if(paramName.toLowerCase() === character['name'].toLowerCase()){
                console.log(character['name'], ' coincide****')
                exists = !exists;
              }
          }                    
          )          
          
        }),
        concatMap( (res:any) =>{    
          if(exists === false){            
            throw {
              status: 404
            };
          }      
          console.log('exits',exists)
          return this.characterService.getCharacter(paramName);
        }
        ),
        catchError((err:any) =>{
          if(err.status === 404){
            this.router.navigate(['404'])
          }
          console.error('AAA',err)
          return of(err);
        }
        )
      )
    ;
  }
}
