import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSubLi = ({ subtext }) => {
  return (
    <li className="text-left pt-r-1.1 ml-6 hover:text-kp-600 font-normal">
      <Link to="/" className="border-b border-kg-500 hover:border-kp-600">
        {subtext}
      </Link>
    </li>
  );
};

export default CategoriesSubLi;
