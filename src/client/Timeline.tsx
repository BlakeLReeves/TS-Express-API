import * as React from 'react';
import { Button, Card, CardTitle, CardText, CardFooter, Col } from 'reactstrap';
import $ from 'jquery';

interface WelcomeProps {
    chirp: { id: string, user: string, text: string };
}

const Timeline: React.SFC<WelcomeProps> = (props) => {

    const deleteChirp = (id: string) => {
        $.ajax({
            type: "DELETE",
            url: `/api/chirps/:id`
        })
    };
    

    return (
        <Col sm="12">
            <Card body className="col-md-8 mx-auto m-2">
                <Button onClick={() => deleteChirp(props.chirp.id)} type="submit" id="deleteChirp">X</Button>
                <CardTitle className="p-2 border border-dark border-top-0 border-left-0 border-right-0">{props.chirp.user} Chirped!</CardTitle>
                <CardText className="p-2">{props.chirp.text}</CardText>
                <CardFooter className="mt-2">{props.chirp.id}</CardFooter>
            </Card>
        </Col>
    );
};

export default Timeline;