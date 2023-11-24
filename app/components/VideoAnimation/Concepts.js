'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import VideoAdsCommercials from '../../../public/Video Animation/VideoAdsCommercials.png';import AnimatedExplainers from '../../../public/Video Animation/AnimatedExplainers.png';
 import VideoEditing from '../../../public/Video Animation/VideoEditing.png'; import AnimatedGifs from '../../../public/Video Animation/AnimatedGifs.png';
 import LogoAnimation from '../../../public/Video Animation/LogoAnimation.png';import IntroAndOutroVideos from '../../../public/Video Animation/IntroAndOutroVideos.png';
 import CharacterAnimation from '../../../public/Video Animation/CharacterAnimation.png';import NFTAnimation from '../../../public/Video Animation/NFTAnimation.png';
import AnimationForStreamers from '../../../public/Video Animation/AnimationForStreamers.png';import SocialMediaVideos from '../../../public/Video Animation/SocialMediaVideos.png';
import AnimationForKids from '../../../public/Video Animation/AnimationForKids.png';import MusicVideos from '../../../public/Video Animation/MusicVideos.png';
import ProductAnimation3d from '../../../public/Video Animation/3DProductAnimation.png';import VideoArt from '../../../public/Video Animation/VideoArt.png';
import LiveActionExplainers from '../../../public/Video Animation/LiveActionExplainers.png';import FilmedVideoProduction from '../../../public/Video Animation/FilmedVideoProduction.png';
import VideoGraphers from '../../../public/Video Animation/VideoGraphers.png';import ECommerceProductVideos from '../../../public/Video Animation/ECommerceProductVideos.png';
import SpokesPersonsVideos from '../../../public/Video Animation/SpokesPersonsVideos.png';import SubtitlesCaptions from '../../../public/Video Animation/SubtitlesCaptions.png';
import LottieWebAnimation from '../../../public/Video Animation/LottieWebAnimation.png';import VisualEffects from '../../../public/Video Animation/VisualEffects.png';
import Link from 'next/link';

import ElearningVideoProduction  from '../../../public/Video Animation/ElearningVideoProduction.png';import ArticletoVideo from '../../../public/Video Animation/ArticletoVideo.png';
import UGCVideos from '../../../public/Video Animation/UGCVideos.png';import Rigging from '../../../public/Video Animation/Rigging.png';
import ScreenCastingVideos from '../../../public/Video Animation/ScreenCastingVideos.png';
import VideoTemplatesEditing from '../../../public/Video Animation/VideoTemplatesEditing.png';import CorporateVideos from '../../../public/Video Animation/CorporateVideos.png';
import SlideShowVideos from '../../../public/Video Animation/SlideShowVideos.png';import CrowdFundingVideos from '../../../public/Video Animation/CrowdFundingVideos.png';
import WritingAdvise from '../../../public/Video Animation/WritingAdvise.png';import AppWebsitePreviews from '../../../public/Video Animation/ScreenCastingVideos.png';






const products = [
  {
    id: 1,
    image: VideoAdsCommercials,
    title: 'Video Ads & Commercials',
  },
  {
    id: 2,
    image: AnimatedExplainers,
    title: 'Animated Explainers',
  },  
  {
    id: 3,
    image: VideoEditing,
    title: 'Video Editing',
  },
  {
    id: 4,
    image: AnimatedGifs,
    title: 'Animated Gifs',
  },
  {
    id: 5,
    image: LogoAnimation,
    title: 'Logo Animation',
  },
  {
    id: 6,
    image: IntroAndOutroVideos,
    title: 'Intro And Outro Videos ',
  },
  {
    id: 7,
    image: CharacterAnimation,
    title: 'Character Animation',
  },
  {
    id: 8,
    image: ProductAnimation3d,
    title: '3D Product Animation',
  },
  {
    id: 9,
    image: SocialMediaVideos,
    title: 'Social Media Videos',
  },
  {
    id: 10,
    image: MusicVideos,
    title: 'Music Videos',
  },
  {
    id: 11,
    image: NFTAnimation,
    title: 'NFT Animation',
  },
  {
    id: 12,
    image: AnimationForKids,
    title: 'Animation For Kids',
  },
  
  {
    id: 13,
    image: VideoArt,
    title: 'Video Art ',
  },
  {
    id: 14,
    image: AnimationForStreamers,
    title: 'Animation For Streamers',
  },
  {
    id: 15,
    image: LiveActionExplainers,
    title: 'Live Action Explainers',
  },
  {
    id: 16,
    image: FilmedVideoProduction,
    title: 'Filmed Video Production',
  },
  {
    id: 17,
    image: VideoGraphers,
    title: 'VideoGraphers',
  },
  {
    id: 18,
    image: ECommerceProductVideos,
    title: 'E-Commerce Product Videos',
  },
  {
    id: 19,
    image: SpokesPersonsVideos,
    title: 'SpokesPersons Videos',
  },
  {
    id: 20,
    image: SubtitlesCaptions,
    title: 'Subtitles & Captions',
  },
  {
    id: 21,
    image: VisualEffects,
    title: 'Visual Effects',
  },
  {
    id: 22,
    image: LottieWebAnimation,
    title: 'Lottie Web Animation',
  },
  {
    id: 23,
    image: ElearningVideoProduction ,
    title: 'E-learning Video Production',
  },
  {
    id: 24,
    image: ArticletoVideo,
    title: 'Article to Video',
  },
  {
    id: 25,
    image: UGCVideos,
    title: 'UGC Videos',
  },
  {
    id: 26,
    image: ScreenCastingVideos,
    title: 'Screen Casting Videos',
  },
  {
    id: 27,
    image: Rigging,
    title: 'Rigging',
  },
  {
    id: 28,
    image: CorporateVideos,
    title: 'Corporate Videos',
  },
  {
    id: 29,
    image: CrowdFundingVideos,
    title: 'Crowd Funding Videos',
  },
  {
    id: 30,
    image: SlideShowVideos,
    title: 'Slide Show Videos',
  },
  {
    id: 31,
    image: VideoTemplatesEditing,
    title: 'Video Templates Editing',
  },
  {
    id: 32,
    image: AppWebsitePreviews,
    title: 'App & Website Previews',
  },
  {
    id: 33,
    image: WritingAdvise,
    title: 'BookTrailers',
  },
  
  
  
  // {
  //   id: 34,
  //   image: WritingAdvise,
  //   title: 'Meditation Videos',
  // },
  // {
  //   id: 35,
  //   image: WritingAdvise,
  //   title: 'Real Estate Promos',
  // },
  
  // {
  //   id: 36,
  //   image: WritingAdvise,
  //   title: 'Game Trailers',
  // },
  // {
  //   id: 37,
  //   image: WritingAdvise,
  //   title: 'Video Advice',
  // },
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

