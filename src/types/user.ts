export interface User {
  role: any[];
  uuid: string;
  data: Data;
}

export interface Data {
  displayName: string;
  firstName: string;
  lastName: string;
  coverPhoto: string;
  photoURL: string;
  email: string;
}