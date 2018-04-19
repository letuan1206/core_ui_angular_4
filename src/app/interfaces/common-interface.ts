export interface Params {
  environment?: string;
  queryType: string;
  queryParams?: any;
  assocs?: any[];
}

export interface StatusOptions {
  Description: string;
  Value: string;
}

export interface ServiceOptions {
  Active: boolean;
  Description: string;
  ObjectClass: string;
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
}

export interface StateOptions {
  Active: boolean;
  Country: string;
  Name: string;
  ObjectClass: string;
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
}

export interface DivisionOptions {
  Active: boolean;
  Description: string;
  ObjectClass: string;
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  State: string;
}

export interface PositionOptions {
  Active: boolean;
  Description: string;
  ObjectClass: string;
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
}

export interface EmployeesParam {
  Position: any;
  State: any;
  Division: any;
}
