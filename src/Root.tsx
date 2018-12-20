import * as React from 'react';
import { Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyComponent from 'components/MyComponent';
import { HelloState } from './state';
import { store } from './store';
import { changeToAbe, changeToKim, changeToMaeda, Action } from 'actions';

interface AppProps {
  name: string;
  handleAbeClick(): void;
  handleKimClick(): void;
  handleMaedaClick(): void;
}

interface AppState {
  hello: string;
  world: string;
}

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export  class Root extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      hello: 'Hello',
      world: 'World',
    }

    console.log(this.props);
  }

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <MyComponent hello={this.state.hello} name={this.props.name} />
        <Button title="Change to Abe !!!!" onPress={() => this.props.handleAbeClick()} />
        <Button title="Change to Kim !!!!" onPress={() => this.props.handleKimClick()} />
        <Button title="Change to Maeda !!!!" onPress={() => this.props.handleMaedaClick()} />
      </View>
    );
  }
}

const mapStateToProps = (state: HelloState) => ({
  name: state.name,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  handleAbeClick(): void {
    dispatch(changeToAbe());
  },
  handleKimClick(): void {
    dispatch(changeToKim());
  },
  handleMaedaClick(): void {
    dispatch(changeToMaeda());
  }
});

const Container = connect(
  mapStateToProps, // to AppComponent's Prop
  mapDispatchToProps, //mapDispatchToProps
)(Root);

export default App;