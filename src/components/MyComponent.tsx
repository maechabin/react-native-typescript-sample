import React from 'react';
import { Text, View } from 'react-native';

interface MyComponentProps {
  hello: string;
  name: string;
}

export default class MyComponent extends React.Component<MyComponentProps> {
  render() {
    return (
      <View>
        <Text>{this.props.hello} {this.props.name}</Text>
      </View>
    );
  }
}