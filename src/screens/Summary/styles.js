import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer: {
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden',
    },
    card: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      justifyContent: 'space-between',
      borderRadius: 10,
      padding: 10
    },
    backCard: {
      backgroundColor: 'red',
      borderRadius: 10,
      width: 100,
      height: 100,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardTextNum: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
      },
  });