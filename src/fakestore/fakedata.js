import { Fakedata } from "./fakeapi";
import "./fake.css"
import CustomAccordion from "../bootstrap/accordion";

const Data = () => {
  return (
    <div className="car"> 
      {Fakedata.map((eachData) => (
        <div  className="one">
          <h2>{eachData.title}</h2>
          <center><img src={eachData.image} width={150} height={150} alt={eachData.title} /></center>
          <br />
          <p>{eachData.description}</p>
          {/* <CustomAccordion/> */}
          
        </div>
      ))}
    </div>
  );
};
export default Data;
