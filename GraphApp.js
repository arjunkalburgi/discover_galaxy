import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

	state = {
		parent: "",
		key: "",
		graph: []
	}

	componentWillMount() {
		this.setState({

			parent: "biology",
			key: "organisms",
			graph: [
				{"name": "cells", "place": {top: 49.6074, left: 80.9159}, "func": ()=>{this._onPressButton1()} },
				{"name": "sex", "place": {top: 109.171, left: 82.0384}, "func": ()=>{console.log("chat of sex")}},
				{"name": "plants", "place": {top: 25.319, left: -81.7774}, "func": ()=>{console.log("chat of plants")}},
				{"name": "immune system", "place": {top: 121.382, left: -82.8285}, "func": ()=>{console.log("chat of immune system")}}
			]

		});
	}

	async sendtoserver(text) {
		// const response = await fetch("https://backgalaxy.crumb33.hasura-app.io/messages/" + encodeURI(text)); 
		const response = await fetch("http://localhost:8080/messages/" + encodeURI(text)); 
		const data = await response.json(); 


		this.setState({

			parent: data.explore_terms.parent,
			key: data.explore_terms.key,
			graph: data.explore_terms.graph

		});


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
