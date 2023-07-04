import r_a from '../images/arrow-right.svg'
import down from '../images/downred.svg'
import up from '../images/upgreen.svg'
import img1 from '../images/1.svg'
import img2 from '../images/2.svg'
import img3 from '../images/3.svg'
import img4 from '../images/4.svg'
import img5 from '../images/5.svg'

function Main() {
  return (
    <div>
    <div class='flex gap-4 '>
    {/* first div */}
<div class='bg-white rounded-lg w-1/4 flex justify-between'>
    <div>
    <p>Customer</p>
    <p>1000</p>
    </div>
    <div>
    <p class='text-[#F04461] flex'>-15%<img src={down} alt='img'/></p>
    <button><img src={r_a}/></button>
    </div>
</div>
{/* second div */}
<div class='bg-white rounded-lg w-1/4 flex justify-between'>
    <div>
    <p>Orders</p>
    <p>1050</p>
    </div>
    <div>
    <p class='text-[#42BDA1] flex'>+20%<img src={up} alt='img'/></p>
    <button><img src={r_a}/></button>
    </div>
</div>
{/* third div */}
<div class='bg-white rounded-lg w-1/4 flex justify-between'>
    <div>
    <p>Revenue</p>
    <p>$50.000</p>
    </div>
    <div>
    <p class='text-[#42BDA1] flex'>+10%<img src={up} alt='img'/></p>
    <button><img src={r_a}/></button>
    </div>
</div>
{/* fourth div */}
<div class='bg-white rounded-lg w-1/4 flex justify-between'>
    <div>
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
    <button><img src={r_a}/></button>
    </div>
</div>
{/* end of row */}
</div>
{/* graph */}

<div class='flex gap-3'>
<div class='bg-white w-2/3 mt-5'>
graph

</div>
{/* 2nd box */}
<div class='bg-white w-1/3 mt-5'>
2nd box

</div>
</div>
    </div>
  );
}

export default Main;
