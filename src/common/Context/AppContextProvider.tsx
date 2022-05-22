import appSettings from 'common/Api/resources/appSettings';
import useApi from 'common/Hooks/useApi';
import {AppSettingsResponse} from 'common/Types/AppSettingsResponse.types';
import {UseApiResponse} from 'common/Types/UseApiResponse.types';
import React, {useEffect, useState, useMemo} from 'react';
import {
  ChildData,
  Children,
  getChild,
  getUser,
  UsersData,
} from '../../../Stubs/MockData/userData';
import {AppContextProps} from './AppContextProps';

type AppContext = {
  settings: any;
  connectingUser: (idnumber: number) => UsersData | null;
  userData: UsersData | undefined;
  childrenData: (ChildData | undefined)[] | undefined;
  DisconnectUser: () => void;
};

const defaultValue = {
  data: {},
};
export const AppContext = React.createContext<AppContext>(defaultValue);
export const AppContextProvider = (props: AppContextProps) => {
  const {children} = props;

  const [settings, updateSettings] = useState<AppSettingsResponse | object>({});
  const [userData, setUserData] = useState<UsersData>();
  const [childrenData, setChildrenData] = useState<(ChildData | undefined)[]>();

  const settingsApi: UseApiResponse = useApi(appSettings.get);

  useEffect(() => {
    settingsApi.request();
  }, []);

  useEffect(() => {
    settingsApi.data && updateSettings(settingsApi.data);
  }, [settingsApi.data]);

  const connectingUser: (idnumber: number) => UsersData | null = (
    idNumber: number,
  ) => {
    const user = getUser(idNumber);
    if (user) {
      setUserData(user);
    }
    return user;
  };

  const DisconnectUser = () => {
    setUserData(undefined);
  };

  useEffect(() => {
    let userChildren: (ChildData | undefined)[] = [];
    if (userData?.children) {
      userChildren = getChild(userData.children);
    }
    setChildrenData(userChildren);
  }, [userData]);

  const valueAttributes: AppContext = useMemo(() => {
    const data = {
      settings,
      connectingUser,
      userData,
      childrenData,
      DisconnectUser,
    };
    return data;
  }, [childrenData, settings, userData]);

  return (
    <AppContext.Provider value={valueAttributes}>
      {children}
    </AppContext.Provider>
  );
};
