import satData from "./satData.jsx";
import './styling.css';


const Buttons = ({ filterByType, setSat, displaySats }) => {
  // will be 4 total buttoms when the project is complete.
  return (
    <>
    <div className="flex-container">
      {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );  

  })}
      <button onClick={()=> setSat(satData)}>All Orbits</button>
    </div>
    </>
  );
};

export default Buttons;
