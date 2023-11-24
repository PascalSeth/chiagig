'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ScenicPhoto from '../../../public/Photographs/ScenicPhoto.png';import photoPreset from '../../../public/Photographs/photoPreset.png';
 import photographyAdvice from '../../../public/Photographs/photographyAdvice.png'; import ProductPhoto from '../../../public/Photographs/ProductPhoto.png';
 import Portraitphoto from '../../../public/Photographs/Portraitphoto.png';import FashionLifestyle from '../../../public/Photographs/FashionLifestyle.png';
 import RealestatePhoto from '../../../public/Photographs/RealestatePhoto.png';
import EventPhoto from '../../../public/Photographs/EventPhoto.png';
import foodPhoto from '../../../public/Photographs/foodPhoto.png';
import Link from 'next/link';


const products = [
  {
    id: 1,
    image: ScenicPhoto,
    title: 'Scenic PhotoGraphers',
  },
  {
    id: 2,
    image: photoPreset,
    title: 'Photo Preset Creation',
  },  
  {
    id: 3,
    image: photographyAdvice,
    title: 'PhotoGraphy Advice',
  },
  {
    id: 4,
    image: ProductPhoto,
    title: 'Product PhotoGraphers',
  },
  {
    id: 5,
    image: Portraitphoto,
    title: 'Portrait PhotoGraphers',
  },
  {
    id: 6,
    image: FashionLifestyle,
    title: 'Lifestyle & Fashion PhotoGraphers',
  },
  {
    id: 7,
    image: RealestatePhoto,
    title: 'Real Estate Photographers',
  },
  {
    id: 8,
    image: EventPhoto,
    title: 'Event PhotoGraphers',
  },
  {
    id: 9,
    image: foodPhoto,
    title: 'Food PhotoGraphers',
  },
  
];
export default function Concepts() {
  const itemsPerPage = 8;
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);

  const handleShowMore = () => {
    setDisplayedItems(displayedItems + itemsPerPage);
  };

  const handleShowLess = () => {
    setDisplayedItems(Math.max(displayedItems - itemsPerPage, itemsPerPage));
  };

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-[2.2vh] p-[2vh] font-bold'>Concepts In Graphics & Design</h1>
        {displayedItems < products.length && (
          <div>
            <button
              className='text-[2vh] p-[1vh] font-semibold hover:text-[#00FE00] hover:cursor-pointer'
              onClick={handleShowMore}
            >
              Show More
            </button>
            <button
              className='text-[2vh] p-[1vh] font-semibold hover:text-[#00FE00] hover:cursor-pointer'
              onClick={handleShowLess}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
      <div className='Gridcell'>
        {products.slice(0, displayedItems).map((product) => (
          <div key={product.id}>
<Link href={{ pathname: `/product/${product.id}`, query: { id: product.id,title:product.title, image: product.image } }}>
                <div>
                  <Image src={product.image} alt={product.title} className='ConceptImage' />
                </div>
                <div>
                  <h1 className='text-[2vh] p-[1vh] font-semibold hover:text-[#00FE00] hover:cursor-pointer'>
                    {product.title}
                  </h1>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

