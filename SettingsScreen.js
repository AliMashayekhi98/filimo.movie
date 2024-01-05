// import React from "react";
// import { View, Text, Button, StyleSheet } from 'react-native';

// const SettingsScreen = ({ navigation }) => {
//     return (
//         <View style={StyleSheet.container}>
//             <Text>Settings Screen</Text>
//             <Button
//                 title="Click me"
//                 onPress={() => alert('button clicked')} />

//         </View>
//     );
// };

// export default SettingsScreen;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems:'center',
//         justifyContent:'center',
//         backgroundColor:'#29025C',
//     }
// });

import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';

export default class SettingsScreen extends Component {
    onPressButton() {
        alert('You clicked the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
            <ScrollView horizontal={true} style={styles.container1}>
              
                
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                <Button  
                        onPress={this.onPressButton}  
                        title="More"  
                        color="orange"  
                    />  
                   <Text style={{ fontSize: 15, padding: 5 , color: 'white',alignItems:'center'}}>advanture</Text>
                    
                </View>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                <Image source={require("../assets/6.jpg") }
                        style={styles.imgchild}
                    />
            </View>
                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/5.jpeg")}
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/3.jpeg")}
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/4.jpeg")}
                        style={styles.imgchild}
                    />
                </View>
                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100,height: 130,padding: 10 , alignItems:'center'}]}>  
                  
                </View>  
            </ScrollView>

            <ScrollView horizontal={true} style={styles.container1}>
                <Text style={{ fontSize: 22, padding: 5 , color: 'white'}}></Text>
                <View style={[{ width: 160, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/1full.jpg") }
                        style={styles.imgchild1}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 160, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/2full.jpg")}
                        style={styles.imgchild1}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 160, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/3full.jpg")}
                        style={styles.imgchild1}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 160, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/4full.jpeg")}
                        style={styles.imgchild1}
                    />
                </View>
                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100,height: 130,padding: 10 , alignItems:'center'}]}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="More"  
                        color="orange"  
                    />  
                </View>  
            </ScrollView>

            <ScrollView horizontal={true} style={styles.container1}>
                
            <View style={[{ width: 100, height: 130, padding: 10 }]}>
                <Button  
                        onPress={this.onPressButton}  
                        title="Watch"  
                        color="orange"  
                    />  
                   <Text style={{ fontSize: 13, padding: 5 , color: 'white',alignItems:'center'}}>Extraction 2</Text>
                    
                </View>
                <View style={[{ width: 160, height: 130, padding: 10 }]}>
                <Image source={require("../assets/extra1.jpg") }
                        style={styles.imgchild1}
                    />
            </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/extra2.jpeg")}
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 160, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/extra4.jpeg")}
                        style={styles.imgchild1}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 160, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/extra3.jpg")}
                        style={styles.imgchild1}
                    />
                </View>
                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100,height : 130,padding: 10 , alignItems:'center'}]}>  
                   
                </View>  
            </ScrollView>
            <ScrollView horizontal={true} style={styles.container1}>
                <Text style={{ fontSize: 22, padding: 5 , color: 'white'}}></Text>
                <View style={[{ width: 100, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/1per.jpeg") }
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/2per.jpeg")}
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/3per.jpg")}
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height : 130, padding: 10 }]}>
                    <Image source={require("../assets/4per.jpg")}
                        style={styles.imgchild}
                    />
                </View>
                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100,height : 130,padding: 10 , alignItems:'center'}]}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="More"  
                        color="orange"  
                    />  
                     <Text style={{ fontSize: 13, padding: 5 , color: 'white',alignItems:'center'}}>Persian</Text>
                </View>  
            </ScrollView>
            <ScrollView horizontal={true} style={styles.container1}>
            <View style={[{ width: 100, height: 130, padding: 10 }]}>
                <Button  
                        onPress={this.onPressButton}  
                        title="More"  
                        color="orange"  
                    />  
                   <Text style={{ fontSize: 15, padding: 5 , color: 'white',alignItems:'center'}}>advanture</Text>
                    
                </View>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                <Image source={require("../assets/6.jpg") }
                        style={styles.imgchild}
                    />
            </View>
                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/5.jpeg")}
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/3.jpeg")}
                        style={styles.imgchild}
                    />
                </View>

                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100, height: 130, padding: 10 }]}>
                    <Image source={require("../assets/4.jpeg")}
                        style={styles.imgchild}
                    />
                </View>
                <Text style={{ fontSize: 22, padding: 5 }}></Text>
                <View style={[{ width: 100,height: 130,padding: 10 , alignItems:'center'}]}>  
                  
                </View>  
            </ScrollView>
            </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29025C',
    },
    container1: {
        borderBottomColor:'dodgerblue',
        borderBottomWidth:1.5,
        height:150,
        backgroundColor: '#29025C',
    },
    // container2: {
    //     height:200,
    //     backgroundColor: '#29025C',
    // },
    imgchild:{
        borderRadius:10,
        width:100,
        height:120,
        borderBottomWidth:1.5,
        marginTop:5,
        borderColor:'dodgerblue',
    },
    imgchild1:{
        borderRadius:10,
        width:160,
        height:120,
        borderBottomWidth:1.5,
        marginTop:5,
        borderColor:'dodgerblue',
    }
    /*    buttonStyle:{ 
            height: 50, 
            width: 70, 
        }*/
})
// skip this line if you are using Create React Native App  
AppRegistry.registerComponent('AwesomeProject', () => ScrolledViewExample);  