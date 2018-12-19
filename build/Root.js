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
import { Provider, connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import MyComponent from 'components/MyComponent';
import { store } from './store';
import { changeToAbe, changeToKim, changeToMaeda } from 'actions';
var App = function () {
    return (<Provider store={store}>
      <Container />
    </Provider>);
};
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hello: 'Hello',
            world: 'World',
        };
        console.log(_this.props);
        return _this;
    }
    Root.prototype.render = function () {
        var _this = this;
        return (<View style={styles.container}>
        <MyComponent hello={this.state.hello} name={this.props.name}/>
        <Button title="Change to Abe !!!!" onPress={function () { return _this.props.handleAbeClick(); }}/>
        <Button title="Change to Kim !!!!" onPress={function () { return _this.props.handleKimClick(); }}/>
        <Button title="Change to Maeda !!!!" onPress={function () { return _this.props.handleMaedaClick(); }}/>
      </View>);
    };
    return Root;
}(React.Component));
export { Root };
var mapStateToProps = function (state) { return ({
    name: state.name,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    handleAbeClick: function () {
        dispatch(changeToAbe());
    },
    handleKimClick: function () {
        dispatch(changeToKim());
    },
    handleMaedaClick: function () {
        dispatch(changeToMaeda());
    }
}); };
var Container = connect(mapStateToProps, // to AppComponent's Prop
mapDispatchToProps)(Root);
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;
