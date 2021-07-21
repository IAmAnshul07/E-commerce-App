import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt='/'
                className='home_image'
            />
            <div className='home_row'>
                <Product
                    id='1234561'
                    title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                    price={20.84}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg'
                />
                <Product
                    id='1234552'
                    title='Allen Solly Men Cotton Handkerchief'
                    price={200}
                    rating={4} jpg
                    image='https://m.media-amazon.com/images/I/71JPUl0PDKL._AC_UL480_FMwebp_QL65_.jpg'
                />
            </div>

            <div className='home_row'>
                <Product
                    id='123454343'
                    title='Naturevibe Botanicals Organic Tomato Powder Dry - 275gm | Adds Flavour'
                    price={540}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/41SXtN%2Bq-kL.jpg'
                />
                <Product
                    id='1234534'
                    title='Mi Business Casual 21L Water Resistant Laptop Backpack (Blue)'
                    price={899.00}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81DOFN6Rf0L._SL1500_.jpg'
                />
                <Product
                    id='1234525'
                    title='Archer Crosshair 15.6 Inch Laptop Bag with Adjustable Strap'
                    price={699.00}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81smuvDpMjL._SL1500_.jpg'
                />
            </div>
            <div className='home_row'>
                <Product
                    id='1234516'
                    title='Surface Laptops'
                    price={98500}
                    rating={5}
                    image='https://m.media-amazon.com/images/S/abs-image-upload-na/a/AmazonStores/A21TJRUUN4KGV/2ec40d005b26f68a4ebc86bbf4f0ba70.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.png'
                />
            </div>
        </div>
    )
}

export default Home
