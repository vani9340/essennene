import search from '../images/search.svg'
import Bell from '../images/bell.svg'
import UserPic from '../images/Userpic.svg'
function Heading() {
  return (
    <div class='flex justify-between'>
    {/* search box */}
    <div class='w-1/3 bg-white flex border-[#4F4F4F] border border-opacity-20 rounded-lg p-2'>
     <img src={search} class='opacity-60'/>
     <input type="text" placeholder="Search" class='outline-none pl-2 text-light-grey rounded-lg'/> 
    </div>

    {/* bell and user */}
    <div class='flex justify-evenly items-center gap-4'>
    <div>
    <img src={Bell}/>
    </div>
     
      <div class='flex gap-2'>
      <div>
      <img src={UserPic}/>
      </div>
      <div>
      <p>Sumanto</p>
      <p class='text-light-grey font-normal text-xs'>Cashier</p>
      </div>
      </div>

    </div>
    {/* end */}
    </div>
  );
}

export default Heading;
