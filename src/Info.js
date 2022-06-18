

import './Info.css';

function Info(props) {
  return (
        <div className="Info">
            <p className="globalInfo"><span className="infoHour">{props.hours}</span>{props.infoTitle}</p>
        </div>
  );
}

export default Info;
