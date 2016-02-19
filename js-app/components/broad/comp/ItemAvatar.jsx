var React = require('react');

export default class ItemHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {title, createTime} = this.props;
        return (
            <span style={{display: 'inline-block'}}>
                <span className="avatarBorder">
                    <img src={"/images/"+title.avatar}  />
                </span>
                {
                    title.isVIP? <span className="vipIcon"></span>: null
                }
                <span className="insName">{title.name}</span>
                {
                    title.star? <span className="tags red">专</span>: null
                }
                <time>{createTime}</time>
            </span>
        )
    }
}