import './VersusContainer.css';

function VersusContainer(props) {
  return (
    <div className="VersusContainer">
        <p className="versusDay">Aujourd'hui</p>
        <div className="allVersusContainer">
            {props.children}
        </div>
    </div>
  );
}

export default VersusContainer
;
