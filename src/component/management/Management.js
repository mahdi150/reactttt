import { useState ,  Fragment } from "react";
import { Button, Table } from "reactstrap";
import Addproduct from "./Addproduct";
import AddCategory from "../AddCategory";
import {FaTrashAlt, FaPlusSquare} from "react-icons/fa"
const Management = () => {
    
    const [open, setopen] = useState(false);
    const toggleModal = () => {
        setopen(!open)
    }

    
    
    return ( 
        <Fragment>
        <Addproduct
        open ={open}
        toggle={toggleModal}
        />
        
        <Table>
  <thead>
  <tr>
      <th scope="row">
        #
      </th>
      <td style={{fontSize : "20px" , fontWeight : "bold"}}>Add
      </td>
      <td style={{fontSize : "20px" , fontWeight : "bold"}}>
        Delete All
      </td>
    </tr>   
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        Categorie
      </th>
      <td>
      <FaPlusSquare type="button"onClick={<AddCategory/>} style={{fontSize : "30px"}}/>
      </td>
      <td>
        <FaTrashAlt type="button"onClick={toggleModal} style={{fontSize : "30px"}}/>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Product
      </th>
      <td>
        {/* <Button   style={{backgroundColor :"orange"}}>add</Button> */}
      <FaPlusSquare type="button"onClick={toggleModal} style={{fontSize : "30px"}}/>
      
      </td>
      <td>
      <FaTrashAlt type="button"onClick={toggleModal} style={{fontSize : "30px"}}/>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Users
      </th>
      <td>
      <FaPlusSquare type="button" style={{fontSize : "30px"}}/>
      </td>
      <td>
      <FaTrashAlt type="button"onClick={toggleModal} style={{fontSize : "30px"}}/>
      </td>
    </tr>
  </tbody>
</Table>
        </Fragment>
     );
}
 
export default Management;