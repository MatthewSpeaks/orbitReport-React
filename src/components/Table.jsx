import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr className="tableHeader">
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id)=>{
        return (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{`${data.operational === true ? "Operational" : "Retired"}`}</td>
          </tr>
        )
      })}
     </tbody>
   </table>
  );
};

export default Table;


/*
const Buttons = ({ filterByType, setSat, displaySats }) => {
  // will be 4 total buttoms when the project is complete.
  return (
    <>
    <div>
      {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    ); 
    */