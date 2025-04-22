import { render } from '@czechitas/render';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer"
import { Main } from "../components/Main/Main";
import '../global.css';
import './index.css';
import "../components/Header/Header.css";
import "../components/Footer/Footer.css";
import "../components/Main/Main.css";


const HomePage = () => {                      
 return (
 <div className="container">
 <Header title="Titulek aplikace"/>
 <Main content="Toto je tak jednoduchá aplikace, že jsem se v tom ztratila"/>
 <Footer author="Lenka"/>
 </div>
)   
}



document.querySelector('#root').innerHTML = render(
  <>
  <HomePage />
  </>   
);
