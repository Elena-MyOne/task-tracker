import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRemainder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}  

  ngOnInit(): void {}

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleRemainder.emit(task);
  }
}
