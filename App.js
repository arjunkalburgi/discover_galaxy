import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';

import ChatApp from './ChatApp';
import GraphApp from './GraphApp';


const App = StackNavigator({
  ChatApp: {screen: ChatApp},
  GraphApp: {screen: GraphApp, navigationOptions: ({navigation}) => ({ graph: `${navigation.state.params.name}` }) },
});


export default class extends React.Component {
	state = {
		messages: [],
		currentConnections: {}
	};
	render() {
		return (
			<App />
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
				