import { Episode } from '../../../dist';
import backgroundHotel from '.././img/background-hotel.jpg';
import hanbyeol1 from '.././img/hanbyeol-1.png';
import hanbyeol from '.././img/hanbyeol.png';

export const episode1: Episode = [
  [
    'start',
    {
      text: '내가 나와 연애할 수 있을리 없잖아, 무리무리! (※무리가 아니었다?!)',
      sceneState: 'centerBlack',
      next: 'chapter1',
    },
  ],
  [
    'chapter1',
    {
      text: '제 1장 ~한별이의 습격~',
      next: 'chapter1-100',
    },
  ],
  [
    'chapter1-100',
    {
      text: '으아~ 잘 쉬었다.',
      sceneState: 'text',
      character: '한별',
      characterImg: [hanbyeol],
      background: backgroundHotel,
      next: 'chapter1-200',
    },
  ],
  [
    'chapter1-200',
    {
      text: '앗?! 저게 뭐지?',
      character: '한별',
      characterImg: [hanbyeol],
      next: 'chapter1-300',
    },
  ],
  [
    'chapter1-300',
    {
      text: '야생의',
      character: '한별A',
      characterImg: [hanbyeol1],
      next: 'chapter1-400',
    },
  ],
  [
    'chapter1-400',
    {
      text: '한별이',
      character: '한별B',
      characterImg: [hanbyeol1, hanbyeol1],
      next: 'chapter1-500',
    },
  ],
  [
    'chapter1-500',
    {
      text: '나타났다!',
      character: '한별C',
      characterImg: [hanbyeol1, hanbyeol1, hanbyeol1],
      next: 'chapter1-600',
    },
  ],
  [
    'chapter1-600',
    {
      text: '어지럽다.',
      sceneState: 'black',
      next: 'chapter1-700',
    },
  ],
  [
    'chapter1-700',
    {
      text: '어지럽다. \n 한별이는 나인데? 왜 저기 세 명이나 있는 거지?',
      sceneState: 'black',
      next: 'chapter1-800',
    },
  ],
  [
    'chapter1-800',
    {
      text: '어지럽다. \n 한별이는 나인데? 왜 저기 세 명이나 있는 거지? \n 도플갱어를 보다니 나는 죽을 운명인가보다.',
      sceneState: 'black',
      next: 'chapter1-900',
    },
  ],
  [
    'chapter1-900',
    {
      text: '어떻게 하지?',
      character: null,
      characterImg: [hanbyeol, hanbyeol1, hanbyeol1, hanbyeol1],
      sceneState: 'text',
      next: 'chapter1-1000',
    },
  ],
  [
    'chapter1-1000',
    {
      text: '어떻게 하지?',
      next: [
        { text: '무시하고 잠을 잔다.', next: 'chapter1-sleep-100' },
        { text: '고백해서 혼내준다.', next: 'chapter1-love-100' },
      ],
    },
  ],
  [
    'chapter1-sleep-100',
    {
      text: '그냥 잠이나 자야겠다.',
      next: 'chapter1-sleep-200',
    },
  ],
  [
    'chapter1-sleep-200',
    {
      text: [
        `그렇게 호텔 침대에 누워 잠을 청한 한별이를 우리는 다시 만날 수 없었다.`,
        `뒤늦게 객실을 찾아온 호텔 직원들은 아무도 없이 텅 빈 방을 발견했을 뿐이다.`,
        `사라진 네 명의 한별이는 어떻게 된 것일까.`,
        `진실은 아무도 모른다.`,
        `그저 한별이가 다시 우리 곁으로 돌아올 날만을 기다릴 뿐...`,
      ],
      next: 'chapter1-sleep',
    },
  ],
  [
    'chapter1-sleep',
    {
      text: 'BAD END ~바람과 함께 사라지다~',
      sceneState: 'centerBlack',
      next: null,
    },
  ],
];

export const script = [episode1];
