import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import RBSheet from 'react-native-raw-bottom-sheet';
import {DatePickerStyle as styles} from './DatePicker.style';
import {DatePickerProps} from './DatePicker.types';

const DatePickerComponent = (props: DatePickerProps) => {
  const {onChange} = props;
  const [date, setDate] = useState('');
  const refRBSheet = useRef<any>(null);
  const showDate = date || 'תאריך השאלון';
  const currentDate = moment(new Date().toLocaleDateString()).format('L');

  useEffect(() => {
    setDate(currentDate);
  }, [currentDate]);

  return (
    <View>
      <TouchableOpacity onPress={() => refRBSheet.current?.open()}>
        <View style={styles.textInputStyle}>
          <Text style={date ? styles.dateStyles : styles.placeholderStyles}>
            {showDate}
          </Text>
        </View>
      </TouchableOpacity>
      <RBSheet
        height={400}
        ref={refRBSheet}
        closeOnDragDown
        closeOnPressMask
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'gray',
          },
        }}>
        <Calendar
          renderArrow={direction =>
            direction === 'left' ? <Text>{'<'}</Text> : <Text>{'>'}</Text>
          }
          enableSwipeMonths
          style={{marginTop: '1%'}}
          markingType="period"
          // eslint-disable-next-line no-shadow
          onDayPress={date => {
            onChange(date.dateString);
            setDate(moment(date.dateString).format('DD-MM-YYYY'));
            refRBSheet.current?.close();
          }}
          current={currentDate}
          theme={{
            todayTextColor: '#FF5A7C',
          }}
        />
      </RBSheet>
    </View>
  );
};

export default DatePickerComponent;
