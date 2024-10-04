import { IUser } from './../../interfaces/user/user.interface';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  displayedColumns: string[] = [ 'name', 'date', 'status'];

  @Input({ required: true }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
