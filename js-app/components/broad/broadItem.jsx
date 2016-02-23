var React = require('react');
import ActionBar from './ActionBar.jsx'
import ItemContent from './ItemContent.jsx';

export default class BroadItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {id, title, createTime, followed, topics, content, images} = this.props;
        return (
            <li>
                <ItemContent>
                    <ItemContent.ItemHeader {...{id, title, createTime, followed}}/>
                    <ItemContent.ItemBody {...{id, topics, content, images}} />
                </ItemContent>
                <ActionBar data={this.props}/>
            </li>
        )
    }
}