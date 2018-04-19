export class Organisation {
  ObjectClass = 'prosek.orm.Organisation';
  Website: string;
  TradingName: string;
  TaxFileNumber: string;
  CompanyType: string;
  ACN: string;
  ABN: string;
  AdminEmail: string;
  CompanyName: string;
  ParentCompany: string;
  Phone: string;
  State: string;
  Incorporated: string;
  Address: string;
  PostalAddress: string;
  Fax: string;
  Banking = [];
  Logos = [];
  Active: boolean;
}

export class Address {
  Address1: string;
  ObjectClass = 'prosek.orm.OrganisationAddress';
  Postcode: string;
  State: string;
}

export class Banking {
  AccountName: string;
  AccountNumber: string;
  BSB: string;
  BankName: string;
  ObjectClass = 'prosek.orm.OrganisationBankAccount';
  Type: string;
  Branch: string;
}

export class LogoUpload {
  ObjectClass = 'prosek.orm.OrganisationLogos';
  Logo = {
    FileToken: ''
  };
}

export class Logo {
  ObjectClass = 'prosek.orm.OrganisationLogos';
  Logo: {
    Size: number;
    URI: string;
    MimeType: string;
    Name: string;
  };
}

export class SuperFund {
  EmployeeNo: string;
  FundABN: string;
  FundName: string;
  ObjectClass = 'prosek.orm.OrganisationSuperFund';
}
