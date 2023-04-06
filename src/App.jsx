import React, {useState}from 'react';
import {Container, Button, Image, Modal, ProgressBar, Col, Row} from 'react-bootstrap';

import Cover from './assets/vs.jpg';
import './app.css';

const App = () => {
    const messages = [
        "Which brand of console do you prefer?",
        "Which console would you prefer to own?",
        "Which brand has better overall performance?",
        "Which brand has better exclusive games?",
        "Which brand has better value for the price?"
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [score, setScore] = useState({ps:0, xb:0});
    
    const handleButtonClick = (consoleType) => {
        if (consoleType == 'ps') {
            setScore({...score, ps: score.ps + 1});
        } else if (consoleType == 'xb') {
            setScore({...score, xb: score.xb + 1});
        }
        if (currentMessageIndex == messages.length - 1) {
            handleShow();
        } else {
            setCurrentMessageIndex(currentMessageIndex + 1);
        }
    };

    const reset = () => {
        setScore({...score, ps: 0, xb: 0});
        setCurrentMessageIndex(0);
        handleClose();
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };

    return (
        <div>
            <Container>
                <h1 className="text-center mt-3">Cast your vote</h1>
                <Container className="border border-dark border-2 mt-2 bg-dark px-0" style={{maxHeight: 500, maxWidth: 500}}>
                    <Image src={Cover} fluid></Image>
                    <p className="text-light text-center mt-2">{messages[currentMessageIndex]}</p>
                    <Container className="d-flex justify-content-center align-items-center mb-4" sm="flex-column">
                        <Button variant="danger" className="me-2" size="sm w-100" onClick={() => handleButtonClick('ps')}>
                            PlayStation
                        </Button>
                        <Button variant="secondary" size="sm w-100" onClick={() => handleButtonClick('xb')}>
                            Xbox
                        </Button>
                    </Container>
                </Container>
            </Container>

            <Modal show={show}>
                <Modal.Body>
                    <Modal.Title className='mb-3 text-center'>
                        Result
                    </Modal.Title>
                    <Row sm="d-flex align-items-center">
                        <Col sm="3">
                            <p className="my-auto">PlayStation:</p>
                        </Col>
                        <Col sm="9">    
                            <ProgressBar variant="success" now={score.ps * 20}/>
                        </Col>
                    </Row>
                    <Row sm="d-flex align-items-center">
                        <Col sm="3">
                            <p className="my-auto">Xbox:</p>
                        </Col>
                        <Col sm="9">
                            <ProgressBar variant="info" now={score.xb * 20} />
                        </Col>
                    </Row>
                    <Button variant="danger" onClick={reset} className="mt-3 w-100">
                        Vote Again
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default App