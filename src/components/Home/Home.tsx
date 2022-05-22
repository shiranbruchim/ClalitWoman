import {AppContext} from 'common/Context/AppContextProvider';
import useTheme from 'common/Hooks/useTheme';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import MainTopBar from 'components/MainTopBar';
import QuestionCard from 'components/QuestionCard';
import TextWithTitle from 'components/TextWithTitle';
import MainContainer from 'containers/MainContainer';
import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import {ChildData} from '../../../Stubs/MockData/userData';
import {HomeStyle as styles} from './Home.style';

const HomeComponent = () => {
  const {userData, childrenData} = useContext(AppContext);
  const {strings} = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const questionArray = [
    {
      title: 'מה זה מבדק ושיטת רמזור?',
      subTitle: 'זאת שיטה לבדוק אם ילדכם בלהב בלהבהל בהלבהבל',
      img: 'formApproved',
      id: 1,
      onPress: () => setModalOpen(true),
    },
    {
      title: 'מה ניתן לעשות באפליקציה',
      subTitle: 'זאת שיטה לבדוק אם ילדכם בלהב בלהבהל בהלבהבל',
      img: 'formApproved',
      id: 2,
      onPress: () => setModalOpen(true),
    },
    {
      title: 'מה זה מבדק ושיטת רמזור?',
      subTitle: 'זאת שיטה לבדוק אם ילדכם בלהב בלהבהל בהלבהבל',
      img: 'formApproved',
      id: 3,
      onPress: () => setModalOpen(true),
    },
    {
      title: 'מה ניתן לעשות באפליקציה',
      subTitle: 'זאת שיטה לבדוק אם ילדכם בלהב בלהבהל בהלבהבל',
      img: 'formApproved',
      id: 4,
      onPress: () => setModalOpen(true),
    },
  ];

  const title = `${strings('Home.hello')} ${userData?.userName}`;
  return (
    <>
      <MainTopBar />
      <MainContainer topBar>
        <View style={styles.mainViewContainer}>
          <TextWithTitle
            title={title}
            subTitle={strings('Home.youCanFollowAfterChildProgress')}
          />
          <View style={styles.mainHr} />
          <TextWithTitle title={strings('Home.generalInfo')} />
          {questionArray.map(question => (
            <QuestionCard
              key={question.id}
              title={question.title}
              subTitle={question.subTitle}
              img={question.img}
              onPress={question.onPress}
            />
          ))}
        </View>
      </MainContainer>
    </>
  );
};

export default HomeComponent;
