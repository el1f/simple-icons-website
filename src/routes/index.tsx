import Topnav from 'components/Topnav';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Test: React.FC = () => <div>Hello</div>;

const Routes: React.FC = () => {
    return (
        <Router>
            <Topnav />
            <Switch>
                <Route path="/" component={Test} />
            </Switch>
        </Router>
    );
};

export default Routes;
