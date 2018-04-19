import { StateOptions } from './../../interfaces/common-interface';
import { tassign } from 'tassign';
import * as actions from './common-actions';

export interface CommonState {
  filterState: any;
  filterStatus: any;
  filterService: any;
  filterDivision: any;
  filterPosition: any;
  filterType: any;
  filterReportStatuses: any;
  filterSite: any;
  filterCategory: any;
  clientsData: any;
  contactsData: any;
  reportsData: any;
  sitesData: any;
  employeesData: any;
  showLoading: boolean;
  subContactsClients: any;
  subNotesClients: any;
  subTimelineClientsNotes: any;
  subTimelineClientsTask: any;
}

export const COMMON_INITAL_STATE: CommonState = {
  filterState: [],
  filterStatus: [],
  filterService: [],
  filterDivision: [],
  filterPosition: [],
  filterType:[],
  filterReportStatuses:[],
  filterSite:[],
  filterCategory:[],
  sitesData: [],
  clientsData: [],
  contactsData: [],
  employeesData: [],
  reportsData: [],
  showLoading: false,
  subContactsClients: [],
  subNotesClients: [],
  subTimelineClientsNotes: {},
  subTimelineClientsTask: {}
};

function storeFilterState(state, action) {
  return tassign(state, {
    filterState: action.payload
  });
}

function storeFilterStatus(state, action) {
  return tassign(state, {
    filterStatus: action.payload
  });
}

function storeFilterService(state, action) {
  return tassign(state, {
    filterService: action.payload
  });
}

function storeFilterDivision(state, action) {
  return tassign(state, {
    filterDivision: action.payload
  });
}

function storeFilterPosition(state, action) {
  return tassign(state, {
    filterPosition: action.payload
  });
}

function storeFilterType(state, action) {
  return tassign(state, {
    filterType: action.payload
  });
}

function storeFilterReportStatuses(state, action) {
  return tassign(state, {
    filterReportStatuses: action.payload
  });
}

function storeFilterSite(state, action) {
  return tassign(state, {
    filterSite: action.payload
  });
}
function storeFilterCategory(state, action) {
  return tassign(state, {
    filterCategory: action.payload
  });
}

function storeClientsData(state, action) {
  return tassign(state, {
    clientsData: action.payload
  });
}

function storeContactsData(state, action) {
  return tassign(state, {
    contactsData: action.payload
  });
}

function storeReportsData(state, action) {
  console.log(action.payload);
  return tassign(state, {
    reportsData: action.payload
  });
}

function storeSitesData(state, action) {
  return tassign(state, {
    sitesData: action.payload
  });
}

function storeEmployeesData(state, action) {
  return tassign(state, {
    employeesData: action.payload
  });
}

function storeSubContactsClients(state, action) {
  return tassign(state, {
    subContactsClients: action.payload
  });
}

function storeSubNotesClients(state, action) {
  return tassign(state, {
    subNotesClients: action.payload
  });
}

function storeSubTimelineClientsNotes(state, action) {
  return tassign(state, {
    subTimelineClientsNotes: action.payload
  });
}

function storeSubTimelineClientsTask(state, action) {
  return tassign(state, {
    subTimelineClientsTask: action.payload
  });
}

export function commonReducer(state = COMMON_INITAL_STATE, action): CommonState {
  switch (action.type) {
    case actions.STORE_FILTER_STATE: return storeFilterState(state, action);
    case actions.STORE_FILTER_STATUS: return storeFilterStatus(state, action);
    case actions.STORE_FILTER_SERVICE: return storeFilterService(state, action);
    case actions.STORE_FILTER_DIVISION: return storeFilterDivision(state, action);
    case actions.STORE_FILTER_POSITION: return storeFilterPosition(state, action);
    case actions.STORE_FILTER_TYPE: return storeFilterType(state, action);
    case actions.STORE_FILTER_REPORT_STATUSES: return storeFilterReportStatuses(state, action);
    case actions.STORE_FILTER_SITE: return storeFilterSite(state, action);
    case actions.STORE_FILTER_CATEGORY: return storeFilterCategory(state, action);
    case actions.STORE_CLIENTS_DATA: return storeClientsData(state, action);
    case actions.STORE_CONTACTS_DATA: return storeContactsData(state, action);
    case actions.STORE_REPORT_DATA: return storeReportsData(state, action);
    case actions.STORE_SITES_DATA: return storeSitesData(state, action);
    case actions.STORE_EMPLOYEES_DATA: return storeEmployeesData(state, action);
    case actions.STORE_SUB_CONTACTS_CLIENTS: return storeSubContactsClients(state, action);
    case actions.STORE_SUB_NOTES_CLIENTS: return storeSubNotesClients(state, action);
    case actions.STORE_SUB_TIMELINE_CLIENTS_NOTES: return storeSubTimelineClientsNotes(state, action);
    case actions.STORE_SUB_TIMELINE_CLIENTS_TASK: return storeSubTimelineClientsTask(state, action);
  }

  return state;
}
