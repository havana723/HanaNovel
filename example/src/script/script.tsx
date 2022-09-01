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
      sceneState: 'default',
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
      text: '어지럽다',
      sceneState: 'black',
      next: 'chapter1-700',
    },
  ],
  [
    'chapter1-700',
    {
      text: '한별이는 나인데? 왜 저기 세 명이나 있는 거지?',
      addText: true,
      next: 'chapter1-800',
    },
  ],
  [
    'chapter1-800',
    {
      text: '도플갱어를 보다니 나는 죽을 운명인가보다.',
      addText: true,
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
      sceneState: 'default',
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
      text: '그렇게 호텔 침대에 누워 잠을 청한 한별이를 우리는 다시 만날 수 없었다.',
      sceneState: 'black',
      next: 'chapter1-sleep-300',
    },
  ],
  [
    'chapter1-sleep-300',
    {
      text: '뒤늦게 객실을 찾아온 호텔 직원들은 아무도 없이 텅 빈 방을 발견했을 뿐이다.',
      addText: true,
      next: 'chapter1-sleep-400',
    },
  ],
  [
    'chapter1-sleep-400',
    {
      text: '사라진 네 명의 한별이는 어떻게 된 것일까.',
      addText: true,
      sceneState: 'black',
      next: 'chapter1-sleep-500',
    },
  ],
  [
    'chapter1-sleep-500',
    {
      text: '진실은 아무도 모른다.',
      addText: true,
      sceneState: 'black',
      next: 'chapter1-sleep-600',
    },
  ],
  [
    'chapter1-sleep-600',
    {
      text: '그저 한별이가 다시 우리 곁으로 돌아올 날만을 기다릴 뿐...',
      addText: true,
      sceneState: 'black',
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
  [
    'chapter1-love-100',
    {
      text: '에라 모르겠다.',
      characterImg: [hanbyeol],
      next: 'chapter1-love-200',
    },
  ],
  [
    'chapter1-love-200',
    {
      text: '저, 전부터 널 좋아했어.',
      character: '한별',
      characterImg: [hanbyeol],
      next: 'chapter1-love-300',
    },
  ],
  [
    'chapter1-love-300',
    {
      text: '나랑 사귀어줘!',
      next: 'chapter1-love-400',
    },
  ],
  [
    'chapter1-love-400',
    {
      text: '?',
      character: '한별A',
      characterImg: [hanbyeol1, '', ''],
      next: 'chapter1-love-500',
    },
  ],
  [
    'chapter1-love-500',
    {
      text: '??',
      character: '한별B',
      characterImg: ['', hanbyeol1, ''],
      next: 'chapter1-love-600',
    },
  ],
  [
    'chapter1-love-600',
    {
      text: '???',
      character: '한별C',
      characterImg: ['', '', hanbyeol1],
      next: 'chapter1-love-700',
    },
  ],
  [
    'chapter1-love-700',
    {
      text: '????????????????????????????',
      character: '한별ABC',
      characterImg: [hanbyeol1, hanbyeol1, hanbyeol1],
      next: 'chapter1-love-800',
    },
  ],
  [
    'chapter1-love-800',
    {
      text: '정적이 흐른다.',
      sceneState: 'black',
      next: 'chapter1-love-900',
    },
  ],
  [
    'chapter1-love-900',
    {
      text: '역시 이건 너무 무리수였나?',
      addText: true,
      sceneState: 'black',
      next: 'chapter1-love-1000',
    },
  ],
  [
    'chapter1-love-1000',
    {
      text: '빨리 아무 말이라도 해야... 어?',
      addText: true,
      sceneState: 'black',
      next: 'chapter1-love-1100',
    },
  ],
  [
    'chapter1-love-1100',
    {
      text: '...사실 나도 전부터 널 좋아했어.',
      sceneState: 'default',
      character: '한별A',
      characterImg: [hanbyeol1, '', ''],
      next: 'chapter1-love-1200',
    },
  ],
  [
    'chapter1-love-1200',
    {
      text: '이상하게 들릴까봐 지금까지는 말하지 못했지만...',
      character: '한별B',
      characterImg: ['', hanbyeol1, ''],
      next: 'chapter1-love-1300',
    },
  ],
  [
    'chapter1-love-1300',
    {
      text: '나도 널 좋아해...!',
      character: '한별C',
      characterImg: ['', '', hanbyeol1],
      next: 'chapter1-love-1400',
    },
  ],
  [
    'chapter1-love-1400',
    {
      text: '우리 사귀자!',
      character: '한별ABC',
      characterImg: [hanbyeol1, hanbyeol1, hanbyeol1],
      next: 'chapter1-love-1500',
    },
  ],
  [
    'chapter1-love-1500',
    {
      text: '어...? 이게 어떻게 된 일이지?',
      characterImg: [hanbyeol],
      next: 'chapter1-love-1600',
    },
  ],
  [
    'chapter1-love-1600',
    {
      text: '아니 애초에, 내가 나랑 사귈 수 있는 건가?',
      characterImg: [hanbyeol],
      next: 'chapter1-love-1700',
    },
  ],
  [
    'chapter1-love-1700',
    {
      text: '나는 나랑... 연애하는 거야...?',
      characterImg: [hanbyeol],
      next: 'chapter1-love-1800',
    },
  ],
  [
    'chapter1-love-1800',
    {
      text: '한별이의 무수한 의문이 무색하게도 한별이가 한별이와 사귀는 것에는 아무런 문제도 없었다.',
      sceneState: 'black',
      next: 'chapter1-love-1900',
    },
  ],
  [
    'chapter1-love-1900',
    {
      text: '스스로를 가장 잘 아는 건 그 자신이라고 했던가, 한별이는 단 한 번의 싸움도 없이 평화롭고, 안정적이고, 그리고 누구보다도 행복한 연애를 지속해나갔다.',
      addText: true,
      next: 'chapter1-love-2000',
    },
  ],
  [
    'chapter1-love-2000',
    {
      text: '그렇게 오랜 연애 끝에 한별이는 사랑의 결실을 맺게 되었고 화창한 어느 4월의 봄날, 아름다운 신부가 되어 하객들을 맞이했다.',
      addText: true,
      next: 'chapter1-love',
    },
  ],
  [
    'chapter1-love',
    {
      text: 'HAPPY END ~4월의 신부~',
      sceneState: 'centerBlack',
      next: null,
    },
  ],
];

export const script = [episode1];
