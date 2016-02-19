var React = require('react');

export default class ActionComment extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <span className="oprationItem">
                <span className="commentIcon">
                </span>
                {this.props.count}
            </span>
        )
    }
}