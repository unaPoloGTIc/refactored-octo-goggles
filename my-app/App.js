import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
//import Iframe from 'react-iframe';
import Iframe from 'react-native'; 

//import { Div } from 'react-native-div' ;

import React from 'react';
const GoogleDocumentViewer = () => {
    const documentURL = 'https://docs.google.com/spreadsheets/d/19kiKs-D4MoO-_hxRosJDFAmuj7E2_ZmUMWtyUForveA/';
  return (
   <View>
      <Iframe src={documentURL} width="100%" height="600px"/>
    </View>
  );
};


export default function App() {
    return (
      <View>
	  <Text>sigh
	      style=(styles.container)
	  </Text>
	  {/*GoogleDocumentViewer()*/ /*I had to duckduckgo how to add a comment here, and then it made sense.*/}

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
