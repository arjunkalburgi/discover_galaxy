import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';

import ChatApp from './ChatApp';
import GraphApp from './GraphApp';


export default StackNavigator({
  ChatApp: {screen: ChatApp},
  GraphApp: {screen: GraphApp},
});


class App extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<BasicApp />
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
				