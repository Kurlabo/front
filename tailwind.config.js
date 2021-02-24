const plugin = require('tailwindcss/plugin');

const focusedSiblingPlugin = plugin(function ({ addVariant, e }) {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules(rule => {
      rule.selector = `:checked + .focused-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans KR'],
      },
      borderRadius: {
        'p-3': '0.3rem',
        '50-p': '50%',
        'r-0.4': '0.4rem',
        'r-0.9': '0.9rem',
        'r-1.1': '1.1rem',
        'r-2': '2rem',
      },
      lineHeight: {
        3: '3rem',
        4: '4rem',
        5: '5rem',
        'r-3': '3rem',
        'r-3.5': '3.5rem',
        'r-5': '5rem',
        'r-5.6': '5.6rem',
        'r-6.3': '6.3rem',
        'r-10': '10rem',
        40: '4rem',
        50: '5rem',
      },
      fontSize: {
        'r-0': '0rem',
        'r-24': '2.4rem',
        'p-0': '0px',
        'p-13': '1.3rem',
        'p-14': '1.4rem',
        'p-16': '1.6rem',
        'p-20': '2rem',
        'p-24': '2.4rem',
        1.2: '1.2rem',
        1.3: '1.3rem',
        1.4: '1.4rem',
        1.5: '1.5rem',
        1.6: '1.6rem',
        1.8: '1.8rem',
        2: '2rem',
        'p-28': '2.8rem',
        'p-32': '3.2rem',
        'r-1': '1rem',
        'r-1.2': '1.2rem',
        'r-1.3': '1.3rem',
        'r-1.4': '1.4rem',
        'r-1.5': '1.5rem',
        'r-1.6': '1.6rem',
        'r-1.7': '1.7rem',
        'r-1.8': '1.8rem',
        'r-2': '2rem',
        'r-2.2': '2.2rem',
        'r-2.4': '2.4rem',
        'r-2.8': '2.8rem',
        'r-3': '3rem',
        'r-3.3': '3.3rem',
        'r-3.8': '3.8rem',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      backgroundSize: {
        'r-6': '6rem',
      },
      backgroundImage: theme => ({
        'big-pre-button': "url('https://res.kurly.com/pc/service/main/1908/ico_prev1_x1.png')",
        'big-next-button': "url('https://res.kurly.com/pc/service/main/1908/ico_next1_x1.png')",
        'sm-pre-button':
          "url('https://res.kurly.com/pc/service/main/1908/btn_prev_default_x2.png?v=1')",
        'sm-next-button':
          "url('https://res.kurly.com/pc/service/main/1908/btn_next_default_hover_x2.png?v=1')",
        'down-pattern': "url('https://res.kurly.com/pc/service/order/2011/ico_sub_price_dot.svg')",
        'check-button': "url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg')",
        'checked-button':
          "url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg')",
        'conversation-btn': 'url(https://res.kurly.com/pc/ico/2011/ico_point_up_18x12.svg)',
        cartTriangle: 'url(https://res.kurly.com/pc/ico/1903/ico_layer_point_x2.png)',
      }),
      width: {
        formWidth: '64rem',
        formInput: '32rem',
      },
      height: {
        'r-4.4': '4.4rem',
      },
      padding: {
        'r-10.2': '10.2rem',
      },
      inset: {
        'r--1': '-1rem',
        'r--3': '-3rem',
        'p-91': '9.1rem',
        'p-159': '15.9rem',
      },
      colors: {
        // 메인페이지 인스타그램 컬러
        kmi: {
          100: '#999',
        },
        // 메인페이지 md상품 border 컬러
        kmmd: {
          100: '#e3e3e3',
        },
        kb: {
          100: '#f6f3f8',
        },
        kg: {
          50: '#fafafa',
          80: '#dddfe1',
          100: '#f7f7f7',
          150: '#999999',
          200: '#b5b5b5',
          250: '#ddd',
          300: '#4c4c4c',
          350: '#666',
          400: '#333',
          500: '#f7f7f7',
        },
        ky: {
          100: '#ffbf00',
          200: 'e8a828',
          600: '#514859',
        },
        kp: {
          100: '#B1A9C6',
          200: '#D2BEFF',
          300: '#BA99E1',
          400: '#A775D6',
          500: '#875EB3',
          550: '#795b8f',
          600: '#5F0080',
          700: '#795b8f',
        },
        discount: {
          100: '#FA622F',
        },
        kdp: {
          100: '#31123D',
          200: '#401351',
          300: '#4F1266',
          400: '#5E107B',
        },
        klp: {
          30: '#5f0080',
          50: '#F0EEF1',
          100: '#E5D6E8',
          150: '#b277fe',
          200: '#CBAFD2',
          300: '#B088BC',
          400: '#9563A6',
          500: '#7A3D91',
          600: '#5E107B',
          700: '#E8F0FE',
        },
        tableColor: '#f7f5f8',
        tableBorder: '#f4f4f4',
        borderGray: '#eee',
        cautionRed: '#b3130b',
        formStar: '#ee6a7b',
        inputGray: '#cccccc',
        inputRadio: '#dddddd',
        modalBg: '#f5f5f5',
      },
      spacing: {
        'p-18': '1.8rem',
        'p-28': '2.8rem',
        'p-33': '3.3rem',
        'p-38': '3.8rem',
        'p-40': '4rem',
        'p-52': '52px',
        'p-54': '54px',
        'p-56': '5.6rem',
        'p-88': '8.8rem',
        'p-91': '91px',
        'p-128': '12.8rem',
        'p-150': '15rem',
        'p-159': '159px',
        'p-180': '18rem',
        'p-230': '23rem',
        'p-278': '27.8rem',
        'p-308': '30.8rem',
        'p-320': '32rem',
        'p-340': '340px',
        'p-370': '37rem',
        'p-396': '39.6rem',
        'p-400': '40rem',
        'p-410': '41rem',
        'p-430': '43rem',
        'p-552': '55.2rem',
        'p-560': '56rem',
        'p-870': '87rem',
        'p-950': '94.9rem',
        'p-1050': '105rem',
        'per-500': '1000%',
        'r-0.1': '0.1rem',
        'r-0.2': '0.2rem',
        'r-0.3': '0.3rem',
        'r-0.4': '0.4rem',
        'r-0.6': '0.6rem',
        'r-0.7': '0.7rem',
        'r-0.8': '0.8rem',
        'r-0.9': '0.9rem',
        'r-1.1': '1.1rem',
        'r-1.2': '1.2rem',
        'r-1.3': '1.3rem',
        'r-1.4': '1.4rem',
        'r-1.6': '1.6rem',
        'r-1.8': '1.8rem',
        'r-1.9': '1.9rem',
        'r-2.2': '2.2rem',
        'r-2.5': '2.5rem',
        'r-2.4': '2.4rem',
        'r-2.8': '2.8rem',
        'r-2.9': '2.9rem',
        'r-3.4': '3.4rem',
        'r-3.5': '3.5rem',
        'r-3.6': '3.6rem',
        'r-3.8': '3.8rem',
        'r-4': '4rem',
        'r-4.4': '4.4rem',
        'r-4.5': '4.5rem',
        'r-4.6': '4.6rem',
        'r-4.8': '4.8rem',
        'r-5.2': '5.2rem',
        'r-5.5': '5.5rem',
        'r-5.6': '5.6rem',
        'r-5.75': '5.75rem',
        'r-6': '6rem',
        'r-6.5': '6.5rem',
        'r-7.4': '7.4rem',
        'r-7.9': '7.9rem',
        'r-8.2': '8.2rem',
        'r-8.8': '8.8rem',
        'r-10.3': '10.3rem',
        'r-11': '11rem',
        'r-11.5': '11.5rem',
        'r-12': '12rem',
        'r-12.8': '12.8rem',
        'r-13': '13rem',
        'r-15.5': '15.5rem',
        'r-15.7': '15.7rem',
        'r-15.8': '15.8rem',
        'r-16.3': '16.3rem',
        'r-17': '17rem',
        'r-17.5': '17.5rem',
        'r-19.4': '19.4rem',
        'r-20': '20rem',
        'r-21.2': '21.2rem',
        'r-22': '22rem',
        'r-17.8': '17.8rem',
        'r-19': '19rem',
        'r-19.7': '19.7rem',
        'r-24': '24rem',
        'r-24.2': '24.2rem',
        'r-24.9': '24.9rem',
        'r-25': '25rem',
        'r-27.5': '27.5rem',
        'r-28.4': '28.4rem',
        'r-30.9': '30.9rem',
        'r-32': '32rem',
        'r-35.5': '35.5rem',
        'r-40': '40rem',
        'r-42.6': '42.6rem',
        'r-44.6': '44.6rem',
        'r-45': '45rem',
        'r-46.6': '46.6rem',
        'r-47': '47rem',
        'r-48': '48rem',
        'r-49.6': '49.6rem',
        'r-50': '50rem',
        'r-52': '52rem',
        'r-54': '54rem',
        'r-58': '58rem',
        'r-60': '60rem',
        'r-61.5': '61.5rem',
        'r-55.2': '55.2rem',
        'r-56.2': '56.2rem',
        'r-62': '62rem',
        'r-64': '64rem',
        'r-65': '65rem',
        'r-65.2': '65.2rem',
        'r-67': '67rem',
        'r-82': '82rem',
        'r-71': '71rem',
        'r-73': '73rem',
        'r-73.9': '73.9rem',
        'r-74.2': '74.2rem',
        'r-74.6': '74.6rem',
        'r-80': '80rem',
        'r-85': '85rem',
        'r-90': '90rem',
        'r-101': '101rem',
        'r-105': '105rem',
        'r-150': '150rem',
        'r-735': '735rem',
        'vw-700': '700vw',
        510: '510px',
        'vw-99': '99vw',
        700: '700vw',
        13: '52px',
        370: '370px',
      },
      translate: {
        'r-7.2': '7.2rem',
      },
      outline: {
        0: ['0px solid #ffffff'],
        54: '54px',
        340: '340px',
        19: '1.9rem',
        0.9: '0.9rem',
        2.8: '2.8rem',
        1.1: '1.1rem',
      },
      zIndex: {
        '-1': '-1',
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        900: 900,
        990: 990,
      },
    },
  },
  // 포커스시 형제요소중 fucsed-sibling이 있는 클래스 요소클릭
  plugins: [focusedSiblingPlugin],
  variants: {
    extend: {
      borderWidth: ['last'],
      fontWeight: ['hover', 'focus', 'focused-sibling'],
      backgroundColor: ['focused-sibling', 'active', 'odd'],
      backgroundImage: ['focused-sibling'],
      textColor: ['focused-sibling'],
      overflow: ['hover'],
      display: ['focused-sibling'],
    },
  },
};
