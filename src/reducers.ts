import { state, HelloState } from "./state";
import { ActionType } from "./actions";

const initialState = state;

export function reducer(
  state: HelloState = initialState,
  action: { type: ActionType, payload?: any },
) {
  switch (action.type) {
    case ActionType.CHANGE_HELLO_TO_ABE:
      console.log("action ちゃんと通ってるぜ");
      return {
        ...state,
        name: action.payload
      };
    case ActionType.CHANGE_HELLO_TO_KIM:
      console.log("action ちゃんと通ってるぜ");
      return {
        ...state,
        name: action.payload
      };
    case ActionType.CHANGE_HELLO_TO_MAEDA:
      console.log("action ちゃんと通ってるぜ");
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}
