'use client'
// components/Concepts.js
import Image from 'next/image';
import React, { useState } from 'react';
import aiArt from '../../../public/AiServices/aiArts.png';
import AiModel from '../../../public/AiServices/AiModel.png';
import GenerativeAIModels from '../../../public/AiServices/GenerativeAIModels.png';
import AiMusicVideoGenerator from '../../../public/AiServices/AiMusicVideoGenerator.png';
import AiContent from '../../../public/AiServices/AiContent.png';
import Link from 'next/link';

const products = [
  {
    id: 1,
    image: aiArt,
    title: 'Ai Art & Artists',
  },
  {
    id: 2,
    image: AiModel,
    title: 'Ai Model & Software Development',
  },
  {
    id: 3,
    image: GenerativeAIModels,
    title: 'Generative Models',
  },
  {
    id: 4,
    image: AiMusicVideoGenerator,
    title: 'AI Music Videos ',
  },
  {
    id: 5,
    image: AiContent,
    title: 'Ai Content Editing',
  },
];

const Concepts = () => {
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
                <div className='rounded-t-2xl'>
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

export default Concepts;
