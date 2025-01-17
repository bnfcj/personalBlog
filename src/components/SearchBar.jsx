import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

function SearchBar() {
  const [searchClicked, setSearchClicked] = useState(false);
  return (
    <div className='basis-1/3 '>
      <button
        aria-label={searchClicked ? 'Close Search Bar' : 'Open Search Bar'}
        className='ml-auto block relative'
        onClick={() => setSearchClicked(!searchClicked)}
      >
        <MagnifyingGlassIcon
          className={`h-6 w-6 ml-auto flex-1 text-black ${
            searchClicked ? 'hidden' : 'block'
          }`}
        />
        <XMarkIcon
          className={`h-6 w-6 ml-auto flex-1 text-black ${
            searchClicked ? 'block' : 'hidden'
          }`}
        />
      </button>
      <input
        type='text'
        id='searchBar'
        placeholder='Search Here:'
        className={`absolute  text-5xl inset-x-0 py-10 px-20  top-full ${
          searchClicked ? 'block' : 'hidden'
        } border border-gray-300 rounded shadow-md bg-white transition-all duration-300`}
      />
    </div>
  );
}

export default SearchBar;
