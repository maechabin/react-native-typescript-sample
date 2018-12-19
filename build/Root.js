var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import MyComponent from 'components/MyComponent';
import { state } from './state';
import { reducer } from './reducers';
import { abe } from 'actions';
var store = createStore(reducer, state);
var Root = function (props) {
    return (<Provider store={store}>
      <Container />
    </Provider>);
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hello: 'Hello',
            world: 'World',
        };
        console.log(_this.props);
        console.log("" + _this.props.handleClick, 'font-weight: bold');
        return _this;
    }
    App.prototype.componentWillMount = function () {
        console.log("" + this.props.handleClick, 'font-weight: bold');
    };
    App.prototype.render = function () {
        var _this = this;
        return (<View>
        <MyComponent hello={this.props.hello} world={this.state.world}/>
        <Button title="test button !!!!" onPress={function () { return _this.props.handleClick(); }}/>
      </View>);
    };
    return App;
}(React.Component));
export default App;
var mapStateToProps = function (state) { return ({
    hello: state.hello,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    handleClick: function () {
        // Storeのdispatchメソッド（引数はAction Creator）
        dispatch(abe());
    },
}); };
var Container = connect(mapStateToProps, // to AppComponent's Prop
mapDispatchToProps)(App);
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
