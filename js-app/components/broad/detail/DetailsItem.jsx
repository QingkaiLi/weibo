var React = require('react');
import ItemHeader from '../itemHeader/ItemHeader.jsx'
import ItemBody from '../itemBody/ItemBody.jsx'

var DetailsItem = React.createClass({
    render() {
        return (
            <span className="listItem">
                <ItemHeader {...this.props} noFollowPanel={true} />
                <ItemBody {...this.props}/>
            </span>
        )
    }
})

module.exports = DetailsItem;