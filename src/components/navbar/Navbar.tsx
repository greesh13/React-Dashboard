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
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fposts%2Fgreeshs_interpretableai-textexploration-deeplearning-activity-7100384931356258305-OWcS%3Ftrk%3Dpublic_profile_like_view&psig=AOvVaw0nIjYYJtHoR37NH0uIfT-b&ust=1713924301896000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjLnqag14UDFQAAAAAdAAAAABAE"
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
