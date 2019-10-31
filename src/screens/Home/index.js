import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import HomeController from './controller';
import {User} from './Model/user';

export default class Home extends Component {
  userId: number = 1;
  state = {
    user: User,
  };
  getData() {
    HomeController.getUser(this.userId).then(user => {
      this.setState({user});
    });
  }

  constructor(args) {
    super(args);
    HomeController.getUser(this.userId).then(user => this.setState({user}));
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <Button title={'service'} onPress={this.getData.bind(this)} />
        <TextInput onChangeText={value => (this.userId = value)} />
        <Text>{this.state.user.title} </Text>
      </View>
    );
  }
}
