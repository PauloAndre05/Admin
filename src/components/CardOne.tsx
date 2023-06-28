import { useState, useEffect } from "react";
import { getUserInfo } from "../pages/Authentication/services";
import useFetch from "../hooks/usefetch";

interface DataPosto{
  id: string
  nome: string
  Agendamento: any[]
  Confirmado: any[]
  Cancelado: any[]
}

const CardOne = () => {

  const [dataAgendamento, setDataAgendamento] = useState([])

  const data = getUserInfo();
  const { data: User } = useFetch(`/usuario/${data?.sub}`);
  

  const getAgendamento =async () => {
    try{
      const response = await fetch (`http://localhost:5555/agendamento/posto/${User?.postoId}`)
      const responseData = await response.json()
      setDataAgendamento(responseData)
    }

    catch (error){
      console.log(error);
    }

  }

  useEffect(() =>{
    getAgendamento()
  }, [])
  


  const [dataPosto, setDataPosto] = useState([])
    const urlPosto = "http://localhost:5555/posto" 
  
    const getPosto = async () =>{
      try{
        const response = await fetch( urlPosto )
        if ( response.ok ) {
          const responseData = await response.json()
          setDataPosto(responseData)
        }
      }
      catch (error){
        console.log(error);
      }
    }
  
    useEffect(() => {
      getPosto()
    }, [])

    const total = dataPosto.reduce(
      (acc, data: DataPosto) => acc + data.Agendamento.length + data.Confirmado.length + data.Cancelado.length,
      0
    );


    const percentagem = (dataAgendamento.length * total) / 100
    const maior = (total * 50) / 100

  

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
       
        <svg 
          className="fill-primary dark:fill-white" 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          fill="none" 
          viewBox="0 0 256 256">
          <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
        </svg>

        
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {dataAgendamento?.length}
          </h4>
          <span className="text-sm font-medium">Em andamento</span>
        </div>

        {percentagem > maior ? (
          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 animate-pulse duration-75">
          {percentagem}%
          
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
        ):(
          <span className="flex items-center gap-1 text-sm font-medium text-meta-1 animate-pulse duration-75">
          {percentagem}%

          <svg 
            className="fill-meta-1"
            xmlns="http://www.w3.org/2000/svg" 
            width="15" 
            height="15" 
            fill="#4f4040" 
            viewBox="0 0 256 256"><path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"></path></svg>
        </span>
        )}
      </div>
    </div>
  );
};

export default CardOne;
