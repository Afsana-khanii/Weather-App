import React , {useState}from "react";
import apple from "../images/apple.jpg";
import banana from "../images/banana.jpg";
import orange from "../images/orange.jpg";
import guava from "../images/guava.jpg";
import watermelon from "../images/watermelon.jpg";
import grapes from "../images/grapes.jpg";
import mango from "../images/mango.jpg";
import ear from "../images/ear.jpg";
import eye from "../images/eye.jpg";
import hands from "../images/hands.jpg";
import legs from "../images/legs.jpg";
import nose from "../images/nose.jpg";
import lips from "../images/lips.jpg";
import belly from "../images/belly.jpg";
import donkey from "../images/donkey.jpg";
import horse from "../images/horse.jpg";
import elephant from "../images/elephant.jpg";
import monkey from "../images/monkey.jpg";
import lion from "../images/lion.jpg";
import chick from "../images/chick.jpg";
import goat from "../images/goat.jpg";
import duck from "../images/duck.jpg";
import wolf from "../images/wolf.jpg";
const KidsApp= () => {
  const [category, setCategory] = useState(""); 
  const [index, setIndex] = useState(0);

  const data = {
    Fruits: [apple, banana, orange, guava, watermelon, grapes, mango],
    Body: [ear, eye, hands, legs, nose, lips, belly],
    Animals: [goat,lion, wolf, monkey, chick, duck ,elephant ,horse ,donkey]
  };

  const nextImg = () => {
    if (category) {
      setIndex((prev) => (prev + 1) % data[category].length);
    }
  };

  const backImg = () => {
    if (category) {
      setIndex((prev) =>
        prev === 0 ? data[category].length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="slider-wrapper">
      <h2>Select category</h2>

      <div className="category-buttons">
        <button
          onClick={() => {
            setCategory("Fruits");
            setIndex(0);
          }}
        >
          Fruits
        </button>
         <button
          onClick={() => {
            setCategory("Animals");
            setIndex(0);
          }}
        >
          Animals
        </button>
        <button
          onClick={() => {
            setCategory("Body");
            setIndex(0);
          }}
        >
          Body parts
        </button>
      </div>

      {category && (
        <div className="slider-container">
        
          <div className="slider-buttons">
            <button className="Back" onClick={backImg}>
              Back
            </button>
            <button className="Next" onClick={nextImg}>
              Next
            </button>
          </div>

          
          <div className="image-container">
            <img src={data[category][index]} alt="gallery" />
          </div>
        </div>
      )}
    </div>
  );
};

export default KidsApp;