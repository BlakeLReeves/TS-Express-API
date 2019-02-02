import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ChirpCardProps {
    chirp: { id: string, user: string, text: string }
}

const ChirpCard: React.SFC<ChirpCardProps> = (props) => {
    const { id, user, text } = props.chirp;
    return (
        <div className="col-md-12">
            <div className="card m-2">
                <div className="card-body">
                    <button id="deleteChirp">X</button>
                    <div className="card-title border border-dark border-top-0 border-left-0 border-right-0">{user} Chirped!</div>
                    <div className="card-text">{text}</div>
                    <div className="card-footer mt-2">{id}</div>
                </div>
            </div>
        </div>
    );
}

export default ChirpCard;