import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, fetch} from 'react-native';

class Greeting extends React.Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        //Toggle the state
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={styles.bigGreen}>{display}</Text>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', isLoading: false};
    }

    function getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={{flex: 2}}>
                <View style={styles.container}>
                    <Text style={styles.bigGreen}>Hello World!</Text>
                    <Greeting name="Mike"/>
                    <Greeting name="Emily"/>
                    <Greeting name="Nate"/>
                    <Blink text="I am blinking green!"/>
                    <TextInput placeholder="Type here" onChangeText={(text) => this.setState({text})}/>
                    <Text style={{fontSize: 30}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
                </View>
                <View style={{flex: 1}}>
                    <Button style={{flex: 5}} title="Click me" onPress={() => {
                        Alert.alert('You pressed me!');
                        getMoviesFromApiAsync();
                    }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigGreen: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30
    }
});
