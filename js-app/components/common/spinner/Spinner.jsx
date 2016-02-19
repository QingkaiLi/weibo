import Reflux from 'reflux';
import spinnerStore from './spinnerStore';
import classnames from 'classnames';

export default class Spinner extends React.Component {

    constructor (props) {
        super(props);
        this.state = spinnerStore.getInitialState();
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    componentDidMount () {
        this.unsubscribe = spinnerStore.listen(this.onStatusChange);
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    onStatusChange (status) {
        this.setState(status);
    }

    render () {
        let spinnerStyle = {
            hide: !this.state.show,
            loader: true
        };

        return  (
            <div className={classnames(spinnerStyle)}>
                <div className="react-spinner">
                    { [...Array(12)].map((number, index) =>
                            <div className="react-spinner_bar" key={index}/>
                    ) }
                </div>
            </div>
        );
    }
}