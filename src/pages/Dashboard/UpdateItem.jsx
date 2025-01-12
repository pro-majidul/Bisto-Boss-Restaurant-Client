import React from 'react';
import { useParams } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const { id } = useParams();
    const [items] = useMenu()
    const axiosSecure = useAxiosSecure()
    const data = items.find(item => item._id === id);
    // console.log(data);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = async (item) => {
        console.log(item)
        // console.log(data.image[0])
        // const imagefile = { image: data.image[0] }

        // olternative rules
        // const res = await publicAxios.post(image_hosting_api, imagefile, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })

        // const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`, imagefile, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })

        // const menuItem = {
        //     image: res.data.data.display_url,
        //     price: parseFloat(data.price),
        //     recipe: data.recipe,
        //     category: data.category,
        //     name: data.name
        // }

        // const response = await axiosSecure.post('/menu', menuItem);
        // console.log(response.data);
        // if (response.data.insertedId) {
        //     reset()
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "Menu Item Added Successfull",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }
        const res = await axiosSecure.patch(`/menu/${id}` ,item )
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} update Successfull`,
                showConfirmButton: false,
                timer: 1500
            });
        }



    }
    return (
        <div>
            <h3 className='text-center text-xl md:text-4xl md:mb-16 mb-4'>Update Item</h3>
            <div className='bg-[#F3F3F3] md:p-16 p-4 text-black'>
                <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Recipe name*</label>
                        <input placeholder='Recipe Name' type='text' className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800' defaultValue={data?.name} {...register("name", { required: true })} />
                        {errors.name?.type === "required" && (
                            <p role="alert" className='text-red-600'>Recipe name is required</p>
                        )}
                    </div>

                    <div className='flex items-center gap-3 justify-center'>
                        <div className='w-full'>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Category*</label>
                            <select placeholder='Category' defaultValue={data?.category}  {...register("category", { required: true })} className="select w-full dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 max-w-md">
                                <option disabled >Select A Category</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='dessert'>Dessert</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                            {errors.category?.type === "required" && (
                                <p role="alert" className='text-red-600'>Recipe name is required</p>
                            )}
                        </div>
                        <div className='w-full'>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Price*</label>
                            <input type='number' defaultValue={data?.price} placeholder='Price' className='w-full px-3 py-3 border rounded-md  max-w-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800' {...register("price", { required: true })} />
                            {errors.price?.type === "required" && (
                                <p role="alert" className='text-red-600'>Recipe name is required</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-medium">Recipe Details*</span>

                            </div>
                            <textarea defaultValue={data?.recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                            {errors.recipe?.type === "required" && (
                                <p role="alert" className='text-red-600'>Recipe name is required</p>
                            )}

                        </label>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className="btn text-white bg-gradient-to-r from-amber-700 to-amber-500">Update Recipe Details<FaUtensils></FaUtensils></button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateItem;