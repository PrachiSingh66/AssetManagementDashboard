import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import AssetService from "../services/AssetService";

export default function AssetList(){

  const [rowData,setRowData] = useState([]);
  const [page,setPage] = useState(0);
  const [totalPages,setTotalPages] = useState(0);
  const navigate = useNavigate();

  const size = 5; // records per page

  useEffect(()=>{
    loadAssets();
  },[page]);

  const loadAssets = ()=>{
    AssetService.getAssets(page,size)
      .then(res=>{
        setRowData(res.data.content);
        setTotalPages(res.data.totalPages);
      });
  };

  const deleteAsset = (id)=>{
    AssetService.deleteAsset(id).then(()=>loadAssets());
  };

  const columnDefs = [
    { field:"id", width:80 },
    { field:"assetName" },
    { field:"category" },
    { field:"status" },
    { field:"assignedTo" },
    {
      headerName:"Update",
      cellRenderer: params => (
        <button 
          className="btn btn-primary btn-sm"
          onClick={()=>navigate(`/update/${params.data.id}`)}>
          Update
        </button>
      ),
      width:110
    },
    {
      headerName:"Delete",
      cellRenderer: params => (
        <button 
          className="btn btn-danger btn-sm"
          onClick={()=>deleteAsset(params.data.id)}>
          Delete
        </button>
      ),
      width:110
    }
  ];

  return(
    <div className="container mt-4">

      <div className="ag-theme-alpine border rounded p-2" style={{ width:"100%" }}>

        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={false}
          domLayout="autoHeight"
        />
      </div>

      {/* Backend Pagination Controls */}
      <div className="pagination-controls d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-outline-primary"
          disabled={page===0}
          onClick={()=>setPage(page-1)}>
          ◀ Previous
        </button>

        <span className="pt-2">
          Page {page+1} of {totalPages}
        </span>

        <button className="btn btn-outline-primary"
          disabled={page===totalPages-1}
          onClick={()=>setPage(page+1)}>
          Next ▶
        </button>
      </div>

    </div>
  );
}
