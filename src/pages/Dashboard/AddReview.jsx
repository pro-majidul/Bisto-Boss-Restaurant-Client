import React, { useState } from 'react';
import Section from '../../shared/Section';
import { Rating } from '@smastrom/react-rating'
import { IoIosRocket } from "react-icons/io";
import '@smastrom/react-rating/style.css'

const AddReview = () => {
    const [rating, setRating] = useState(0)
    return (
        <section>
            <Section heading='Give a Review' subHeading='Sharing is Caring'></Section>
            <div className='mt-4 bg-[#F3F3F3] py-4 md:px-20 px-4 rounded-md'>

                <h3 className='font-Cinzel text-2xl text-center font-medium'>Rate us!</h3>
                <div className='w-full flex items-center justify-center py-2'>
                    <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                </div>
                <form className='md:my-20 my-10 space-y-5'>
                    <div className='space-y-2'>
                        <label >Which recipe you liked most?</label>
                        <input type="text" placeholder="Recipe you liked most   " className="input w-full" />
                    </div>
                    <div className='space-y-2'>
                        <label >Do you have any suggestion for us?</label>
                        <input type="text" placeholder="Sugggestion" className="input w-full" />
                    </div>
                    <div className='space-y-2'>
                        <label >Kindly express your care in a short way.</label>
                        <textarea className="textarea block w-full h-32 textarea-bordered" placeholder="Review in detail"></textarea>
                    </div>
                    <div>
                        <button className='flex gap-1 items-center text-[#FFFFFF] bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2'>Send Review <IoIosRocket className='text-xl' /></button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default AddReview;