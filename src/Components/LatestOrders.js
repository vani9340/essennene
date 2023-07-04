import React from "react";
import "./LatestOrders.css";
import one from "../images/Rectangle.png";
import two from "../images/Rectangle1.png";
import three from "../images/Rectangle2.png";
import four from "../images/Rectangle3.png";
import five from "../images/Rectangle4.png";
import divider from '../images/Divider.png'
import Scroll from "../images/Scroll.png";


const LatestOrders = () => {
  return (
    <div className="parent mt-8 rounded-lg ">
      <div className="performer p-3 w-2/5" style={{height: "622px"}}>
       <div class='flex justify-between'> <p
          style={{
            display: "inline-block",
            fontWeight: "bold",
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          Top-Performer
        </p>
        <button
          type="button"
          className="btn btn-outline-warning dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ marginTop: "10px" }}
        >
          Weekly
        </button>
        </div>
        <div class='flex flex-col gap-4'>
        <img src={divider} class='mt-2 mb-[-20px]'/>
        <div className="performerData flex gap-2" style={{ marginTop: "20px" }}>
          <div>
            <img src={one} alt="person1" />
          </div>
          <div>
            
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              
              }}
            >
              Suraj Tiwari
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9A9AB0",
                
            
              }}
            >
              C&F Manager | Uttar pradesh
            </p>
          </div>
          <div class='ml-32'>
            <p
              style={{ color: "#9A9AB0", fontSize: "12px" }}
            >
              Order Total
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700", 
                color: "orange",
              }}
            >
              $434332.00
            </p>
          </div>
        </div>
        <div className="performerData flex gap-2">
          <div>
            <img src={two} alt="person2" />
          </div>
          <div>
            
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                
                }}
              >
                Suraj Tiwari
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#9A9AB0",
                  
              
                }}
              >
                C&F Manager | Uttar pradesh
              </p>
            </div>
            <div class='ml-32'>
              <p
                style={{ color: "#9A9AB0", fontSize: "12px" }}
              >
                Order Total
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700", 
                  color: "orange",
                }}
              >
                $434332.00
              </p>
            </div>
        </div>
        <div className="performerData flex gap-2">
          <div>
            <img src={three} alt="person3" />
          </div>
          <div>
            
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                
                }}
              >
                Suraj Tiwari
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#9A9AB0",
                  
              
                }}
              >
                C&F Manager | Uttar pradesh
              </p>
            </div>
            <div class='ml-32'>
              <p
                style={{ color: "#9A9AB0", fontSize: "12px" }}
              >
                Order Total
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700", 
                  color: "orange",
                }}
              >
                $434332.00
              </p>
            </div>
        </div>
        <div className="performerData flex gap-2">
          <div>
            <img src={four} alt="person4" />
          </div>
          <div>
            
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                
                }}
              >
                Suraj Tiwari
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#9A9AB0",
                  
              
                }}
              >
                C&F Manager | Uttar pradesh
              </p>
            </div>
            <div class='ml-32'>
              <p
                style={{ color: "#9A9AB0", fontSize: "12px" }}
              >
                Order Total
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700", 
                  color: "orange",
                }}
              >
                $434332.00
              </p>
            </div>
        </div>
        <div className="performerData flex gap-2">
          <div>
            <img src={one} alt="person5" />
          </div>
          <div>
            
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                
                }}
              >
                Suraj Tiwari
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#9A9AB0",
                  
              
                }}
              >
                C&F Manager | Uttar pradesh
              </p>
            </div>
            <div class='ml-32'>
              <p
                style={{ color: "#9A9AB0", fontSize: "12px" }}
              >
                Order Total
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700", 
                  color: "orange",
                }}
              >
                $434332.00
              </p>
            </div>
        </div>
        <div className="performerData flex gap-2">
          <div>
            <img src={five} alt="person5" />
          </div>
          <div>
            
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                
                }}
              >
                Suraj Tiwari
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#9A9AB0",
                  
              
                }}
              >
                C&F Manager | Uttar pradesh
              </p>
            </div>
            <div class='ml-32'>
              <p
                style={{ color: "#9A9AB0", fontSize: "12px" }}
              >
                Order Total
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700", 
                  color: "orange",
                }}
              >
                $434332.00
              </p>
            </div>
          </div>
        </div>
        

        {/* latest order */}
      </div>
      <div className="latestOrder w-3/5 py-2 px-3" style={{ height: "622px" }}>
        <p
          style={{
            fontSize: "17px",
            fontWeight: "bold",
            marginRight: "80%",
            marginTop: "10px",
          }}
        >
          Latest Orders
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">Customer</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Order Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ESN1022</th>
              <td>Manish chaurasiya</td>
              <td>February 14 2021</td>
              <td>
                <button type="button" className="btn btn-success bg-[#1ACC0B] bg-opacity-20 text-green-700 border-none">
                  Delivered
                </button>
              </td>
              <td>$710.68</td>
            </tr>
            <tr>
              <th scope="row">ESN1023</th>
              <td>Suraj Tiwari</td>
              <td>February 14 2021</td>
              <td>
                <button type="button" className="btn btn-warning bg-[#FFF6D0] text-yellow-400 border-none">
                  Pending
                </button>
              </td>
              <td>$710.68</td>
            </tr>
            <tr>
              <th scope="row">ESN1024</th>
              <td>John</td>
              <td>February 14 2021</td>
              <td>
                <button type="button" class="btn btn-danger bg-[#FFD0D0] border-none text-red-600">
                  Canceled
                </button>
              </td>
              <td>$710.68</td>
            </tr>
            <tr>
              <th scope="row">ESN1025</th>
              <td>Rakesh Jhunjhunwala</td>
              <td>February 14 2021</td>
              <td>
              <button type="button" className="btn btn-success bg-[#1ACC0B] bg-opacity-20 text-green-700 border-none">
                  Delivered
                </button>
              </td>
              <td>$710.68</td>
            </tr>
            <tr>
              <th scope="row">ESN1026</th>
              <td>Aman trivedi</td>
              <td>February 14 2021</td>
              <td>
              <button type="button" className="btn btn-success bg-[#1ACC0B] bg-opacity-20 text-green-700 border-none">
                  Delivered
                </button>
              </td>
              <td>$710.68</td>
            </tr>
            <tr>
              <th scope="row">ESN1027</th>
              <td>Rakesh singh</td>
              <td>February 14 2021</td>
              <td>
              <button type="button" className="btn btn-success bg-[#1ACC0B] bg-opacity-20 text-green-700 border-none">
                  Delivered
                </button>
              </td>
              <td>$710.68</td>
            </tr>
            <tr>
              <th scope="row">ESN1028</th>
              <td>Vishal Singh</td>
              <td>February 14 2021</td>
              <td>
              <button type="button" className="btn btn-success bg-[#1ACC0B] bg-opacity-20 text-green-700 border-none">
                  Delivered
                </button>
              </td>
              <td>$710.68</td>
            </tr>
            <tr>
              <th scope="row">ESN1029</th>
              <td>Raju sharma</td>
              <td>February 14 2021</td>
              <td>
              <button type="button" className="btn btn-success bg-[#1ACC0B] bg-opacity-20 text-green-700 border-none">
                  Delivered
                </button>
              </td>
              <td>$710.68</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default LatestOrders;
