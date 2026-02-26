import pnLogo from "../assets/pn-logo.png";

const Header = ({ batchName }) => {
  return (
    <div>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for {batchName}</h1>
      </header>
    </div>
  )
}

export default Header;