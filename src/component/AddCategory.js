import axios from "axios";
import { set } from "mongoose";
import { Fragment , useState , useEffect } from "react";
import { Modal , Button , Input , ModalBody , ModalFooter , Spinner } from "reactstrap";
import Home from "./Home";

const AddCategory = ({open, toggle,category,setcategory}) => {
    const [nom , setnom] = useState("");
    const[loading , setloading] = useState(false) ;
    const handleNom = (e)=>{
        setnom(e.target.value) ;
    }

    const handleAddCategory = async()=>{
        let data ={nom : nom} ;
        setloading(true) ;
        let newCategory = await axios.post("http://127.0.0.1:9988/api/category/new",data,{
            headers : {
                "Content-Type": "application/json"
            }
        })
        setcategory(newCategory.data)
    }
    useEffect(()=>{
        if(category != null){
            setloading(false)
            toggle();
        }
    },[category])
    return ( 
        <Modal isOpen ={open}>
            <ModalBody >
                <Input 
                onChange={handleNom} 
                placeholder = "Nom du Category"
                value={nom}
                />
            </ModalBody>
            <ModalFooter>
                <button 
                onClick={handleAddCategory}
                >{  "Add" } 
                </button>
                <button  onClick={toggle}>
                    reset
                </button>
            </ModalFooter>

        </Modal>
     );
}
 
export default AddCategory;