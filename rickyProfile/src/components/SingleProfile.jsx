import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!data) return <p className="text-center mt-10 text-lg text-gray-600">Loading character details...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-10 px-4 flex justify-center items-start">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md overflow-hidden transition duration-300">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-72 object-cover object-center rounded-t-3xl"
        />
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-extrabold text-gray-800 text-center">{data.name}</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <p><span className="font-semibold">ID:</span> {data.id}</p>
            <p><span className="font-semibold">Status:</span> <span className={`font-semibold ${
              data.status === 'Alive' ? 'text-green-600'
              : data.status === 'Dead' ? 'text-red-600'
              : 'text-yellow-500'
            }`}>{data.status}</span></p>
            <p><span className="font-semibold">Species:</span> {data.species}</p>
            {data.type && <p><span className="font-semibold">Type:</span> {data.type}</p>}
            <p><span className="font-semibold">Gender:</span> {data.gender}</p>
            <p><span className="font-semibold">Origin:</span> {data.origin.name}</p>
            <p><span className="font-semibold">Location:</span> {data.location.name}</p>
            <p><span className="font-semibold">Episodes:</span> {data.episode.length}</p>
            <p className="col-span-2"><span className="font-semibold">Created:</span> {new Date(data.created).toLocaleDateString()}</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-xl transition"
            >
              ← Back
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
