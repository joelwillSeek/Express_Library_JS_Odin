
import style from "./styles/homepage.module.css";

import whiteBook from "../../assets/white_add_book.png";
import whiteAuthor from "../../assets/edited_add_author.png";
import whiteGenre from "../../assets/white_genre.png";

function HomePage(){
    return (
        <div className={style.main_container}>
            <h1 className={style.heading}>The Local Library</h1>
            <ul className={style.options_container}>
                
                <OptionCard imagePath={whiteBook} title="Add Book" details="Add a book in the shelf to memorize and organize,"/>
                <OptionCard imagePath={whiteAuthor} title="Add Author" details="Add a favorite author or author of a book so as to related an author with there book"/> 
                <OptionCard imagePath={whiteGenre} title="Add Genre" details="Helps to organize your books with there tastes or types so are to search for them and find them" />
            </ul>
        </div>
    );
}


function OptionCard({imagePath,title,details}:{imagePath:string;title:string;details:string}){
    return <li className={style.option}>
    <div id="options_icon" className={style.option_icon_container}>
        <img src={imagePath}/>
    </div>

    <h1 className={style.option_title}>{title}</h1>
    <p className={style.option_details}>{details}</p>
</li>;
}




export default HomePage;