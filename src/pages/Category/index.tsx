import Breadcrumb from '../../components/Breadcrumb';
import useFetch from '../../hooks/usefetch';
import DefaultLayout from '../../layout/DefaultLayout';
/* import { useState } from 'react';
import Modal from '../../components/Modal';
import { api } from '../../services';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import { FormCategory } from '../../components/FormCategory';
import { FormCategoryEdit } from './EditCategory'; */
import TableThreeCategory from '../../components/TableThreeCategory';

/* type officilProps = {
  id: string,
  nome: string,
  descricao: string
};
 */
export const Category = () => {

  const { data: servico } = useFetch('/servico');
  /* const [item, setItem] = useState<officilProps>({
    id: '',
    nome: '',
    descricao: ''
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  console.log(servico);

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
  };

  async function onRemove(item: officilProps) {
    const resp = confirm(
      `Tens certeza que queres eliminar o ${item?.nome} `
    );
    if (resp) {
      try {
        const response = await api.delete(`/servico/${item?.id}`);
        if (response) {
          mutate('/servico');
          toast.success('Servico deletado com sucesso');
        }
      } catch (err: any) {
        toast.error(err?.error?.message);
      }
    }
  } */

  return (
    <DefaultLayout>
      {/* <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="mb-4 text-xl font-bold">Adicionar Serviço</h2>
        <FormCategory onclose={closeModal} />
      </Modal>

      <Modal isOpen={isOpenEdit} onClose={closeModalEdit}>
        <h2 className="mb-4 text-xl font-bold">Actulizar Serviço</h2>
        <FormCategoryEdit onclose={closeModalEdit} item={item} />
      </Modal>
 */}
      <Breadcrumb pageName="Servicos" />

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
        <TableThreeCategory
          heads={['Nome', 'Requisitos']}
          data={servico}
          /* onRemove={onRemove}
          openModalEdit={openModalEdit} */
        />
      </div>
    </DefaultLayout>
  );
};
