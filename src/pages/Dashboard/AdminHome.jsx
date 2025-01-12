import React from 'react';
import useUsers from './../../hooks/useUsers';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { MdElectricRickshaw } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const AdminHome = () => {
    const { users } = useUsers()
    const axiosSecure = useAxiosSecure()
    const { data } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })



    // custom function for Barchart
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom function pi-chart

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pichartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })



    console.log(data, chartData);
    return (
        <section>
            <h3 className='text-3xl font-bold font-Cinzel'>Hi WelCome {users?.displayName ? users.displayName : 'Back '} !</h3>
            <section className='my-2'>
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-3  rounded-lg bg-gradient-to-r from-[#C143F6] to-[#F5C8FE]">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                            <IoWalletOutline className='text-3xl text-white' />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{Number(data?.revenue || 0).toFixed(2)}</p>
                            <p className="capitalize">Revenue</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gradient-to-r from-[#D7A961] to-[#F9E2B7]">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                            <PiUsersThreeFill className='text-3xl text-white' />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{data?.users}</p>
                            <p className="capitalize">Customers</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gradient-to-r from-[#F9E2B7] to-[#FDD0E3]">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                            <FaUserInjured className='text-3xl text-white' />

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{data?.products}</p>
                            <p className="capitalize">Products</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 items-center bg-gradient-to-r from-[#70B4FF] to-[#B1F2FF]">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                            <MdElectricRickshaw className='text-3xl text-white' />

                        </div>
                        <div className="flex flex-col text-white justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{data?.orders}</p>
                            <p className="capitalize">Orders</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex items-center'>
                <div className='w-1/2'>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='category' />
                        <YAxis />
                        <Bar dataKey="quentity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className='w/12'>
                    <PieChart width={400} height={400}>
                        <Legend></Legend>
                        <Pie
                            data={pichartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pichartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                </div>
            </section>

        </section>
    );
};

export default AdminHome;