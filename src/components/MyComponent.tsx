import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  hello: string;
  world: string;
}

export default class MyComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>{this.props.hello} {this.props.world}</Text>
      </View>
    );
  }
}