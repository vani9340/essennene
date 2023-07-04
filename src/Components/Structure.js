import Heading from "./Heading";
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
    </div>
    </>
  );
}

export default Structure;