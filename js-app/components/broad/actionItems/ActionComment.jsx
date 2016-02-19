var React = require('react');
import { Link } from 'react-router'

export default class ActionComment extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <Link to={"comment/"+this.props.id}>
                <span className="oprationItem">
                    <span className="commentIcon">
                    </span>
                    {this.props.count}
                </span>
            </Link>
        )
    }
}