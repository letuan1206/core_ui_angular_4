export interface ClientsParam {
  ActiveStatus: any;
  Service: any;
  Division: any;
  Rating: any;
  State: any;
}

export interface DataOfTableClient {
  clientName: string;
  address: string;
  state: string;
  division: string;
  services: any;
  servicesName: string;
  phone: string;
  email: string;
  objectID: string;
}

export class ClientsTransformParam {
  dataClient: any;
  dataDivision: any;
  dataService: any;
  stateOptions: any;
  serviceOptions: any;
  divisionOptions: any;
}

export interface ObjectClient {
  ObjectClass: string;
  ObjectID: string;
  ObjectCreated: string;
  ObjectLastModified: string;
  "Activity.CallAttempt": string | null;
  Information: string;
  ABN: string | null;
  ACN: string | null;
  InformationServices: any[];
  Logo: any;
  "Activity.LetterSent": string | null;
  CompanyName: string | null;
  "Activity.Email": string | null;
  Active: boolean,
  "Activity.Meeting": string | null,
  "ActivityC.allReach": string | null,
  TradingName: string | null,
  CopyInfoToSite : boolean
}

export interface ObjectInformation {
  ObjectID: string | null;
  ObjectLastModified: string | null;
  ObjectClass: string | null;
  ObjectCreated: string | null;
  Email: string | null;
  Description: string | null;
  Recipients: string | null;
  Address: string | null;
  Rating: string | null;
  Website: string | null;
  ContractTerm: string | null;
  ContractOption: string | null;
  StartDate: string | null;
  Industry: string | null;
  Phone: string | null;
  Division: string | null;
  TerminationDate: string | null;
  ContractExpiry: string | null;
  PostalAddress: string;
  Services: string[];
  ContractExtended: string | null;
  ReportsByEmail: boolean;
  State: string | null;
  Fax: string | null;
  OptionExpiry: string | null
}

export interface ObjectAddress {
  GoogleAddress: string | null;
  ObjectClass: 'prosek.orm.Address';
  ObjectCreated: string | null;
  ObjectID: string | null;
  ObjectLastModified: string | null;
  PostcodeSuburb: string | null;
  Street: string | null;
}

export interface ObjectGoogleAddress {
  ObjectClass: string | null;
  ObjectCreated: string | null;
  ObjectID: string | null;
  ObjectLastModified: string | null;
  City: string | null;
  Country: string | null;
  GoogleAddressText: string | null;
  Latitude: number | null;
  Longitude: number | null;
  State: string | null;
  StreetAddress: string | null;
  StreetNumber: string | null;
  ZipCode: string | null;
}
