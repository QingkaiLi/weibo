var React = require('react');
import ItemHeader from './itemHeader/ItemHeader.jsx'
import ItemBody from './itemBody/ItemBody.jsx'

export default class ItemContentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="listItem">
                {this.props.children}
            </span>
        )
    }
}

ItemContentIndex.ItemHeader = ItemHeader;
ItemContentIndex.ItemBody = ItemBody;