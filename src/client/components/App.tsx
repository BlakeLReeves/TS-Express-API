import * as React from 'react';
import '../scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RequestChirps from './public/RequestChirps';

class IApp extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <Router>
                <>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={RequestChirps} />
                        </Switch>
                    </div>
                </>
            </Router>
        );
    }
}

interface IAppProps { }
interface IAppState { }

export default IApp