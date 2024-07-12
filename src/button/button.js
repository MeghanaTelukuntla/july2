const CustomButton =(prop)=>{
    console.log(prop)
    return <button style={{
        backgroundColor:prop.bgColor,
        color:prop.color
    }}>{prop.text}</button>;

};

export default CustomButton;