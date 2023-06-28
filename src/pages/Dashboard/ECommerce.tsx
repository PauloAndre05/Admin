import { useNavigate } from 'react-router-dom';
import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
/* import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import MapOne from '../../components/MapOne.tsx'; */
/* import ChatCard from '../../components/ChatCard.tsx';
 */import TableOne from '../../components/TableOne.tsx';
import useFetch from '../../hooks/usefetch.ts';
import DefaultLayout from '../../layout/DefaultLayout.tsx';
import { getUserInfo } from '../Authentication/services/index.ts';

const ECommerce = () => {
  const pop = getUserInfo()
  const navigate = useNavigate();
  const { data: User } = useFetch(`/usuario/${pop?.sub}`);

  if (!User) {
    navigate('/auth/signin');
    return <></>;
  }

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 max-h-50">
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne /> */}
        <div className="col-span-12 h-full w-full ">
          <TableOne />
        </div>
        {/* <ChatCard /> */}
      </div>  
    </DefaultLayout>
  );
};

export default ECommerce;
