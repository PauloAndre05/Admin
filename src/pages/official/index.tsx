import Breadcrumb from '../../components/Breadcrumb';
import TableThree from '../../components/TableThree';
import useFetch from '../../hooks/usefetch';
import DefaultLayout from '../../layout/DefaultLayout';
/* import { useState } from 'react';
import Modal from '../../components/Modal';
import { FormOfficial } from '../../components/FormOfficial';
import { FormOfficialEdit } from './EditOficial'; 
import { api } from '../../services';
import { toast } from 'react-toastify';
import { mutate } from 'swr';*/

/* type officilProps = {
  id: string;
  nome: string;
  local: string;
  limiteDiario: number;
  cordenadas: string
  };
 */

export const Official = () => {
  const { data: posto } = useFetch('/posto');
  /* const [item, setItem] = useState<officilProps>({
      id: '',
      nome: '',
      local: '',
      limiteDiario: 0,
      cordenadas: '',
  });
 */

  
/* 
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalEdit = (item: officilProps) => {
    setItem(item);
    setIsOpenEdit(true);
  };

  const closeModalEdit = () => {
    setIsOpenEdit(false);
  }; */

  /* async function onRemove(item: officilProps) {
    const resp = confirm(
      `Tens certeza que queres eliminar o(a) ${item?.nome} `
    );
    if (resp) {
      try {
        const response = await api.delete(`/posto/${item?.id}`);
        if (response) {
          mutate('/posto');
          toast.success('Posto deletado com sucesso');
        }
      } catch (err: any) {
        toast.error(err?.error?.message);
      }
    }
  }

 */
  return (
    <DefaultLayout>
      {/* <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="mb-4 text-xl font-bold">Cadastrar Posto de Atendimento</h2>
        <FormOfficial onclose={closeModal} />
      </Modal>

      <Modal isOpen={isOpenEdit} onClose={closeModalEdit}>
        <h2 className="mb-4 text-xl font-bold">Actulizar Posto</h2>
        <FormOfficialEdit onclose={closeModalEdit} item={item} />
      </Modal> */}

      <Breadcrumb pageName="Postos de atendimento" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      {/* <div className="flex flex-1 justify-end py-2">
        <button
          onClick={openModal}
          className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Adicionar
        </button>
      </div> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <TableThree
          heads={['Nome', 'Localização', 'Limite Diário']}
          data={posto}
          /* onRemove={onRemove}
          openModalEdit={openModalEdit} */
        />
      </div>
    </DefaultLayout>
  );
};
