import React, { useState } from 'react';
import Section from '../../shared/Section';
import LocationCard from '../../components/locationCard';
import { Input } from "@/components/ui/input"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Button } from "@/components/ui/button"




const UserReservation = () => {
    const [formData, setFormData] = useState({
        dropdownValue: null,
        name: '',
        email: '',
        phone: ''

    })
    const handelsubmit = e => {
        e.preventDefault()
        console.log(formData)
    }
    const handelOnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value,
        }))

    }
    const options = [
        '1 person', '2 person', '3 person'
    ];
    const defaultOption = options[0];
    return (
        <div>
            <Section heading='Book A Table' subHeading='Reservation'></Section>
            <div className='py-5 my-5'>
                <form onSubmit={handelsubmit} className='space-y-4' action="">
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        <div>
                            <Dropdown onChange={(option) => setFormData((prev) => ({ ...prev, dropdownValue: option.value }))} options={options} value={defaultOption} placeholder="Select an option" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        <div>
                            <label htmlFor="">Name*</label>
                            <Input onChange={handelOnchange} type="name" name='name' value={formData.name} placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="">Phone*</label>
                            <Input onChange={handelOnchange} type="number" name='phone' value={formData.phone} placeholder="Number" />
                        </div>
                        <div>
                            <label htmlFor="">Email*</label>
                            <Input onChange={handelOnchange} type="email" name='email' value={formData.email} placeholder="Email" />
                        </div>

                    </div>
                    <Button variant='outline'>Submit</Button>
                </form>

            </div>

            <Section heading='Our Location' subHeading='Visite Us'></Section>
            <br />
            <LocationCard></LocationCard>




        </div>
    );
};

export default UserReservation;