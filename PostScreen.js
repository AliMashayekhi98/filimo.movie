
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'


class PostScreen extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <Text style={styles.submitButtonText1}> Join the world's biggest community of film lovers. Explore and discuss great cinema with over 12 million members. Discover wonderful.</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="  Phone Number"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TextInput style={styles.input}
             
                    underlineColorAndroid="transparent"
                    placeholder=" Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"

                    onChangeText={this.handlePassword} />
             <View style={styles.btn}  >
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Enter to your Profile </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Register </Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}
export default PostScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#29025C',
        flex: 1,
    },
    input: {
        fontWeight:'bold',
        fontSize:16,
        color: 'white',
        margin: 15,
        height: 50,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 30,
        textAlign: 'center',
    },
    submitButton: {
       
        backgroundColor: 'dodgerblue',
        width:'57%',
        padding: 10,
        margin: 10,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',

    },
    registerButton: {
        
        width:'30%',
        backgroundColor: 'orange',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        height: 40,
        alignItems: 'center',
    },
    submitButtonText: {
        fontWeight:'400',
        fontSize:16,
        color: 'white'
    },
    submitButtonText1: {
        fontWeight:'200',
        fontSize:18,
        color: 'white',
        padding:20,
    },
    btn: {
        flexDirection:'row',
        flex:1,
        flexWrap:'nowrap',
    }
})