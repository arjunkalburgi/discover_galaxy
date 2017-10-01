import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class App extends React.Component {

	state = {
		messages: [],
		currentConnections: {}
	};

	componentWillMount() {
		this.setState({

			messages: [
				{
					_id: 1,
					text: 'Hello learner',
					createdAt: new Date(),
					user: {
						_id: 2,
						name: 'React Native',
						avatar: 'https://facebook.github.io/react/img/logo_og.png',
					},
				},
			],

		});
		this.gotonext()
	}

	async gotonext() {
		await new Promise(r=>setTimeout(r, 3000))
		this.props.navigation.navigate('GraphApp')
	}

	onSend(messages = []) {
		this.setState((previousState) => ({
			messages: GiftedChat.append(previousState.messages, messages),
		}));

		try {
			responseText = this.sendtoserver(messages[0].text); 
			// console.log(responseText)
		} catch (error) {
			console.log(error); 
		}
	}

	async sendtoserver(text) {
		const response = await fetch("https://backgalaxy.crumb33.hasura-app.io/messages/" + encodeURI(text)); 
		const responseText = await response.text(); 

		if (responseText) {
			var data = JSON.parse(responseText)
			var numofmessages = this.state.messages.length; 

			var message = {
				_id: numofmessages+1,
				text: data.message,
				createdAt: new Date(),
					user: {
						_id: 2,
						name: 'React Native',
						avatar: 'https://facebook.github.io/react/img/logo_og.png',
					},
			}

			this.setState((previousState) => ({
				messages: GiftedChat.append(previousState.messages, message),
			}));

			data = null

			// console.log(this.state.messages)

		} else {
			console.log("async error"); 
		}
	}


	render() {
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={(messages) => this.onSend(messages)}
				user={{
					_id: 1,
				}}
			/>
		);
	}
}
