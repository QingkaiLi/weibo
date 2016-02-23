import broadAction from '../actions/broadAction.js'
import spinnerAction from '../components/common/spinner/spinnerAction.js'
import {broadStore} from '../stores/broadStore.js'
import profileAction from '../actions/profileAction.js'
import fansAction from '../actions/fansAction.js'

export function forwardCallback(location) {
    const id = location ? location.params.item : 0;
    spinnerAction.open();
    broadAction.get(id);
}
export function leaveBroadCallback() {
    broadStore.resetState();
}

export function profileCallback(location) {
    var id = location ? location.params.id : 0;
    spinnerAction.open();
    profileAction.load(id);
}

export function fansCallback() {
    spinnerAction.open();
    fansAction.load();
}