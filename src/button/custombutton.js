import "./custombutton.css"
import style from "../App.module.css"
const CustomButton=(prop)=>{
    const {text,bgcolor,width=100}=prop
    return <button className={style.button}>text</button>
};
export default  CustomButton;