import {storiesOf} from '@storybook/react-native';
import {getContentWidth} from 'common/Utils';
import Button from 'components/Button';
import InspectionSlide from 'components/InspectionSlide';
import SlideContent from 'components/SlideContent';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import {FlatList, View} from 'react-native';
import PickBox from 'components/PickBox';
import SlideFlatList from 'components/SlideFlatList';
import Exit from 'components/Exit';

const pickBoxData = [
  {
    title: 'מוטוריקה גסה',
  },
  {
    title: 'מוטוריקה עדינה',
  },
  {
    title: ' חברתי',
  },
  {
    title: 'שפה',
  },
];

const DoIconBtn = {
  btnSize: 'large',
  iconName: 'thumbUp',
  btnColor: 'green',
};

const PauseIconBtn = {
  btnSize: 'large',
  iconName: 'pause',
  btnColor: 'blue',
};

const DontIconBtn = {
  btnSize: 'large',
  iconName: 'thumbDown',
  btnColor: 'red',
};

const content = [
  {
    id: 1,
    firstContent: {
      title: 'מרימה ראש וחזה תוך השענות על המרפקים ואמות הידיים',
      subTitle: 'מטרת הבדיקה',
      content:
        'קודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמאל.לבחון את תפקודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמאקודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמאל.לבחון את תפקודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמאקודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמאל.לבחון את תפקודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמא מני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לבחון את תפקודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמאל.לבחון את תפקודי מוטוריקה גסה, ארגון התנועה בשילוב פלג גוף ימני ושמאלי סביב ציר האמצע. הפעולה מכוונת ומתכוננת ויש הפרדת תנועה והתנתקות מהמשטח. תינוק מתהפך מהבטן אל הגב ומהגב אל הבטן. יש לשים לב שההיפוך הוא מימין לשמאל.',
    },
    type: 'first',
  },
  {
    id: 2,
    descripition: 'מרימה ראש וחזה תוך השענות על המרפקים ואמות הידיים',
    img: 'smilingBaby',
  },
  {
    id: 3,
    descripition: 'לאחר מכן יש לבדוק אם לילדה יש דופק',
    img: 'stethoscope',
  },
  {
    id: 4,
    descripition: 'במידה ואין נא לפנות לביטוח לאומי לקבלת פיצויים',
    img: 'formApproved',
  },
  {
    id: 5,
    descripition: 'מרימה ראש וחזה תוך השענות על המרפקים ואמות הידיים',
    img: 'smilingBaby',
  },
  {
    id: 6,
    descripition: 'לאחר מכן יש לבדוק אם לילדה יש דופק',
    img: 'stethoscope',
  },
  {
    id: 7,
    descripition: 'במידה ואין נא לפנות לביטוח לאומי לקבלת פיצויים',
    img: 'formApproved',
  },
];

storiesOf('DevScreen', module).add('ScreenInspectionSlide', () => {
  const onChange = (title: string) => {
    return title;
  };

  const moreInformation = {
    title: 'מטוריקה גסה',
    titleContent: 'מרימה ראש וחזה תוך השענות על המרפקים ואמות הידיים',
    subTitle: ['מטרת הבדיקה:', 'איך מבצעים?'],
    content: [
      'לבדוק הרמת ראש, של בית החזה והישענות על הידיים.',
      'משכבים את התינוק על הבטן על משטח ישר. מעודדים אותו להתרוממם באמצעות גירויים, בלי שעוזרים לו באמצעות נגיעה בגב או בטוסיק.התינוק צריך להיות מסוגל להרים את הראש והחזה תוך הישענות על אמות הידיים, מתוך כוונה להגיע לחפץ קרוב להתבונן בו.',
    ],
  };

  return (
    <MainContainer>
      <View style={{marginTop: 184}} />
      <PickBox pickBoxData={pickBoxData} onChange={onChange} />
      <SlideFlatList content={content} moreInformation={moreInformation} />
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly',
        }}>
        <Button iconBtn={DoIconBtn} value="עושה" onPress={() => {}} />
        <Button iconBtn={PauseIconBtn} value="הפסקה" onPress={() => {}} />
        <Button iconBtn={DontIconBtn} value="לא עושה" onPress={() => {}} />
      </View>
    </MainContainer>
  );
});
