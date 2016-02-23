import classnames from 'classnames'
import RoutePattern from 'route-pattern'

const NeedMenuNav = ['/', '/profileIndex/**'];

export default class BurgerToggle extends React.Component {
    toggle() {
        this.props.toggle()
    }
    needMenuNav(path) {
        for (var i = 0; i < NeedMenuNav.length; i ++)
            if(RoutePattern.fromString(NeedMenuNav[i]).matches(path)) return true;
        return false;
    }
    render () {
        let open = this.props.open;
        let needOpen = this.needMenuNav(this.props.location.pathname)
        return (
            needOpen?
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