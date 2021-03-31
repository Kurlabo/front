import React, { useCallback, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { postGoodsToCart } from '../../modules/common/addGoodsToCart';
import CheckQuantityModal from './CheckQuantityModal';

const quanWrapper =
  'text-xl w-36 text-center h-11 font-bold border-gray-300 border rounded-md flex justify-between items-center';
const accum =
  'inline-block text-center text-white bg-yellow-400 border-yellow-500 border border-solid w-p-38 h-8 rounded-2xl text-lg mr-2  align-text-bottom';
const btnStyle =
  'border-gray-400 border borders-solid text-r-1.6 rounded-p-3 w-full text-gray-900 py-6 mr-4 rounded-md box-border focus:outline-0';
const btnStyleP =
  'border-gray-400 border borders-solid text-r-1.6 rounded-p-3 w-full bg-kp-600 text-white py-6 rounded-md box-border focus:outline-0';
const sumWrapper = 'text-p-16 flex justify-between text-gray-800';
const priceWrapper = 'flex justify-between pt-3 pb-28 ';

// 모달창 스타일 정의
const cartModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '440px',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '3rem',
    borderRadius: '6px',
    padding: '0px 30px',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  overlay: {
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(32, 32, 32, 0.75)',
  },
};

// name에 맞는 쿠키 가져오는 함수
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const CartModal = ({
  modalIsOpen,
  closeModal,
  productName,
  originalPrice,
  discounted_price = 0,
  discount_percent = 0,
  product_id,
}) => {
  const [count, setCount] = useState(1);
  const [checkQuantity, setCheckQuantity] = useState(false);

  // 로그인 유무 받아와야됨
  const isLogin = getCookie('auth') !== undefined;

  const dispatch = useDispatch();
  const history = useHistory();
  let onPopUp = useRef(false);

  // 장바구니 담기 버튼
  const onClickAddCart = useCallback(() => {
    // api header
    const config = {
      headers: {
        Authorization: 'Bearer ' + getCookie('auth'),
      },
    };
    if (onPopUp.current) return;
    if (count === 0) {
      setCheckQuantity(true);
      return;
    }
    if (!isLogin) {
      let result = window.confirm(
        '회원 전용 서비스입니다. 로그인/회원가입 페이지로 이동하시겠습니까?',
      );
      if (result) {
        history.push('/shop/account/signin');
      }
      return;
    }
    onPopUp.current = true;
    // 장바구니에 post
    closeModal();
    dispatch(
      postGoodsToCart({
        addProductInfo: { insertCartList: [{ product_id: product_id, cnt: count }] },
        config,
      }),
    );
    setCount(1);
    setTimeout(() => {
      onPopUp.current = false;
    }, 3000);
  }, [count, dispatch, isLogin, product_id, history, onPopUp, closeModal]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={cartModalStyles}
        contentLabel="회원가입"
        ariaHideApp={false}
      >
        <h1 className="text-2xl">{productName}</h1>
        <div className={priceWrapper}>
          <div>
            <div className="inline-block text-2xl font-bold pt-2">
              {discounted_price.toLocaleString()}원
            </div>
            {discount_percent === 0 || (
              <div className="inline-block text-2xl pt-2 pl-3 font-normal text-gray-400 line-through">
                {originalPrice.toLocaleString()}원
              </div>
            )}
          </div>
          <div className={quanWrapper}>
            <button className="w-p-28 focus:outline-0" onClick={onMinus}>
              <img src="/img/ico_minus_on.svg" alt="수량내리기" />
            </button>
            <span className="w-p-33">{count}</span>
            <button className="w-p-28 focus:outline-0" onClick={onPlus}>
              <img src="/img/ico_plus_on.svg" alt="수량올리기" />
            </button>
          </div>
        </div>
        <div className={sumWrapper}>
          <span className="pt-4">합계</span>
          <span className="text-p-24 font-bold pb-4">
            {(discounted_price * count).toLocaleString()}원
          </span>
        </div>
        {!isLogin && (
          <div className="text-right text-2xl pb-8">
            <span className={accum}>적립</span>
            <span>로그인 후, 적립혜택 제공</span>
          </div>
        )}
        <form className="pb-8 flex">
          <button type="button" className={btnStyle} onClick={closeModal}>
            취소
          </button>
          <button type="button" className={btnStyleP} onClick={onClickAddCart}>
            장바구니 담기
          </button>
        </form>
      </Modal>
      {checkQuantity && <CheckQuantityModal checkQuantity={checkQuantity} close={close} />}
    </>
  );

  // 이벤트 핸들러
  // 수량 감소
  function onMinus(e) {
    if (count <= 0) return;
    setCount(count => count - 1);
  }
  // 수량 증가
  function onPlus(e) {
    setCount(count => count + 1);
  }

  // 모달 닫기
  function close() {
    setCheckQuantity(false);
  }
};

export default CartModal;
