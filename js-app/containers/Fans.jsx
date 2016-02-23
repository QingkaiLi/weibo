var React = require('react');
import Reflux from 'reflux';
import fansStore from '../stores/fansStore.js'
import SpinnerAction from '../components/common/spinner/spinnerAction.js'
import ItemContent from '../components/broad/ItemContent.jsx'

var Fans = React.createClass({
    displayName: 'Fans',
    mixins: [Reflux.listenTo(fansStore, 'onStoreUpdate')],
    getInitialState: function () {
        return {
            fansList: [],
            loading: true
        }
    },
    onStoreUpdate: function(data) {
        SpinnerAction.close();
        this.setState({fansList: data});
    },
    _getContent() {
        return (this.state.fansList||[]).map((x, index) => {
            return(
                <li key={index}>
                    <ItemContent>
                        <ItemContent.ItemHeader {...x} followed={true}/>
                    </ItemContent>
                </li>)
        })
    },
    render: function () {
        return(
            <div className="content weiBody" style={{overflowY:'scroll'}}>
                <ul className="broadList">
                    {this._getContent()}
                </ul>
            </div>
        )
    }
});

module.exports = Fans;