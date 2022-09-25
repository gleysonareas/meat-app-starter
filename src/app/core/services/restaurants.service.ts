import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
//import { ErrorHandler } from '../app.error-handler';

import { RestaurantModel } from "../../shared/models/restaurant.model"
import { MenuItemModel } from "../../shared/models/menu-item.model"
import { MEAT_API } from '../../app.api';

@Injectable()

export class RestaurantsService {

    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<RestaurantModel[] | undefined> {
        let params: HttpParams = {} as HttpParams;
        if (search) {
            params = new HttpParams()
                .set('q', search)
        }
        return this.http.get<RestaurantModel[]>(`${MEAT_API}/restaurants`, { params: { params: params as any } }) as any;
        //.map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<RestaurantModel> {
        return this.http.get<RestaurantModel>(`${MEAT_API}/restaurants/${id}`)
        //.map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        //.map(response => response.json())
        //.catch(ErrorHandler.handleError)

    }

    menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
        return this.http.get<MenuItemModel[]>(`${MEAT_API}/restaurants/${id}/menu`) //métódo<nome tipo> dessa forma é feita a tipagem do objeto que espera-se receber na consulta http
        //.map(response => response.json()) Não será mais utilizado dessa forma
        //.catch(ErrorHandler.handleError) Não será mais utilizado dessa forma
    }
}