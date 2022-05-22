import {AppSettingsResponse} from './AppSettingsResponse.types';
import {UserApplicationResponse} from './UserApplicationsResponse.types';

export interface ApiDataResponse
  extends AppSettingsResponse,
    UserApplicationResponse {}
