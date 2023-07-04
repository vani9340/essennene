import React from "react";
import "./LatestOrders.css";
import one from "../images/Rectangle.png";
import two from "../images/Rectangle1.png";
import three from "../images/Rectangle2.png";
import four from "../images/Rectangle3.png";
import five from "../images/Rectangle4.png";
import Scroll from "../images/Scroll.png";


const LatestOrders = () => {
  return (
    <div className="parent mt-8">
      <div className="performer" style={{ width: "400px", height: "622px" }}>
        <p
          style={{
            display: "inline-block",
            marginRight: "180px",
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
        <div className="performerData" style={{ marginTop: "20px" }}>
          <div>
            <img src={one} alt="person1" />
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "-68px",
                marginTop: "4px",
              }}
            >
              Suraj Tiwari
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9A9AB0",
                marginTop: "-15px",
                marginLeft: "7px",
              }}
            >
              C&F Manager | Uttar pradesh
            </p>
          </div>
          <div>
            <p
              style={{ color: "#9A9AB0", fontSize: "12px", marginLeft: "90px" }}
            >
              Order Total
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "-12px",
                color: "orange",
                marginLeft: "90px",
              }}
            >
              $434332.00
            </p>
          </div>
        </div>
        <div className="performerData">
          <div>
            <img src={two} alt="person2" />
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "-75px",
                marginTop: "4px",
              }}
            >
              Suraj Tiwari
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9A9AB0",
                marginTop: "-15px",
                marginLeft: "7px",
              }}
            >
              C&F Manager | Uttar pradesh
            </p>
          </div>
          <div>
            <p
              style={{ color: "#9A9AB0", fontSize: "12px", marginLeft: "90px" }}
            >
              Order Total
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "-12px",
                color: "orange",
                marginLeft: "90px",
              }}
            >
              $434332.00
            </p>
          </div>
        </div>
        <div className="performerData">
          <div>
            <img src={three} alt="person3" />
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "-117px",
                marginTop: "4px",
              }}
            >
              John
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9A9AB0",
                marginTop: "-15px",
                marginLeft: "7px",
              }}
            >
              C&F Manager | Uttar pradesh
            </p>
          </div>
          <div>
            <p
              style={{ color: "#9A9AB0", fontSize: "12px", marginLeft: "90px" }}
            >
              Order Total
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "-12px",
                color: "orange",
                marginLeft: "90px",
              }}
            >
              $434332.00
            </p>
          </div>
        </div>
        <div className="performerData">
          <div>
            <img src={four} alt="person4" />
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "-13px",
                marginTop: "4px",
              }}
            >
              Rakesh Jhunjhunwala
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9A9AB0",
                marginTop: "-15px",
                marginLeft: "7px",
              }}
            >
              C&F Manager | Uttar pradesh
            </p>
          </div>
          <div>
            <p
              style={{ color: "#9A9AB0", fontSize: "12px", marginLeft: "90px" }}
            >
              Order Total
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "-12px",
                color: "orange",
                marginLeft: "90px",
              }}
            >
              $434332.00
            </p>
          </div>
        </div>
        <div className="performerData">
          <div>
            <img src={one} alt="person5" />
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "-66px",
                marginTop: "4px",
              }}
            >
              Aman trivedi
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9A9AB0",
                marginTop: "-15px",
                marginLeft: "7px",
              }}
            >
              C&F Manager | Uttar pradesh
            </p>
          </div>
          <div>
            <p
              style={{ color: "#9A9AB0", fontSize: "12px", marginLeft: "90px" }}
            >
              Order Total
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "-12px",
                color: "orange",
                marginLeft: "90px",
              }}
            >
              $434332.00
            </p>
          </div>
        </div>
        <div className="performerData">
          <div>
            <img src={five} alt="person5" />
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "-66px",
                marginTop: "4px",
              }}
            >
              Rakesh singh
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9A9AB0",
                marginTop: "-15px",
                marginLeft: "7px",
              }}
            >
              C&F Manager | Uttar pradesh
            </p>
          </div>
          <div>
            <p
              style={{ color: "#9A9AB0", fontSize: "12px", marginLeft: "90px" }}
            >
              Order Total
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "-12px",
                color: "orange",
                marginLeft: "90px",
              }}
            >
              $434332.00
            </p>
          </div>
        </div>
        
      </div>
      <div className="latestOrder" style={{ width: "696px", height: "622px" }}>
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
