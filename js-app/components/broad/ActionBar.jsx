var React = require('react');
import ActionLike from './actionItems/ActionLike.jsx'
import ActionComment from './actionItems/ActionComment.jsx'
import ActionForward from './actionItems/ActionForward.jsx'

export default class ActionBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="castingOprations">
                <ActionForward count={this.props.data.forwards} id={this.props.data.id}/>
                <ActionComment count={this.props.data.comments} id={this.props.data.id}/>
                <ActionLike liked={this.props.data.like} count={this.props.data.likes}/>
            </span>
        )
    }
}
