'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Proofreadingediting from '../../../public/WritingTranslations/Proofreadingediting.png';import Translation from '../../../public/WritingTranslations/Translation.png';
 import WebsiteContent from '../../../public/WritingTranslations/WebsiteContent.png'; import ProductDescriptions from '../../../public/WritingTranslations/ProductDescriptions.png';
 import BookEbookWriting from '../../../public/WritingTranslations/BookEbookWriting.png';import bookEditing from '../../../public/WritingTranslations/bookEditing.png';
 import resumeWriting from '../../../public/WritingTranslations/resumeWriting.png';import TechnicalWriting from '../../../public/WritingTranslations/TechnicalWriting.png';
import ContentStrategy from '../../../public/WritingTranslations/ContentStrategy.png';import UxWriting from '../../../public/WritingTranslations/UxWriting.png';
import WhitePapers from '../../../public/WritingTranslations/WhitePapers.png';import EmailCopy from '../../../public/WritingTranslations/EmailCopy.png';
import BrandVoiceTone from '../../../public/WritingTranslations/BrandVoiceTone.png';import Localization from '../../../public/WritingTranslations/Localization.png';
import CustomWritingPrompts from '../../../public/WritingTranslations/CustomWritingPrompts.png';import SalesCopy from '../../../public/WritingTranslations/SalesCopy.png';
import SocialMediaCopy from '../../../public/WritingTranslations/SocialMediaCopy.png';import PodcastWriting from '../../../public/WritingTranslations/PodcastWriting.png';
import AdCopy from '../../../public/WritingTranslations/AdCopy.png';import CoverLetters from '../../../public/WritingTranslations/CoverLetters.png';
import caseStudy from '../../../public/WritingTranslations/caseStudy.png';import PressReleases from '../../../public/WritingTranslations/PressReleases.png';

import LinkedinProfiles from '../../../public/WritingTranslations/LinkedinProfiles.png';import JobDescriptions from '../../../public/WritingTranslations/JobDescriptions.png';
import CreativeWriting from '../../../public/WritingTranslations/CreativeWriting.png';import ScriptWriting from '../../../public/WritingTranslations/ScriptWriting.png';
import BetaWriting from '../../../public/WritingTranslations/BetaWriting.png';
import Transcription from '../../../public/WritingTranslations/Transcription.png';import BusinessNamesAndSlogans from '../../../public/WritingTranslations/BusinessNamesAndSlogans.png';
import GrantWriting from '../../../public/WritingTranslations/GrantWriting.png';import SpeechWriting from '../../../public/WritingTranslations/SpeechWriting.png';
import WritingAdvise from '../../../public/WritingTranslations/WritingAdvise.png';import ResearchSummary from '../../../public/WritingTranslations/BetaWriting.png';
import Link from 'next/link';






const products = [
  {
    id: 1,
    image: Proofreadingediting,
    title: 'ProofReading & Editing',
  },
  {
    id: 2,
    image: Translation,
    title: 'Translation',
  },  
  {
    id: 3,
    image: WebsiteContent,
    title: 'Website Content',
  },
  {
    id: 4,
    image: ProductDescriptions,
    title: 'Product Descriptions',
  },
  {
    id: 5,
    image: BookEbookWriting,
    title: 'Book & Ebook Writing',
  },
  {
    id: 6,
    image: bookEditing,
    title: 'Book Editing ',
  },
  {
    id: 7,
    image: resumeWriting,
    title: 'Resume Writing',
  },
  {
    id: 8,
    image: BrandVoiceTone,
    title: 'Brand Voice & Tone',
  },
  {
    id: 9,
    image: UxWriting,
    title: 'Ux Writing',
  },
  {
    id: 10,
    image: EmailCopy,
    title: 'Email Copy',
  },
  {
    id: 11,
    image: TechnicalWriting,
    title: 'Technical Writing',
  },
  {
    id: 12,
    image: WhitePapers,
    title: 'WhitePapers ',
  },
  
  {
    id: 13,
    image: Localization,
    title: 'Localization ',
  },
  {
    id: 14,
    image: ContentStrategy,
    title: 'Content Strategy',
  },
  {
    id: 15,
    image: CustomWritingPrompts,
    title: 'Custom Writing Prompts',
  },
  {
    id: 16,
    image: SalesCopy,
    title: 'Sales Copy',
  },
  {
    id: 17,
    image: SocialMediaCopy,
    title: 'Social Media Copy',
  },
  {
    id: 18,
    image: PodcastWriting,
    title: 'Podcast Writing',
  },
  {
    id: 19,
    image: AdCopy,
    title: 'Ad Copy',
  },
  {
    id: 20,
    image: CoverLetters,
    title: 'Cover Letters',
  },
  {
    id: 21,
    image: PressReleases,
    title: 'Press Releases',
  },
  {
    id: 22,
    image: caseStudy,
    title: 'Case Studies',
  },
  {
    id: 23,
    image: LinkedinProfiles,
    title: 'Linkedin Profiles',
  },
  {
    id: 24,
    image: JobDescriptions,
    title: 'Job Descriptions',
  },
  {
    id: 25,
    image: CreativeWriting,
    title: 'Creative Writing',
  },
  {
    id: 26,
    image: BetaWriting,
    title: 'Beta Writing',
  },
  {
    id: 27,
    image: ScriptWriting,
    title: 'Script Writing',
  },
  {
    id: 28,
    image: BusinessNamesAndSlogans,
    title: 'Business Names And Slogans',
  },
  {
    id: 29,
    image: SpeechWriting,
    title: 'Speech Writing',
  },
  {
    id: 30,
    image: GrantWriting,
    title: 'Grant Writing',
  },
  {
    id: 31,
    image: Transcription,
    title: 'Transcription',
  },
  {
    id: 32,
    image: ResearchSummary,
    title: 'Research & Summaries',
  },
  {
    id: 33,
    image: WritingAdvise,
    title: 'Writing Advise',
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

