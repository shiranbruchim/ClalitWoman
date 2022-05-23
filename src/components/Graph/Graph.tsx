import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {globalStyle} from '../../res/globalStyle';

import {GraphStyle as styles} from './Graph.style';
import {GraphProps} from './Graph.types';

const GraphComponent = (props: GraphProps) => {
  const data = [20, 200, 20, 200, 200, 50];
  const labels = ['1.22', '2.22', '3.22', '4.22', '5.22', '6.22', '1.22'];
  return (
    <View style={[styles.container, globalStyle.SHADOW]}>
      <View style={styles.textContainer}>
        <Text>Glucose (B)</Text>
        <Text>סוכר</Text>
      </View>
      <LineChart
        fromZero
        data={{
          labels,
          datasets: [
            {
              data,
              color: (opacity = 1) => `black`, // optional
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 80} // from react-native
        height={160}
        transparent
        withVerticalLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          propsForBackgroundLines: {
            // strokeHeight: 0.5,
            // strokeWidth: 0.5,
          },
          fillShadowGradient: '#B2E0BE',
          fillShadowGradientFromOpacity: 1,
          fillShadowGradientFromOffset: 0.1,
          fillShadowGradientToOffset: 1,
          fillShadowGradientTo: '#B2E0BE',
          useShadowColorFromDataset: false, // optional
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `gray`,
          labelColor: (opacity = 1) => `black`,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: 'black',
          },
        }}
        // style={{
        //   // marginVertical: 8,
        //   // borderRadius: 0,
        // }}
        getDotColor={(dataPoint, dataPointIndex) => {
          if (dataPoint >= 80) {
            return 'red';
          }
          return 'green';
        }}
      />
    </View>
  );
};

export default GraphComponent;
