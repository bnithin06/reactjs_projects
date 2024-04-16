import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CustomerDetails() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    const { query }=useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.pexels.com/v1/search', {
                    headers: {
                        Authorization: 'BvP5MSdESMbQjXnvasnH6s0tM7xvCxB0LFzdeePfzUeRxPwSv902Usqt'
                    },
                    params: {
                        query:query,
                        per_page: 7
                    }
                });

                if (response.status === 200) {
                    setImages(response.data.photos);
                    // console.log(images)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        };
        fetchData();
    }, [images]);

    return (
        <div className='w-full border-2 h-screen grid place-content-center'>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi aspernatur reprehenderit et natus eos repellat quas impedit fugit ipsam quasi necessitatibus molestias at a officiis cumque, assumenda tempore eius.</p>
            {error && <p>Error: {error}</p>}
            <div className='flex flex-wrap'>
            {images.map((image, key) => (
                <div key={key} className="inline-block m-2 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
                <img src={image.src.medium} className="object-cover h-44 w-36" alt="Description" />
                </div>
))}

            </div>
        </div>
    );
}

export default CustomerDetails;
