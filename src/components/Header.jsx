import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const element =<FontAwesomeIcon icon={faUser}/>
const cart = <FontAwesomeIcon icon={faShoppingCart}/>
const search = <FontAwesomeIcon icon={faSearch}/>
const arrowdown = <FontAwesomeIcon icon={faCaretDown}/>

export const Header = () => {
    return (
        <header className="Header">
            <div className="en">
            <pre>EN   {arrowdown}</pre>
            </div>
            <div>
               <pre>USD   {arrowdown}</pre>
            </div>
            <div className="login">
            <pre><Link to="/login">{element}  My Profile </Link></pre>
            </div>
            <div className="cart">
            <Link to="/items">{cart}</Link>
            </div>
            <div className="signup">
            <Link to="/signup"><p>Items</p></Link>
            </div>
            <div className="searchPrice">
            <Link to="/searchPrice"><pre>$00.00  {search}</pre></Link>
            </div>
        </header>
    )
}

export default Header