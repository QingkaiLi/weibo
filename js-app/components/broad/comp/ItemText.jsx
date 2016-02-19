var React = require('react');

export default class ItemText extends React.Component {
    constructor(props) {
        super(props);
    }
    _getTopicContent() {
        let topics = this.props.topics;
        return (topics||[]).map((x, index) => {
            let text = `#${x}#`;
            return <a href="#" className="topic" key={index}>{text}</a>
        })
    }
    render() {
        return (
            <span className="castingTxt">
                {this._getTopicContent()}
                {this.props.content}
            </span>
        )
    }
}