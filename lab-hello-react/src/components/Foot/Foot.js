import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import './Foot.css'

function Foot (){    
return (
    <section className="Foot">
        <article className="articleFoot">
            <img className="imgArticle" src={icon1} alt="icon1" />
            <h3>Declarative</h3>
            <p className="paArticle">React makes it painless to create interactive UIs.</p>

        </article>
        <article className="articleFoot">
            <img className="imgArticle" src={icon2} alt="icon2" />
            <h3>Components</h3>
            <p className="paArticle">Build encapsulated components that manage their state.</p>
        </article>
        <article className="articleFoot">
            <img className="imgArticle" src={icon3}  alt="icon3"/>
            <h3>Single-Way</h3>
            <p className="paArticle">A set of immutable values are passed to the component's.</p>
        </article>
        <article className="articleFoot">
            <img className="imgArticle" src={icon4} alt="icon4" />
            <h3>JSX</h3>
            <p className="paArticle">Statically-typed, designed to run on modern browsers.</p>
        </article>
    </section>
)}
export default Foot;