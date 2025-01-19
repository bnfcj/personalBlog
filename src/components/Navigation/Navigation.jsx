import NavCategories from './NavCategories';
import SearchBar from './SearchBar';
import MusicBrand from './MusicBrand';

function Navigation({ categories }) {
  return (
    <nav className='flex flex-row py-10 px-20 items-center justify-center relative bg- '>
      <NavCategories categories={categories} />
      <MusicBrand />
      <SearchBar />
    </nav>
  );
}

export default Navigation;
