import {User} from './Model/user';

export default class HomeController {
  static getUser(userId: number) {
    const user = new User();
    return fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
      .then(response => response.json())
      .then(json => {
        user.userId = json.userId;
        user.id = json.id;
        user.title = json.title;
      })
      .then(() => user);
  }
}
