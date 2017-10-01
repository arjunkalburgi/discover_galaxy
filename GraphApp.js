import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

	state = {
		parent: "",
		key: "",
		graph: []
	}

	componentWillMount() {
		// console.warn(JSON.stringify(this.props.navigation.state.params.connections))
		this.setState({

			parent: this.props.navigation.state.params.connections.parent,
			key: this.props.navigation.state.params.connections.key,
			graph: this.props.navigation.state.params.connections.graph

		});
	}

	async sendtoserver(text) {

		this.props.navigation.state.params.buttonClicked(text); 
		this.props.navigation.goBack()
	}

	nodefromparent(keytext) {
		return (<TouchableOpacity style={{top: -100}} onPress={()=>{this.sendtoserver(keytext)}}>
					<Text>{keytext}</Text>
				</TouchableOpacity>)
	}

	nodefromkey(keytext) {
		return (<TouchableOpacity onPress={()=>{this.sendtoserver(keytext)}}>
					<Text>{keytext}</Text>
				</TouchableOpacity>)
	}

	keynode() {
		return this.nodefromkey(this.state.key)
	}

	nodefromgraph(node, i) {
		// console.log(JSON.stringify(node))
		return (<TouchableOpacity key={i} 
									style={{top: node.place.top, left: node.place.left}} 
									onPress={ () => this.sendtoserver(node.name) }>
					<Text>{node.name}</Text>
				</TouchableOpacity>)
	}

	children() {
		return this.state.graph.map((node, index)=>this.nodefromgraph(node, index))
	}

	parent() {
		return this.nodefromparent(this.state.parent)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.parent()}
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
