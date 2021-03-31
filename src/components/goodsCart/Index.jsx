import React from 'react';
import Adress from './Adress';
import Cart from './Cart';
import Notice from './Notice';
import Prices from './Prices';
import Select from './Select';
import Submit from './Submit';
import Title from './Title';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const GoodsCart = () => {
  const history = useHistory();
  const [cookies] = useCookies(['auth']);
  if (cookies.auth === undefined) {
    history.push('/shop/account/signin');
  }
  return (
    <div className="container">
      <Title />
      <div className="flex">
        <div className="inline-block mr-r-3.5">
          <Select />
          <Cart />
          <Select bottom />
        </div>
        <div className="inline-block mt-r-4.5">
          <Adress />
          <Prices />
          <Submit />
          <Notice />
        </div>
      </div>
    </div>
  );
};

export default GoodsCart;
