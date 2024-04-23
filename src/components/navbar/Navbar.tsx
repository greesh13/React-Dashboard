import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Greesh-admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQF8swUY9wAMDA/profile-displayphoto-shrink_200_200/0/1701475717834?e=2147483647&v=beta&t=Er4rpvuwLzW_J-CXOYYS0Jm1h6s1eEnniRake0PVifY"
            alt=""
          />
          <span>Greeshma</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
