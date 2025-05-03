import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Items_per_page = 6

const RickyProfiles = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [currentPage,setCurrentPage] = useState(0)
  const [page,setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await response.json();
        setData(data.results);
        setCurrentPage(0)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const total = Math.ceil(data.length/Items_per_page)
  const currentItems = data.slice(
    currentPage * Items_per_page,
    currentPage * Items_per_page + Items_per_page

  )

  const handleNext = () =>{
    if(currentPage < total){
        setCurrentPage(prev => prev +1)
    }else{
        setPage(prev => prev + 1)
    }
  }

  const handlePrev =()=>{
    if(currentPage > 0){
        setCurrentPage(prev => prev - 1)
    }else{
        setPage(prev=> prev - 1)
    }
  }


  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-teal-700">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {currentItems.map((item) => (
          <div
            key={item.id}
            onClick={()=>navigate(`/profile/${item.id}`)}
            className="bg-white shadow-lg rounded-2xl overflow-hidden w-80 transform transition-transform duration-300 hover:scale-115"

          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.species}</p>
              <p
                className={`text-sm font-semibold mt-1 ${
                  item.status === 'Alive'
                    ? 'text-green-600'
                    : item.status === 'Dead'
                    ? 'text-red-600'
                    : 'text-yellow-600'
                }`}
              >
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1 && currentPage === 0}
          className={`px-4 py-2 rounded-md font-medium transition ${
            page === 1 && currentPage === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' :
            'bg-teal-500 text-white hover:bg-teal-600'
          }`}
        >
          Previous
        </button>
        <span className="text-lg font-semibold text-gray-700">Page {((page - 1) * total) + currentPage + 1}</span>
        <button
          onClick={handleNext}
          disabled={data.length < Items_per_page && currentPage >= total - 1}
          className={`px-4 py-2 rounded-md font-medium transition ${
            data.length < Items_per_page && currentPage >= total - 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-teal-500 text-white hover:bg-teal-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RickyProfiles;
