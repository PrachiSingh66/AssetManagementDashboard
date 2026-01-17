import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Asset Management Dashboard</span>
        <Link to="/add" className="btn btn-success">
          + Add New Asset
        </Link>
      </div>
    </nav>
  )
}
