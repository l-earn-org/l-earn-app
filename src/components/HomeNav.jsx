import menuIcon from "../assets/menu.png";
export const HomeNav = () => {
  return (
    <section className="home-nav">
      <div className="left">
        <div className="logo">Lē</div>
        <p>L-earn</p>
      </div>

      <div className="right">
        <p>Home</p>
        <p>Projects</p>
        <p>Browse</p>
        <p>Post</p>
        <p>Profile</p>
      </div>
      <div className="mobile-right">
        <img src={menuIcon} />
        <div className="menu-items">
          <div>Home</div>
          <div>Projects</div>
          <div>Browse</div>
          <div>Post</div>
          <div>Profile</div>
        </div>
      </div>
    </section>
  );
};
