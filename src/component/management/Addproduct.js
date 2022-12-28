import axios from "axios";
import { useState , useEffect } from "react";
import { Modal , Button , Input , ModalBody , ModalFooter , Spinner } from "reactstrap";
const Addproduct = ({open , toggle}) => {
    const [prod , setprod]=useState([]) ;
    const [Allcategory , setAllcategory]=useState([]) ;
    const [title , settitle]=useState("") ;
    const [desc , setdesc]=useState("") ;
    const [price , setprice]=useState("") ;
    const [category , setcategory]=useState("") ;
    const [loading , setloading]=useState(false) ;
    const handleTitle =(e)=>{
        settitle(e.target.value) ;
    }
    const handledesc = (e)=>{
        setdesc(e.target.value) ;
    }
    const handleprice = (e)=>{
        setprice(e.target.value) ;
    }
    const handlecat = (e)=>{
        setcategory(e.target.value)
    }

                /* GET ALL CATEGORIES */ 

    const getallCategories = async ()=>{
        setloading(true)
        const all = await axios.get("http://127.0.0.1:9988/api/category/all") ;
        setAllcategory(all.data.allCategorie)
    }
    useEffect(()=>{
        getallCategories()
    },[])
    useEffect(()=>{
        if(Allcategory.length>0){
            setloading(false) ;
        }
    },[Allcategory])

                /* END GET ALL CATEGORIES */ 

    const Addprod = async()=>{
        setloading(true)
        let data ={title : title , 
                   description : desc ,
                   price : price ,
                   categorie : category
                }
        let newProd = await axios.post("http://127.0.0.1:9988/api/product/new",data,{
            headers :{
                "content-Type" : "application/json"
            }
        })
        setprod(newProd.data)
    }
    useEffect(()=>{
        Addprod() ;
    },[])
    useEffect(()=>{
        if(prod.length>0){
            setloading(false);
            toggle() ;
        }
    },[prod])
    return ( 
        <>
        <Modal isOpen={open}>
            <ModalBody>
                <Input 
                style={{marginBottom: "1rem"}}
                placeholder="name of product"
                onChange={handleTitle}
                value={title}
                ></Input>
                <Input 
                style={{marginBottom: "1rem"}}
                placeholder="description"
                onChange={handledesc}
                value={desc}
                ></Input>
                <Input 
                style={{marginBottom: "1rem"}}
                placeholder="price"
                onChange={handleprice}
                value={price}
                ></Input>
                <Input 
                style={{marginBottom: "1rem"}}
                type="select"
                placeholder="select category"
                onChange={handlecat}
                
                >
                    {Allcategory.length > 0 ? 
                    Allcategory.map((item)=>{
                        return(
                        <option value={item.id} >{item.nom}</option>
                        
                        )
                    })
                    :
                    <p></p>
                    }
                </Input>
            </ModalBody>
            <ModalFooter>
                <Button
                onClick={Addprod}
                >
                Add
                </Button>
            </ModalFooter>
        </Modal>
        </>
     );
}
 
export default Addproduct;