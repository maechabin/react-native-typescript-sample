import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyComponent from 'components/MyComponent';
import { state } from './state';
import { reducer } from './reducers';
import { abe } from 'actions';

interface Props {
  hello: string,
  handleClick: () => void
}
interface State {
  hello: string;
  world: string;
}

const store = createStore(reducer, state);

const Root = (props: Props) => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hello: 'Hello',
      world: 'World',
    }

    console.log(this.props);
    console.log(`${this.props.handleClick}`, 'font-weight: bold');
  }

  componentWillMount() {
    console.log(`${this.props.handleClick}`, 'font-weight: bold');

  }

  render() {
    return (
      <View>
        <MyComponent hello={this.props.hello} world={this.state.world} />
        <Button title="test button !!!!" onPress={() => this.props.handleClick()} />
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  hello: state.hello,
});
const mapDispatchToProps = (dispatch: any) => ({
  handleClick() {
    // Storeのdispatchメソッド（引数はAction Creator）
    dispatch(abe());
  },
});
const Container = connect(
  mapStateToProps, // to AppComponent's Prop
  mapDispatchToProps, //mapDispatchToProps
)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
