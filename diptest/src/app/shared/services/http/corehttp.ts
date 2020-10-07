import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';

// proto class for http connections
export class Httpcore {
    baseUrl:"http://dashboard.kholodov.xyz/api/";
    constructor(public http: HttpClient, public path: string){}
    
    private getUrl(url:string):string{
        return this.baseUrl + url;
    }

    private get(url:string): Observable<any>{
        try {
            return this.http.get(this.getUrl(url));
        } catch (error) {
            return error;
        }     
    }

    private post(url:string,data:any): Observable<any>{
        try {
            return this.http.post(this.getUrl(url),data);  
        } catch (error) {
            error;
        }
    }

    private put(url:string, data:any): Observable<any>{
        try {
            return this.http.put(this.getUrl(url),data);
        } catch (error) {
            return error;
        }
    }

    private delete(url:string):Observable<any>{
        try {
            return this.http.delete(this.getUrl(url));
        } catch (error) {
            return error;
        }
    }

    public getAll(): Promise<any[]>{
        return this.get(`${this.path}`).toPromise();
    }

    public getOneById(id:string):Promise<any>{
        return this.get(`${this.path} / ${id}` ).toPromise();
    }

    public postOne(data:any):Promise<any>{
        return this.post(`${this.path}`,data).toPromise();
    }

    public putOneById(id:number,data:any):Promise<any>{
        return this.put(`${this.path} / ${id}`, data).toPromise();
    }

    public deleteOneByid(id:number): Promise<any>{
        return this.delete(`${this.path}/ ${id}`).toPromise();
    }
}   