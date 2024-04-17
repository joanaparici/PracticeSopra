import { Injectable } from '@angular/core';
import {
  type HttpRequest,
  HttpHandler,
  type HttpEvent,
  type HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, type Observable } from 'rxjs';
import * as moment from 'moment';
import { Product } from 'src/app/modules/home/models/product';

@Injectable()
export class DateFormatInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          const products: Product[] = event.body;

          products.forEach((product) => {
            product.reviews?.forEach((review) => {
              if (typeof review.date === 'string') {
                const date = moment(review.date, 'DD-MM-yyyy HH:mm');
                console.log(date.format('DD-MM-yyyy HH:mm'));
                review.date = date.toDate();
              }
            });
          });
          return event;
        }
        return event;
      }),
    );
  }
}
