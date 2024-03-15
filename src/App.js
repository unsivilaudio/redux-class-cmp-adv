import React from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter';
import classes from './App.module.css';
import UserProfile from './components/UserProfile';

class App extends React.Component {
    render() {
        return (
            <main className={classes.App}>
                <header>
                    <h2>Welcome to the App</h2>
                    {!this.props.isLoggedIn && (
                        <>
                            <p>You are currently NOT logged in.</p>
                            <button onClick={this.props.login}>Log In</button>
                        </>
                    )}
                </header>
                {this.props.isLoggedIn && <UserProfile />}
                <Counter />
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({ type: 'LOGIN' }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
