import {ApiDataResponse} from './ApiDataResponse.types';

export interface UseApiResponse {
  data: ApiDataResponse | object;
  error: string | null;
  loading: boolean;
  request: () => void;
}
