import { CardGroup , Card, CardBody, Badge ,Row  , Col} from "reactstrap";
import { useState , useEffect } from "react";
import {FaGratipay} from "react-icons/fa"
const AffparCategory = ({prod}) => {
    return ( 
        <Row>
        <Col md={6}>
            <Card style={{ marginBottom: "1rem" }}>
            
                <CardBody>
                <h3> {prod.title}<span style={{fontSize : "17px"}}><Badge color="primary">New</Badge></span> </h3>
                <h5 style={{ color: "green" }}> {prod.price}  </h5>
                <h5 style={{ fontWeight: "600",color: "rgb(96 244 194)" }}> {prod.description} </h5>
                <FaGratipay type="button" style={{fontSize : "40px" , color: "orange"}}/>
                </CardBody>
            </Card>
        </Col>
        
    </Row>
     );
}
 
export default AffparCategory;