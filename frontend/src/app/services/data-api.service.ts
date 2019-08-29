import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

// Este es mi modelo
import { BookInterface } from './../models/book.interface';

const UrlApi = 'http://localhost:3000/api/books';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  books: Observable<any>;
  book: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'Application-json',
    Autorization: this.authService.getToken()
  });

  getAllBooks() {
    console.log('llamo todos lo libros desde controlador')
    return this.http.get(`${UrlApi}`);
  }

  getOpenLibra() {
    return this.http.get(`${UrlApi}/OpenLibra`);
  }

  getBookById(id: string) {
    console.log('consulto un libro - ' + id);
    return (this.book = this.http.get(`${UrlApi}/${id}`));
  }

  getOfertas() {
    return (this.books = this.http.get(`${UrlApi}/ofertas`));
  }

  saveBook(book: BookInterface) {
    const token = this.authService.getToken();
    return this.http.post<BookInterface>(`${UrlApi}?access_token=${token}`, book, { headers: this.headers})
    .pipe(map(data => data));
  }

  updateBook(book: BookInterface) {
    const token = this.authService.getToken();
    return this.http.put<BookInterface>(`${UrlApi}?access_token=${token}`, book, { headers: this.headers})
      .pipe(map(data => data));
  }

  deleteBook(id: string) {
    const token = this.authService.getToken();
    return this.http.delete(`${UrlApi}?access_token=${token}`, { headers: this.headers})
    .pipe(map(data => data));
  }
}
