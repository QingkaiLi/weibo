var React = require('react');
var ReactDOM = require('react-dom');

class InfiniteScroll extends React.Component{
    static setDefaultLoader (loader) {
        InfiniteScroll._defaultLoader = loader;
    }
    constructor(props) {
        super(props);
        this.state = {
            scrollTimeout: undefined,
            isScrolling: false,
            isInfiniteLoading: false
        }
        this.utils = this.initActions.apply(this);
        this.passedEdgeForInfiniteScroll = this.passedEdgeForInfiniteScroll.bind(this);
    }
    initActions() {
        var that = this;
        return {
            nodeScrollListener: this.infiniteHandleScroll.bind(this),
            getScrollTop() {
                var scrollWrapper;
                if (that.refs && that.refs.scrollWrapper) {
                    scrollWrapper = ReactDOM.findDOMNode(that.refs.scrollWrapper)
                }
                return scrollWrapper? scrollWrapper.scrollTop: 0;
            },
            setScrollTop(top) {
                var scrollWrapper;
                if (that.refs && that.refs.scrollWrapper) {
                    scrollWrapper = ReactDOM.findDOMNode(that.refs.scrollWrapper)
                }
                if (scrollWrapper)
                    scrollWrapper.scrollTop = top;
            },
            scrollShouldBeIgnored(event) {
                return event.target !== ReactDOM.findDOMNode(that.refs.scrollWrapper)
            }
        }
    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
        if(React.Children.count(this.props.children) !== React.Children.count(nextProps.children)
                && this.state.isInfiniteLoading) {
            this.setState({
                isInfiniteLoading: false
            });
        }
    }
    componentWillUnmount() {

    }
    infiniteHandleScroll(e) {
        if (this.utils.scrollShouldBeIgnored(e)) {
            return;
        }

        this.manageScrollTimeouts.apply(this);
        if (this.passedEdgeForInfiniteScroll(this.utils.getScrollTop())
                && !this.state.isInfiniteLoading) {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
            this.setState(Object.assign(this.state, {isInfiniteLoading: true}));
            this.props.onLoad();
        }
    }
    manageScrollTimeouts() {
        // Maintains a series of timeouts to set this.state.isScrolling
        // to be true when the element is scrolling.
        if (this.state.scrollTimeout) {
            clearTimeout(this.state.scrollTimeout);
        }

        var that = this,
            scrollTimeout = setTimeout(() => {
                that.setState({
                    isScrolling: false,
                    scrollTimeout: undefined
                });
            }, 150);

        this.setState({
            isScrolling: true,
            scrollTimeout: scrollTimeout
        });
    }
    passedEdgeForInfiniteScroll(scrollTop: number): boolean {
        return scrollTop > ReactDOM.findDOMNode(this.refs.scrollBody).offsetHeight -
                ReactDOM.findDOMNode(this.refs.scrollWrapper).offsetHeight -
                this.props.infiniteLoadBeginEdgeOffset;
    }
    render() {
        return (
            React.cloneElement(this.props.scrollContainer,
                {
                    ref: "scrollWrapper",
                    style: styles.scrollWrapper,
                    onScroll: this.utils.nodeScrollListener
                },
                <div ref="scrollBody">
                    {this.props.children}
                </div>,
                this.state.isInfiniteLoading?
                    <div style={styles.loadingSpinner}>
                        {this.props.spinner}
                    </div>: null
                )
        )
    }
}

InfiniteScroll.defaultProps = {
    infiniteLoadBeginEdgeOffset: 5,
    onLoad: () => {},
    scrollContainer: <div/>,
    spinner: <span>正在加载...</span>
}

var styles = {
    scrollWrapper: {
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch'
    },
    loadingSpinner: {
        height: '32px',
        marginTop: '-32px'
    }
}

export default InfiniteScroll;