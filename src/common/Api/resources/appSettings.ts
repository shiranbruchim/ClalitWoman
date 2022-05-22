import {AxiosPromise} from 'axios';
import {log} from 'common/Utils';
import {ApiDataResponse} from 'common/Types/ApiDataResponse.types';
import ApiClient from '../ApiClient';

const resourceName = 'posts';

const get = (): AxiosPromise<ApiDataResponse> => {
  log(`calling ${resourceName} resource`);
  return ApiClient.get(resourceName);
};

const post = (): AxiosPromise<ApiDataResponse> => {
  log(`calling ${resourceName} resource`);
  return ApiClient.post(resourceName);
};

export default {
  get,
  post,
};
