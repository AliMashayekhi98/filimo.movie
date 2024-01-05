// import React from "react";
// import { View, Text, Button, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//     return (
//         <View style={StyleSheet.container}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Click me"
//                 onPress={() => alert('button clicked')} />

//         </View>
//     );
// };

// export default HomeScreen;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems:'center',
//         justifyContent:'center',
//         backgroundColor:'#8fcbbc',
//     }
// });


import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Button, Image , ScrollView, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style={styles.text}>Search Movies :           </Text>
      <View style={styles.btn3}>
      <Button
          
          color="orange"
          title=" search"
          onPress={() => alert("taher")}>
        </Button>
        <Button
          
          color="red"
          title=" Watch the online movies"
          onPress={() => Alert.alert("آنلاین ببین!" ,"خامنه ای در حال کشیدن تریاک. زنده",[
            {text:"الان میبینم" },
            {text:"نه نمیخوام ببینم دیوثو"}
          ]
          )}>
        </Button>
        </View>
      <View  >
      
        {/* <Text style={styles.text}>Who's Ali Mashayekhi?</Text> */}
        {/* <input
        type={'text'}
        width={'100'}
        style={{ backgroundColor: 'orange' }}
        placeholder={'Search'} /> */}

        {/* <OTPInput
          numberOfDigits={6}
          focusColor="green"
          onTextChange={text => console.log(text)}
          containerStyle={styles.container}
          inputsContainerStyle={styles.inputsContainer}
          pinCodeContainerStyle={styles.pinCodeContainer}
          pinCodeTextStyle={styles.pinCodeText}
          focusStickStyle={styles.focusStick}
          focusStickBlinkingDuration={500}
        /> */}
      
        {/* <Button
          color="red"
          title="cancel"
          onPress={() => alert("taher")} /> */}

      </View>
      <ScrollView>
      <Text style={styles.text1}> 2023  :           </Text>
      <View style={styles.img}>
        <Image source={require("./assets/1.jpeg")}
         style={styles.imgchild} 
        />
        <Image source={require("./assets/1.jpeg")}
          style={styles.imgchild}
        />
        <Image source={require("./assets/2.jpeg")}
          style={styles.imgchild}
        />
         
        </View>
        
        <Button
          style={styles.btn1}
          color="orange"
          title=" More"
          onPress={() => alert("taher")}>
        </Button>
         <Text style={styles.text1}> NEW :           </Text>
       <View style={styles.img}>
        <Image source={require("./assets/3.jpeg")}
         style={styles.imgchild} 
        />
        <Image source={require("./assets/2.jpeg")}
          style={styles.imgchild}
        />
        <Image source={require("./assets/4.jpeg")}
          style={styles.imgchild}
        />
      </View>
      <Button
          style={styles.btn1}
          color="orange"
          title=" More"
          onPress={() => alert("taher")}>
        </Button>
         <Text style={styles.text1}> Horror :           </Text>
       <View style={styles.img}>
        <Image source={require("./assets/5.jpeg")}
         style={styles.imgchild} 
        />
        <Image source={require("./assets/2.jpeg")}
          style={styles.imgchild}
        />
        <Image source={require("./assets/3.jpeg")}
          style={styles.imgchild}
        />
      </View>
      <Button
          style={styles.btn1}
          color="orange"
          title=" More"
          onPress={() => alert("taher")}>
        </Button>
         <Text style={styles.text1}> Action :           </Text>
       <View style={styles.img}>
        <Image source={require("./assets/5.jpeg")}
         style={styles.imgchild} 
        />
        <Image source={require("./assets/2.jpeg")}
          style={styles.imgchild}
        />
        <Image source={require("./assets/3.jpeg")}
          style={styles.imgchild}
        />
      </View>
      <Button
          style={styles.btn1}
          color="orange"
          title=" More"
          onPress={() => alert("taher")}>
        </Button>
         <Text style={styles.text1}> Romance :           </Text>
       <View style={styles.img}>
        <Image source={require("./assets/5.jpeg")}
         style={styles.imgchild} 
        />
        <Image source={require("./assets/2.jpeg")}
          style={styles.imgchild}
        />
        <Image source={require("./assets/3.jpeg")}
          style={styles.imgchild}
        />
      </View>
      <Button
          style={styles.btn1}
          color="orange"
          title=" More"
          onPress={() => alert("taher")}>
        </Button>
         <Text style={styles.text1}> Comedy :           </Text>
       <View style={styles.img}>
        <Image source={require("./assets/5.jpeg")}
         style={styles.imgchild} 
        />
        <Image source={require("./assets/2.jpeg")}
          style={styles.imgchild}
        />
        <Image source={require("./assets/3.jpeg")}
          style={styles.imgchild}
        />
      </View>
      </ScrollView>
    </View>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 10,
    backgroundColor: '#29025C',
    alignItems: 'center',
    width:'100%',
    flexDirection:'column',
    justifyContent: 'center',

  },
  text: {
    color: 'dodgerblue',
    backgroundColor: 'white',
    fontSize: 14,
    marginLeft:2,
    padding:10,
    width:300,
    height:40,
  },
  text1: {
    width:340,
    color: 'dodgerblue',
    fontSize: 16,
    marginLeft:2,
    padding:10,
   borderTopWidth:1.5,
   marginTop:5,
   borderColor:'dodgerblue',
  },
  btn: {
    backgroundColor:'white',
    borderBottomEndRadius:50,
    alignItems:'flex-end',
    flexDirection: "row",
    flex: 0.35,
    marginBottom:10,
    paddingLeft: 0,
    marginLeft:10,
    height:40,
    
    
  },
  btn3: {
   height:70,
    flexWrap:'nowrap',
    alignItems:'flex-end',
    flexDirection: "row",
    marginBottom:30,
    paddingLeft: 0,
    marginLeft:10,

  },
  
  btn1: {
   
    backgroundColor:'white',
    borderBottomEndRadius:50,
    alignItems:'flex-end',
    flexDirection: "column",
    paddingLeft:10,
  },
  img: {
   
    paddingLeft:10,
    width: 20,
    height: 20,
    marginTop: 0,
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom:140,

  },
  imgchild: {
   
    paddingLeft:10,
    width: 100,
    height: 140,
    marginTop: 0,
    borderRadius:10,
    marginRight:16,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },



});

