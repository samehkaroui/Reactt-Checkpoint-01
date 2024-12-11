import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Assurez-vous d'importer votre fichier CSS
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = 'John'; // Remplacez par votre prénom ou laissez vide

function App() {
  const handleBuy = () => {
    alert('Achat effectué avec succès !');
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ width: '18rem' }}>
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
          <button className="btn btn-primary mt-2" onClick={handleBuy}>Acheter</button>
        </div>
      </div>
      <div className='divuser'>
      <h2 className="mt-3">
        Hello, Samh
      </h2>
      {firstName && <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="Profile" className="mt-2" />}
      </div>
    </div>
  );
}

export default App;
