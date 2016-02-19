var React = require('react');
import ActionBar from './ActionBar.jsx'
import ItemContent from './ItemContent.jsx';

export default class BroadItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {title, createTime, followed, topics, content, images} = this.props;
        return (
            <li>
                <ItemContent>
                    <ItemContent.ItemHeader title={title} createTime={createTime} followed={followed}/>
                    <ItemContent.ItemBody topics={topics} content={content} images={images} />
                </ItemContent>
                <ActionBar data={this.props}/>
            </li>
        )
    }
}