export interface SitesParam {
  ActiveStatus: any;
  Service: any;
  Division: any;
  Rating: any;
  State: any;
}

export interface DataOfTableSite {
  siteName: string;
  objectID: string;
  address: string;
  state: string;
  division: string;
  services: any;
  servicesName: string;
  phone: string;
  email: string;
}

export class SitesTransformParam {
  dataSite: any;
  dataDivision: any;
  dataService: any;
  stateOptions: any;
  serviceOptions: any;
  divisionOptions: any;
}

export class ObjectSite {
  Active: boolean;
  Client: string | null;
  Information: string | null;
  InformationServices: string[];
  Logo: any;
  ObjectClass: string | null;
  ObjectCreated: string | null;
  ObjectID: string | null;
  ObjectLastModified: string | null;
  SiteName: string;
}
