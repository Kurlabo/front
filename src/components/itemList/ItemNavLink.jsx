import React from 'react';
import { listStyle } from './ItemNavigation';

// 카테고리 별 상품페이지에서 헤더의 리스트 부분

const ItemNavLink = ({ text }) => {
  return <li className={listStyle}>{text}</li>;
};

export default ItemNavLink;
