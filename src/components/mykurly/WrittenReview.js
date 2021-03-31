import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WrittenReview = () => {
  return (
    <section id="#viewAfterList" className="">
      <h3 className="a11y-hidden">작성한후기보기</h3>
      <ul>
        <WrittenReviewItem />
      </ul>
    </section>
  );
};

const WrittenReviewItem = () => {
  const [detailView, setDetailView] = useState(false);
  const writtenReview = useSelector(state => state.review.data.viewAfterList);
  // const url = 'https://img-cf.kurly.com/shop/data/goods/1568624108507y0.jpg';
  return (
    <>
      {writtenReview.map(
        ({
          order_id,
          product_name,
          product_id,
          review_id,
          title,
          content,
          help,
          regdate,
          delivery_condition,
          cnt,
          list_img_url,
        }) => (
          <li key={`review_${review_id}`} className="mt-2">
            <div className="text-r-1.6 border-b-2 text-kg-400 border-kg-80 pt-3">
              <h3 className="text-r-1.4 px-10 text-kg-350 pb-2">{product_name}</h3>
              {/* <p className="border-b px-10 border-kg-80 font-medium pb-4">
                [CJ프레시웨이] 탄두리치킨볶음밥 &amp; 참치오믈렛
              </p> */}
              <div className="hover:bg-kg-100 px-10 py-4">
                <div className={`inline-block align-middle ${list_img_url ? 'w-5/6' : 'w-full'}`}>
                  <div onClick={onClickReview} className="cursor-pointer ">
                    <h4 className="mb-2 font-medium w-4/5 inline-block align-middle">
                      {title ? title : '맛있습니다.'}
                    </h4>
                    <span className="text-kg-350 inline-block p-1 text-r-1.2 w-1/5 align-middle text-right">
                      {regdate} 작성
                    </span>
                    <p
                      className={`py-5 text-r-1.2  h-full leading-r-1.5 ${
                        list_img_url ? 'w-5/6' : 'w-full'
                      } ${detailView ? 'h-r-3.6' : ' multiline-ellipsis'}`}
                    >
                      {content ? content : '맛있습니다.'}
                    </p>
                  </div>
                  <span className="inline-block font-medium text-r-1.2 w-5/6 p-2 text-left align-middle">
                    도움이 돼요 <span className="text-kp-600">{help ? help : 0}</span>
                  </span>
                  {detailView ? (
                    <div className="text-r-1.2 inline-block w-1/6 align-middle text-right">
                      <>
                        <button
                          onClick={deleteReview}
                          className="text-kp-600 p-2 px-3 active:border active:border-kp-600 "
                        >
                          삭제
                        </button>
                        <Link
                          to="/"
                          onClick={modifyReview}
                          className="text-kp-600 ml-3 p-2 px-3active:border active:border-kp-600"
                        >
                          수정
                        </Link>
                      </>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                {list_img_url ? (
                  <div className="inline-block ml-11 w-36 align-middle ">
                    <img src={`${list_img_url}`} alt="" />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </li>
        ),
      )}
    </>
  );
  function onClickReview(e) {
    setDetailView(!detailView);
  }
  function modifyReview() {}
  function deleteReview() {}
};
export default WrittenReview;
