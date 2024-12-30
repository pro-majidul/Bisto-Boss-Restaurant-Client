import React, { useState } from 'react';
import Parallax from '../shared/ParallasCard';
import ourShopImg from '../assets/shop/banner2.jpg'
import useMenu from '../hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../shared/Card';
import TabComponent from '../components/TabComponent';


const Shop = () => {
    const [items, loading] = useMenu();
    const [tanIndex, setTabIndex] = useState(0)
    const drink = items.filter(item => item.category === 'drinks')
    const salad = items.filter(item => item.category === 'salad')
    const pizza = items.filter(item => item.category === 'pizza')
    const soup = items.filter(item => item.category === 'soup')
    const dessert = items.filter(item => item.category === 'dessert')
    return (
        <section className='md:space-y-20 mb-10 space-y-10'>
            <div>
                <Parallax title='Our Shop' img={ourShopImg} subTitle='Would you like to try a dish?'></Parallax>
            </div>

            <div>
                <Tabs selectedIndex={tanIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza </Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drink</Tab>
                    </TabList>
                    <TabPanel>
                        <TabComponent salad={salad}></TabComponent>
                    </TabPanel>
                    <TabPanel>
                        <TabComponent salad={pizza}></TabComponent>
                    </TabPanel>
                    <TabPanel>
                    <TabComponent salad={soup}></TabComponent>
                    </TabPanel>
                    <TabPanel>
                    <TabComponent salad={dessert}></TabComponent>
                    </TabPanel>
                    <TabPanel>
                    <TabComponent salad={drink}></TabComponent>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Shop;