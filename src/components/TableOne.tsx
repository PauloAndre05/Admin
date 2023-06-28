import { useState } from 'react';

interface DataPosto{
  id: string
  nome: string
  Agendamento: any[]
  Confirmado: any[]
  Cancelado: any[]
}

const TableOne = () => {

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

  getPosto()

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 w-full">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Postos de atendimento / estatística
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Nome
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Agendamentos
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Confirmado
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Cancelados
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              %
            </h5>
          </div>
        </div>

        {dataPosto.map((data: DataPosto) => {
                // Dividir o nome completo em um array
                const nomeCompleto = data?.nome.split(" ");
               /*  const primeiroNome = nomeCompleto[length]; */
                const ultimoNome = nomeCompleto[nomeCompleto.length - 2 + 1  ];
                /* const primeiraLetra = primeiroNome.charAt(0).toUpperCase(); */
        return(
        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5" key={data.id}>
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">{ultimoNome}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{data.Agendamento.length}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">{data.Confirmado.length}</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{data.Cancelado.length}</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">0%</p>
          </div>
        </div>
        )
      })}
      </div>
    </div>
  );
};

export default TableOne;
