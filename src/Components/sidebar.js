import logo from '../images/logo.svg'
import Union from '../images/Union.svg'
import award from '../images/award.svg'
import cube from '../images/cube.svg'
import dashboard  from '../images/dashboard.svg'
import edit from '../images/edit.svg'
import file from '../images/file.svg'
import layers  from '../images/layers.svg'
import pin from '../images/pin.svg'
import trio from '../images/trio.svg'
import setting from '../images/setting.svg'

function Sidebar() {
  return (
    <div class=' w-1/6  sticky'>
    <div class='bg-white pt-8'> 
    <img src={logo} class='mx-3'/>
    <div class='flex bg-org bg-opacity-10 m-4 p-3 rounded-lg border border-org border-opacity-30 gap-2'>
    <img src={Union}/> <p class='text-org'>Create new Order</p>
    </div>
    <div class='flex bg-org  m-4 p-3 rounded-lg bg-opacity-80 gap-2'>
    <img src={dashboard}></img> <p class='text-white'>Dashboard</p>
    </div>

    <div class='text-light-grey flex flex-col gap-8 px-4 pb-6 opacity-80 mx-1 py-3 '>
    <div class='flex gap-3'>
    <img src={cube} ></img> <p>Products</p>
    </div>
    <div class='flex gap-3'>
    <img src={layers}></img> <p>Stock</p>
    </div>
    <div class='flex gap-3'>
    <img src={setting}></img><p>C&F Management</p>
    </div>
    <div class='flex gap-3'>
    <img src={setting}></img><p>Distributor </p>
    </div>
    <div class='flex gap-3'>
    <img src={edit}></img><p>Invoice</p>
    </div>
    <div class='flex gap-3'>
    <img src={pin}></img><p>Ship Tracking</p>
    </div>
    <div class='flex gap-3'>
    <img src={file}></img><p>Credit Management</p>
    </div>
    <div class='flex gap-3'>
    <img src={award}></img><p>Loyalty Program</p>
    </div>
    <div class='flex gap-3'>
    <img src={trio}></img><p>Offers</p>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Sidebar;
