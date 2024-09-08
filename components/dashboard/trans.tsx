"use client"

import { useState, useEffect } from 'react';
interface TranscriptData {
    _id: string;
    user: string;
    url: string;
    closedBy: string;
    fecha: string;
    __v: number;
  }
export default function TranscriptComponent() {
  const [data, setData] = useState<TranscriptData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3002/utils', {
          method: 'POST', // O 'GET', según lo que necesites
          headers: {
            'Content-Type': 'application/json',
            'user': 'iRic' // El valor de 'user'
          }
        });

        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.statusText}`);
        }
     
          

        const result: TranscriptData = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData()
    
  }, []);
  

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Transcripción para {data?.user}</h1>
      <p>ID: {data?._id}</p>
      <p>Cerrado por: {data?.closedBy}</p>
      <p>Fecha: {data?.fecha ? new Date(data.fecha).toLocaleString() : 'Fecha no disponible'}</p>

      <p>
        URL: <a href={data?.url} target="_blank" rel="noopener noreferrer">{data?.url}</a>
      </p>
    </div>
  );
}
