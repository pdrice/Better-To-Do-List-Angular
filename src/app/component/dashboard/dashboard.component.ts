import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/task';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos:Todo[];
  inputTodo:string = '';
  
    constructor() { }
  
    ngOnInit(): void {
      
      this.todos = [
        {
      content:'',
      completed:false
      },
      ]

      if(this.todos[0]){
        this.todos = this.todos.filter((v,i)=>i !==0);
      }
    }
  
  
    toggleDone(id){
      this.todos.map((v,i)=>{
        if (i===id) v.completed = !v.completed;
        return v;
      })
  
      
      
    }
  
    onDelete(id:number){
  
        this.todos = this.todos.filter((v,i)=>i !==id);
    
      }
  
      addTodo(){
        this.todos.push({
          content: this.inputTodo,
          completed:false
        })
        console.log(this.inputTodo);
        
        this.inputTodo = ''
      }
  
}
