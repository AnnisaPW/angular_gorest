import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private httpServ: HttpService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  page = 1;
  check = '&#x2713;';
  isLoading1 = false;
  isLoading2 = false;
  selectedId: Number = 0;
  users: User[] = [];
  user: User = new User({});

  // public setSelectedId(id: Number) {
  //   this.httpServ.selectedId = 0;
  //   this.httpServ.selectedId = id;
  // }

  isLong = true;

  toggle() {
    this.isLong = !this.isLong;
  }

  public async getUserList() {
    this.isLoading1 = true;
    await new Promise((f) => setTimeout(f, 2000));
    let result = await this.httpServ.readUsers(this.page);
    let stringifyJson = JSON.stringify(result);
    let parsedJSON = JSON.parse(stringifyJson);
    this.addUsers(parsedJSON);
    this.page++;
    this.isLoading1 = false;
  }

  public async getUserDetail(id: Number) {
    this.selectedId = id;
    this.isLoading2 = true;
    await new Promise((f) => setTimeout(f, 2000));

    let result = await this.httpServ.readUser(id);
    let stringifyJson = JSON.stringify(result);
    let parsedJSON = JSON.parse(stringifyJson);
    let user = this.convertToUser(parsedJSON);
    this.user = user;
    this.isLoading2 = false;
    console.log();
  }

  private convertToUser(data: any) {
    return new User({
      id: data['id'],
      name: data['name'],
      email: data['email'],
      gender: data['gender'],
      status: data['status'],
    });
  }

  private addUsers(data: any) {
    for (const key in data) {
      let u = new User({
        id: data[key]['id'],
        name: data[key]['name'],
        email: data[key]['email'],
        gender: data[key]['gender'],
        status: data[key]['status'],
      });

      this.users.push(u);
    }
  }
}
