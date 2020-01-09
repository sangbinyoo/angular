import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Document } from './documents';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class TextService {

  private docUrl =  'api/documents';

  constructor(
    private http: HttpClient,
    private messageService: MessageService  ) { }

  getTexts(): Observable<Document[]> {
    return this.http.get<Document[]>(this.docUrl)
    .pipe(
      tap(_ => this.log('fetched Docs.')),
      catchError(this.handleError<Document[]>('getDocuments', []))
    );
  }

  getText(id: number): Observable<Document> {
    const url = `${this.docUrl}/${id}`;
    return this.http.get<Document>(url).pipe(
      tap(_ => this.log(`fetched doc id=${id}`)),
      catchError(this.handleError<Document>('getDoc id=${id}'))
    );
  }

  getTableData(): Observable<any> {
    const urlt = `api/tables`;
    return this.http.get<any>(urlt);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`DocService: ${message}`);
  }




}
