import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const btnStyle = 'w-12 text-gray-700 cursor-pointer absolute inset-y-1/2';
let onAnimate = false;

const NameBox = styled.p`
  overflow: hidden;
  width: 100%;
  height: 35px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const RelatedProduct = ({ relatedProducts }) => {
  let curIndex = useRef(0);
  const containerRef = useRef();
  const carouselArr = [
    ...relatedProducts.slice(15),
    ...relatedProducts,
    ...relatedProducts.slice(0, 5),
  ];

  useEffect(() => {
    containerRef.current.style.transform = 'translateX(-' + 950 + 'px)';
  }, [relatedProducts]);

  const slideNext = () => {
    if (onAnimate) return;
    onAnimate = true;
    if (curIndex.current <= 3) {
      containerRef.current.style.transition = 'all 0.5s ease-in-out';
      containerRef.current.style.transform = 'translateX(-' + 950 * (curIndex.current + 2) + 'px)';
      ++curIndex.current;
    }
    if (curIndex.current === 3) {
      setTimeout(() => {
        containerRef.current.style.transition = 'all 0s';
        containerRef.current.style.transform = 'translateX(-' + 0 + 'px)';
      }, 500);
      curIndex.current = -1;
    } else if (curIndex.current === 4) {
      setTimeout(() => {
        containerRef.current.style.transition = 'all 0s';
        containerRef.current.style.transform = 'translateX(-' + 950 + 'px)';
      }, 500);
      containerRef.current.style.transition = 'all 0.5s ease-in-out';
      containerRef.current.style.transform = 'translateX(-' + 950 * 5 + 'px)';
      console.log(950 * 4);
      curIndex.current = 0;
    }
    setTimeout(() => {
      onAnimate = false;
    }, 500);
  };
  const slidePrev = () => {
    if (onAnimate) return;
    if (curIndex.current >= 0) {
      onAnimate = true;
      containerRef.current.style.transition = 'all 0.5s ease-in-out';
      containerRef.current.style.transform = 'translateX(-' + 950 * curIndex.current + 'px)';
      --curIndex.current;
    }
    if (curIndex.current === -1) {
      setTimeout(() => {
        onAnimate = true;
        containerRef.current.style.transition = 'all 0s';
        containerRef.current.style.transform = 'translateX(-' + 950 * 4 + 'px)';
      }, 500);
      curIndex.current = 3;
    }
    setTimeout(() => {
      onAnimate = false;
    }, 500);
  };

  return (
    <div>
      <div className="w-8 h-2 bg-gray-800" />
      <h3 className="uppercase text-p-13 font-semibold">Related Product</h3>
      <div className="w-p-1050 relative mt-8">
        <svg
          className={`${btnStyle + ' left-0 z-50'}`}
          onClick={slidePrev}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <svg
          className={`${btnStyle + ' right-2 z-50'}`}
          onClick={slideNext}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="h-p-320 w-p-950 overflow-hidden relative my-0 mx-auto">
          <ul className="absolute w-per-500" ref={containerRef}>
            {carouselArr.map((product, i) => {
              return (
                <li
                  className="cursor-pointer float-left w-p-180 h-p-320 mr-4 border border-gray-300"
                  key={i}
                >
                  <Link to={`/shop/goods/goods_view/${product.product_id}`}>
                    <div className="h-p-230">
                      <img
                        className="h-full w-full"
                        src={product.original_image_url}
                        alt="연관 상품 이미지"
                        onError={handleImgError}
                      />
                    </div>
                    <div className="p-4">
                      <NameBox className="text-p-14 text-gray-800 h-14 leading-7">
                        {product.name}
                      </NameBox>
                      <p className="text-p-14">{(+product['original_price']).toLocaleString()}원</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );

  function handleImgError(e) {
    e.target.src = '/img/commingsoonresize.png';
  }
};
export default React.memo(RelatedProduct);
