window.React = require('react');
import Reflux from 'reflux';
import {broadStore, BroadActionType} from '../stores/broadStore.js'
import broadAction from '../actions/broadAction.js'
import SpinnerAction from '../components/common/spinner/spinnerAction.js'
import BroadList from '../components/broad/broadList.jsx'

var Broad = React.createClass({
    displayName: 'Broad',
    mixins: [Reflux.listenTo(broadStore, 'onStoreUpdate')],
    getInitialState: function () {
        return {
            broadList: [],
            pageIndex: 1
        }
    },
    componentDidMount() {
        SpinnerAction.open();
        broadAction.load();
    },
    onStoreUpdate: function(data) {
        if (BroadActionType.loadData == data.actionType) {
            SpinnerAction.close();
            this.setState({broadList: data.broadList});
        }
    },
    loadMore() {
        this.setState({pageIndex: ++ this.state.pageIndex});
        broadAction.load(this.state.pageIndex);
    },
    render: function () {
        return(
            <div className="content weiBody" ref="weiBody">
                {
                    this.state.broadList.length > 0?
                        <BroadList data={this.state.broadList} loadMore={this.loadMore}/>:
                        null
                }
            </div>
        )
    }
});

module.exports = Broad;