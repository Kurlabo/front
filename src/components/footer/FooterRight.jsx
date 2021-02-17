import React from 'react';
import { Link } from 'react-router-dom';

const FooterRight = () => {
  return (
    <div className="w-2/4 pt-12">
      <ul className="flex pb-12">
        <li className="pr-6">
          <Link class="link" href="/shop/introduce/about_kurly.php">
            컬리소개
          </Link>
        </li>
        <li className="pr-6">
          <Link
            class="link"
            href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;enablejsapi=1"
            onclick="window.open(this.href, 'pop', 'width=1330,height=660,scrollbars=yes');return false;"
          >
            컬리소개영상
          </Link>
        </li>
        <li className="pr-6">
          <Link
            class="link"
            href="https://marketkurly.recruiter.co.kr/appsite/company/index"
            target="_blank"
          >
            인재채용
          </Link>
        </li>
        <li className="pr-6">
          <Link href="/shop/service/agreement.php">이용약관</Link>
        </li>
        <li className="pr-6">
          <Link href="/shop/service/private.php">개인정보처리방침</Link>
        </li>
        <li className="pr-6">
          <Link href="/shop/service/guide.php">이용안내</Link>
        </li>
      </ul>
      <div className="text-r-1.2 text-kmi-100">
        법인명 (상호) : 주식회사 컬리 <span class="bar">I</span> 사업자등록번호 : 261-81-23567{' '}
        <Link
          to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&amp;apv_perm_no="
          target="_blank"
          className="text-kp-600"
        >
          사업자정보 확인
        </Link>
        <br />
        통신판매업 : 제 2018-서울강남-01646 호 <span class="bar">I</span> 개인정보보호책임자 :
        이원준
        <br />
        주소 : 서울시 도산대로 16길 20, 이래빌딩 B1 ~ 4F <span class="bar">I</span> 대표이사 :
        김슬아
        <br />
        입점문의 :{' '}
        <Link to="https://forms.gle/oKMAe1SaicqMX3SC9" target="_blank" className="text-kp-600">
          입점문의하기
        </Link>{' '}
        <span class="bar">I</span> 제휴문의 :{' '}
        <Link to="mailto:business@kurlycorp.com" className="text-kp-600">
          business@kurlycorp.com
        </Link>
        <br />
        채용문의 :{' '}
        <Link to="mailto:recruit@kurlycorp.com" className="text-kp-600">
          recruit@kurlycorp.com
        </Link>
        <br />
        팩스: 070 - 7500 - 6098 <span class="bar">I</span> 이메일 :{' '}
        <a href="mailto:help@kurlycorp.com" className="text-kp-600">
          help@kurlycorp.com
        </a>
        <em className="block pt-6 text-r-1 not-italic">© KURLY CORP. ALL RIGHTS RESERVED</em>
      </div>
      <ul className="flex pt-6">
        <li className="pr-4">
          <Link href="https://instagram.com/marketkurly" class="link_sns" target="_blank">
            <img
              src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
              alt="마켓컬리 인스타그램 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li className="pr-4">
          <Link href="https://www.facebook.com/marketkurly" class="link_sns" target="_blank">
            <img
              src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
              alt="마켓컬리 페이스북 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li className="pr-4">
          <Link href="http://blog.naver.com/marketkurly" class="link_sns" target="_blank">
            <img
              src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
              alt="마켓컬리 네이버블로그 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li className="pr-4">
          <Link href="https://m.post.naver.com/marketkurly" class="link_sns" target="_blank">
            <img
              src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
              alt="마켓컬리 유튜브 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li className="pr-4">
          <Link
            href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
            class="link_sns lst"
            target="_blank"
          >
            <img
              src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
              alt="마켓컬리 유튜브 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterRight;
