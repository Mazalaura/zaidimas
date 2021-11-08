import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-uzdaviniai',
  templateUrl: './uzdaviniai.component.html',
  styleUrls: ['./uzdaviniai.component.css']
})
export class UzdaviniaiComponent implements OnInit {

  public uzdaviniai;
  public au:number=0;
  public teisingi:number=0;
  public viso:number=0;
  public pabaiga=false;
  public cdObservable:Observable<number>;
  public laikas:number;
  private subscription:Subscription;


  constructor(private dataService:DataService) { }

  private createCountdownObservable(){
    this.cdObservable=new Observable((observer)=>{
      let count:number=15;        
      setInterval(()=>{
        if(count<0){
          observer.complete();
        }else {
          observer.next(count);
        }
        count--;
      }, 1000);
    });
  }

  private startCountDown(){
    this.createCountdownObservable();
    this.subscription=this.cdObservable.subscribe((count:number)=>{
      console.log(count);
      this.laikas=count;      
    }, ()=>{}, ()=>{
      this.spejimas(-1);
      console.log(this.au, this.viso);
      if(!this.pabaiga){
        this.startCountDown();
      }
    });
  }


  ngOnInit(): void {
    this.uzdaviniai=this.dataService.uzdaviniai;
    this.viso=this.uzdaviniai.length;
    this.startCountDown();
  }
  // refresh(): void {    
  //   this.au=0;
  //   this.teisingi=0;
  //   this.pabaiga=false;
  //   this.startCountDown();
  // }

  spejimas(skaicius:number){
    
    if(this.uzdaviniai[this.au].atsakymas==skaicius){
      this.teisingi++;
    }
    if(this.au<this.viso-1){
      this.au++;
    } else {
      this.pabaiga=true;
    }
    if(skaicius!=-1){
      this.subscription.unsubscribe();
      if(!this.pabaiga){
        this.laikas=15;
        this.startCountDown();
      }
    }
  }
}
