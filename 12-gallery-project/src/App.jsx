import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Pagination from './components/Pagination';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <h3 className="text-xl text-gray-400 animate-pulse font-semibold">
              Loading amazing photos...
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {userData.map((elem) => (
              <Card key={elem.id} elem={elem} /> 
            ))}
          </div>
        )}
      </main>

      <Pagination index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  );
};

export default App;