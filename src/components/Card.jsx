
import React from 'react';
 import '../styles/Card.css'
import Footer from './Footer';
const Card = () => {
  // Sample data for multiple cards
  const cardData = [
    {
      name: 'RDX',
      languages: ' Malayalam',
      imageSrc: 'https://gumlet.assettype.com/filmcompanion%2F2023-06%2F32323230-1ae9-4188-a883-7277343ac049%2FQR__3_.jpg?format=auto', // Replace with your image URL
    },
    {
      name: 'JAWAN',
      languages: 'English, Hindi',
      imageSrc: 'https://i0.wp.com/naukaricareer.com/wp-content/uploads/2023/09/103359834.webp?resize=1024%2C576&ssl=1', // Replace with your image URL
    },
    {
        name: 'Mark Antony',
        languages: 'Tamil, Malayalam',
        imageSrc: 'https://lehren.com/wp-content/uploads/2023/09/mark-antony-full-movie-leaked.jpg', // Replace with your image URL
      },
      {
        name: 'Mark Antony',
        languages: 'Tamil, Malayalam',
        imageSrc: 'https://lehren.com/wp-content/uploads/2023/09/mark-antony-full-movie-leaked.jpg', // Replace with your image URL
      },
    // Add more card data as needed
  ];

  return (
   
    <div className='card-container' style={{ width: "100%" }}>

      <div className='grid' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cardData.map((card, index) => (
          <div className="card mt-2" style={{ width: "18rem", maxHeight: "360px", color: "white", background: "rgba(255,255,255,0)", flex: '0 0 calc(25.33% - 20px)' }} key={index}>
            <div className="image-container" style={{border:"solid",borderRadius:"5px",width:"300px", marginLeft:"40px"}}>
            <div className="sticker" >Latest Releases</div>

              <img src={card.imageSrc} className="card-img-top" alt={`Card ${index}`} style={{ height: "250px",objectFit: "fill" }} />
            </div>
            <div className="card-body" >
              <h4 className="card-title text-center">{card.name}</h4>
              <p className="card-text text-center">Languages: {card.languages}</p>
            </div>
          </div>
        ))}
      </div>
    
    </div>
   
  );
};

export default Card;