import search from '../images/search.svg'
function Heading() {
  return (
    <div>
    <div class='max-w-sm bg-white flex border-[#4F4F4F] rounded-lg p-4'>
     <img src={search}/>
     <input type="text" placeholder="Search" class='outline-none pl-2'/> 
    </div>
    </div>
  );
}

export default Heading;
