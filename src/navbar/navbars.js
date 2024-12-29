import { Link,NavLink } from "react-router-dom";
import "./navbar.css"
import { DataContext } from "../App";
import { useContext } from "react";
import { RecipeContext } from "../Navigations/navigation";


const Navbar=()=>{
  const {darkMode}=useContext(DataContext);
 const{favouriteDish}= useContext(RecipeContext)
    return(
        <nav className={`navbar navbar-expand-sm bg-${darkMode?"dark": "light"} navbar-dark`}>
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={"/"} style={{margin:10 , textDecoration:"none"}}>Main </NavLink>
        {/* <a className="nav-link active" href="#">
          Active
        </a> */}
      </li>
      <li className="nav-item">
      <NavLink to={"/about"}style={{margin:10 , textDecoration:"none"}}>About</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link
        </a> */}
         <NavLink to={"/setting"} style={{margin:10, textDecoration:"none"}}>Settings</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/blog"} style={{margin:10,textDecoration:"none"}}>Blog</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/recipes"} style={{margin:10,textDecoration:"none"}}>Recipes</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/favouriteRecipe"} style={{margin:10,textDecoration:"none"}}>Favourites{favouriteDish.length}</NavLink>
      </li>
    </ul>
  </div>
</nav>

//         <nav className="navbar navbar-default">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <a className="navbar-brand" href="#">
//         WebSiteName
//       </a>
//     </div>
//     <ul className="nav navbar-nav">
//       <li className="active">
//         <a href="#">Home</a>
//       </li>
//       <li>
//         <a href="#">Page 1</a>
//       </li>
//       <li>
//         <a href="#">Page 2</a>
//       </li>
//       <li>
//         <a href="#">Page 3</a>
//       </li>
//     </ul>
//   </div>
// </nav>

    );
};

export default Navbar;