import { Link } from "react-router-dom"

function Navbar(){
    return(
        <header>
            <div className="navigation">
             <Link to='/'>
                <h4>Gainx</h4>
             </Link>
            </div>
        </header>
    )
}

export default Navbar