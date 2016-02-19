import broadAction from '../actions/broadAction.js'
import spinnerAction from '../components/common/spinner/spinnerAction.js'
import {broadStore} from '../stores/broadStore.js'

export function forwardCallback(location) {
    const id = location ? location.params.item : 0;
    spinnerAction.open();
    broadAction.get(id);
}
export function leaveBroadCallback() {
    broadStore.resetState();
}