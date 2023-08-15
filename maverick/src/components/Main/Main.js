import './Main.css';

import ImageCardGroup from "../ImageCardGroup/ImageCardGroup"

// import cabinet from "../../util/cabinet.json"
import cabinet from "../../util/test.json"
function Main() {
  return (
    <div className="main">
      <ImageCardGroup cabinetMembers={cabinet}/>
    </div>
  );
}

export default Main;
