import React from 'react';
import useUsers from '../../hooks/useUsers';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Section from '../../shared/Section';

const PaymentHistory = () => {
    const { users, loading } = useUsers();
    const axiosSecure = useAxiosSecure()
    const { data: payment = [] } = useQuery({
        queryKey: ['payments', users?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${users?.email}`)
            return res.data
        },
        enabled: !loading
    })
    return (
        <div>
            <Section heading='Payment History' subHeading='At a Glance!'></Section>
            <div className=' p-6'>
                <h3 className='text-xl font-bold font-Cinzel'>Total Payments : {payment.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra bg-[#D1A054]">
                        {/* head */}
                        <thead>
                            <tr className='text-white uppercase'>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Total Price</th>
                                <th>Payment Data</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {
                                payment.map(pay =>
                                    <tr key={pay._id}>
                                        <th>{pay.email}</th>
                                        <td>Cy Ganderton</td>
                                        <td>$ {pay.price}</td>
                                        <td>{pay.date}</td>
                                        <td>{pay.transaction}</td>
                                        <td>{pay.status}</td>

                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;