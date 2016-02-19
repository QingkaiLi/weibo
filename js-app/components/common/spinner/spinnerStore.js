var Reflux = require('reflux'),
    spinnerAction = require("./spinnerAction");

var SpinnerStore = Reflux.createStore({
    listenables: spinnerAction,

    show: false,

    getInitialState: function () {
        return {
            show: this.show
        }
    },

    onOpen: function () {
        this.trigger({
            show: true
        });
    },

    onClose: function () {
        this.trigger({
            show: false
        });
    }

});

module.exports = SpinnerStore;