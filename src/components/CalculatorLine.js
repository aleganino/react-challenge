import { useState } from "react";
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";

function CalculatorLine(props) {

    const [isValueValid, setIsValueValid] = useState(false)

    function enableOrDisableAddend() {
        props.addend.enableOrDisable()
        props.setEditAddend(!props.editAddend)
    }

    function changeValue(value) {
        setIsValueValid(parseInt(value) > 0)
        if (parseInt(value) > 0) {    
            props.addend.setValue(value)
            props.setEditAddend(!props.editAddend)
        }
    }

    function changeSign(sign) {
        props.addend.setSign(sign)
        props.setEditAddend(!props.editAddend)    
    }

    function deleteAddend() {
        let new_addends = props.addends.filter( (x) => { 
            return (x !== props.addend)
        })
        props.setAddends(new_addends)
        props.setEditAddend(!props.editAddend)
    }

    return (
        <Row style={{paddingTop: "10px"}}>
            <Col sm={1}>
                {/*Input: sign selection*/}
                <InputGroup>
                    <Form.Select required defaultValue={"+"} onChange={(event) => changeSign(event.target.value)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </Form.Select>
                </InputGroup>
            </Col>
            <Col sm={3}>
                {/*Input: unsigned value*/}
                <InputGroup>
                    <Form.Control required type='number' isInvalid={!isValueValid} min={0} isValid={isValueValid} onChange={(event) => changeValue(event.target.value)} />
                    <Form.Control.Feedback type="invalid">Write here the number without sign!</Form.Control.Feedback>
                </InputGroup>
            </Col>
            <Col sm={1}>
                {/*Delete button*/}
                <Button variant="danger" onClick={() => deleteAddend()}>Delete</Button>
            </Col>
            <Col sm={1}>
                {/*Enable/disable button*/}
                <Button variant="outline-primary" onClick={() => enableOrDisableAddend()}>{props.addend.disabled ? "Enable" : "Disable"}</Button>
            </Col>
        </Row>
    )
}

export default CalculatorLine;