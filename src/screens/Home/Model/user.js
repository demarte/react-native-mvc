export class User {
  userId: number = 0;
  id: number = 0;
  title: string = 'teste';
  completed: boolean = false;

  isPar() {
    return this.id % 2 === 0;
  }
}
