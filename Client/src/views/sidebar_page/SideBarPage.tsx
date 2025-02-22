import style from "./styles/sidebarpage.module.css";
import addWhite from "../../assets/add_white.png";
import contactWhite from "../../assets/contact_white.png";
import viewWhite from "../../assets/view_white.png";
import { useRef } from "react";

function SideBarPage() {
    const popUpRef = useRef<HTMLDivElement>(null);

    function closePopUp(){
        popUpRef.current?.removeAttribute("open");
        popUpRef.current?.setAttribute("close","");
        setTimeout(()=>{
            popUpRef.current?.removeAttribute("close");
            popUpRef.current!.style.display = "none";
        },500);}

    return (
        <ul className={style.container}>
            <div id="popUpForAdd" className={style.popUp_add} ref={popUpRef}>
                <button onClick={closePopUp}>close</button>

                <div className={style.arrow}></div>
                <p>Add form</p>
            </div>
            <NavItems imagePath={addWhite} title="Add" popUpRef={popUpRef}/>
            <NavItems imagePath={viewWhite} title="View" popUpRef={popUpRef}/>
            <NavItems imagePath={contactWhite} title="Contact" popUpRef={popUpRef}/>
        </ul>
    )
}

function NavItems({imagePath, title,popUpRef}:{imagePath:string;title:string; popUpRef:React.RefObject<HTMLDivElement | null>}) {
    let onClick = () => {
        popUpRef.current!.style.display = "flex";  
        popUpRef.current?.setAttribute("open","");
        
    }

    return (
        <li className={style.nav_item} onClick={onClick} >
            <img className={style.nav_item_icon} src={imagePath} alt={title} />
            <a href="#">{title}</a>
        </li>)
    
    ;
}

export default SideBarPage;