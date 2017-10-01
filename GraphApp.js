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


		// const response = await fetch("https://backgalaxy.crumb33.hasura-app.io/messages/" + encodeURI(text)); 
		// const response = await fetch("http://localhost:8080/messages/" + encodeURI(text)); 
		// const data = await response.json(); 

		// this.props.navigation.navigate('ChatApp', {response: data})

		// this.setState({

		// 	parent: data.explore_terms.parent,
		// 	key: data.explore_terms.key,
		// 	graph: data.explore_terms.graph

		// });


		// console.log(this.state.messages)

	}


	_onPressButton1() {
		console.log("hello")
		this.setState ({

			parent: "organisms",
			key: "plants", 
			graph: [ 
				{"name": "hydroponics","place":{"top":2.55137,"left":-61.0646}, "func": ()=>{console.log("chat of hydroponics")}},
				{"name": "photosynthesis","place":{"top":82.2621,"left":74.2979}, "func": ()=>{console.log("chat of photosynthesis")}}
			]
		})
	}

	nodefromparent(keytext) {
		return (<TouchableOpacity style={{top: -100}} onPress={()=>{this.sendtoserver({keytext})}}>
					<Text>{keytext}</Text>
				</TouchableOpacity>)
	}

	nodefromkey(keytext) {
		return (<TouchableOpacity onPress={()=>{this.sendtoserver({keytext})}}>
					<Text>{keytext}</Text>
				</TouchableOpacity>)
	}

	keynode() {
		return this.nodefromkey(this.state.key)
	}

	nodefromgraph(node) {
		// console.log(JSON.stringify(node))
		return (<TouchableOpacity key={node.name} 
									style={{top: node.place.top, left: node.place.left}} 
									onPress={ () => this.sendtoserver(node.name) }>
					<Text>{node.name}</Text>
				</TouchableOpacity>)
	}

	children() {
		return this.state.graph.map(node=>this.nodefromgraph(node))
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
