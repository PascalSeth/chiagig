'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import websiteDevelopment from '../../../public/Programming&tech/websiteDevelopment.png';import websiteMaintenance from '../../../public/Programming&tech/websiteMaintenance.png';
 import gameDevelopment from '../../../public/Programming&tech/gameDevelopment.png'; import developmentStreamers from '../../../public/Programming&tech/developmentStreamers.png';
 import softwareDevelopment from '../../../public/Programming&tech/softwareDevelopment.jpg';import mobileappDevelopment from '../../../public/Programming&tech/mobileappDevelopment.png';
 import MobileAppMaintenance from '../../../public/Programming&tech/MobileAppMaintenance.png';import electronicsEngineering from '../../../public/Programming&tech/electronicsEngineering.png';
import supportIT from '../../../public/Programming&tech/supportIT.png';import BlockChainCrypto from '../../../public/Programming&tech/BlockChainCrypto.png';
import devopsCloud from '../../../public/Programming&tech/devopsCloud.png';import NFTdevelopment from '../../../public/Programming&tech/NFTdevelopment.png';
import AiDevelopment from '../../../public/Programming&tech/AiDevelopment.png';import cyberSecurity from '../../../public/Programming&tech/cyberSecurity.png';
import onlineCoding from '../../../public/Programming&tech/onlineCoding.png';import chatbotDev from '../../../public/Programming&tech/chatbotDev.png';
import convertFiles from '../../../public/Programming&tech/convertFiles.png';import userTesting from '../../../public/Programming&tech/userTesting.png';
import qaReview from '../../../public/Programming&tech/qaReview.png';import CryptoTradingBots from '../../../public/Programming&tech/CryptoTradingBots.png';
import Link from 'next/link';


const products = [
  {
    id: 1,
    image: websiteDevelopment,
    title: 'Website Development',
  },
  {
    id: 2,
    image: websiteMaintenance,
    title: 'Website Maintenance',
  },  
  {
    id: 3,
    image: gameDevelopment,
    title: 'Game Development',
  },
  {
    id: 4,
    image: developmentStreamers,
    title: 'Development for Streamers',
  },
  {
    id: 5,
    image: softwareDevelopment,
    title: 'Software Development',
  },
  {
    id: 6,
    image: mobileappDevelopment,
    title: 'Mobile App Development ',
  },
  {
    id: 7,
    image: MobileAppMaintenance,
    title: 'Mobile App Maintenance',
  },
  {
    id: 8,
    image: AiDevelopment,
    title: 'Ai Development',
  },
  {
    id: 9,
    image: BlockChainCrypto,
    title: 'BlockChain & Cryptocurrency',
  },
  {
    id: 10,
    image: NFTdevelopment,
    title: 'NFT Development',
  },
  {
    id: 11,
    image: electronicsEngineering,
    title: 'Electronics Engineering',
  },
  {
    id: 12,
    image: devopsCloud,
    title: 'Devops & Cloud ',
  },
  
  {
    id: 13,
    image: cyberSecurity,
    title: 'Cyber Security ',
  },
  {
    id: 14,
    image: supportIT,
    title: 'Support & IT',
  },
  {
    id: 15,
    image: onlineCoding,
    title: 'Online Coding Lessons',
  },
  {
    id: 16,
    image: chatbotDev,
    title: 'ChatBot Development',
  },
  {
    id: 16,
    image: convertFiles,
    title: 'Convert Files',
  },
  {
    id: 17,
    image: userTesting,
    title: 'User Testing',
  },
  {
    id: 18,
    image: qaReview,
    title: 'QA & Review',
  },
  {
    id: 19,
    image: CryptoTradingBots,
    title: 'Trading Bots Development',
  },
  // {
  // //   id: 20,
  // //   image: nftArt,
  // //   title: 'All in Programming Tech',
  // // },
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
