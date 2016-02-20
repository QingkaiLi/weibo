var React = require('react');
import {Link, History} from 'react-router'
import ItemText from './ItemText.jsx'
import ItemImages from './ItemImages.jsx'

const ItemBody = React.createClass({
    mixins:[History],

    openDetail: function(id) {
        if (id) this.history.pushState(null, 'detail/'+id);
        else return false
    },
    render: function() {
        let {id, topics, images, content} = this.props;
        return (
            <span className="castingContent" onClick={this.openDetail.bind(this, id)}>
                <ItemText topics={topics} content={content}/>
                <ItemImages images={images}/>
            </span>
        )
    }
})

export default ItemBody;