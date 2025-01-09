import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Section from '../../shared/Section';
import { MdDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const secureAxios = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await secureAxios.get('/users')
            return res.data
        }

    })


    const handelMakeAdmin = async (user) => {

        try {
            const res = await secureAxios.patch(`/users/admin/${user._id}`);
            console.log(res);
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Now Admin`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        } catch (err) {
            console.log(err);
        }
    }

    const handelDeleteUser = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await secureAxios.delete(`/users/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }



    return (
        <div >
            <Helmet>
                            <title>Bistro Boss | ALL Users</title>
                        </Helmet>
            <Section heading='Manage All Users' subHeading='How Many ?' ></Section>
            <div className='my-5 py-5 w-full'></div>
            <div className='bg-white w-full text-black p-6 mt-5'>
                <h3 className='my-5 text-3xl font-bold'>Total Users : {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#D1A054] text-white font-Cinzel'>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'Admin' ? "Admin" : <p onClick={() => handelMakeAdmin(user)} className='btn hover:bg-red-300 bg-[#D1A054]'> <FaUsers size={24} /></p>
                                    }
                                </td>
                                <td>
                                    <p onClick={() => handelDeleteUser(user._id)} className='btn hover:bg-red-300 bg-red-700 btn-md'> <MdDelete className='text-white' size={24} /></p>
                                </td>
                            </tr>)}



                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;