import classnames from 'classnames'

export default class BurgerToggle extends React.Component {
    toggle() {
        this.props.toggle()
    }
    render () {
        let open = this.props.open;
        return (
            ['/', '/profileIndex'].indexOf(this.props.location.pathname)?
                <div className={classnames("burger", {"open": open})}
                        onTouchStart={this.toggle.bind(this)}>
                    <div className={classnames("x", {"rotate45": open})}></div>
                    <div className={classnames("y", {"hide": open})}></div>
                    <div className={classnames("z", {"rotate135": open})}></div>
                </div>
                :null
        )
    }
}