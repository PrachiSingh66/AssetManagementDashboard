import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssetService from "../services/AssetService";

export default function AddAsset(){

  const navigate = useNavigate();

  const [asset,setAsset] = useState({
    assetName:"",
    category:"",
    status:"",
    assignedTo:""
  });

  const handleChange = e =>{
    setAsset({...asset,[e.target.name]:e.target.value});
  };

  const saveAsset = e =>{
    e.preventDefault();
    AssetService.createAsset(asset)
      .then(()=>navigate("/"));
  };

  return(
    <div className="container mt-4">
      <h3>Add New Asset</h3>

      <form onSubmit={saveAsset}>
        <input className="form-control mb-2" 
          name="assetName" placeholder="Asset Name"
          onChange={handleChange}/>

        <input className="form-control mb-2" 
          name="category" placeholder="Category"
          onChange={handleChange}/>

        <input className="form-control mb-2" 
          name="status" placeholder="Status"
          onChange={handleChange}/>

        <input className="form-control mb-2" 
          name="assignedTo" placeholder="Assigned To"
          onChange={handleChange}/>

        <button className="btn btn-success">Save Asset</button>
      </form>
    </div>
  )
}
