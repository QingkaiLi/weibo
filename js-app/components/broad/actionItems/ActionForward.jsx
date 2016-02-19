var React = require('react');
import { Link } from 'react-router'

export default class ActionForward extends React.Component {
    render () {
        return(
            <Link to={"forward/"+this.props.id}>
                <span className="oprationItem">
                    <span className="forwardIcon">
                    </span>
                    {this.props.count}
                </span>
            </Link>
        )
    }
}