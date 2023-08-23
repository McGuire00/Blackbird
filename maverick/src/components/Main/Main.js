import "./Main.css";

import ImageCardGroup from "../ImageCardGroup/ImageCardGroup";

import cabinet from "../../util/cabinet.json";
function Main() {
  return (
    <div className="main" data-testid="main">
      <ImageCardGroup cabinetMembers={cabinet} />
    </div>
  );
}

export default Main;
