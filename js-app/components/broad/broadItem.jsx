var React = require('react');
import ItemHeader from './ItemHeader.jsx'
import ItemAvatar from './comp/ItemAvatar.jsx'
import Subscription from './comp/Subscription.jsx'
import ItemBody from './ItemBody.jsx'
import ItemText from './comp/ItemText.jsx'
import ItemImages from './comp/ItemImages.jsx'
import ActionBar from './ActionBar.jsx'

export default class BroadItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {title, createTime, followed, topics, content, images} = this.props;
        return (
            <li>
                <span className="listItem">
                    <ItemHeader>
                        <ItemAvatar title={title} createTime={createTime}/>
                        <Subscription followed={followed}/>
                    </ItemHeader>

                    <ItemBody>
                        <ItemText topics={topics} content={content}/>
                        <ItemImages images={images}/>
                    </ItemBody>
                </span>
                <ActionBar data={this.props}/>
            </li>
        )
    }
}