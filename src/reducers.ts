import { state, Hello } from "./state";
import { CHANGE_HELLO_TO_ABE } from "./actions";

export function reducer(state: Hello = { hello: "init" }, action: any) {
  switch (action.type) {
    case CHANGE_HELLO_TO_ABE:
      console.log("action ちゃんと通ってるぜ");
      return {
        ...state,
        hello: action.payload
      };
      break;
    default:
      return state;
      break;
  }
}
