/* eslint-disable react/prop-types */
function NavSubCategory({ link, title }) {
  return (
    <li className='sm:hidden group-hover:block'>
      <a
        className='text-base '
        href={link}
      >
        {title}
      </a>
    </li>
  );
}

export default NavSubCategory;
