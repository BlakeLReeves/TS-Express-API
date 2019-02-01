import * as React from 'react';
import './scss/app';
import { Jumbotron, Container, Row } from 'reactstrap';
import Timeline from './Timeline';
import $ from 'jquery';

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

    async postChirp() {
        try {
            let userInput = $(`#userInput`).val();
            console.log(userInput);
            let chirpInput = $(`#textInput`).val();
            console.log(chirpInput);
            // let data = {
            //     user: `${userInput}`,
            //     text: `${chirpInput}`
            // }
            await fetch(`/api/chirps`, {
                method: 'POST',
            })
        } catch (e) {
            console.log(e);
        }
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
                <div className="container">
                    <div className="row">
                        <div className="col-11 m-5">
                            <div className="form border border-primary rounded">
                                <div className="form-group form-control-lg">
                                    <div className="label">Username:</div>
                                    <input type="text" placeholder="Username" id="userInput" />
                                </div>
                                <div className="form-group form-control-lg mt-5">
                                    <div className="label">Chirp:</div>
                                    <input type="text" placeholder="What's happening?" id="textInput" />
                                </div>
                                <button onClick={() => this.postChirp()} type="submit" className="btn btn-primary mt-5 ml-3 mb-3 md" id="submitChirp">Chirp it!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containder">
                    <div className="row">
                        {this.state.chirps.map((chirp) => {
                            return <Timeline chirp={chirp} />
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