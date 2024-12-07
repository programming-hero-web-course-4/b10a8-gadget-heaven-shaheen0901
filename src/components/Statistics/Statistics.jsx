
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Helmet>
      <title>Statistics | GadgetHaven</title>
      </Helmet>
      <div className="bg-purple-600 pb-12">
        <div className="text-center pt-10 pb-12">
          <h2 className="text-2xl text-white font-bold">Statistics</h2>
          <p className="text-white text-xs">
            Explore the latest gadgets that will take your experience to the
            next level. From smart device to the coolest accessories, we have it
            all!
          </p>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-lg font-bold mx-5">Statistics</h1>
      </div>
      <div className="w-full h-[600px] mb-4">
       <ResponsiveContainer>
       <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 310,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="Product Name" angle={-90} textAnchor="end" />
          <YAxis stroke="#413ea0" />
          <YAxis yAxisId="right" orientation="right" domain={[0,5]} stroke="#F5BF03"/>
          <Tooltip />
          <Legend 
          layout="horizontal"
          align="right"
          verticalAlign="top"
           />

          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Scatter 
          dataKey="rating" 
          fill="#F5BF03"
          yAxisId="right"   />
        </ComposedChart>
       </ResponsiveContainer>
      
        
       
      </div>
    </div>
  );
};

export default Statistics;
