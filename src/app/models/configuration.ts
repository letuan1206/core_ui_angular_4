import { Logo } from './organisation';
export class Country {
  ObjectID: string;
  Selected: boolean;
  ObjectClass = 'prosek.orm.Country';
  Name: string;
}

export class CountryState {
  ObjectID: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.CountryState';
  Name: string;
  Divisions: Division[];
  Collapse: boolean;
}

export class Division {
  ObjectID: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.types.Division';
  State: string;
  Description: string;
  AddEmployees: any;
}

export class Service {
  ObjectID: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.Service';
  Description: string;
  AddClients: any;
  ClientChoose: any;
  AddSites: any;
  SiteChoose: any;
}

export class Industry {
  ObjectID: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.types.Industry';
  Description: string;
  AddClients: any;
  AddSites: any;
}

export class Position {
  ObjectID: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.types.Position';
  Description: string;
  AddContacts: any;
  AddSites: any;
}

export class Rating {
  ObjectID: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.types.Rating';
  Description: string;
  AddClients: any;
  AddSites: any;
}

export class Client {
  CompanyName: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.Client';
  ObjectID: string;
  TradingName: string;
  ABN: string;
  Logo: Logo;
}

export class Site {
  SiteName: string;
  Active: boolean;
  ObjectClass = 'prosek.orm.Site';
  ObjectID: string;
  Client: string;
}

export class ProsekEmployee {
  UserName: string;
  ObjectClass = 'prosek.orm.ProsekEmployeeSecUserExtenson';
  Address: string;
  GoogleAuthCode: string;
  GoogleRefreshToken: string;
  ObjectID: string;
  TerminationDate: string;
  EmployeePicture: string;
  GoogleAccessToken: string;
  ObjectCreated: string;
  ObjectLastModified: string;
  Gender: string;
  GoogleTokenRequestedDate: string;
  Mobile: string;
  Nationality: string;
  Reason: string;
  GmailAddress: string;
  PostalAddress: string;
  StartDate: string;
  DOB: string;
  Phone: string;
  State: string;
  EmailOther: string;
  GoogleExpiresInSeconds: string;
}

export class Contact {
  ObjectClass = 'prosek.orm.Contact';
  Email: string;
  ObjectID: string;
  FirstName: string;
  Mobile: string;
  Active: boolean;
  Phone: string;
  State: string;
  ContactStatus: any;
  LastName: string;
  Fax: string;
  EmailOther: string;
  Site: string;
  Company: any;
  Address: string;
  Rating: string;
  TransCompanyName: string;
  Industry: string;
  Division: string;
  Client: string;
  Position: string;
  PositionDetails: Position;
  PostalAddress: string;
  ClientManager: any;
  Services: any;
  AddressDetail: Address;
  GoogleAddress: GoogleAddress;
  PostalAddressDetail: Address;
  CompanyDetail: Client;
  FullName: string;
  ActiveString: string;
  ContactServices: any;
}

export class Address {
  GoogleAddress: string;
  ObjectClass = 'prosek.orm.Address';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  PostcodeSuburb: string;
  Street: string;
}

export class GoogleAddress {
  City: string;
  Country: string;
  GoogleAddressText: string;
  Latitude: number;
  Longitude: number
  ObjectClass = 'prosek.orm.GoogleAddress';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  State: string;
  StreetAddress: string;
  StreetNumber: string;
  ZipCode: string;
}

export class Report {
  Date: string;
  SiteName: string;
  Site: string;
  ReportSubCategoryName: string;
  ReportSubCategory: string;
  ReportBy: string;
  Status: number
  ObjectClass = 'prosek.orm.Report';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  Signature: string;
  ReportPhotos: any;
  ReportDate: string;
  Category: string;
  GuardUser: string;
  GuardUserName: string;
  ReportForm: string;
  ReportCategoryName: string;
  ReportCategory: string;
  ReportStatus: ReportStatus;
}

export class ReportSubCategory {
  ObjectID: string;
  ObjectCreated: string;
  ObjectLastModified: string;
  ObjectClass: "prosek.orm.ReportSubCategory";
  Name: string;
  IsDefault: boolean;
  Disabled: string;
  Category: string;
  Site: string
}

export class GuardUser {
  ObjectClass: "oneit.security.SecUser";
  UserName: string;
  Email: string;
  ObjectID: string;
  FirstName: string;
  SupportUser: string;
}

export class ReportPhoto {
  DateStrig: string;
  ObjectClass: "prosek.orm.ReportPhoto";
  ObjectID: string;
  Report: string;
  Photo: {
    Size: number;
    URI: string;
    MimeType: string;
  };
  ObjectCreated: string;
  ObjectLastModified: string;
  ImageString: string
}

export class ReportCategory {
  Name: string;
  ObjectClass: "prosek.orm.ReportCategory";
  ObjectCreated: string;
  ObjectLastModified: string;
  ObjectID: string;
  IsDefault: string;
  ApprovalRequired: string;
  Disabled: string;
  ReportType: string
  Site: string
  SubCategories: string
}

export class ReportType {
  Name: string;
  ObjectClass: "prosek.orm.ReportType";
  ObjectCreated: string;
  ObjectLastModified: string;
  ObjectID: string;
}

export class ReportStatus {
  Description: string;
  Value: string;
  NextStatuses: any;
  Name: string;
}

export class SitePatrolSchedule {
  Description: string;
  ObjectClass: "prosek.orm.ReportType";
  ObjectCreated: string;
  ObjectLastModified: string;
  ObjectID: string;
  AssignedTo: any;
  EstimateTime: string;
  GracePeriod: any;
  Instructions: any;
  PatrolStatus: any;
  SPSCheckpoints: any;
  ScheduleType: any;
  TourSchedules: any;
  Checkpoints: any;
}