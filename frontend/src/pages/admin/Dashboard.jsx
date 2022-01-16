import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import Sidebar from "../../components/admin/Sidebar";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.user);

  Chart.register(CategoryScale);

  const state = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 4000],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [5, products.length - 2],
      },
    ],
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-auto w-full absolute z-10 bg-gray-50  tall:grid grid-cols-5">
      <MetaData title="Dashboard - Admin Panel" />
      <div className="col-span-1 border-r-2">
        <Sidebar />
      </div>

      <div className="col-span-4 h-auto w-full py-24">
        <div>
          <p className="text-center text-2xl font-bold text-gray-400">
            Dashboard
          </p>
        </div>

        {/* dashboardSummary */}
        <div className="pt-10">
          <div className="text-center text-xl py-5 text-white font-medium bg-secondaryDark">
            <p>
              Total Amount <br /> {/*₹{totalAmount} */}
            </p>
          </div>

          {/* dashboardSummaryBox2 */}
          <div className=" flex flex-row justify-center py-5 gap-7">
            <Link
              className="summryBoxStyle bg-primaryBlue"
              to="/admin/products"
            >
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link
              className="summryBoxStyle bg-secondaryDark "
              to="/admin/orders"
            >
              <p>Orders</p>
              {/* <p>{orders && orders.length}</p> */}
            </Link>
            <Link className="summryBoxStyle bg-gray-800" to="/admin/users">
              <p>Users</p>
              {/* <p>{users && users.length}</p> */}
            </Link>
          </div>
        </div>

        {/* lineChart */}
        <div className="w-[80%] mx-auto">
          <Line
            data={state}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>

        {/* doughnutChart */}
        <div className="w-[50%] md:w-[40%] mx-auto">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
