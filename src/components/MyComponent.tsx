import React from 'react';
import { Text, View } from 'react-native';

interface MyComponentProps {
  hello: string;
  name: string;
}

const MyComponent: React.SFC<MyComponentProps> = props => (
  <View>
    <Text>{props.hello} {props.name}</Text>
  </View>
);

export default MyComponent;