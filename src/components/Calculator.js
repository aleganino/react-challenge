import { useEffect, useState } from "react";
import CalculatorLine from "./CalculatorLine";
import { Button, Container, Row, Col } from "react-bootstrap"
import { Addend } from "./Addend";

function Calculator(props) {
    const [addends, setAddends] = useState([])
    const [result, setResult] = useState(0)
    const [editAddend, setEditAddend] = useState(false)     //Boolean value which is changed each time an addend is modified (changed value or sign, disabled addend, added or deleted row)

    //This computes the result every time an addend is modified. It is triggered by changes in the "editAddend" state variable.
    useEffect(() => {
            let result = addends.reduce((total, nextAddend) => {
                if (!nextAddend.disabled) {
                    if (nextAddend.sign === "+" ) {
                        return parseInt(total) + parseInt(nextAddend.value)
                    }
                    else if (nextAddend.sign === "-" ) {
                        return parseInt(total) - parseInt(nextAddend.value)
                    }
                }
                else {
                    return total
                }
            }, 0);
            setResult(result);
    }, [editAddend])
    
    
    const addRow = () => {
        setAddends([...addends, new Addend(addends.length, "+", undefined)])
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Button variant="primary" onClick={addRow}>Add row</Button>
                </Col>
            </Row>
            { //For each addend, create the corresponding line
            addends.length === 0 ?
                "No addends inserted"
                :
                addends.map((addend) => { return <CalculatorLine key={`calculator_line_${addend.id}`} addends={addends} setAddends={setAddends} addend={addend} setEditAddend={setEditAddend} editAddend={editAddend} /> })}
            <Row style={{paddingTop: "10px"}}>
                {`Result: ${result}`}
            </Row>
        </Container>
    );
}

export default Calculator;