export enum ActionType {
  CHANGE_HELLO_TO_ABE,
  CHANGE_HELLO_TO_KIM,
  CHANGE_HELLO_TO_MAEDA,
}

export function changeToAbe() {
  return {
    type: ActionType.CHANGE_HELLO_TO_ABE,
    payload: 'abe'
  };
}

export function changeToKim() {
  return {
    type: ActionType.CHANGE_HELLO_TO_KIM,
    payload: 'kim'
  };
}

export function changeToMaeda() {
  return {
    type: ActionType.CHANGE_HELLO_TO_MAEDA,
    payload: 'maeda'
  };
}
