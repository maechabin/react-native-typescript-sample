var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { state } from "./state";
import { ActionType } from "./actions";
var initialState = state;
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionType.CHANGE_HELLO_TO_ABE:
            console.log("action ちゃんと通ってるぜ");
            return __assign({}, state, { name: action.payload });
        case ActionType.CHANGE_HELLO_TO_KIM:
            console.log("action ちゃんと通ってるぜ");
            return __assign({}, state, { name: action.payload });
        case ActionType.CHANGE_HELLO_TO_MAEDA:
            console.log("action ちゃんと通ってるぜ");
            return __assign({}, state, { name: action.payload });
        default:
            return state;
    }
}
