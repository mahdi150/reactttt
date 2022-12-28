import { CardGroup , Card, CardBody, Button ,Row  , Col , Badge} from "reactstrap";
import { useState , useEffect } from "react";
import {FaGratipay} from "react-icons/fa"
import axios from "axios";
import { Hidden } from "@material-ui/core";
const ProductDetails = ({product}) => {
    const [add2wishL, setadd2wishL] = useState([]);
    const [loading, setloading] = useState(false)
    const[prodID , setprodID] = useState("") ;
    


    const addTOwishList= async()=>{
        setloading(true)
        const userID = localStorage.getItem("user_id") ;
        const datap = {prodID  : product._id} ;
        console.log(userID)
        const atw = await axios.put(`http://127.0.0.1:9988/api/users/wishlist/${userID}/add`,datap) ;
        setadd2wishL(atw.data);
        console.log(atw.data.wishlist)
    }
    useEffect(()=>{
        addTOwishList();
    },[])
    useEffect(()=>{
        if(add2wishL.length>0){
            setloading(false)
        }
    },[add2wishL])

    return ( 
        <Row>
            <Col md={6}>
                <Card style={{ marginBottom: "1rem" }}>
                
                    <CardBody>
                    <h3> {product.title}<span style={{fontSize : "17px"}}><Badge color="primary">New</Badge></span></h3>
                    <h5 style={{ color: "green" }}> {product.price}  </h5>
                    <h5 style={{ fontWeight: "600",color: "rgb(96 244 194)" }}> {product.description} </h5>
                    <input hidden value={product._id}  ></input>
                    <FaGratipay type="button" style={{fontSize : "40px" , color: "orange"}} onClick={addTOwishList} />
                    </CardBody>
                </Card>
            </Col>
            {/* <Col >
                <Card style={{ marginBottom: "1rem" }}>
                    <CardBody>
                    <h3> {product.title} </h3>
                    <h5 style={{ color: "green" }}> {product.price}  </h5>
                    <h5 style={{ fontWeight: "600",color: "rgb(96 244 194)" }}> {product.description} </h5>
                    <FaGratipay type="button" style={{fontSize : "40px" , color: "orange"}}/>
                    </CardBody>
                </Card>
            </Col> */}
        </Row>
     );

}
 
export default ProductDetails;