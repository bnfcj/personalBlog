import NavCategories from '../components/NavCategories';
import { Outlet } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
const categories = [
  {
    id: 1,
    title: 'Music',
    link: '#music',
    subCategories: [
      { id: 1, title: 'Rock', link: '#music-rock' },
      { id: 2, title: 'Pop', link: '#music-pop' },
      { id: 3, title: 'Jazz', link: '#music-jazz' },
      { id: 4, title: 'Classical', link: '#music-classical' },
      { id: 5, title: 'Folk', link: '#music-folk' },
      { id: 6, title: 'Electronic', link: '#music-electronic' },
      { id: 7, title: 'Hip-Hop', link: '#music-hiphop' },
    ],
  },
  {
    id: 2,
    title: 'Fitness',
    link: '#fitness',
    subCategories: [
      { id: 1, title: 'Workouts', link: '#fitness-workouts' },
      { id: 2, title: 'Nutrition', link: '#fitness-nutrition' },
      { id: 3, title: 'Recovery', link: '#fitness-recovery' },
      { id: 4, title: 'Tips & Tricks', link: '#fitness-tips' },
    ],
  },
  {
    id: 3,
    title: 'Food',
    link: '#food',
    subCategories: [
      { id: 1, title: 'Recipes', link: '#food-recipes' },
      { id: 2, title: 'Ingredients', link: '#food-ingredients' },
      { id: 3, title: 'Restaurants', link: '#food-restaurants' },
      { id: 4, title: 'Healthy Eating', link: '#food-healthy' },
    ],
  },
];

function Layout() {
  return (
    <div className='min-h-screen bg-neutral-50'>
      <nav className='flex flex-row p-12 items-center relative justify-center'>
        <NavCategories categories={categories} />
        <a
          className='text-xl basis-1/3 text-center'
          href='#'
        >
          Music Blog
        </a>
        <div className='basis-1/3'>
          <MagnifyingGlassIcon className='h-6 w-6 ml-auto flex-1 text-black' />
        </div>
      </nav>
      {<Outlet />}
    </div>
  );
}

export default Layout;
