import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import {GraphStyle as styles} from './Graph.style';
import {GraphProps} from './Graph.types';

const GraphComponent = (props: GraphProps) => {
  const {img, indicator} = props;

  return (
    <View>
      <View>
        <Text>Glucose (B)</Text>
        <Text>סוכר</Text>
      </View>
      <LineChart
        fromZero
        data={{
          labels: ['1.22', '2.22', '3.22', '4.22', '5.22', '6.22'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              color: (opacity = 1) => `black`, // optional
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        withVerticalLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
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
          if (dataPointIndex === 2) {
            return 'red';
          }
          return 'green';
        }}
      />
    </View>
  );
};

export default GraphComponent;
