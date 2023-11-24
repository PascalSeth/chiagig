'use client'
// Import the necessary components and libraries
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import webtest from '../../../public/webtest.jpg';
import { useRouter, useSearchParams } from 'next/navigation';
import NoPage from '../../../public/NoPage.png';
import profile from '../../../public/profile.png';
import Link from 'next/link';
import { Search } from '@mui/icons-material';


const concepts = [
  { id: 1, image: webtest, title: 'I will build an innovative software for u', profile:profile, Username:'Kofi'  },
  { id: 1, image: webtest, title: 'I will build an innovative software for u', profile:profile, Username:'Kofi'  },
  { id: 1, image: webtest, title: 'I will build an innovative software for u', profile:profile, Username:'Kofi'  },
  { id: 1, image: webtest, title: 'I will build an innovative software for u', profile:profile, Username:'Kofi'  },
  { id: 1, image: webtest, title: 'I will build an innovative software for u', profile:profile, Username:'Kofi'  },
  { id: 1, image: webtest, title: 'I will build an innovative software for u', profile:profile, Username:'Kofi'  },

];

const ProductDetail = () => {
  const itemsPerPage = 8;
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);
  const [filteredConcepts, setFilteredConcepts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleShowMore = () => {
    setDisplayedItems(displayedItems + itemsPerPage);
  };

  const handleShowLess = () => {
    setDisplayedItems(Math.max(displayedItems - itemsPerPage, itemsPerPage));
  };

  const searchParams = useSearchParams();
  const title = searchParams.get('title');

  useEffect(() => {
    // Filter concepts based on the search term
    const filtered = concepts.filter((concept) =>
      concept.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredConcepts(filtered);
    setDisplayedItems(itemsPerPage); // Reset displayed items when the search term changes
  }, [searchTerm]);

  const handleSearch = () => {
    // Update the search term when the search button is clicked
    // You can perform additional actions here if needed
    setDisplayedItems(itemsPerPage); // Reset displayed items when the search button is clicked
  };

  return (
    <div className='h-full w-full flex flex-col overflow-hidden px-[2vw] '>
      <div className='flex flex-col  h-[full]'>
      <div>
          <h1 className='font-bold text-[32px] rainbow-text text-gray-600'> {title}</h1>
        </div> 


        <div className='flex items-center  justify-between p-[1vw] max-w-7xl w-full mb-[2vh]'>
          <div>
            <h1 className='text-gray-500 text-[18px] font-bold'>
              Showing items {Math.min(displayedItems, filteredConcepts.length)} of {filteredConcepts.length}
            </h1>
          </div>
          <div className='flex items-center bg-gray-200'>
            <input
              placeholder='Search here...'
              type='text'
              className='w-[21vw] p-[1vh] h-fit outline-none bg-transparent'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='bg-[#03B95D] p-[1vh]' onClick={handleSearch}>
              <Search className='text-white' />
            </button>
          </div>
        </div>
        {concepts.length === 0 && (
            <div className='justify-center flex items-center h-screen flex-col  text-center w-screen  '>
           <Image src={NoPage} alt='' className='max-h-[300px] w-[300px] mb-[2vh] mt-[-200px]'/>
            <p className='font-bold text-[32px] text-gray-400'  >No Data available, come back later</p>
         </div>
          )}
        <div className='Gridcelldescript'>
          {/* Render only the concepts that match the search term */}
          {filteredConcepts.slice(0, displayedItems).map((concept) => (
            <div key={concept.id} >
    <div className='flex items-center mb-1'>
   <Image src={concept.profile} alt="" className=' rounded-full h-[30px] w-[30px]' />
   <h1 className='text-[16px] font-semibold text-green-500 ml-2'>{concept.Username}</h1>
                  </div>
              <Link href={{ pathname: `/concept/${concept.id}`, query: { id: concept.id, title: concept.title, image: concept.image } }}>
                <div>
                  <Image src={concept.image} alt={concept.title} className='ConceptImagedescript' />
                </div>
                <div>
                  <h1 className='text-[2vh] p-[1vh] font-semibold hover:text-[#00FE00] hover:cursor-pointer'>
                    {concept.title}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
          {filteredConcepts.length === 0 && (
            <p>No matching items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
