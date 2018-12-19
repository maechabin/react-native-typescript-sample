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
import React from 'react';
import { Text, View } from 'react-native';
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        return _super.call(this, props) || this;
    }
    MyComponent.prototype.render = function () {
        return (<View>
        <Text>{this.props.hello} {this.props.world}</Text>
      </View>);
    };
    return MyComponent;
}(React.Component));
export default MyComponent;
