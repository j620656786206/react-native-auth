import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBG-l5nkFpdz_whVxkeX8R2ylpp1UmEh7w',
			authDomain: 'auth-ab0c3.firebaseapp.com',
			databaseURL: 'https://auth-ab0c3.firebaseio.com',
			projectId: 'auth-ab0c3',
			storageBucket: 'auth-ab0c3.appspot.com',
			messagingSenderId: '455716140808'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
						<CardSection>
						<Button>
							Log Out
						</Button>
						</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

  render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>            
    );
	}
}

export default App;
