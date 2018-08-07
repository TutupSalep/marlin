import React from 'react';
import { StyleSheet, FlatList, Text, View, ListView } from 'react-native';

export default class LinksScreen extends React.Component {

  _marlinCount(){
      let hasil = [];
      for(let i = 1; i<= 50; i++){
          //hasil.push(i + "")
        if (this.hitungJumlah(hasil) === 5){
          break
        }
        if (this.hitungJumlah(hasil) === 2){
          if (this.kelipatanTiga(i) && this.kelipatanLima(i)){
            hasil.push(i + 'Marlin Booking')
              continue;
          }
          if (this.kelipatanTiga(i)) {
            hasil.push(i +'Booking')
              continue
          }
          if (this.kelipatanLima(i)) {
            hasil.push(i +'Marlin')
              continue
          }
        } else {
            if (this.kelipatanTiga(i) && this.kelipatanLima(i)) {
                hasil.push(i +'Marlin Booking');
                continue;
            }
            if (this.kelipatanTiga(i)) {
                hasil.push(i + 'Marlin');
                continue;
            }
            if (this.kelipatanLima(i)) {
                hasil.push(i + 'Booking');
                continue;
            }
        }
      }
      return hasil
  }

  hitungJumlah(jumlah){
    let total = jumlah.count
      return total
  }

    kelipatanTiga(number){
      if (number % 3 === 0){
        return true
      }
      return false
    }

    kelipatanLima(number){
    if (number % 5 === 0){
      return true
    }
    return false
  }


  render() {
    return (
        this._marlinCount().map((item) =>
            <View styles={styles.container}>
            <FlatList
                horizontal={true}
                styles={styles.container}
                data={item}
                renderItem={({item}) => <Text>{item}</Text>}
            />
            </View>
        )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
