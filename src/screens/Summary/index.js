import { View, Text, TouchableOpacity, Animated} from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'

import { LineChart, PieChart } from "react-native-gifted-charts";

const Summary = () => {

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const data = [{ value: 8 }, { value: 12 }, { value: 10 }, { value: 14 },]
  const pieData = [
    { value: 54, color: '#177AD5', text: '54%' },
    { value: 40, color: '#79D2DE', text: '30%' },
    { value: 20, color: '#ED6665', text: '26%' },
  ];


  const CardComponent = () => {
    const [flipAnim, setFlipAnim] = useState(new Animated.Value(0));
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardPress = () => {
      Animated.spring(flipAnim, {
        toValue: isFlipped ? 0 : 1,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();

      setIsFlipped(!isFlipped);
    };

    const frontInterpolate = flipAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    const backInterpolate = flipAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['180deg', '360deg'],
    });

    const frontAnimatedStyle = {
      transform: [{ rotateY: frontInterpolate }],
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: backInterpolate }],
    };

    return (
      <TouchableOpacity onPress={handleCardPress}>
        <Animated.View
          style={[styles.cardContainer, isFlipped ? backAnimatedStyle : frontAnimatedStyle]}
        >
          {isFlipped ? (
            <View style={[styles.card, styles.backCard]}>
              <Text style={styles.cardText}>Flip</Text>
            </View>
          ) : (
            <View style={styles.card}>
              <Text style={styles.cardText}>Assigned</Text>
              <Text style={styles.cardTextNum}>16</Text>
            </View>
          )}
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const renderCards = () => {
    const cards = [];

    for (let i = 0; i < 3; i++) {
      const isSelected = selectedCardIndex === i;

      cards.push(
        <CardComponent
          key={i}
          isFlipped={isSelected}
          onPress={() => setSelectedCardIndex(i)}
        />
      );
    }

    return cards;
  };

  return (
    <View style={{ backgroundColor: '#fffdf9', flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 10, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Ionicons name="menu-outline" size={40} />
          <Text style={{ fontWeight: 500, fontSize: 20, color: '#000' }}>Dashboard</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <MaterialCommunityIcons name="bell-badge-outline" size={40} />
          <Ionicons name="person-circle" size={40} />
        </View>

      </View>



      <View style={{ padding: 20 }} >
        <Text style={{ fontSize: 20, fontWeight: '500', color: '#000', marginBottom: 10 }}>Task Summary</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          {renderCards()}


        </View>

        <TouchableOpacity>
          <Text style={{ color: 'green', marginTop: 10 }}>See all todays tasks</Text>
        </TouchableOpacity>





        <View style={{ borderWidth: 1, borderColor: '#ccc', marginTop: 10 }} />


        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#000' }}>On-time Completion Rate</Text>
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>

              <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', marginRight: 10 }}>98 %</Text>
              <Feather name="arrow-up-right" size={20} color="#A4D0A4" />
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#A4D0A4' }}>2.73 %</Text>
            </View>
          </View>


          <View style={{ flex: 0.6 }}>


            <LineChart data={data}
              curved
              height={100}
              thickness={5}
              hideRules
              hideYAxisText
              yAxisColor="transparent"
              xAxisColor="transparent"
              color="#0BA5A4"
              hideDataPoints

            />
          </View>
        </View>

      </View>



      <View style={{ borderWidth: 3, borderColor: '#ccc' }} />

      <View style={{ paddingHorizontal: 20, paddingVertical: 10, marginTop: 30 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontWeight: '500', color: '#000' }}>Properties</Text>
          <View style={{ flexDirection: 'row', alignItems:'center'}}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#0BA5A4', marginRight: 20 }}>All Properties</Text>
          <Entypo name= 'chevron-right' size={18} color='#0BA5A4'/>
          </View>
          
        </View>


        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>

          <View>
            <View>
              <View style={{ marginBottom: 10, flexDirection: 'row', }}>
                <View style={{ width: 10, height: 10, backgroundColor: 'blue', marginTop: 8, marginRight: 5, borderRadius: 2 }}></View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: '500', color: '#000' }}>298</Text>
                  <Text style={{ fontSize: 12, color: '#000' }}>Occupied 48%</Text>
                </View>
              </View>
              <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                <View style={{ width: 10, height: 10, backgroundColor: 'green', marginTop: 8, marginRight: 5, borderRadius: 2 }}></View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: '500', color: '#000' }}>249</Text>
                  <Text style={{ fontSize: 12, color: '#000' }}>Vacant 39%</Text>
                </View>
              </View>
              <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                <View style={{ width: 10, height: 10, backgroundColor: 'orange', marginTop: 8, marginRight: 5, borderRadius: 2 }}></View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: '500', color: '#000' }}>298</Text>
                  <Text style={{ fontSize: 12, color: '#000' }}>Maintainance 13%</Text>
                </View>
              </View>

            </View>

          </View>
          {/* circular */}
          <View>
            <PieChart
              donut
              innerRadius={50}
              radius={60}
              data={pieData}
              centerLabelComponent={() => {
                return ( <View style={{alignItems: 'center'}}> 
                  <Text style={{ fontSize: 20, fontWeight: 600, color: '#000' }}>632</Text>
                 <Text style={{ fontSize: 14, color: '#000' }}>total Units</Text>
                </View>)
              }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Summary
