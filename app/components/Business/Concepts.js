'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ERPManagement from '../../../public/Business/ERPManagement.png';import CrmManagement from '../../../public/Business/CrmManagement.png';
 import Sales from '../../../public/Business/Sales.png'; import VirtualAssistant from '../../../public/Business/VirtualAssistant.png';
 import MarketResearch from '../../../public/Business/MarketResearch.png';import BusinessPlans from '../../../public/Business/Businessplan.png';
;import ProductManagement from '../../../public/Business/ProductManagement.png';
;import HRConsulting from '../../../public/Business/HRConsulting.png';
;import ECommerceManagement from '../../../public/Business/ECommerceManagement.png';
import ProjectManagement from '../../../public/Business/ProjectManagement.png';
import BusinessConsulting from '../../../public/Business/BusinessConsulting.png';import SupplyChainManagement from '../../../public/Business/SupplyChainManagement.png';
import Presentations from '../../../public/Business/Presentations.png';import GameConceptDesign from '../../../public/Business/GameConceptDesign.png';
;import CostumerCare from '../../../public/Business/CostumerCare.png';;import FactChecking from '../../../public/Business/FactChecking.png';
;import AIConsulting from '../../../public/Business/AIConsulting.png';
;import EventManagement from '../../../public/Business/EventManagement.png';
;import LegalConsulting from '../../../public/Business/LegalConsulting.png';
;import FinancialConsulting from '../../../public/Business/FinancialConsulting.png';

import Link from 'next/link';






const products = [
  {
    id: 1,
    image: ERPManagement,
    title: 'Erp Management',
  },
  {
    id: 2,
    image: CrmManagement,
    title: 'CRMManagement',
  },  
  {
    id: 3,
    image: Sales,
    title: 'Sales',
  },
  {
    id: 4,
    image: VirtualAssistant,
    title: 'Virtual Assistant',
  },
  {
    id: 5,
    image: MarketResearch,
    title: 'Market Research',
  },
  {
    id: 6,
    image: BusinessPlans,
    title: 'Business Plans ',
  },
  {
    id: 7,
    image: CostumerCare,
    title: 'Costumer Care',
  },
  {
    id: 8,
    image: ProjectManagement,
    title: 'Project Management',
  },
  {
    id: 9,
    image: HRConsulting,
    title: 'HR Consulting',
  },
  {
    id: 10,
    image: ECommerceManagement,
    title: 'E-Commerce Management',
  },
  {
    id: 11,
    image: ProductManagement,
    title: 'Product Management',
  },
  {
    id: 12,
    image: EventManagement,
    title: 'Event Management',
  },
  
  {
    id: 13,
    image: LegalConsulting,
    title: 'Legal Consulting ',
  },
  {
    id: 14,
    image: FinancialConsulting,
    title: 'Financial Consulting',
  },
  {
    id: 15,
    image: BusinessConsulting,
    title: 'Business Consulting',
  },
  {
    id: 16,
    image: SupplyChainManagement,
    title: 'Supply Chain Management',
  },
  {
    id: 17,
    image: Presentations,
    title: 'Presentations',
  },
  {
    id: 18,
    image: GameConceptDesign,
    title: 'Game Concept Design',
  },
  {
    id: 19,
    image: FactChecking,
    title: 'Fact Checking',
  },
  {
    id: 20,
    image: AIConsulting,
    title: 'AI Consulting',
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
      </div><div className='Gridcell'>
        {products.slice(0, displayedItems).map((product) => (
          <div >
                        <Link href={`/product/${product.id}`} key={product.id}>
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
}
