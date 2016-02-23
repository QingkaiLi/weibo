var React = require('react');
import {History} from 'react-router'
var ItemHeader = React.createClass({
    mixins:[History],
    navToProfile:function() {
        this.history.pushState(null, 'profileIndex/'+this.props.id);
    },
    render:function() {
        let {title, createTime} = this.props;
        return (
            <span style={{display: 'inline-block'}} onTouchStart={this.navToProfile}>
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
})

module.exports = ItemHeader;