import './InfosInHoursContainer.css';

function InfosInHoursContainer(props) {
  return (
    <div className="InfosInHoursContainer">
        <h2 className="infoHoursTitle">Fil d'actualité</h2>
        {props.children}
    </div>
  );
}

export default InfosInHoursContainer;
