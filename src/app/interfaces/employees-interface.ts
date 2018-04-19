export class EmployeesTransformParam {
    dataEmployee: any;
    stateOptions: any;
    positionOptions: any;
    divisionOptions: any;
}

export interface DataOfTableEmployees {
    employeeName: string;
    objectID: string;
    state: string;
    position: string;
    division: string;
    phone: string;
    email: string;
}

export interface EmployeesParam {
    Position: any;
    Division: any;
    State: any;
}

export interface ObjectEmployee {
    User: string | null;
    Address: string | null;
    GoogleRefreshToken: string | null;
    ObjectID: string | null;
    EmployeePicture: any;
    GoogleAccessToken: string | null;
    Rating: string | null;
    ObjectLastModified: string | null;
    Gender: string | null;
    Reason: string | null;
    GmailAddress: string | null;
    StartDate: string | null;
    Industry: string | null;
    DOB: string | null;
    Phone: string | null;
    Division: string | null;
    GoogleExpiresInSeconds: string | null;
    ObjectClass: string | null;
    UserName: string | null;
    GoogleAuthCode: string | null;
    Position: string | null;
    TerminationDate: string | null;
    ObjectCreated: string | null;
    GoogleTokenRequestedDate: string | null;
    Mobile: string | null;
    Nationality: string | null;
    PostalAddress: string | null;
    State: string | null;
    EmailOther: string | null
}

export interface ObjectUser {
    ResetPassword: string | null;
    NewPassword: string | null;
    ObjectClass: string | null;
    UserName: string | null;
    Email: string | null;
    ObjectID: string | null;
    FirstName: string | null;
    SupportUser: string | null;
    PrivsOverrides: string | null;
    Enabled: boolean;
    RolesOverrides: string | null;
    SupportKey: string | null;
    ObjectCreated: string | null;
    ObjectLastModified: string | null;
    PasswordExpiryDate: string | null;
    UserDescription: string | null;
    GroupsOverrides: string | null;
    LastName: string | null
}