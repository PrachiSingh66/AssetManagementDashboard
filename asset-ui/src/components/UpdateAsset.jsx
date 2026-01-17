import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssetService from "../services/AssetService";

export default function UpdateAsset(){

  const {id} = useParams();
  const navigate = useNavigate();

  const [asset,setAsset] = useState({
    assetName:"",
    category:"",
    status:"",
    assignedTo:""
  });

  useEffect(()=>{
    AssetService.getAssetById(id)
      .then(res=>setAsset(res.data));
  },[]);

  const handleChange = e =>{
    setAsset({...asset,[e.target.name]:e.target.value});
  };

  const updateAsset = e =>{
    e.preventDefault();
    AssetService.updateAsset(id,asset)
      .then(()=>navigate("/"));
  };

  return(
    <div className="container mt-4">
      <h3>Update Asset ID: {id}</h3>

      <form onSubmit={updateAsset}>
        <input className="form-control mb-2"
          name="assetName"
          value={asset.assetName}
          onChange={handleChange}/>

        <input className="form-control mb-2"
          name="category"
          value={asset.category}
          onChange={handleChange}/>

        <input className="form-control mb-2"
          name="status"
          value={asset.status}
          onChange={handleChange}/>

        <input className="form-control mb-2"
          name="assignedTo"
          value={asset.assignedTo}
          onChange={handleChange}/>

        <button className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  )
}
