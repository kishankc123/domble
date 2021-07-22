import "./Info.css";
import { AiFillStar } from "react-icons/ai";
import Header from "./Header";

const Info = () => {
  return (
    <>
  <Header/>
    <div className="info">
      <section className="logo-part">
        <img src="./Domble.JPG" alt="Domble Logo" />
        <h3 className="company-name">Don Cueva</h3>
        <div className="star">
          <AiFillStar style={{ color: "orange" }} />
          <AiFillStar style={{ color: "orange" }} />
          <AiFillStar style={{ color: "orange" }} />
          <AiFillStar style={{ color: "orange" }} />
        </div>
        <p> 4 out of 5 </p>
      </section>
      <section className="info-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>

        <button className="btn-check-website">Search</button>
      </section>
    </div>
  </>
  );
};

export default Info;
