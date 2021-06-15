import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
//import { ErrorHandler } from '../app.error-handler';

import { IRestaurantModel } from "../interfaces/restaurant-model.interface"
import { IMenuItemModel } from "../interfaces/menu-item-model.interface"
import { MEAT_API } from '../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class RestaurantsService {

    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<IRestaurantModel[]> {
        let params: HttpParams = undefined
        if (search) {
            params = new HttpParams()
                .set('q', search)
        }
        return this.http.get<IRestaurantModel[]>(`${MEAT_API}/restaurants`,{ params: { params: params }})
        //.map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<IRestaurantModel> {
        return this.http.get<IRestaurantModel>(`${MEAT_API}/restaurants/${id}`)
        //.map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        //.map(response => response.json())
        //.catch(ErrorHandler.handleError)

    }

    menuOfRestaurant(id: string): Observable<IMenuItemModel[]> {
        return this.http.get<IMenuItemModel[]>(`${MEAT_API}/restaurants/${id}/menu`) //métódo<nome tipo> dessa forma é feita a tipagem do objeto que espera-se receber na consulta http
        //.map(response => response.json()) Não será mais utilizado dessa forma
        //.catch(ErrorHandler.handleError) Não será mais utilizado dessa forma
    }
}