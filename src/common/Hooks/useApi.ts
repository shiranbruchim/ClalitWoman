import {AxiosPromise} from 'axios';
import {toErrorWithMessage} from 'common/Utils';
import {ApiDataResponse} from 'common/Types/ApiDataResponse.types';
import {UseApiResponse} from 'common/Types/UseApiResponse.types';
import {useState} from 'react';

export default (
  apiFunc: () => AxiosPromise<ApiDataResponse>,
): UseApiResponse => {
  const [data, setData] = useState<ApiDataResponse | object>({});
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args: []) => {
    setLoading(true);

    try {
      apiFunc(...args).then(results => {
        results.data && setData(results.data);
      });
    } catch (exexption: Error | unknown) {
      setError(toErrorWithMessage(exexption).message);
    } finally {
      setLoading(false);
    }
  };

  const response: UseApiResponse = {
    data,
    error,
    loading,
    request,
  };

  return response;
};
