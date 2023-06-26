import { useState } from "react";
import { getUserInfo } from "../pages/Authentication/services";
import useFetch from "../hooks/usefetch";

interface DataPosto{
  id: string
  nome: string
  Agendamento: any[]
  Confirmado: any[]
  Cancelado: any[]
}

const CardFour = () => {
  
  const [dataPosto, setDataPosto] = useState([])
    
    const getPosto = async () =>{
      try{
        const response = await fetch(`http://localhost:5555/posto/`)
        if ( response.ok ) {
          const responseData = await response.json()
          setDataPosto(responseData)
        }           
      }
      catch (error){
        console.log(error);
      }
    }
  
    getPosto()


    const total = dataPosto.reduce(
      (acc, data: DataPosto) => acc + data.Agendamento.length + data.Confirmado.length + data.Cancelado.length,
      0
    );

  

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">

        <svg 

          className="fill-primary dark:fill-white"
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          fill="#000000" 
          viewBox="0 0 256 256"
        >
          <path d="M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z">
          </path>

        </svg>

      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">Total de agendamento</span>
        </div>

        {/* <span className="flex items-center gap-1 text-sm font-medium text-meta-5">
          0.95%
          <svg
            className="fill-meta-5"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
              fill=""
            />
          </svg>
        </span> */}
      </div>
    </div>
  );
};


export default CardFour;
