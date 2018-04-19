export class RosteredShift {
    Site: string;
    DaysOfWeek: any;
    ObjectClass = 'prosek.orm.RosteredShift';
    EndTime: string;
    ObjectID: string;
    Position: string;
    StartTime: string;
    ShiftType: any;
    EndDate = '';
    BreakStartTime: string;
    Source: string;
    OriginalAncestor: string;
    StartDate = '';
    Industry: string;
    Employee: string;
    PayRatePerHour: number;
    BreakEndTime: string;
    ShiftStatus: any;
    RosterTemplate: string;
    RowNumber: number;
    EffectiveFromDate: string;
    EffectiveUntilDate: string;
    JobDetails: string;
    CycleWeek: number;
}

export class RosterTemplate {
    NumberOfCycles: number;
    Site: string;
    ObjectClass = 'prosek.orm.RosterTemplate';
    ObjectID: string;
    EffectiveUntilDate: string;
    TemplateShifts: any;
    EffectiveFromDate: string;
    JobDetails: string;
}

export class ShiftDetails {
    Industry: string;
    DayOfWeek: any;
    RosterComments: string;
    ObjectClass = 'prosek.orm.ShiftDetails';
    Employee: string;
    EndTime: string;
    ObjectID: string;
    Position: string;
    StartTime: string;
    BreakEndTime: string;
    BreakStartTime: string;
}

export class ShiftTemplate {
    ObjectID: string;
    Site: string;
    DaysOfWeek: any;
    ObjectClass = 'prosek.orm.ShiftTemplate';
    EffectiveUntilDate: string;
    ShiftType: any;
    Source: string;
    OriginalAncestor: string;
    UnassignedSlot: any;
    EffectiveFromDate: string;
    CycleWeek: any;
    ShiftDetails: string;
}

export class SaveShiftTemplateWSFP {
    ObjectID: string;
    ObjectClass = 'prosek.svc.SaveShiftTemplateWSFP';
    ShiftType: any;
    EffectiveFromDate: string;
    EffectiveUntilDate: string;
    StartTime: string;
    EndTime: string;
    BreakEndTime: string;
    BreakStartTime: string;
    CycleWeek: number;
    UnassignedSlot: number;
    DaysOfWeek: any;
    RosterComments: string;
    Site: string;
    Source: string;
    OriginalAncestor: string;
    Position: string;
    Industry: string;
    Employee: string;
    ShiftDetails: string;
}

export class AdHocChange {
    ShiftTemplatesToChange: any;
    EffectiveFromDate: string;
    EffectiveUntilDate: string;
    StartTime: string;
    EndTime: string;
    BreakEndTime: string;
    BreakStartTime: string;
    DaysOfWeek: any;
    RosterComments: string;
    Position: string;
    Industry: string;
    Employee: string;
    ShiftType: any;
}
