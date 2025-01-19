/* eslint-disable react/prop-types */
import NavSubCategory from './NavSubCategory';
function NavCategory({ category }) {
  return (
    <li className='border-b-black border-b-2 bg-white sm:bg-transparent sm:border-none group'>
      <p>
        <a
          className='text-xl'
          href={category.link}
        >
          {category.title}
        </a>
      </p>
      <ul className='grid  gap-2 grid-cols-2  sm:grid-cols-1 sm:group-hover:absolute sm:group-hover:bg-white sm:group-hover:w-100px'>
        {category.subCategories.map((subCategory) => (
          <NavSubCategory
            key={subCategory.id}
            link={subCategory.link}
            title={subCategory.title}
          />
        ))}
      </ul>
    </li>
  );
}

export default NavCategory;
