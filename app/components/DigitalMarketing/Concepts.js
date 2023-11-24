'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import SocialMediaMarketing from '../../../public/DigitalMarket/SocialMediaMarketing.png';import InfluencerMarketing from '../../../public/DigitalMarket/InfluencerMarketing.png';
 import GuestPosting from '../../../public/DigitalMarket/GuestPosting.png'; import seo from '../../../public/DigitalMarket/seo.png';
 import publicRelations from '../../../public/DigitalMarket/publicRelations.png';import BookEbook from '../../../public/DigitalMarket/BookEbook.png';
 import PodcastMarketing from '../../../public/DigitalMarket/PodcastMarketing.jpeg';import textMarketing from '../../../public/DigitalMarket/textMarketing.png';
import telegramMarketing from '../../../public/DigitalMarket/telegramMarketing.png';import marketingAnalytics from '../../../public/DigitalMarket/marketingAnalytics.png';
import linkedinMarketing from '../../../public/DigitalMarket/linkedinMarketing.png';import emailMarketing from '../../../public/DigitalMarket/emailMarketing.png';
import VideoMarketing from '../../../public/DigitalMarket/VideoMarketing.png';import twitterxMarketing from '../../../public/DigitalMarket/twitterxMarketing.png';
import InstagramMarketing from '../../../public/DigitalMarket/InstagramMarketing.png';import whatappMarketing from '../../../public/DigitalMarket/whatappMarketing.png';
import threadsMarketing from '../../../public/DigitalMarket/threadsMarketing.png';import SnapchatMarketing from '../../../public/DigitalMarket/SnapchatMarketing.png';
import discordMarketing from '../../../public/DigitalMarket/discordMarketing.png';import searchenginemarketing from '../../../public/DigitalMarket/searchenginemarketing.png';
import marketingAdvice from '../../../public/DigitalMarket/marketingAdvice.png';import marketingstrategy from '../../../public/DigitalMarket/marketingstrategy.png';
import Communitymanagement from '../../../public/DigitalMarket/Communitymanagement.png';import ecommerceMarketing from '../../../public/DigitalMarket/ecommerceMarketing.png';
import AffiliateMarketing from '../../../public/DigitalMarket/AffiliateMarketing.png';import musicProduction from '../../../public/DigitalMarket/musicProduction.png';
import Link from 'next/link';

const products = [
  {
    id: 1,
    image: SocialMediaMarketing,
    title: 'Social Media Marketing',
  },
  {
    id: 2,
    image: InfluencerMarketing,
    title: 'Influencer Marketing ',
  },  
  {
    id: 3,
    image: GuestPosting,
    title: 'Guest Posting',
  },
  {
    id: 4,
    image: seo,
    title: 'Search Engine Optimization',
  },
  {
    id: 5,
    image: publicRelations,
    title: 'Public Relations',
  },
  {
    id: 6,
    image: BookEbook,
    title: 'Book & Ebook Marketing ',
  },
  {
    id: 7,
    image: PodcastMarketing,
    title: 'Podcast Marketing',
  },
  {
    id: 8,
    image: VideoMarketing,
    title: 'Video Marketing',
  },
  {
    id: 9,
    image: marketingAnalytics,
    title: 'Web Analytics',
  },
  {
    id: 10,
    image: emailMarketing,
    title: 'Email Marketing',
  },
  {
    id: 11,
    image: textMarketing,
    title: 'Text Message Marketing',
  },
  {
    id: 12,
    image: linkedinMarketing,
    title: 'LinkedIn Marketing ',
  },
  
  {
    id: 13,
    image: twitterxMarketing,
    title: 'Twitter X Marketing',
  },
  {
    id: 14,
    image: telegramMarketing,
    title: 'Telegram Marketing',
  },
  {
    id: 15,
    image: InstagramMarketing,
    title: 'Instagram Marketing',
  },
  {
    id: 16,
    image: whatappMarketing,
    title: 'WhatsApp Marketing',
  },
 {
    id: 17,
    image: threadsMarketing,
    title: 'Threads Marketing',
  },
  {
    id: 18,
    image: SnapchatMarketing,
    title: 'SnapChat Marketing',
  },
  {
    id: 19,
    image: discordMarketing,
    title: 'Discord Marketing',
  },
  {
    id: 20,
    image: searchenginemarketing,
    title: 'Search Engine Marketing(SEM)',
  },
  {
    id: 21,
    image: marketingAdvice,
    title: 'Marketing Advice',
  }, 
  {
    id: 22,
    image: marketingstrategy,
    title: 'Marketing Strategy',
  },
  {
    id: 23,
    image: Communitymanagement,
    title: 'Community Management',
  }, 
  {
    id: 24,
    image: ecommerceMarketing,
    title: 'Ecommerce Marketing',
  }, 
  {
    id: 25,
    image: AffiliateMarketing,
    title: 'Affiiliate Marketing',
  }, 
  {
    id: 26,
    image: musicProduction,
    title: 'Music Production',
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
