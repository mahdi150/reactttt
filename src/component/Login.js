import { Fragment } from "react";
import { useState , useEffect } from "react";
import { Label ,FormGroup,InputGroup , Input , Modal ,ModalBody , Button , Container, Card ,CardBody ,Row , Col} from "reactstrap";
import axios from "axios";
import Home from "./Home";
import { redirect, useNavigate } from "react-router-dom";
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const Login = () => {
    const [username, setusername] = useState(""); 
    const [password, setpassword] = useState("");
    const [login , setlogin]= useState([]);
    const [success , setsuccess]= useState(false)
    const [loading , setloading]= useState(false)
    const navigate = useNavigate();
    const handleNom = (e)=>{
        setusername(e.target.value)
    }
    const handlepwd = (e)=>{
        setpassword(e.target.value)
    }
    const handleLogin = async()=>{
        setloading(true) ;
        setsuccess(false)
        //const pwd = bcrypt.hashSync(password, salt);
        let data = {username : username ,
                    password : password}
        let log = await axios.post("http://127.0.0.1:9988/api/users/login",data);       
       
            localStorage.setItem('token', log.data.token);
            localStorage.setItem('user_id', log.data.user._id);
        
        setlogin(log.data) ;
        navigate("/home")
        //console.log(log.data)
    }
    useEffect(()=>{
        handleLogin()
    },[])
    useEffect(()=>{
        if(login.length>0){
            setloading(false)
            setsuccess(true)
        }
    },[login])
    return ( 

        <Card >
        <CardBody>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Card style={{marginBottom: "15rem",backgroundColor : "orange"}}>
                    <CardBody >
                        <FormGroup>
                        <Input placeholder="Username" onChange={handleNom} value={username}></Input><br></br>
                        <Input placeholder="Password" onChange={handlepwd} value={password}></Input>
                        </FormGroup>            
                        
                        
                        <Button 
                        style={{ fontWeight : "20px"}}
                        onClick={handleLogin} 
                        >lOGIN</Button>  
                        
                    </CardBody>            
                    </Card>
                </Col>
                <Col md={3}>
                    <p></p>
                </Col>
            </Row>
        </CardBody>
    </Card>
     );
}
 
export default Login;

// how to post data of login and get token with axios ?
