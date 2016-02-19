var React = require('react');
import Reflux from 'reflux';
import {broadStore, BroadActionType} from '../stores/broadStore.js'
import SpinnerAction from '../components/common/spinner/spinnerAction.js'

var Forward = React.createClass({
    displayName: 'Forward',
    mixins: [Reflux.listenTo(broadStore, 'onStoreUpdate')],
    getInitialState: function () {
        return {
            selectedBroad: {},
            loading: true
        }
    },
    componentDidMount: function() {
        console.log(">>>>>>>page ok")
    },
    onStoreUpdate: function(data) {
        if (BroadActionType.getData == data.actionType) {
            SpinnerAction.close();
            this.setState({selectedBroad: data.selectedBroad, loading: false});
        }
    },
    render: function () {
        return(
            <div className="content weiBody">
                dasdasdasdasda
            </div>
        )
    }
});

module.exports = Forward;