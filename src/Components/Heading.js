import search from '../images/search.svg'
import Bell from '../images/bell.svg'
import UserPic from '../images/Userpic.svg'
function Heading() {
  return (
    <div class='w-5/6'>
    {/* search box */}
    <div class='max-w-sm bg-white flex border-[#4F4F4F] rounded-lg p-4'>
     <img src={search}/>
     <input type="text" placeholder="Search" class='outline-none pl-2 text-light-grey'/> 
    </div>

    {/* bell and user */}
    <div class='flex'>
      <img src={Bell}/>

      <div class='flex'>
      <div>
      <img src={UserPic}/>
      </div>
      <div>
      <p>Sumanto</p>
      <p>Cashier</p>
      </div>
      </div>

    </div>
    {/* end */}
    </div>
  );
}

export default Heading;
