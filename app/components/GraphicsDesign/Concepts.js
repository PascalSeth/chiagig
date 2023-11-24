'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import mini from '../../../public/minmalistLogo.png';import web from '../../../public/webDesign.png';
import brandStyles from '../../../public/brandStyles.png'; import gameArt from '../../../public/gameArt.jpg';
 import graphicsGamers from '../../../public/graphicsGamers.png';import businessCards from '../../../public/businessCards.jpg';
 import appDesign from '../../../public/appDesign.png';import illustration from '../../../public/illustration.png';
import logo from '../../../public/logo.png';import landingPage from '../../../public/landingPage.png';
import childrensBook from '../../../public/childrensBook.jpg';import resumeDesign from '../../../public/resumeDesign.png';
import uxDesign from '../../../public/uxDesign.webp';import AiArtist from '../../../public/AiArtist.webp';
import nftArt from '../../../public/nftArt.png';//import AiArtist from '../../../public/AiArtist.webp';
import Link from 'next/link';


const products = [
  {
    id: 1,
    image: mini,
    title: 'Minimalist Logo Design',
  },
  {
    id: 2,
    image: web,
    title: 'Web Design',
  },  
  {
    id: 3,
    image: brandStyles,
    title: 'Brand Style Guides',
  },
  {
    id: 4,
    image: gameArt,
    title: 'Game Art',
  },
  {
    id: 5,
    image: graphicsGamers,
    title: 'Graphics For Streamers',
  },
  {
    id: 6,
    image: businessCards,
    title: 'Business Cards And Stationary',
  },
  {
    id: 7,
    image: appDesign,
    title: 'App Design',
  },
  {
    id: 8,
    image: uxDesign,
    title: 'UX design',
  },
  {
    id: 9,
    image: landingPage,
    title: 'Landing Page Design',
  },
  {
    id: 10,
    image: resumeDesign,
    title: 'Resume Design',
  },
  {
    id: 11,
    image: illustration,
    title: 'Illustration',
  },
  {
    id: 12,
    image: childrensBook,
    title: 'Childrens Book ',
  },
  
  {
    id: 13,
    image: AiArtist,
    title: 'AI Artists ',
  },
  {
    id: 14,
    image: logo,
    title: 'Logo Design ',
  },
  {
    id: 15,
    image: nftArt,
    title: 'NFT Art ',
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


