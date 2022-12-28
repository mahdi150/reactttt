import { Fragment, useState , useEffect } from "react";
//import {Card , CardBody , }from 'reactstrap'
import axios from "axios";
import ProductDetails from "./ProductDetails";
import { Container  , Spinner , Button ,Input,InputGroup , Col, Row,FormGroup} from "reactstrap";
import AddCategory from "./AddCategory";
import AffparCategory from "./AffparCategory";


const Home = () => {
    const [category, setcategory] = useState(null);
    const [Products, setProducts] = useState([]);
    const [categoryaff , setcategoryaff] = useState([]);
    const [loading, setloading] = useState(false)
    const [open, setopen] = useState(false);
    const [nom , setnom] = useState("");
    const [prodswith1Cat, setprodswith1Cat] = useState([]);
    const toggleModal = () => {
        setopen(!open)
    }
    const handleNom = (e)=>{
        setnom(e.target.value) ;
    }
            /* FETCH ALL PRODUCS */
    const fetchProducts = async() => {
        setloading(true)        
            const response = await axios.get("http://127.0.0.1:9988/api/product/all");
            setProducts(response.data.allProduct);   
    };       
    useEffect(() => {
        fetchProducts();
    }, []);
    // useEffect(() => {
    //     if (Products.length > 0) {
    //         setloading(false)
    //     }
    // }, [Products])
            /* END FETCH ALL PRODUCS */



            /*  ALL CATEGORY */

    const fetchCategory = async ()=>{
        setloading(true) ;
        const resCat = await axios.get("http://127.0.0.1:9988/api/category/all");
        setcategoryaff(resCat.data.allCategorie)
    }
    useEffect(()=>{
        fetchCategory();
     },[])
    useEffect(()=>{
        if(categoryaff.length > 0){
            setloading(false)
        }
    },[categoryaff])

        /* END ALL CATEGORY */


        /*  AFFICHAGE PRODUCTS BY CATEGORY */
    const fetchByCategory = async()=>{
        setloading(true);
        let data = {nom : nom }
        const productsHaveOneCat = await axios.post("http://127.0.0.1:9988/api/category/findByCategory",data,{
            headers : {
                "Content-Type": "application/json"
            }
        })
        setprodswith1Cat(productsHaveOneCat.data.pdsCat);
    }
    useEffect(()=>{
        fetchByCategory()
    },[])
    useEffect(()=>{
        if(prodswith1Cat.length>0){
            setloading(false)
        }
    },[prodswith1Cat])

        /*  END AFFICHAGE PRODUCTS BY CATEGORY */



    
    return ( 
        
    <Container>
        <AddCategory
        open={open}
        category={category} 
        toggle={toggleModal}
        setcategory={setcategory} 
        />
        
        <Fragment>
            <FormGroup row >
                <Col sm={2}></Col>
                    <Col sm={8}>
                        <InputGroup>
                            <Input  placeholder="Search per Category" type="select"
                            onChange={handleNom}
                            
                            // value={nom}
                            >
                                {categoryaff.length > 0 ? categoryaff.map((item)=>{
                                    return(
                                        <option>{item.nom}</option>
                                    )
                                })
                            :
                            <option>you have no category</option>
                            }
                               
                            </Input>
                            <Button onClick={fetchByCategory} >search</Button>
                        </InputGroup>
                    </Col>
                <Col sm={2}></Col>
            </FormGroup>
            


            
            <hr></hr>
            
            {
            loading ? 
            <Spinner 
            color="primary" 
            type="grow"
            />
           :
            prodswith1Cat !== undefined && prodswith1Cat !== null && prodswith1Cat.length >0 ? 
                prodswith1Cat.map((item)=>{
                    return(
                    <AffparCategory prod = {item}/>
                    )
                })
             : Products.length>0 ?
                Products.map((item)=>{ 
                        return(
                        <ProductDetails product={item} />
                        )             
                    })
            : 
            <p>No products found.</p>
            } 
                 {//Products.length>0 ?
                //     Products.map((item)=>{ 
                //         return(
                //         <ProductDetails product={item} />
                //         )
                //         // console.log("test")                 
                //     })
                    
                // :
                // <p>No products found.</p>
                // 
            }
            
         
            
        </Fragment>
        <br></br>
        <Button onClick={toggleModal} className='btn btn-success'> Add Category </Button>
        </Container>
     );
}
 
export default Home;