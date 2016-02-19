import classnames from 'classnames'

export default class Menu extends React.Component {
    remove(e) {
        e.preventDefault();
        this.props.remove();
    }
    render () {
        return (
            <div className={classnames("mask", {"hide": !this.props.open})} onTouchStart={this.remove.bind(this)}></div>
        )
    }
}