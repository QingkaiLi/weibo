var React = require('react');
import classnames from 'classnames'

export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {followed: this.props.followed}
    }
    toggle() {
        this.setState({followed: !this.state.followed})
    }
    render() {
        return (
            <span className={classnames("followIcon", {"followed": this.state.followed})} onTouchStart={this.toggle.bind(this)}>
                <span className="icon icon-check"></span>{this.state.followed? "已关注": "加关注"}
            </span>
        )
    }
}