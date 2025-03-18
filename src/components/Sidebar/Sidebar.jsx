import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Dafault avatar" />
      <p className="sidebar__username">Username</p>
    </div>
  );
}

export default SideBar;
