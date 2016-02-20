var React = require('react');
import InfiniteScroll from '../../common/infiniteScroll/InfiniteScroll.js'
import DetailsItem from './DetailsItem.jsx'
import SpinnerBar from '../../common/spinner/SpinnerBar.jsx'

var DetailsList = React.createClass({
    _getContent: function() {
        return (this.props.data||[]).map((x, index) => {
            return (
                <li key={index}>
                    <DetailsItem {...x} />
                </li>)
        })
    },
    _getScrollContainer: function() {
        return (
            <ul className="broadList" />
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

module.exports = DetailsList;