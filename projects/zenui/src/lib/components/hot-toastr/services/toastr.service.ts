import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface toastr{
  id: any,
  message:string,
  type: string,
  duration?:number
}

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private toastrSubject = new BehaviorSubject<toastr [] | null>(null);
  toastrState$ = this.toastrSubject.asObservable();
  toastrStack:toastr[] = []
  async showToastr(message: string, type: 'success' | 'error' | 'info' | 'warning', duration: number = 3000) {
    console.log('data',Date.now())
    let currentId = Date.now();
    this.toastrStack.push({ id:currentId, message,type,duration});
    this.toastrSubject.next(this.toastrStack);
    await new Promise((res,rej)=>{
      setTimeout(() => {
        console.log('current id', currentId)
        this.toastrStack = this.toastrStack.filter((data,idx)=> data.id !=currentId)
        this.toastrSubject.next([...this.toastrStack]);
        res('')
      }, duration);
    })
    

    // Automatically hide the toast after 3 seconds
    // setTimeout(() => {
    //   this.toastrStack.forEach((item,index)=>{
       
    //   })
    // }, 3000);

    
  }


  onRemoveToastr(currentId: number){
    this.toastrStack = this.toastrStack.filter((data,idx)=> data.id !=currentId);
    this.toastrSubject.next([...this.toastrStack]);
  }
}
