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

	state = {
		key: "",
		graph: []
	}

	componentWillMount() {
		this.setState({

			key: "organisms",
			graph: [
				{"name": "cells", "place": {top: 49.6074, left: 80.9159}, "func": ()=>{this._onPressButton1()} },
				{"name": "sex", "place": {top: 109.171, left: 82.0384}, "func": ()=>{console.log("chat of sex")}},
				{"name": "plants", "place": {top: 25.319, left: -81.7774}, "func": ()=>{console.log("chat of plants")}},
				{"name": "immune system", "place": {top: 121.382, left: -82.8285}, "func": ()=>{console.log("chat of immune system")}}
			]

		});
	}

	_onPressButton1() {
		console.log("hello")
		this.setState ({
			key: "plants", 
			graph: [ 
				{"name": "hydroponics","place":{"top":2.55137,"left":-61.0646}, "func": ()=>{console.log("chat of hydroponics")}},
				{"name": "photosynthesis","place":{"top":82.2621,"left":74.2979}, "func": ()=>{console.log("chat of photosynthesis")}}
			]
		})
	}
	_onPressButton2() {
		console.log('BUTTON2'); 
	}
	_onPressButton3() {
		console.log('BUTTON3'); 
	}
	_onPressButton4() {
		console.log('BUTTON4'); 
	}

	nodefromkey(keytext) {
		return (<TouchableHighlight onPress={()=>{this._onPressButton4()}}>
					<Text>{keytext}</Text>
				</TouchableHighlight>)
	}

	keynode() {
		return this.nodefromkey(this.state.key)
	}

	nodefromgraph(node) {
		console.log(JSON.stringify(node))
		return (<TouchableHighlight key={node.name} style={{top: node.place.top, left: node.place.left}} onPress={node.func}>
					<Text>{node.name}</Text>
				</TouchableHighlight>)
	}

	children() {
		return this.state.graph.map(this.nodefromgraph)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.keynode()}
				{this.children()}
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

<TouchableHighlight onPress={this._onPressButton1}>
					<Text>organisms</Text>
				</TouchableHighlight>
				