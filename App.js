import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

// export default class App extends React.Component {

// 	state = {
// 		messages: [],
// 		currentConnections: {}
// 	};

// 	componentWillMount() {
// 		this.setState({

// 			messages: [
// 				{
// 					_id: 1,
// 					text: 'Hello learner',
// 					createdAt: new Date(),
// 					user: {
// 						_id: 2,
// 						name: 'React Native',
// 						avatar: 'https://facebook.github.io/react/img/logo_og.png',
// 					},
// 				},
// 			],

// 		});
// 	}

// 	onSend(messages = []) {
// 		this.setState((previousState) => ({
// 			messages: GiftedChat.append(previousState.messages, messages),
// 		}));

// 		try {
// 			responseText = this.sendtoserver(messages[0].text); 
// 			// console.log(responseText)
// 		} catch (error) {
// 			console.log(error); 
// 		}
// 	}

// 	async sendtoserver(text) {
// 		const response = await fetch("https://discovery.burst16.hasura-app.io/" + encodeURI(text)); 
// 		const responseText = await response.text(); 

// 		if (responseText) {
// 			var data = JSON.parse(responseText)
// 			var numofmessages = this.state.messages.length; 

// 			var message = {
// 				_id: numofmessages+1,
// 				text: data.message,
// 				createdAt: new Date(),
// 					user: {
// 						_id: 2,
// 						name: 'React Native',
// 						avatar: 'https://facebook.github.io/react/img/logo_og.png',
// 					},
// 			}

// 			this.setState((previousState) => ({
// 				messages: GiftedChat.append(previousState.messages, message),
// 				currentConnections: data.explore_terms
// 			}));

// 			data = null

// 			// console.log(this.state.messages)

// 		} else {
// 			console.log("async error"); 
// 		}
// 	}


// 	render() {
// 		return (
// 			<GiftedChat
// 				messages={this.state.messages}
// 				onSend={(messages) => this.onSend(messages)}
// 				user={{
// 					_id: 1,
// 				}}
// 			/>
// 		);
// 	}
// }

export default class App extends React.Component {

	_onPressButton() {
		console.log('BUTTON'); 
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={this._onPressButton}>
					<Text>Hellooooo</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
