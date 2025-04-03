import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface toastr{
  message:string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private toastrSubject = new BehaviorSubject<toastr [] | null>(null);
  toastrState$ = this.toastrSubject.asObservable();
  toastrStack:toastr[] = []
  cnt = 0
  showToastr(message: string, type: 'success' | 'error' | 'info' | 'warning') {
    this.toastrStack.push({message, type})
    this.cnt++;
    this.toastrSubject.next(this.toastrStack);
    
    
      setTimeout(() => {

        // this.toastrStack = this.toastrStack.filter((_,idx)=> idx !=this.toastrStack.length)
        this.toastrStack.splice(this.cnt, 1)
        this.toastrSubject.next([...this.toastrStack]);
      }, 3000);

    // Automatically hide the toast after 3 seconds
    // setTimeout(() => {
    //   this.toastrStack.forEach((item,index)=>{
       
    //   })
    // }, 3000);

    
  }

}
