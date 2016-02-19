var React = require('react');
import classnames from 'classnames'

export default class ActionLike extends React.Component {
    constructor(props) {
        super(props);
        this.state={isLight: this.props.liked}
    }
    render () {
        return(
            <span className="oprationItem" onTouchStart={() => this.setState({isLight: !this.state.isLight})}>
                <span className={classnames("praiseIcon", {"on": this.state.isLight})}>
                </span>
                {this.props.count}
            </span>
        )
    }
}