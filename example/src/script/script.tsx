import { Episode } from '../../../dist';
import backgroundHotel from '.././img/background-hotel.jpg';
import hanbyeol from '.././img/hanbyeol.png';

export const episode1: Episode = [
  [
    'start',
    {
      text: '내가 월드 파이널에 갈 수 있을 리 없잖아, 무리무리! (※무리가 아니었다?!)',
      next: ['chapter1'],
      sceneState: 'centerBlack',
    },
  ],
  [
    'chapter1',
    {
      text: '제 1장 ~세렌디피티~',
      next: ['chapter1-100'],
    },
  ],
  [
    'chapter1-100',
    {
      text: '으아~ 잘 쉬었다.',
      next: ['chapter1-200'],
      sceneState: 'text',
      character: '한별',
      characterImg: [hanbyeol],
      background: backgroundHotel,
    },
  ],
];

export const script = [episode1];
