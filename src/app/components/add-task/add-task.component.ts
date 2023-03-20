import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  errorMessageText: string = '';
  errorMessageDay: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    (!this.text) ? this.errorMessageText = 'Required field' : this.errorMessageText = '';
    (!this.day) ? this.errorMessageDay = 'Required field' : this.errorMessageDay = '';
    
    if (this.text && this.day) {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.onAddTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }

    return
  }
}
