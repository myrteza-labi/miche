import './VersusContainer.css';
import './Versus.css'; 


function VersusContainer(props) {
  return (
    <div className="oneVersusContainer">
        <div className="imgTeam leftTeam"><img src={props.leftTeam} alt="" /></div>
            <div className="versusInfo">
                <p className="competionName">{props.ligue}</p>
                <p className="versusScore">{props.score}</p>
                <p className="versusChaine">{props.chaine}</p>
            </div>
          <div className="imgTeam rightTeam"><img src={props.rightTeam} alt="" /></div>
    </div>
  );
}

export default VersusContainer
;
