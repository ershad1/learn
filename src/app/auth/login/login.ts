export class Login {
  constructor(
    public username: string,
    public password: string
  ) {  }
}

export class NewUser {
  public role = 0;
  public username = '';
  public password = '';
  public fullName = '';
  constructor() {}
}

export class User {
  constructor(
    public username: string,
    public fullName: string,
    public role: number,
  ) {}
}

export class SignupStatus {
  public code = '';
  public message = '';
  public user = new User('', '', 0);
  constructor() {}
}

export class LoginStatus {
  constructor(
    public code: string,
    public message: string
  ) { }
}
