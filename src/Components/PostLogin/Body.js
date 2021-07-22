import "./Body.css";
import Header from '../header'
import Card from "./Card";

import Welcome from "./Welcome";


const plBody = () => {
  return (
  <>  
    <Header/>
    <Welcome/>
    <div className="body">
      <button className="title">Websites</button>
      <section className="cardlist">
        <Card name="Mercedes" star="4" />
        <Card name="Audi" star="4" />
        <Card name="Tesla" star="4" />
        <Card name="Porshe" star="4" />
      </section>
      <button className="title">Apps</button>
      <section className="cardlist">
        <Card name="Lenovo" star="4" />
        <Card name="Dell" star="4" />
        <Card name="Canon" star="4" />
        <Card name="Sony" star="4" />
      </section>
    </div>
    </>
  );
};

export default plBody;
