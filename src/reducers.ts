import { state, HelloState } from "./state";
import { ActionType, Action } from "./actions";

const initialState = state;

export function reducer(
  state: HelloState = initialState,
  action: Action,
): HelloState {
  switch (action.type) {
    case ActionType.CHANGE_HELLO_TO_ABE:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.CHANGE_HELLO_TO_KIM:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.CHANGE_HELLO_TO_MAEDA:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
