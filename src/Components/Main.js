import r_a from '../images/arrow-right.svg'
import down from '../images/downred.svg'
import up from '../images/upgreen.svg'
import img1 from '../images/1.svg'
import img2 from '../images/2.svg'
import img3 from '../images/3.svg'
import img4 from '../images/4.svg'
import img5 from '../images/5.svg'
import Graph from '../Components/Graph'
import ItemsList from './ItemsList'
import LatestOrders from './LatestOrders'
function Main() {
  return (
    <div>
    <div class='flex gap-8 mt-5'>
    {/* first div */}
    <div class='bg-white rounded-lg w-1/4 flex justify-between p-4 font-semibold'>
    <div class='flex flex-col gap-3'>
    <p>Customer</p>
    <p>1000</p>
    </div>
    <div class='flex flex-col justify-around'>
    <p class='text-[#F04461] flex'>-15%<img src={down} alt='img'/></p>
    <button><img src={r_a} class='pl-4'/></button>
    </div>
</div>
{/* second div */}
<div class='bg-white rounded-lg w-1/4 flex justify-between p-4 font-semibold'>
    <div class='flex flex-col gap-3'>
    <p>Orders</p>
    <p>1050</p>
    </div>
    <div class='flex flex-col justify-around'>
    <p class='text-[#42BDA1] flex'>+20%<img src={up} alt='img'/></p>
    <button><img src={r_a}  class='pl-4'/></button>
    </div>
</div>
{/* third div */}
<div class='bg-white rounded-lg w-1/4 flex justify-between p-4 font-semibold'>
    <div class='flex flex-col gap-3'>
    <p>Revenue</p>
    <p>$50.000</p>
    </div>
    <div class='flex flex-col justify-around'>
    <p class='text-[#42BDA1] flex'>+10%<img src={up} alt='img'/></p>
    <button><img src={r_a}  class='pl-4'/></button>
    </div>
</div>
{/* fourth div */}
<div class='bg-white rounded-lg w-1/4 flex justify-between p-4 font-semibold'>
    <div class='flex flex-col gap-3'>
    <p>New Customers</p>
    {/* rounded images  */}
    <div class='flex gap-0'>
    <img src={img1} alt='img'/>
    <img src={img2} alt='img'/>
    <img src={img3} alt='img'/>
    <img src={img4} alt='img'/>
    <img src={img5} alt='img'/>
    </div>
    </div>
    <div class='flex items-end'>
    <button><img src={r_a}  class='pl-4'/></button>
    </div>
</div>
{/* end of row */}
</div>
{/* graph */}

<div class='flex gap-3'>
<div class='bg-white w-2/3 mt-5 rounded-lg'>
<Graph/>

</div>
{/* 2nd box */}
<div class=' w-1/3 mt-5 bg-white rounded-lg'>
<ItemsList/>
</div>
</div>
<LatestOrders/>
    </div>
  );
}

export default Main;
