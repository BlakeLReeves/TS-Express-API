import * as React from 'react';

export interface JumbotronProps {

}

const Jumbotron: React.SFC<JumbotronProps> = () => {
    return (
        <div className="col-md-12">
            <div className="jumbotron">
                <h1 className="display-3 text-primary text-center">Chirper</h1>
            </div>
        </div>
    )
}

export default Jumbotron;