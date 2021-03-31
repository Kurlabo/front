import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Loading from '../components/common/Loading';
import ItemDetail from '../components/itemDetail/ItemDetail';
import { initCartOption, setProductId } from '../modules/cartAddOption';
import { getProductInfo } from '../modules/itemDetail';

const ItemDetailContainer = ({ match }) => {
  const dispatch = useDispatch();
  const productId = match.params.productId;

  const { itemDetail, loading } = useSelector(({ itemDetail, loading }) => ({
    itemDetail: itemDetail.info,
    error: itemDetail.error,
    loading: loading['itemDetail/GET_PRODUCT_INFO'],
  }));

  useEffect(() => {
    dispatch(getProductInfo(productId));
    dispatch(setProductId({ productId }));
    window.scrollTo(0, 0);
    return () => {
      dispatch(initCartOption());
    };
  }, [dispatch, productId]);

  // console.log('데이터:', itemDetail);

  return loading ? (
    <Loading />
  ) : (
    itemDetail && <ItemDetail itemDetail={itemDetail} productId={productId} />
  );
};

export default React.memo(withRouter(ItemDetailContainer));
