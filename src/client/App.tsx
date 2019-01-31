import * as React from 'react';
import './scss/app';
import { Jumbotron } from 'reactstrap';
import Timeline from './Timeline';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            chirps: []
        };
    }

    async componentWillMount() {
        let r = await fetch('/api/chirps');
        let data = await r.json();
        let chirps = Object.keys(data).map(key => {
            return {
                id: key,
                user: data[key].user,
                text: data[key].text
            };
        });
        chirps.pop();
        chirps.reverse();
        this.setState({ chirps })
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <Jumbotron className="col-12">
                            <h1 className="display-3 text-primary text-center">Chirper</h1>
                        </Jumbotron>
                    </div>
                </div>
                <div className="containder">
                    <div className="row">
                        {this.state.chirps.map((chirp, index) => {
                            return <Timeline key={index} chirp={chirp} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    chirps: { id: string, user: string, text: string }[];
}