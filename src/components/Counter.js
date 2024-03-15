import React from 'react';
import { connect } from 'react-redux';

import classes from './Counter.module.css';

class Counter extends React.Component {
    state = { show: true };

    incrementHandler = () => {
        this.props.increment();
    };

    decrementHandler = () => {
        this.props.decrement();
    };

    toggleCounterHandler = () => {
        this.setState((ps) => ({ ...ps, show: !ps.show }));
    };

    render() {
        let content = (
            <>
                {this.state.show && <div className={classes.value}>{this.props.count}</div>}
                <div>
                    <button onClick={this.incrementHandler}>Increment</button>
                    <button onClick={this.decrementHandler}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </>
        );

        if (!this.props.isLoggedIn) {
            content = <p style={{ color: '#1f1f1f' }}>Please log in to use this function</p>;
        }

        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                {content}
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        count: state.counter.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
