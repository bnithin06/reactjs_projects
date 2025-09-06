'use client';
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState([
    { Category: 'Readability', likes: 0, dislikes: 0 },
    { Category: 'Performance', likes: 0, dislikes: 0 },
    { Category: 'Security', likes: 0, dislikes: 0 },
    { Category: 'Best Practices', likes: 0, dislikes: 0 },
    { Category: 'SEO', likes: 0, dislikes: 0 }
  ]);

  const handle = (index, type) => {
    const updated = category.map((item, i) =>
      i === index ? { ...item, [type]: item[type] + 1 } : item
    );
    setCategory(updated);
  };

  const styles={
    cursor: 'pointer',
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-100 via-white to-indigo-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-700">Profile Feedback</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {category.map((item, index) => (
          <div 
            key={index} 
            className="border rounded-2xl shadow-md bg-white p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.Category}</h3>
            
            <div className="flex gap-4 mb-4">
              <button
                style={styles}
                onClick={() => handle(index, 'likes')}
                className="px-4 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition"
              >
                👍 Like
              </button>
              <button
                style={styles}
                onClick={() => handle(index, 'dislikes')}
                className="px-4 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
              >
                👎 Dislike
              </button>
            </div>

            <p className="text-gray-600 font-medium">
              <span className="text-green-600">Likes: {item.likes}</span> |{" "}
              <span className="text-red-600">Dislikes: {item.dislikes}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
