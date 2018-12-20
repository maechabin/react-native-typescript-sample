export interface Action {
  type: ActionType,
  payload?: any,
}

export enum ActionType {
  CHANGE_HELLO_TO_ABE,
  CHANGE_HELLO_TO_KIM,
  CHANGE_HELLO_TO_MAEDA,
}

export function changeToAbe(): Action {
  return {
    type: ActionType.CHANGE_HELLO_TO_ABE,
    payload: 'abe',
  };
}

export function changeToKim(): Action {
  return {
    type: ActionType.CHANGE_HELLO_TO_KIM,
    payload: 'kim',
  };
}

export function changeToMaeda(): Action {
  return {
    type: ActionType.CHANGE_HELLO_TO_MAEDA,
    payload: 'maeda',
  };
}
