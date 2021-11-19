import { Link } from "react-router-dom"
import image from "../404.png"

const NotFound = () => {
    return ( 
        <div className="not-found container mb-3 d-flex flex-column align-items-center">
            <img src={image} alt="Page not found" className="img-fluid w-50"/>
            <Link to="/" className="text-white text-decoration-none">Back to home</Link>
        </div>
     );
}
 
export default NotFound;