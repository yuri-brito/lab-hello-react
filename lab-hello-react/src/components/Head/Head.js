
import logoIron from './ironhack-logo-xs.png';
import menu from './menu-top-xs.png';
import "./Head.css"

function Head(){
return (
    <section className="Head">
        <header className="headerHead">
            <img className="imageHead" src={logoIron} alt="logoIron"/>
            <img className="imageHead" src={menu} alt="menu"/>
        </header>
        <article className="articleHead">
            <h1 className="h1Article">Say hello to ReactJS</h1>
            <p className="pArticle">You will learn how to use the most Popular frontend library, and become a super Ninja developer.</p>
            <button className="buttonArticle">Awesome!</button>
            
        </article>
    </section>
)}
export default Head;