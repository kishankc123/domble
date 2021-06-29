import "./Body.css";
import Card from "./Card";

const Body = () => {
  return (
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
  );
};

export default Body;
