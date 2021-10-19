import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from 'src/app/Task';
import { faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:any;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();

  faTimes=faTimesCircle;
  constructor() { }

  deleteHandler=(task:Task)=>{
    this.onDeleteTask.emit(task);
  }

  toggleReminderHandler=(task:Task)=>{
    this.onToggleReminder.emit(task)
  }
  ngOnInit(): void {
  }

}
