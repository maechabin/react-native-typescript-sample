export var ActionType;
(function (ActionType) {
    ActionType[ActionType["CHANGE_HELLO_TO_ABE"] = 0] = "CHANGE_HELLO_TO_ABE";
    ActionType[ActionType["CHANGE_HELLO_TO_KIM"] = 1] = "CHANGE_HELLO_TO_KIM";
    ActionType[ActionType["CHANGE_HELLO_TO_MAEDA"] = 2] = "CHANGE_HELLO_TO_MAEDA";
})(ActionType || (ActionType = {}));
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
