import React from 'react';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <div className="backgroundImage"></div>
      <div className="content">
        <h1>Welcome to Silver Oak Adventure</h1>
        <p>
          Step into a world of magic and mystery, where the ancient Silver Oak tree stands as a beacon of hope and protection. 
          Join our village as a trainee under the legendary guardian, Mystic, and embark on thrilling quests to safeguard the tree from the forces of evil. 
          Hone your skills, uncover hidden secrets, and become a hero in Silver Oak Adventure!
        </p>
        <div className="cardContainer">
          <div className="card">
            <img src="/OIP.jpg" alt="Card Image 1" />
          </div>
          <div className="card">
            <img src="/map.jpg" alt="Card Image 2" />
          </div>
          <div className="card">
            <img src="/girl.jpg" alt="Card Image 3" />
          </div>
        </div>
      </div>
      <div className="blackSection"></div> {/* Black section */}
    </div>
  );
}

export default Home;
