import './App.css';
import Accueil from './Accueil'; 
import Navbar from './Navbar'; 
import ArtcileContainer from './ArtcileContainer';
import InfosInHoursContainer from './InfosInHoursContainer'; 
import Info from './Info'; 
import VersusContainer from './VersusContainer'
import Versus from './Versus'; 
import france from './images/france.png'
import portugal from './images/portugal.png'; 





function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="appMain">
        <Accueil/>
        <ArtcileContainer/>
        <InfosInHoursContainer>
          <Info hours={"12h30 "} infoTitle={"Neymar est arrivé à Rome"} />
          <Info hours={"12h30 "} infoTitle={"Neymar est arrivé à Rome uh ouh ih pih pih ph hphop"} />
          <Info hours={"12h30 "} infoTitle={"Neymar est arrivé à Rome"} />
          <Info hours={"12h30 "} infoTitle={"Neymar est arrivé à Rome"} />
          <Info hours={"12h30 "} infoTitle={"Neymar est arrivé à Rome"} />
        </InfosInHoursContainer>

        <VersusContainer>
          <Versus rightTeam={france} leftTeam={portugal} ligue={"League des nations"} score={"1 - 0"} chaine={"TF1"} />          
          <Versus rightTeam={france} leftTeam={portugal} ligue={"League des nations"} score={"1 - 0"} chaine={"TF1"} />
          <Versus rightTeam={france} leftTeam={portugal} ligue={"League des nations"} score={"1 - 0"} chaine={"TF1"} />
          <Versus rightTeam={france} leftTeam={portugal} ligue={"League des nations"} score={"1 - 0"} chaine={"TF1"} />
          <Versus rightTeam={france} leftTeam={portugal} ligue={"League des nations"} score={"1 - 0"} chaine={"TF1"} />
        </VersusContainer>

      </div>
    </div>
  );
}

export default App;

