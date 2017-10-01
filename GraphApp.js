import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert, Image } from 'react-native';
const remote = 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Polycyclic_Aromatic_Hydrocarbons_In_Space.jpg';

export default class App extends React.Component {

	state = {
		parent: "",
		key: "",
		graph: []
	}

	componentWillMount() {
		// console.warn(JSON.stringify(this.props.navigation.state.params.connections))
		Alert.alert(
			'onLongPress',
			'Long press the nodes to see them in the chat',
			[
				{text: 'OK', onPress: () => {}},
			],
			{ cancelable: true }
		)
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

	async roamgraph(text) {
		// const response = await fetch("http://localhost:8080/messages/" + encodeURI(text)); 
		const response = await fetch("https://backgalaxy.crumb33.hasura-app.io/messages/" + encodeURI(text)); 
		const data = await response.json(); 

		this.setState({
			parent: data.explore_terms.parent,
			key: data.explore_terms.key,
			graph: data.explore_terms.graph
		});
	}

	nodefromparent(keytext) {
		return (<TouchableOpacity style={[othernodes.wrapper, {top: -100}]} onPress={()=>{this.roamgraph(keytext)}} onLongPress={()=>{this.sendtoserver(keytext)}}>
					<Text style={{color: '#fff'}}>{keytext}</Text>
				</TouchableOpacity>)
	}

	nodefromkey(keytext) {
		return (<TouchableOpacity style={[currnode.wrapper]} onPress={ () => this.sendtoserver(keytext) }>
					<Text>{keytext}</Text>
				</TouchableOpacity>)
	}

	keynode() {
		return this.nodefromkey(this.state.key)
	}

	nodefromgraph(node, i) {
		// console.log(JSON.stringify(node))
		return (<TouchableOpacity key={i} 
									style={[othernodes.wrapper, {top: node.place.top, left: node.place.left}]} 
									onPress={()=>{this.roamgraph(node.name)}} onLongPress={()=>{this.sendtoserver(node.name)}}>
					<Text style={{color: '#fff', textAlign: 'center'}}>{node.name}</Text>
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
			<Image source={{ uri: remote }} style={backgroundImage.backgroundImage}>
				<View style={styles.container}>
					{this.parent()}
					{this.keynode()}
					{this.children()}
				</View>
			</Image>


		)
	}
}

const backgroundImage = StyleSheet.create({
  	backgroundImage: {
	    flex: 1,
	    resizeMode: 'cover', // or 'stretch'
	    width: '100%',
	    height: '100%',
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const currnode = StyleSheet.create({
    wrapper: {
      padding: 5,
      borderRadius: 15,
      borderColor: '#000',
      borderWidth: 2,
      backgroundColor: '#fff',
      // minHeight: 20,
    },
}); 

const othernodes = StyleSheet.create({
    wrapper: {
      padding: 5,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: '#4c0f67',
      backgroundColor: '#ae57bf',
      // minHeight: 20,
    }
}); 
