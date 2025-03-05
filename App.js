import './App.css';

function App() {
  return (
<>
      <header className="header">
        <div>
            <a href="./index.html"><img className="logo" src={require('./Assets/Monumento.png')} alt="LOGO"/></a>
        </div>
        <div className="Searchbar">
            <div>
                <img className="searchIcon" src={require('./Assets/search.png')} alt="searchLogo"/>
            </div>
            <div>
                <input className="searchBar" type="text" placeholder="Search for Monument,....."/>
            </div>
        </div>
        <div>
            <b>District:</b>
            <select className="select" name="District">
                <option value="select">select</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Akola">Akola</option>
                <option value="Amravati">Amravati</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Beed">Beed</option>
                <option value="Bhandara">Bhandara</option>
                <option value="Buldhana">Buldhana</option>
                <option value="Chandrapur">Chandrapur</option>
                <option value="Dhule">Dhule</option>
                <option value="Gadchiroli">Gadchiroli</option>
                <option value="Gondia">Gondia</option>
                <option value="Hingoli">Hingoli</option>
                <option value="Jalgaon">Jalgaon</option>
                <option value="Jalna">Jalna</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Latur">Latur</option>
                <option value="Mumbai City">Mumbai City</option>
                <option value="Mumbai Suburban">Mumbai Suburban</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Nanded">Naned</option>
                <option value="Nandurbar">Nandurbar</option>
                <option value="Nashik">Nashik</option>
                <option value="Osmanabad">Osmanabad</option>
                <option value="Palghar">Palghar</option>
                <option value="Pune">Pune</option>
                <option value="Raigad">Raigad</option>
                <option value="Ratnagiri">Ratnagiri</option>
                <option value="Sangli">Sangli</option>
                <option value="Satara">Satara</option>
                <option value="Sindhudurg">Sindhudurg</option>
                <option value="Solapur">Solapur</option>
                <option value="Thane">Thane</option>
                <option value="Wardha">Wardha</option>
                <option value="Washim">Washim</option>
                <option value="Yavatmal">Yavatmal</option>
            </select>
        </div>
        <div className="Login">
            <div>
                <img className="icon" src={require('./Assets/icon.jpeg')} alt="icon"/>
            </div>
            <div>
                <a className="black" href="/"><strong>Hi, Guest</strong></a>
            </div>   
        </div>
    </header>
        <div className="nav">
            <div className="navbar">
                <div className="left">
                    <a className="white" href="file:///C:/Users/Soham/OneDrive/Desktop/Monument%20Ticketing%20Website/Loader.html"><strong>Monuments</strong></a>
                    <a className="white" href="/"><strong>Forts</strong></a>
                    <a className="white" href="/"><strong>Sanctuaries</strong></a>
                    <a className="white" href="/"><strong>Temples</strong></a>
                    <a className="white" href="/"><strong>Palaces</strong></a>
                    <a className="white" href="/"><strong>Caves</strong></a>
                    <a className="white" href="/"><strong>Museums</strong></a>
                </div>
                <div className="right">
                    <a className="white" href="/"><strong>Maps</strong></a>
                    <a className="white" href="/"><strong>Offers</strong></a>
                    <a className="white" href="/"><strong>Gift Cards</strong></a>
                </div>
            </div>
        </div> 
        <div className="mapdiv">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867495.5656358157!2d74.1275990766745!3d18.804786278273312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1724676872098!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <br/>
        <div className="addBar">
            <div>
                <h1>Recommemded Sites</h1>
            </div>
            <div>
                <h3><a  className="seeAll" href="/">See All</a></h3>
            </div>
        </div>
        <br/>
        <div className="sectiondiv">
            <div className="section">
                <a href="/"><img src={require('./Assets/image 1.png')} alt=""/></a><br/><br/>
                <a className="black" href="./Gateway_of_India.html"><strong>Gateway of India</strong><br/><small>Chhattrapati Shivaji Maharaj Terminus,<br/>Mumbai.</small></a>
            </div>
            <div className="section">
                <a href="/"><img src={require('./Assets/image 2.png')} alt=""/></a><br/><br/>
                <a className="black" href="/"><strong>Elephanta Caves</strong><br/><small>Gharapuri, Mumbai.</small></a>
            </div>
            <div className="section">
                <img src={require('./Assets/image 3.png')} alt=""/><br/><br/>
                <a className="black" href="/"><strong>Siddhivinayak Temple</strong><br/><small>Dadar, Mumbai.</small></a>
            </div>
            <div className="section">
                <img src={require('./Assets/image 4.png')} alt=""/><br/><br/>
                <a className="black" href="/"><strong>Chhattrapati Shivaji Maharaj <br/>Museum</strong><br/><small>Chattrapati Shivaji Maharaj Terminus,<br/>Mumbai.</small></a>
            </div>
            <div className="section">
                <img src={require('./Assets/image 5.png')} alt=""/><br/><br/>
                <a className="black" href="/"><strong>Sanjay Gandhi National Park</strong><br/><small>Borivali, Mumbai.</small></a>
            </div>
        </div><br/>
    <footer className="footer">
        <div className="parent">
        </div>
    </footer>
 </>
  );
}

export default App;
