import Heading from "./Heading";
import LatestOrders from "./LatestOrders";
import Main from "./Main";
import Sidebar from "./sidebar";
function Structure() {
  return (
    <>
    <div class='flex'>

    {/* side bar */}
  
    <Sidebar/>
   

    {/* main */}
    <div class='w-5/6 mx-8 mt-8'>
    {/* heading div */}
    <div>
    <Heading/>
    </div>
    <Main/>
    {/* 4-box row */}
    

    {/* 2-box - graph and list */}
    </div>
    {/* latest order list */}
  
    </div>
 
    </>
  );
}

export default Structure;