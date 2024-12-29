import React from 'react';
import Parallax from '../shared/ParallasCard';
import Section from '../shared/Section';
import PopularMenu from '../components/PopularMenu';
import image1 from '../assets/menu/banner3.jpg'
import image2 from '../assets/home/chef-service.jpg'
import useMenu from '../hooks/useMenu';
import MenuCategory from '../shared/MenuCategory';

const Menu = () => {
    const [items, loading] = useMenu();
    const popular = items.filter(item => item.category === 'popular')
    const offered = items.filter(item => item.category === 'offered')
    const salad = items.filter(item => item.category === 'salad')
    const pizza = items.filter(item => item.category === 'pizza')
    const soup = items.filter(item => item.category === 'soup')
    const dessert = items.filter(item => item.category === 'dessert')


    return (
        <div className='md:space-y-20 mb-10 space-y-10'>
            <div>
                <Parallax title='Our Menu' img={image1} subTitle='Would you like to try a dish?'></Parallax>
            </div>
            <div>
                <Section heading="Today's Offer" subHeading="Don't Miss"></Section>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            <div>
                <Parallax title='Dessert' img={image2} subTitle='Dramatically negotiate superior outsourcing without exceptional total linkage. Enthusiastically negotiate global partnerships via.'></Parallax>
                <MenuCategory items={dessert}></MenuCategory>
            </div>
            <div>
                <Parallax title='Pizza' img={image2} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory items={pizza}></MenuCategory>

            </div>
            <div>
                <Parallax title='Salad' img={image2} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory items={salad}></MenuCategory>
            </div>
            <div>
            <Parallax title='Soups' img={image2} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
            <MenuCategory items={soup}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;