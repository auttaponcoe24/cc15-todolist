import './Search.scss';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return(
        <div className="search" >
            <span className="search__icon">
                <FaSearch />
            </span>
            <input 
            type="text" 
            placeholder="search" 
            className="search__inputs" 
            />
         
        </div>
  )
};

export default Search;
