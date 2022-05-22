import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {AppContext} from 'common/Context/AppContextProvider';
import {closeDrawer, navigate} from 'common/Utils/rootNavigation/navigationRef';
import IconWithText from './IconWIthText';
import {RightMenuBarStyle as styles} from './RightMenuBar.style';
// import {MainRightMenuBarProps} from './MainRightMenuBar.types';

const RightMenuBarComponent = () => {
  const {DisconnectUser} = useContext(AppContext);

  const logout = () => {
    navigate('Login');
    DisconnectUser();
  };
  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.mainMenuWindowContainer}>
        <View style={styles.exitTextContainer}>
          <TouchableOpacity
            style={styles.exitTextBotton}
            onPress={() => closeDrawer()}>
            <Text style={styles.exitText}>X</Text>
          </TouchableOpacity>
        </View>
        <IconWithText
          value="הילדים שלי"
          image="videoCamera"
          onPress={() => {}}
          naked
        />
        <IconWithText
          value="הגדרות"
          image="videoCamera"
          onPress={() => {}}
          naked
        />
        {/* <IconWithText
          value="התראות"
          image="videoCamera"
          onPress={() => setModalOpen(true)}
          naked
        /> */}
        <View style={styles.mainHr} />
        <IconWithText
          value="תנאי שימוש"
          image="videoCamera"
          onPress={() => {}}
          naked
        />
        <IconWithText
          value="להתנתק"
          image="videoCamera"
          onPress={() => logout()}
        />
      </View>
    </View>
  );
};

export default RightMenuBarComponent;
