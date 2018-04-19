export class Report {
  ClosedDate: string;
  Date: string;
  GPSAccuracy: any;
  GuardUser: string;
  GuardUserDetail: any;
  LastEmailedDate: any;
  LastEmailedTo: any;
  Latitude: any;
  Longitude: any;
  ObjectClass = 'prosek.orm.Report';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  ReportCategory: string;
  ReportCategoryDetail: any;
  ReportForm: string;
  ReportFormDetail: any;
  ReportNumber: any;
  ReportStatus: any;
  ReportSubCategory: string;
  ReportSubCategoryDetail: any;
  Signature: string;
  Site: string;
  SiteDetail: any;
  StatusChangedOn: string;
  Time: string;
  FieldValues: any;
  ReportPhotos: any;
  ReportPhotosDetail: any;
  FieldValuesDetail: any;
}

export class ReportCategory {
  ApprovalRequired: boolean;
  Disabled: boolean;
  Document: any;
  IsDefault: boolean;
  Name: string;
  ObjectClass = 'prosek.orm.ReportCategory';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  PhotoRequired: boolean;
  ReportType: string;
  Site: string;
}

export class ReportType {
  Name: string;
  ObjectClass = 'prosek.orm.ReportType';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
}

export class ReportForm {
  IsDefault: boolean;
  IsEnable: boolean;
  Name: string;
  ObjectClass = 'prosek.orm.ReportForm';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  ReportFormCategories: any;
  Site: string;
  Type: string;
}

export class ReportFieldValue {
  ObjectClass = 'prosek.orm.ReportFieldValue';
  ObjectID: string;
  Report: string;
  DrawValue: any;
  Time: any;
  ObjectCreated: string;
  ObjectLastModified: string;
  Date: any;
  ReportField: string;
  DoubleValue: any;
  BooleanValue: any;
  StringValue: any;
  ChoiceOption: any;
}

export class ReportField {
  IsHidden: any;
  ObjectClass = 'prosek.orm.ReportField'
  Description: string;
  Background: any;
  ObjectID: string;
  SortOrder: any;
  ObjectCreated: string;
  ObjectLastModified: string;
  Code: string;
  ShowOnActivityReport: boolean;
  ReportForm: string;
  Type: any;
  ShouldAutoFill: any;
  Mandatory: boolean;
}

export class ReportPhoto {
  ObjectClass = 'prosek.orm.ReportPhoto'
  DateStrig: string;
  ImageString: any;
  ObjectID: string;
  ObjectCreated: string;
  ObjectLastModified: string;
  Photo: any;
  Report: string;
}

export class ReportNotification {
  AdHoc: boolean;
  Contact: string;
  ContactDetail: any;
  CustomContactEmail: any;
  CustomContactName: any;
  CutoffTime: string;
  Description: string;
  Email: any;
  ForClient: false
  Frequency: any;
  LastSentDate: string;
  Name: string;
  NoOfHours: number;
  NotificationReportTypeLinks: any;
  NotificationReportTypeLinksData: any;
  ObjectClass = 'prosek.orm.ReportNotification';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  ReportDays: any;
  ReportTime: string;
  ScheduledDate: string;
  Site: string;
  SiteDetail: any;
  StartDateTime: string;
  SummaryType: string;
  SummaryTypeDetail: any;
}

export class NotificationReportTypeLink {
  Notification: string;
  ObjectClass = 'prosek.orm.NotificationReportTypeLink';
  ObjectCreated: string;
  ObjectID: string;
  ObjectLastModified: string;
  ReportType: string;
  Selected: boolean;
}
