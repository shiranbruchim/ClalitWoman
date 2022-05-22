import {useNavigation, useRoute} from '@react-navigation/native';
import {AppContext} from 'common/Context/AppContextProvider';
import useTheme from 'common/Hooks/useTheme';
import {SplashLogo} from 'common/Theme/Svgs';
import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SplashStyles as splashStyles} from './Splash.style';

const Splash = () => {
  const context = useContext(AppContext);
  const navigation = useNavigation();
  const route = useRoute();

  const {images} = useTheme();

  const [timeEnded, setTimeEnded] = useState(false);

  const initialComponent = route?.params?.initialComponent;
  console.log('route: ', route);

  setTimeout(() => {
    setTimeEnded(true);
  }, 3000);

  useEffect(() => {
    timeEnded &&
      initialComponent &&
      navigation.navigate(initialComponent as never);
  }, [context, initialComponent, navigation, route.params, timeEnded]);

  return (
    <View style={splashStyles.mainView}>
      {/* <Image source={images.splash} style={splashStyles.mainImage} /> */}
      <View style={splashStyles.textView}>
        <SplashLogo style={splashStyles.splashLogo} />
        <View style={splashStyles.loading}>
          <View>
            <Text style={splashStyles.text}>Loading ...</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Splash;
