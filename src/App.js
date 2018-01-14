import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBG-l5nkFpdz_whVxkeX8R2ylpp1UmEh7w',
			authDomain: 'auth-ab0c3.firebaseapp.com',
			databaseURL: 'https://auth-ab0c3.firebaseio.com',
			projectId: 'auth-ab0c3',
			storageBucket: 'auth-ab0c3.appspot.com',
			messagingSenderId: '455716140808'
		});
	}

  render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>
					Auth App
				</Text>
			</View>            
    );
	}
}

export default App;