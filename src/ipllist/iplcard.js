import Ipldata from "./ipldata"
import "./ipl.css"
const Ipl_List=()=>{
    const {name,source,trophy,c_name,button}=Ipldata
    return(
        <>
        <div className="nav">
            <h3>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        </h3>
        </div>
                       <center><h1 className="flag-text">Indian Premier League TEAMS</h1></center>
<div className="box">
        {Ipldata.map((eachIpldata)=>(
            <center>
                <div className="cards">
                    <h3>{eachIpldata.name}</h3>
                    <img src={eachIpldata.source}  width={150} height={150}/>
                    <h3>Trophy: {eachIpldata.trophy}</h3>
                    <h3>Captain name: {eachIpldata.c_name}</h3>
                    <button className="btn">{eachIpldata.button}</button>
            </div>
            </center>
        )
) }
<div className="footer">
  <p>@copyright by Meghana</p>
</div>
</div>
        </>
    )
}
export default Ipl_List