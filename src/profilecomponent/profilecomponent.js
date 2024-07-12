import CustomImage from "../image/customimage";
import Heading1, { Heading2 } from "../component/headings/headings";

const ProfileComponents = ()=>{
    // const name="Meghana"
    const ProfileDetails={
        name:"Kumar",
        mobile:912345,
        salary:29000,
    };
    const {name , mobile , salary}=ProfileDetails;
    return <div>
        <h1>My Name is {name}</h1>
        <h1>My Salary is {salary}</h1>
        <h1>My mobile number is {mobile}</h1>
        {/* <CustomImage></CustomImage> */}
        <Heading1></Heading1>
        <Heading2/>
    </div>;
};

export default ProfileComponents;