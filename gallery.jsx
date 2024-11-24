import React, {useState, useEffect} from 'react';
import './Gallery.css'; // Used for styling 

const Gallery = () => {  //Used to sort tours, loading state, and error state
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { //Used to call tour data 
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Fetch data failure!!'); //Message will display if not found
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchTours(); //Used to display function
  }, []);

  const removeTour = (id) => {  // Used to remove a tour from the list
    setTours(tours.filter(tour => tour.id !== id));
  };
  if (loading) {
    return <h2>Loading...</h2>; //Will display as data is being fetched
  }
  if (error) {
    return <h2>{error}</h2>; //Will display if error is found
  }
  return ( //used to display tour list
    <div className="gallery">
      {tours.map(tour => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

const Tour = ({ id, name, info, image, price, removeTour }) => { //Used to create more buttons (Interactivity)
  const [readMore, setReadMore] = useState(false);

  return ( 
    <article className="single-tour"> 
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested 
        </button>
      </footer>
    </article>
  );
};

export default Gallery; //Used to display 
