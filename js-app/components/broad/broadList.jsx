var React = require('react');
import InfiniteScroll from '../common/infiniteScroll/InfiniteScroll.js'
import BroadItem from './broadItem.jsx'
import Infinite from 'react-infinite'
import SpinnerBar from '../common/spinner/SpinnerBar.jsx'
import broadAction from '../../actions/broadAction.js'
import Reflux from 'reflux'

var BroadList = React.createClass({
    mixins: [
        Reflux.listenTo(broadAction.refreshStart, 'refreshStart')
    ],
    refreshStart:function() {
        //this.infinitScroll.refresh();
    },
    _getContent: function() {
        return (this.props.data||[]).map((x, index) => {
            return <BroadItem {...x} key={index}/>
        })
    },
    _getScrollContainer: function() {
        return (
            <ul className="broadList">
            </ul>
        )
    },
    render() {
        return (
            <InfiniteScroll ref="infinitScroll"
                onLoad={this.props.loadMore}
                scrollContainer={this._getScrollContainer()}
                spinner={<SpinnerBar />}>
                {this._getContent()}
            </InfiniteScroll>
        )
    }
})

module.exports = BroadList;