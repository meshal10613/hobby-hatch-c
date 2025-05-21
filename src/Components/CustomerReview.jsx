import React from 'react';
import man1Img from '../assets/man1.jpeg';
import man2Img from '../assets/man2.jpeg';
import man3Img from '../assets/man3.jpeg';
import man4Img from '../assets/man4.jpeg';

const CustomerReview = () => {
    const reviews = [
        {id: 1, name: "John", image: man1Img , review: "I moved to a new city and didn’t know anyone. HobbyHatch helped me connect with a local hiking group"},
        {id: 2, name: "Michel", image: man2Img , review: "I used to crochet alone, but now I meet up with a great group every Thursday through HobbyHatch. It’s made a huge difference in my life."},
        {id: 3, name: "Chirtofer", image: man3Img , review: "It’s like Meetup but 100% hobby-focused. I’ve joined two photography walks and a gardening group so far."},
        {id: 4, name: "Peter", image: man4Img , review: "Creating a board game group was super easy on HobbyHub. Now we meet weekly at a local café with 10+ regulars."},
    ]
    return (
        <div className='my-20 md:my-32'>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Members Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    reviews.map((card) => 
                    <div key={card.id} className="card w-72 md:w-fit bg-gray-100 shadow-xl pt-10 mx-auto">
                        <div className="avatar mx-auto">
                            <div className="w-28 rounded-full">
                                <img src={card.image} />
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-semibold">{card.name}</h2>
                            <div className="rating">
                                <input type="radio" name={`rating-${card.id}`} className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name={`rating-${card.id}`} className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name={`rating-${card.id}`} className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name={`rating-${card.id}`} className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name={`rating-${card.id}`} className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked/>
                            </div>
                            <p className="font-light md:text-xl">{card.review}</p>
                        </div>
                    </div> 
                    )
                }
            </div>
            
        </div>
    );
};

export default CustomerReview;