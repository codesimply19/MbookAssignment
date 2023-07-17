import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BarChart} from 'react-native-gifted-charts';

const HomeAccounting = () => {
  const [sliderHeight, setSliderHeight] = useState(0);
  const [slideValue] = useState(new Animated.Value(0));
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      if (gesture.dy >= 0) {
        slideValue.setValue(gesture.dy);
      }
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dy > sliderHeight / 2) {
        setIsSliderOpen(true);
        Animated.timing(slideValue, {
          toValue: sliderHeight *0.5,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setIsSliderOpen(false);
        Animated.timing(slideValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const renderBackgroundContent = () => {
    return (
      <Animated.View   style={[
        styles.background,
        {
          opacity: slideValue.interpolate({
            inputRange: [0, sliderHeight],
            outputRange: [0, 0.5],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <View style={styles.backgroundContent}>
        <Text style={styles.backgroundText}>Background Content</Text>
      </View>
      </Animated.View>
    );
  };



  const barData = [
    {value: 250, label: 'Mar', frontColor: '#177AD5'},
    {value: 500, label: 'Apr', frontColor: '#177AD5'},
    {value: 745, label: 'May', frontColor: '#177AD5'},
    {value: 320, label: 'June', frontColor: '#177AD5'},
    {value: 600, label: 'July', frontColor: '#177AD5'},
    {value: 256, label: 'Aug', frontColor: '#177AD5'}
  ];

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          zIndex: 5
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Ionicons name="menu-outline" size={40} />
          <Text style={{fontWeight: 500, fontSize: 20, color: '#000'}}>
            Dashboard
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <MaterialCommunityIcons name="bell-badge-outline" size={40} />

          <Ionicons name="person-circle" size={40} />
        </View>
      </View>

      {isSliderOpen &&
       
          renderBackgroundContent()
       
      }

      <Animated.View
        style={[
          styles.slider,
          { transform: [{ translateY: slideValue }] },
        ]}
        onLayout={(event) => setSliderHeight(event.nativeEvent.layout.height)}
        {...panResponder.panHandlers}
      >
        {/* Content of your slider view */}
        <View style={{padding: 20}}>
        {/* First box */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#333', fontSize: 18, fontWeight: '700'}}>
              Accounting
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 16,
                  fontWeight: '400',
                  marginRight: 5,
                }}>
                This Month
              </Text>
              <AntDesign name="down" size={16} />
            </View>
          </View>
          <Text>Aug 1, 2021 - Aug 31, 2021</Text>
        </View>
        <View style={styles.line}></View>
        {/* 2nd box */}
        <View>
          <Text
            style={{
              color: '#333',
              fontSize: 16,
              fontWeight: '600',
              marginTop: 10,
            }}>
            AVG. Monthy Income
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 24,
              fontWeight: '900',
              marginTop: 5,
            }}>
            $5,849.36
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Feather name="arrow-up-right" size={20} color="#A4D0A4" />
            <Text style={{color: '#A4D0A4'}}>3.89% </Text>
            <Text>
              vs <Text style={{fontWeight: '700'}}>$5247.43</Text> prev, 90 days
            </Text>
          </View>
          <View style={{marginBottom: 40}}>
            {/* Chart here */}
            <BarChart
              barWidth={22}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              hideYAxisText
              referenceLine1Position={420}
              referenceLine1Config={{
                color: 'gray',
                dashWidth: 2,
                dashGap: 3,
              }}
              barStyle={ { borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: 'lightgray',}}
            />
          </View>
        </View>
        <View style={styles.line}></View>
        {/* 3rd box */}
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="money" size={30} color="#A4D0A4" />
            <View style={{marginLeft: 30}}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 24,
                  fontWeight: '600',
                  marginTop: 10,
                }}>
                $82765.59
              </Text>
              <Text>Total Income</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="money" size={30} color="#ED1849" />
            <View style={{marginLeft: 30}}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 24,
                  fontWeight: '600',
                  marginTop: 10,
                }}>
                $16739.59
              </Text>
              <Text>Total Expense</Text>
            </View>
          </View>
        </View>
      </View>
      </Animated.View>

      <View style={{paddingTop: 20}}>
        {/* First box */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#333', fontSize: 18, fontWeight: '700'}}>
              Accounting
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 16,
                  fontWeight: '400',
                  marginRight: 5,
                }}>
                This Month
              </Text>
              <AntDesign name="down" size={16} />
            </View>
          </View>
          <Text>Aug 1, 2021 - Aug 31, 2021</Text>
        </View>
        <View style={styles.line}></View>
        {/* 2nd box */}
        <View>
          <Text
            style={{
              color: '#333',
              fontSize: 16,
              fontWeight: '600',
              marginTop: 10,
            }}>
            AVG. Monthy Income
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 24,
              fontWeight: '900',
              marginTop: 5,
            }}>
            $5,849.36
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Feather name="arrow-up-right" size={20} color="#A4D0A4" />
            <Text style={{color: '#A4D0A4'}}>3.89% </Text>
            <Text>
              vs <Text style={{fontWeight: '700'}}>$5247.43</Text> prev, 90 days
            </Text>
          </View>
          <View style={{marginBottom: 40}}>
            {/* Chart here */}
            <BarChart
              barWidth={200}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              hideYAxisText
              referenceLine1Position={420}
              referenceLine1Config={{
                color: 'gray',
                dashWidth: 2,
                dashGap: 3,
              }}
              roundedTop
              renderTooltip={(item, index) => <Text>{item.value}</Text>}
            />
          </View>
        </View>
        <View style={styles.line}></View>
        {/* 3rd box */}
        <View >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="money" size={30} color="#A4D0A4" />
            <View style={{marginLeft: 30}}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 24,
                  fontWeight: '600',
                  marginTop: 10,
                }}>
                $82765.59
              </Text>
              <Text>Total Income</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="money" size={30} color="#ED1849" />
            <View style={{marginLeft: 30}}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 24,
                  fontWeight: '600',
                  marginTop: 10,
                }}>
                $16739.59
              </Text>
              <Text>Total Expense</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeAccounting;

const styles = StyleSheet.create({

  background: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
  },
  backgroundContent: {
    flex: 1,
    marginTop: 200,
    alignItems: 'center',
  },
  backgroundText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  slider: {
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    paddingBottom: 30,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 1,
    marginVertical: 6,
  },
  sliderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
  },
});