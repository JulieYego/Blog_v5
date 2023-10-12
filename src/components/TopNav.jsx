import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog (v.5)</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link
                    to="/new"
                    style={{
                        backgroundColor: "#AEC3AE",
                        borderRadius: "8px",
                    }}
                >
                    New Item
                </Link>
                <Link to="/school"> School Form</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;