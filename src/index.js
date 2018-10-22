import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.box}>
				<Text style={styles.text}>Hello, world!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: { padding: 10 },
	text: { 
		color: 'green',
		fontWeight: 'bold' 
	},
});
