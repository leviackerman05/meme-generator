const Header = () => {
  return (
    <div className="header">
      <div className="header-start">
        <img
          className="troll-image"
          src={require("../Images/troll-face.png")}
          alt="troll-face"
        />
        <h2>Meme Generator</h2>
      </div>
      <div className="header-end">
        <p>make your own memes :D</p>
      </div>
    </div>
  );
};

export default Header;
