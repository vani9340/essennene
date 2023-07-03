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
    <div>
    <img src={logo}/>
    <div class='flex'>
    <img src={Union}/> <p>Create new Order</p>
    </div>
    <div class='flex bg-org max-w-fit'>
    <img src={dashboard}></img> <p class='text-white'>Dashboard</p>
    </div>
      
    <div class='text-light-grey'>
    <div class='flex'>
    <img src={cube}></img> <p>Products</p>
    </div>
    <div class='flex'>
    <img src={layers}></img> <p>Stock</p>
    </div>
    <div class='flex'>
    <img src={setting}></img><p>C&F Management</p>
    </div>
    <div class='flex'>
    <img src={setting}></img><p>Distributor </p>
    </div>
    <div class='flex'>
    <img src={edit}></img><p>Invoice</p>
    </div>
    <div class='flex'>
    <img src={pin}></img><p>Ship Tracking</p>
    </div>
    <div class='flex'>
    <img src={file}></img><p>Credit Management</p>
    </div>
    <div class='flex'>
    <img src={award}></img><p>Loyalty Program</p>
    </div>
    <div class='flex'>
    <img src={trio}></img><p>Offers</p>
    </div>
    </div>
    </div>
  );
}
export default Sidebar;
