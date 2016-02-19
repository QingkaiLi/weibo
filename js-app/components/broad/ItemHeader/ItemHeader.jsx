var React = require('react');
import ItemAvatar from './ItemAvatar.jsx'
import Subscription from './Subscription.jsx'

export default class ItemHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {noFollowPanel, followed, ...others} = this.props;
        return (
            <span className="castingInfo">
                <ItemAvatar {...others}/>
            {
                noFollowPanel? null: <Subscription followed={followed}/>
            }
            </span>
        )
    }
}