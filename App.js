/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style = {{backgroundColor: '#F5F5F5', flexDirection: 'row', paddingTop: 8, alignItems: 'flex-start'}}>
        <View style = {{backgroundColor: '#3F51B5',flex:1, height:80, marginHorizontal:4, marginLeft:8 , BorderRadius: 4, flexDirection: 'row'}}>
            <View style = {{backgroundColor: 'yellow',flex:1, marginHorizontal: 4}}></View>
            <View style = {{backgroundColor: 'red',flex:1, marginHorizontal: 4}}></View>
            <View style = {{backgroundColor: 'black',flex:1, marginHorizontal: 4}}></View>
        </View>
        <View style = {{backgroundColor: '#A2E96F',flex:1, height:70, marginHorizontal:4, borderRadius:4, justifyContent: 'center'}}>
          <Text style = {{textAlign: 'center'}}>Center</Text>
        </View>
        <View style = {{backgroundColor: '#45A4E9',flex:1, height:60, marginHorizontal:4, borderRadius:4}}>
          <Text style = {{backgroundColor: 'yellow', flex: 1, marginHorizontal:4, textAlign: 'center'}}>smooth</Text>
        </View>
        <View style = {{backgroundColor: '#FFCA28',flex:1, height:50, marginHorizontal:4, marginRight:8, borderRadius: 4}}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default App;
