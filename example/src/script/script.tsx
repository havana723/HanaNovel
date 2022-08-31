import backgroundHotel from ".././img/background-hotel.jpg";
import backgroundRoom from ".././img/background-room.jpg";
import backgroundTaxi from ".././img/background-taxi.jpg";

export interface Script {
  text: string;
  next: string[] | null;
  character?: string;
  screenBlack?: "on" | "off";
  screenCenterBlack?: "on" | "off";
  isSelect?: "on" | "off";
  selectList?: string[];
  background?: string;
  end?: boolean;
}

export const script = new Map<string, Script>([
  [
    "chapter1",
    {
      text: "제 1장 ~세렌디피티~",
      next: ["chapter1-100"],
      screenCenterBlack: "on",
      background: backgroundHotel,
    },
  ],
  [
    "chapter1-100",
    {
      text: "으아~ 잘 쉬었다.",
      next: ["chapter1-200"],
      character: "한별",
      screenCenterBlack: "off",
    },
  ],
  [
    "chapter1-200",
    {
      text: "2021년 8월 12일. 한가로운 휴일 오전. 아직은 뜨거운 한여름의 햇살이 창문 사이를 지난다.",
      next: ["chapter1-300"],
    },
  ],
  [
    "chapter1-300",
    {
      text: "요즘은 자주 다니느라 감흥이 떨어지기는 했지만, 역시 호텔에서 즐기는 휴가는 달콤했다.",
      next: ["chapter1-400"],
    },
  ],
  [
    "chapter1-400",
    {
      text: "특히 이번에는 조금 무리해서 좋은 호텔에 온 만큼 조식까지 알차게 즐기고 갈 생각이었다.",
      next: ["chapter1-500"],
    },
  ],
  [
    "chapter1-500",
    {
      text: "슬슬 조식을 먹으러 나가볼까?",
      next: ["chapter1-600"],
      character: "한별",
    },
  ],
  [
    "chapter1-600",
    {
      text: "지잉~!",
      next: ["chapter1-700"],
    },
  ],
  [
    "chapter1-700",
    {
      text: "손목의 스마트와치에서 울리는 알림 소리",
      next: ["chapter1-800"],
    },
  ],
  [
    "chapter1-800",
    {
      text: "무슨 연락이지? 이메일?",
      next: ["chapter1-900"],
      character: "한별",
    },
  ],
  [
    "chapter1-900",
    {
      text: "IC..P...C...?",
      next: ["chapter1-1000"],
      character: "한별",
    },
  ],
  [
    "chapter1-1000",
    {
      text: "Fwd: ICPC World Finals Moscow – Sogang University",
      next: ["chapter1-1010"],
      screenBlack: "on",
    },
  ],
  [
    "chapter1-1010",
    {
      text: "Fwd: ICPC World Finals Moscow – Sogang University \n 서강대학교 ICPC 관련인들께,",
      next: ["chapter1-1020"],
    },
  ],
  [
    "chapter1-1020",
    {
      text: "Fwd: ICPC World Finals Moscow – Sogang University \n 서강대학교 ICPC 관련인들께, \n […]",
      next: ["chapter1-1100"],
    },
  ],
  [
    "chapter1-1100",
    {
      text: "Fwd: ICPC World Finals Moscow – Sogang University \n 서강대학교 ICPC 관련인들께, \n […] \n 팀 Redshift가 모스크바에서 열리는 월드 파이널의 참가 자격을 얻게 되었습니다. 10월 1일에서 6일까지 모스크바에 올 수 있으면 됩니다. 한국에서 코로나19가 유행하면서 모스크바까지 오는 것이 힘들지도 모르겠습니다만, (아직까지 참석 가능성에 대한 회신이 없는 관계로) 팀이 정말 희망이 없는지 ICPC 매니저께서 확실히 알아야 합니다. 임 코치님께 회신을 요청해 주시면 감사하겠습니다",
      next: ["chapter1-1200"],
    },
  ],
  [
    "chapter1-1200",
    {
      text: "월드 파이널이라니? 내가? 왜?",
      next: ["chapter1-1300"],
      character: "한별",
      screenBlack: "off",
    },
  ],
  [
    "chapter1-1300",
    {
      text: "물론 2년 전에 ICPC 서울 리저널에서 8위에 오른 적이 있었다.",
      next: ["chapter1-1400"],
    },
  ],
  [
    "chapter1-1400",
    {
      text: "8위까지 티켓이 내려갔다니.",
      next: ["chapter1-1500"],
    },
  ],
  [
    "chapter1-1500",
    {
      text: "하지만 중요한 건 이게 아닌 거 같다.",
      next: ["chapter1-1600"],
    },
  ],
  [
    "chapter1-1600",
    {
      text: "침착하게 아래에 포워딩 된 메일을 읽었다.",
      next: ["chapter1-1700"],
    },
  ],
  [
    "chapter1-1700",
    {
      text: "안녕하세요 코치님,",
      next: ["chapter1-1710"],
      screenBlack: "on",
    },
  ],
  [
    "chapter1-1710",
    {
      text: "안녕하세요 코치님, \n […]",
      next: ["chapter1-1720"],
    },
  ],
  [
    "chapter1-1720",
    {
      text: "안녕하세요 코치님, \n […] \n 8월 9일 오후 11:59 CST까지 회신 부탁드리겠습니다.",
      next: ["chapter1-1730"],
    },
  ],
  [
    "chapter1-1730",
    {
      text: "안녕하세요 코치님, \n […] \n 8월 9일 오후 11:59 CST까지 회신 부탁드리겠습니다. \n 이 때까지 회신이 없으면 참가하지 못하는 걸로 간주하도록 하겠습니다. 질문이 있으면 자유롭게 회신 부탁드려요. 월드 파이널에서 뵙길 바라겠습니다!",
      next: ["chapter1-1800"],
    },
  ],
  [
    "chapter1-1800",
    {
      text: "어? 8월 9일?",
      next: ["chapter1-1900"],
      character: "한별",
      screenBlack: "off",
    },
  ],
  [
    "chapter1-1900",
    {
      text: "오늘은 8월 12일인데...?",
      next: ["chapter1-2000"],
      character: "한별",
    },
  ],
  [
    "chapter1-2000",
    {
      text: "빠르게 머리를 굴려보자.",
      next: ["chapter1-2100"],
    },
  ],
  [
    "chapter1-2100",
    {
      text: "",
      isSelect: "on",
      selectList: [
        "스팸 메일이다.",
        "진짜 월드 파이널에 진출한 거 같기는 하다.",
      ],
      next: ["chapter1-bad-end-100", "chapter1-2200"],
    },
  ],
  [
    "chapter1-bad-end-100",
    {
      text: "에이, 스팸 메일이겠지.",
      isSelect: "off",
      next: ["chapter1-bad-end-200"],
    },
  ],
  [
    "chapter1-bad-end-200",
    {
      text: "조식이나 먹으러 가야지~",
      character: "한별",
      next: ["chapter1-bad-end-300"],
    },
  ],
  [
    "chapter1-bad-end-300",
    {
      text: "한별이는 5성급 호텔의 조식을 맛있게 즐겼다.",
      screenBlack: "on",
      next: ["chapter1-bad-end-400"],
    },
  ],
  [
    "chapter1-bad-end-400",
    {
      text: "한별이는 5성급 호텔의 조식을 맛있게 즐겼다. \n 오믈렛과 베이컨은 물론이고 조식에 나왔다고는 믿을 수 없는 퀄리티와 볼륨의 마파두부까지. 전부 한별이가 좋아하는 음식 뿐이었다.",
      next: ["chapter1-bad-end-500"],
    },
  ],
  [
    "chapter1-bad-end-500",
    {
      text: "한별이는 5성급 호텔의 조식을 맛있게 즐겼다. \n 오믈렛과 베이컨은 물론이고 조식에 나왔다고는 믿을 수 없는 퀄리티와 볼륨의 마파두부까지. 전부 한별이가 좋아하는 음식 뿐이었다. \n 그러나 놓친 월드 파이널 티켓은 다시는 돌아오지 않았다. 티켓은 다른 팀에게로 돌아갔고, 뒤늦게 이를 깨달은 한별이는 티켓을 다시 구하기 위해 백방으로 뛰어다니며 노력했지만 결국 월드 파이널에 진출할 수 없었다.",
      next: ["chapter1-bad-end-600"],
    },
  ],
  [
    "chapter1-bad-end-600",
    {
      text: "한별이는 5성급 호텔의 조식을 맛있게 즐겼다. \n 오믈렛과 베이컨은 물론이고 조식에 나왔다고는 믿을 수 없는 퀄리티와 볼륨의 마파두부까지. 전부 한별이가 좋아하는 음식 뿐이었다. \n 그러나 놓친 월드 파이널 티켓은 다시는 돌아오지 않았다. 티켓은 다른 팀에게로 돌아갔고, 뒤늦게 이를 깨달은 한별이는 티켓을 다시 구하기 위해 백방으로 뛰어다니며 노력했지만 결국 월드 파이널에 진출할 수 없었다. \n 부디 그 날의 호텔 조식이 월드 파이널보다 값진 것이었기를 바라며...",
      next: ["chapter1-bad-end"],
    },
  ],
  [
    "chapter1-bad-end",
    {
      text: "BAD END ~조식과 맞바꾼 월드 파이널~",
      screenBlack: "off",
      screenCenterBlack: "on",
      next: null,
      end: true,
    },
  ],
  [
    "chapter1-2200",
    {
      text: "진짜 월드 파이널에 진출한 거겠...지...?",
      character: "한별",
      isSelect: "off",
      next: ["chapter1-2300"],
    },
  ],
  [
    "chapter1-2300",
    {
      text: "ICPC 본부에서 8월 9일까지 답장을 주라고 했는데, 8월 12일에 이런 메일이 왔다.",
      screenBlack: "on",
      next: ["chapter1-2400"],
    },
  ],
  [
    "chapter1-2400",
    {
      text: "ICPC 본부에서 8월 9일까지 답장을 주라고 했는데, 8월 12일에 이런 메일이 왔다. \n 그것도 학회 홈페이지 맨 밑에 적힌 메일 주소로 말이다.",
      next: ["chapter1-2500"],
    },
  ],
  [
    "chapter1-2500",
    {
      text: "ICPC 본부에서 8월 9일까지 답장을 주라고 했는데, 8월 12일에 이런 메일이 왔다. \n 그것도 학회 홈페이지 맨 밑에 적힌 메일 주소로 말이다. \n 그렇다면 내가 할 일은 명확했다.",
      next: ["chapter1-2600"],
    },
  ],
  [
    "chapter1-2600",
    {
      text: "최대한 빨리 회신을 보내야 해!",
      character: "한별",
      screenBlack: "off",
      next: ["chapter1-2700"],
    },
  ],
  [
    "chapter1-2700",
    {
      text: "누구보다 빠르게 호텔을 나와 택시를 잡았다.",
      next: ["chapter1-2800"],
    },
  ],
  [
    "chapter1-2800",
    {
      text: "그러나 월드 파이널까지의 여정은 그렇게 호락호락하지 않았는데...",
      screenBlack: "on",
      next: ["chapter2"],
    },
  ],
  [
    "chapter2",
    {
      text: "제 2장 ~첫 번째 산, 참가 신청~",
      screenBlack: "off",
      screenCenterBlack: "on",
      next: ["chapter2-100"],
      background: backgroundTaxi,
    },
  ],
  [
    "chapter2-100",
    {
      text: "호텔에서 나와 집으로 가는 택시 안.",
      screenCenterBlack: "off",
      next: ["chapter2-200"],
    },
  ],
  [
    "chapter2-200",
    {
      text: "2019년 레드시프트는 17학번 박건(lvalue), 17학번 이준석(semteo04)과 박한별(hanbyeol_)로 이루어진 팀이었다.",
      screenBlack: "on",
      next: ["chapter2-300"],
    },
  ],
  [
    "chapter2-300",
    {
      text: "2019년 레드시프트는 17학번 박건(lvalue), 17학번 이준석(semteo04)과 박한별(hanbyeol_)로 이루어진 팀이었다. \n 다들 이름보다는 핸들이 익숙할테지만 말이다.",
      next: ["chapter2-400"],
    },
  ],
  [
    "chapter2-400",
    {
      text: "semteo04는 펍지에서 산업기능요원으로 복무 중이다.",
      next: ["chapter2-500"],
    },
  ],
  [
    "chapter2-500",
    {
      text: "semteo04는 펍지에서 산업기능요원으로 복무 중이다. \n 그렇다는 건 보통 평일 아침에 일어나 있고, 따라서 전화를 받을 수 있다는 뜻이다.",
      next: ["chapter2-600"],
    },
  ],
  [
    "chapter2-600",
    {
      text: "semteo04는 펍지에서 산업기능요원으로 복무 중이다. \n 그렇다는 건 보통 평일 아침에 일어나 있고, 따라서 전화를 받을 수 있다는 뜻이다. \n 누구보다 경쟁 프로그래밍에 진심인 친구여서 아마 월파라면 무슨 일이 있어도 휴가를 쓰고 비행기에 함께 오를 것이다.",
      next: ["chapter2-700"],
    },
  ],
  [
    "chapter2-700",
    {
      text: "빠르게 semteo04에게 전화를 걸었다.",
      screenBlack: "off",
      next: ["chapter2-800"],
    },
  ],
  [
    "chapter2-800",
    {
      text: "여보세요?",
      character: "semteo04",
      next: ["chapter2-900"],
    },
  ],
  [
    "chapter2-900",
    {
      text: "[...]",
      character: "한별",
      next: ["chapter2-910"],
    },
  ],
  [
    "chapter2-910",
    {
      text: "그럼 자세한 건 문자로 보내줄게.",
      character: "한별",
      next: ["chapter2-920"],
    },
  ],
  [
    "chapter2-910",
    {
      text: "응. 알겠어.",
      character: "semteo04",
      next: ["chapter2-1000"],
    },
  ],
  [
    "chapter2-1000",
    {
      text: "뚝. 전화가 끊긴다.",
      next: ["chapter2-1100"],
    },
  ],
  [
    "chapter2-1100",
    {
      text: "역시 내 예상은 틀리지 않았다.",
      next: ["chapter2-1200"],
    },
  ],
  [
    "chapter2-1200",
    {
      text: "semteo04는 한 치의 망설임도 없이 월드 파이널 행을 수락했다.",
      next: ["chapter2-1300"],
    },
  ],
  [
    "chapter2-1300",
    {
      text: "다음으로는 Ivalue였다.",
      next: ["chapter2-1400"],
    },
  ],
  [
    "chapter2-1400",
    {
      text: "lvalue는 졸업하고 KAIST AI대학원에서 연구를 하고 있다.",
      screenBlack: "on",
      next: ["chapter2-1500"],
    },
  ],
  [
    "chapter2-1500",
    {
      text: "lvalue는 졸업하고 KAIST AI대학원에서 연구를 하고 있다. \n 아마 아침에 안 일어나 있을 것이다.",
      next: ["chapter2-1600"],
    },
  ],
  [
    "chapter2-1600",
    {
      text: "lvalue는 졸업하고 KAIST AI대학원에서 연구를 하고 있다. \n 아마 아침에 안 일어나 있을 것이다. \n 평소에도 전화를 안 받기로 유명하다.",
      next: ["chapter2-1700"],
    },
  ],
  [
    "chapter2-1700",
    {
      text: "나중에 연락해야겠다.",
      screenBlack: "off",
      next: ["chapter2-1800"],
    },
  ],
  [
    "chapter2-1800",
    {
      text: "트위터 맞팔이니까 멘션이나 DM을 보내두면 곧잘 확인할거야.",
      next: ["chapter2-1900"],
    },
  ],
  [
    "chapter2-1900",
    {
      text: "이제 남은 건 코치 교수님이신데...",
      next: ["chapter2-2000"],
    },
  ],
  [
    "chapter2-2000",
    {
      text: "",
      isSelect: "on",
      selectList: ["전화를 걸어본다.", "메일을 보내본다."],
      next: ["chapter2-2100", "chapter2-bad-end-100"],
    },
  ],
  [
    "chapter2-bad-end-100",
    {
      text: "아무리 시급한 사안이라도 교수님에게 바로 전화를 거는 건 조금 부담스러웠다.",
      isSelect: "off",
      next: ["chapter2-bad-end-200"],
    },
  ],
  [
    "chapter2-bad-end-200",
    {
      text: "조금 무례할 수도 있고...",
      character: "한별",
      next: ["chapter2-bad-end-300"],
    },
  ],
  [
    "chapter2-bad-end-200",
    {
      text: "대신 메일을 보내두기로 했다.",
      next: ["chapter2-bad-end-300"],
    },
  ],
  [
    "chapter2-bad-end-300",
    {
      text: "안녕하세요, 서강대학교 컴퓨터학과 학부생 박한별입니다.",
      screenBlack: "on",
      next: ["chapter2-bad-end-400"],
    },
  ],
  [
    "chapter2-bad-end-400",
    {
      text: "안녕하세요, 서강대학교 컴퓨터학과 학부생 박한별입니다. \n 다름이 아니라 저희 팀이 이번에 2021년도 ICPC 월드 파이널에 진출하게 되었습니다.",
      next: ["chapter2-bad-end-500"],
    },
  ],
  [
    "chapter2-bad-end-500",
    {
      text: "안녕하세요, 서강대학교 컴퓨터학과 학부생 박한별입니다. \n 다름이 아니라 저희 팀이 이번에 2021년도 ICPC 월드 파이널에 진출하게 되었습니다. \n [...]",
      next: ["chapter2-bad-end-600"],
    },
  ],
  [
    "chapter2-bad-end-600",
    {
      text: "안녕하세요, 서강대학교 컴퓨터학과 학부생 박한별입니다. \n 다름이 아니라 저희 팀이 이번에 2021년도 ICPC 월드 파이널에 진출하게 되었습니다. \n [...] \n 월드 파이널 참석과 관련하여 여쭤보고자 연락 드렸습니다. 회신 기다리겠습니다.",
      next: ["chapter2-bad-end-700"],
    },
  ],
  [
    "chapter2-bad-end-700",
    {
      text: "안녕하세요, 서강대학교 컴퓨터학과 학부생 박한별입니다. \n 다름이 아니라 저희 팀이 이번에 2021년도 ICPC 월드 파이널에 진출하게 되었습니다. \n [...] \n 월드 파이널 참석과 관련하여 여쭤보고자 연락 드렸습니다. 회신 기다리겠습니다. \n 박한별 드림.",
      next: ["chapter2-bad-end-800"],
    },
  ],
  [
    "chapter2-bad-end-800",
    {
      text: "메일은 보냈고, 남은 것은 기다림 뿐이었다.",
      screenBlack: "off",
      next: ["chapter2-bad-end-900"],
    },
  ],
  [
    "chapter2-bad-end-900",
    {
      text: "그러나 하루가 지나고, 이틀이 지나고, 일주일이 지나도 기다리던 답장은 오지 않았다.",
      screenBlack: "on",
      next: ["chapter2-bad-end-1000"],
    },
  ],
  [
    "chapter2-bad-end-1000",
    {
      text: "그러나 하루가 지나고, 이틀이 지나고, 일주일이 지나도 기다리던 답장은 오지 않았다. \n 나중에 알게 된 바로는, 해당 메일은 더 이상 사용하지 않는 메일 주소였다.",
      next: ["chapter2-bad-end-1100"],
    },
  ],
  [
    "chapter2-bad-end-1100",
    {
      text: "그러나 하루가 지나고, 이틀이 지나고, 일주일이 지나도 기다리던 답장은 오지 않았다. \n 나중에 알게 된 바로는, 해당 메일은 더 이상 사용하지 않는 메일 주소였다. \n 그 때에서야 급해진 한별이는 교수님께 유선으로 연락을 드렸으나 이미 티켓은 다른 팀에게로 넘어간 뒤였다.",
      next: ["chapter2-bad-end-1200"],
    },
  ],
  [
    "chapter2-bad-end-1200",
    {
      text: "그러나 하루가 지나고, 이틀이 지나고, 일주일이 지나도 기다리던 답장은 오지 않았다. \n 나중에 알게 된 바로는, 해당 메일은 더 이상 사용하지 않는 메일 주소였다. \n 그 때에서야 급해진 한별이는 교수님께 유선으로 연락을 드렸으나 이미 티켓은 다른 팀에게로 넘어간 뒤였다. \n 넘어간 티켓은 돌아오지 않는 법.",
      next: ["chapter2-bad-end-1300"],
    },
  ],
  [
    "chapter2-bad-end-1300",
    {
      text: "그러나 하루가 지나고, 이틀이 지나고, 일주일이 지나도 기다리던 답장은 오지 않았다. \n 나중에 알게 된 바로는, 해당 메일은 더 이상 사용하지 않는 메일 주소였다. \n 그 때에서야 급해진 한별이는 교수님께 유선으로 연락을 드렸으나 이미 티켓은 다른 팀에게로 넘어간 뒤였다. \n 넘어간 티켓은 돌아오지 않는 법. \n 한별이의 후회는 아무런 도움도 되지 못했고, 한별이는 ICPC 월드 파이널에 진출하지 못했다.",
      next: ["chapter2-bad-end-1400"],
    },
  ],
  [
    "chapter2-bad-end-1400",
    {
      text: "그러나 하루가 지나고, 이틀이 지나고, 일주일이 지나도 기다리던 답장은 오지 않았다. \n 나중에 알게 된 바로는, 해당 메일은 더 이상 사용하지 않는 메일 주소였다. \n 그 때에서야 급해진 한별이는 교수님께 유선으로 연락을 드렸으나 이미 티켓은 다른 팀에게로 넘어간 뒤였다. \n 넘어간 티켓은 돌아오지 않는 법. \n 한별이의 후회는 아무런 도움도 되지 못했고, 한별이는 ICPC 월드 파이널에 진출하지 못했다. \n 다음 기회는 꼭 놓치지 않기를...",
      next: ["chapter2-bad-end"],
    },
  ],
  [
    "chapter2-bad-end",
    {
      text: "BAD END ~잊혀진 메일~",
      screenBlack: "off",
      screenCenterBlack: "on",
      next: null,
      end: true,
    },
  ],
  [
    "chapter2-2100",
    {
      text: "메일은 언제 확인하실지 모른다.",
      isSelect: "off",
      next: ["chapter2-2200"],
    },
  ],
  [
    "chapter2-2200",
    {
      text: "이번 월드 파이널은 촌각을 다투는 일이었다.",
      next: ["chapter2-2300"],
    },
  ],
  [
    "chapter2-2300",
    {
      text: "메일로는 안심할 수 없었다.",
      next: ["chapter2-2400"],
    },
  ],
  [
    "chapter2-2400",
    {
      text: "여보세요?",
      character: "교수님",
      next: ["chapter2-2500"],
    },
  ],
  [
    "chapter2-2500",
    {
      text: "안녕하세요, 교수님 다름이 아니라...",
      character: "한별",
      next: ["chapter2-2600"],
    },
  ],
  [
    "chapter2-2600",
    {
      text: "[...]",
      character: "한별",
      next: ["chapter2-2700"],
    },
  ],
  [
    "chapter2-2700",
    {
      text: "넵, 알겠습니다!",
      character: "한별",
      next: ["chapter2-2800"],
    },
  ],
  [
    "chapter2-2800",
    {
      text: "안타깝게도 현재 러시아발 해외입국자는 14일의 자가격리가 필요했기 때문에 교수님께서는 참석하지 않길 원하셨다.",
      next: ["chapter2-2900"],
    },
  ],
  [
    "chapter2-2900",
    {
      text: "지잉~",
      next: ["chapter2-3000"],
      background: backgroundRoom,
    },
  ],
  [
    "chapter2-3000",
    {
      text: "집에 와서 받은 Ivalue의 연락에서도 연구가 바빠 참석하기 어려울 거 같다는 소식을 전달받았다.",
      next: ["chapter2-3100"],
    },
  ],
  [
    "chapter2-3100",
    {
      text: "이렇게 시작부터 두 가지 문제가 생겼다.",
      next: ["chapter2-3200"],
    },
  ],
  [
    "chapter2-3200",
    {
      text: "1. 코치가 참석할 수 없다면 팀의 참가자격은 유지되는가.",
      screenBlack: "on",
      next: ["chapter2-3300"],
    },
  ],
  [
    "chapter2-3300",
    {
      text: "1. 코치가 참석할 수 없다면 팀의 참가자격은 유지되는가. \n 2. 팀원이 참석할 수 없는 경우에도 그러한가.",
      next: ["chapter2-3400"],
    },
  ],
  [
    "chapter2-3400",
    {
      text: "어떡하지...",
      character: "한별",
      screenBlack: "off",
      next: ["chapter2-3500"],
    },
  ],
  [
    "chapter2-3500",
    {
      text: "메일을 보내 본 결과, 다행히도 예외적인 경우였기 때문에 팀원을 2019년 혹은 2020년 리저널 참가 이력이 있는 학생으로 대체 가능하다는 답을 받았다.",
      next: ["chapter2-3600"],
    },
  ],
  [
    "chapter2-3600",
    {
      text: "또한 코치가 참석하지 않아도 된다고 한다.",
      next: ["chapter2-3700"],
    },
  ],
  [
    "chapter2-3700",
    {
      text: "정말 다행인 일이었다.",
      next: ["chapter2-3800"],
    },
  ],
  [
    "chapter2-3800",
    {
      text: "2021년 레드시프트는 lvalue 대신 전해성(seastar105) 선배와 함께 UCPC에 출전해서 5등상을 받은 바가 있었다.",
      next: ["chapter2-3900"],
    },
  ],
  [
    "chapter2-3900",
    {
      text: "이 구성으로 다시 출전하면 좋을텐데...",
      character: "한별",
      next: ["chapter2-4000"],
    },
  ],
  [
    "chapter2-4000",
    {
      text: "하지만 안타깝게도 seastar105 선배께서는 당해년도 리저널 본선 출전 이력이 없으셨다.",
      next: ["chapter2-4100"],
    },
  ],
  [
    "chapter2-4100",
    {
      text: "이렇게 한가하게 낭비할 시간이 없었다.",
      next: ["chapter2-4200"],
    },
  ],
  [
    "chapter2-4200",
    {
      text: "빨리 학회 사람들에게 물어봐야겠어!",
      character: "한별",
      next: ["chapter2-4300"],
    },
  ],
  [
    "chapter2-4300",
    {
      text: '"2019년 2020년 ICPC 한국 본선 나간 적 있으셨던 분 중에 모스크바 여행 갈 생각 있고 10/1 전에 백신 맞을 수 있는 2100+ 멘션 주세요."',
      screenBlack: "on",
      next: ["chapter2-4400"],
    },
  ],
  [
    "chapter2-4400",
    {
      text: "빠르게 학회 슬랙에 모집 공고를 올렸다.",
      screenBlack: "off",
      next: ["chapter2-4500"],
    },
  ],
  [
    "chapter2-4500",
    {
      text: "모두 경쟁 프로그래밍을 좋아하는 사람들이기 때문에, 한 명쯤은 같이 월드 파이널에 나가줄 것이다.",
      next: ["chapter2-4600"],
    },
  ],
  [
    "chapter2-4600",
    {
      text: "몇 시간이 지나고...",
      next: ["chapter2-4700"],
    },
  ],
  [
    "chapter2-4700",
    {
      text: "이윤제(yjyj1027) 선배와 이상원(gumgood) 선배께서 빠르게 연락을 주셨다.",
      next: ["chapter2-4750"],
    },
  ],
  [
    "chapter2-4750",
    {
      text: "gumgood 선배께서 더 빠르게 연락을 주신 관계로, 이렇게 모스크바행 레드시프트가 결성되었다.",
      next: ["chapter2-4800"],
    },
  ],
  [
    "chapter2-4800",
    {
      text: "7시간 만에 이 모든 일을 끝내다니...",
      character: "한별",
      next: ["chapter2-4900"],
    },
  ],
  [
    "chapter2-4900",
    {
      text: "이것보다 빠르게 일을 처리해 본 적이 없는 것 같았다.",
      next: ["chapter2-5000"],
    },
  ],
  [
    "chapter2-5000",
    {
      text: "이후 임지환(raararaara) 선배께서 co-coach로 오시길 희망하셔서, 이렇게 4명이서 여행 계획을 세우게 되었다.",
      next: ["chapter2-5100"],
    },
  ],
  [
    "chapter2-5100",
    {
      text: "티켓은 10위(UNIST Underdog 팀)와 11위(경북대학교 Catdriip 팀)까지 내려가서 한국에서만 7개 팀이 출전하는 유례없는 해가 되었다.",
      screenBlack: "on",
      next: ["chapter2-5200"],
    },
  ],
  [
    "chapter2-5200",
    {
      text: "티켓은 10위(UNIST Underdog 팀)와 11위(경북대학교 Catdriip 팀)까지 내려가서 한국에서만 7개 팀이 출전하는 유례없는 해가 되었다. \n 대회 참가를 위해서는 예방접종을 완료해야 했는데, 아시아태평양 지역 내에서 한국과 일부 나라를 제외하고는 백신 수급 상황이 좋지 않거나, 러시아발 입국자에 대한 자가격리 조치가 강력했거나, 아예 입출국을 허용하지 않았다.",
      next: ["chapter2-5300"],
    },
  ],
  [
    "chapter2-5300",
    {
      text: "티켓은 10위(UNIST Underdog 팀)와 11위(경북대학교 Catdriip 팀)까지 내려가서 한국에서만 7개 팀이 출전하는 유례없는 해가 되었다. \n 대회 참가를 위해서는 예방접종을 완료해야 했는데, 아시아태평양 지역 내에서 한국과 일부 나라를 제외하고는 백신 수급 상황이 좋지 않거나, 러시아발 입국자에 대한 자가격리 조치가 강력했거나, 아예 입출국을 허용하지 않았다. \n 한국의 비교적 나은 방역 상황으로 인해 운좋게 티켓을 얻었다고 생각한다.",
      next: ["chapter3"],
    },
  ],
  [
    "chapter3",
    {
      text: "제 3장 ~두 번째 산: 백신~",
      screenBlack: "off",
      screenCenterBlack: "on",
      next: ["chapter3-100"],
    },
  ],
  [
    "chapter3-100",
    {
      text: "사람들을 종종 내 장점을 강력한 추진력을 가졌다는 것이라고 말하고는 했다.",
      screenCenterBlack: "off",
      next: ["chapter3-200"],
    },
  ],
  [
    "chapter3-200",
    {
      text: "반대로 말하면 앞만 보고 가느라 사소한 것들을 놓치는 건 약점이라고 할 수 있을 것 같다.",
      next: ["chapter3-300"],
    },
  ],
  [
    "chapter3-300",
    {
      text: "일단 참가할 수 있다고 질러놨지만...",
      character: "한별",
      next: ["chapter3-400"],
    },
  ],
  [
    "chapter3-400",
    {
      text: "To maximize safety for others, participants need to be fully vaccinated before arrival. Please be prepared to provide documentation. MIPT will be glad to assist in requesting that your local authorities provide rapid access to vaccines. Expectations may be granted for health or other reasons.",
      screenBlack: "on",
      next: ["chapter3-500"],
    },
  ],
  [
    "chapter3-500",
    {
      text: "모든 참가자는 백신 접종을 완료해야 한다는 뜻이었다.",
      screenBlack: "off",
      next: ["chapter3-600"],
    },
  ],
  [
    "chapter3-600",
    {
      text: "출국 예정일은 9월 말, 지금은 8월 12일이었다.",
      next: ["chapter3-700"],
    },
  ],
  [
    "chapter3-700",
    {
      text: "50일 정도 남은건가...",
      character: "한별",
      next: ["chapter3-800"],
    },
  ],
  [
    "chapter3-800",
    {
      text: "그러나 fully vaccinated의 의미는 ‘접종 완료 후 14일 경과’이다.",
      next: ["chapter3-900"],
    },
  ],
  [
    "chapter3-900",
    {
      text: "‘접종 완료’는 2차접종이 필요한 백신의 경우 2차접종까지를 의미하기 때문에 2차접종을 36일 안에 받아야 한다는 뜻이었다.",
      next: ["chapter3-1000"],
    },
  ],
  [
    "chapter3-1000",
    {
      text: "우리는 네 명 모두 1차도 안 맞았는데...",
      character: "한별",
      next: ["chapter3-1100"],
    },
  ],
  [
    "chapter3-1100",
    {
      text: "게다가 Pfizer 백신은 1차와 2차접종 사이 간격이 42일이었고, 그조차도 접종받기 너무나 어려웠다.",
      next: ["chapter3-1200"],
    },
  ],
  [
    "chapter3-1200",
    {
      text: "어떻게 하지?",
      character: "한별",
      next: ["chapter3-1300"],
    },
  ],
  [
    "chapter3-1300",
    {
      text: "",
      isSelect: "on",
      selectList: ["정부의 도움을 얻는다.", "직접 방법을 찾아본다."],
      next: ["chapter3-bad-end-100", "chapter3-1400"],
    },
  ],
  [
    "chapter3-bad-end-100",
    {
      text: "정부의 도움을 구하기로 했다.",
      isSelect: "off",
      next: ["chapter3-bad-end-200"],
    },
  ],
  [
    "chapter3-bad-end-200",
    {
      text: "ICPC면 나름 규모가 큰 국제 대회인데, 백신 정도는 지원해 주겠지?",
      character: "한별",
      next: ["chapter3-bad-end-300"],
    },
  ],
  [
    "chapter3-bad-end-300",
    {
      text: "공무 및 경제활동으로 긴급 출국을 위해 예방 접종을 맞아야 하는데 절차가 어떻게 되나요?",
      screenBlack: "on",
      next: ["chapter3-bad-end-400"],
    },
  ],
  [
    "chapter3-bad-end-400",
    {
      text: "공무 및 경제활동으로 긴급 출국을 위해 예방 접종을 맞아야 하는데 절차가 어떻게 되나요? \n 중요 경제활동으로 긴급출국 할 경우 소관부처(산업, 중기, 외교부 등)에서 출국 사유별 필요성을 검토하고, 입국 국가의 접종증명서 요구 등으 확인하여 질병관리청에 승인을 요구하게 될 것입니다. \n 3월 17일부터는 업무 소관부처 또는 기업인 출입국 종합지원센터를 통해 신청을 받아 각 부서 십사 후 질병관리청 승인을 거쳐 접종 대상자를 선정하고 있습니다.",
      next: ["chapter3-bad-end-500"],
    },
  ],
  [
    "chapter3-bad-end-500",
    {
      text: "ICPC는 소관부처가 어디지? ICPC는 경제활동인가?",
      character: "한별",
      screenBlack: "off",
      next: ["chapter3-bad-end-600"],
    },
  ],
  [
    "chapter3-bad-end-600",
    {
      text: "게다가 질병관리청까지 올라갔다 내려온다니. 오래 걸릴 거 같은 예감이 들었다.",
      next: ["chapter3-bad-end-700"],
    },
  ],
  [
    "chapter3-bad-end-700",
    {
      text: "일단 담당 부서에 메일을 보냈다.",
      next: ["chapter3-bad-end-800"],
    },
  ],
  [
    "chapter3-bad-end-800",
    {
      text: "안녕하세요, 서울시 담당자입니다.",
      screenBlack: "on",
      next: ["chapter3-bad-end-900"],
    },
  ],
  [
    "chapter3-bad-end-900",
    {
      text: "안녕하세요, 서울시 담당자입니다. \n 안내자료 보내드립니다. 국제대회 참여인 경우 국제대회 초청장 등 증빙서류 포함해서 제출해주시기 바랍니다.",
      next: ["chapter3-bad-end-1000"],
    },
  ],
  [
    "chapter3-bad-end-1000",
    {
      text: "안녕하세요, 서울시 담당자입니다. \n 안내자료 보내드립니다. 국제대회 참여인 경우 국제대회 초청장 등 증빙서류 포함해서 제출해주시기 바랍니다. \n 보내드리는 안내자료 검토 후 승인 대상으로 판단되시면 신청서(한글, 엑셀) 및 증빙서류 포함 이메일로 제출해주시기 바랍니다.",
      next: ["chapter3-bad-end-1100"],
    },
  ],
  [
    "chapter3-bad-end-1100",
    {
      text: "일단 초청장이 있기는 한데, 초청장에 여권 번호 등이 적혀있지 않았다.",
      screenBlack: "off",
      next: ["chapter3-bad-end-1200"],
    },
  ],
  [
    "chapter3-bad-end-1200",
    {
      text: "승인이 되지 않을 것 같다는 예감이 머리를 스쳤다.",
      next: ["chapter3-bad-end-1250"],
    },
  ],
  [
    "chapter3-bad-end-1250",
    {
      text: "불안한 마음을 뒤로 한 채 서울시를 믿고 필요한 서류를 모두 작성하여 보냈다.",
      next: ["chapter3-bad-end-1400"],
    },
  ],
  [
    "chapter3-bad-end-1400",
    {
      text: "초조한 마음으로 승인되기만을 기다리던 한별이는, 예상보다 조금 늦은 답장을 받게 된다.",
      screenBlack: "on",
      next: ["chapter3-bad-end-1500"],
    },
  ],
  [
    "chapter3-bad-end-1500",
    {
      text: "초조한 마음으로 승인되기만을 기다리던 한별이는, 예상보다 조금 늦은 답장을 받게 된다. \n 애매한 답변이었다. 승인 여부는 확실하지 않으나 현재 신청이 많이 몰려 빠르게 처리하기는 어렵다는 내용이었다. 아무리 봐도 시간 내에 맞출 수 있을 것 같지 않았다.",
      next: ["chapter3-bad-end-1600"],
    },
  ],
  [
    "chapter3-bad-end-1600",
    {
      text: "초조한 마음으로 승인되기만을 기다리던 한별이는, 예상보다 조금 늦은 답장을 받게 된다. \n 애매한 답변이었다. 승인 여부는 확실하지 않으나 현재 신청이 많이 몰려 빠르게 처리하기는 어렵다는 내용이었다. 아무리 봐도 시간 내에 맞출 수 있을 것 같지 않았다. \n 결국 정부 외에도 다른 방법을 통해 백신을 맞으려고 시도했지만, 이미 너무 늦은 순간이었다.",
      next: ["chapter3-bad-end-1700"],
    },
  ],
  [
    "chapter3-bad-end-1700",
    {
      text: "초조한 마음으로 승인되기만을 기다리던 한별이는, 예상보다 조금 늦은 답장을 받게 된다. \n 애매한 답변이었다. 승인 여부는 확실하지 않으나 현재 신청이 많이 몰려 빠르게 처리하기는 어렵다는 내용이었다. 아무리 봐도 시간 내에 맞출 수 있을 것 같지 않았다. \n 결국 정부 외에도 다른 방법을 통해 백신을 맞으려고 시도했지만, 이미 너무 늦은 순간이었다. \n 한별이는 결국 백신 문제로 월드 파이널에 참가하기 어렵겠다는 메일을 ICPC측에 보냈고, 이렇게 한별이의 월드 파이널 행은 좌절되고 만다.",
      next: ["chapter3-bad-end-1800"],
    },
  ],
  [
    "chapter3-bad-end-1800",
    {
      text: "초조한 마음으로 승인되기만을 기다리던 한별이는, 예상보다 조금 늦은 답장을 받게 된다. \n 애매한 답변이었다. 승인 여부는 확실하지 않으나 현재 신청이 많이 몰려 빠르게 처리하기는 어렵다는 내용이었다. 아무리 봐도 시간 내에 맞출 수 있을 것 같지 않았다. \n 결국 정부 외에도 다른 방법을 통해 백신을 맞으려고 시도했지만, 이미 너무 늦은 순간이었다. \n 한별이는 결국 백신 문제로 월드 파이널에 참가하기 어렵겠다는 메일을 ICPC측에 보냈고, 이렇게 한별이의 월드 파이널 행은 좌절되고 만다. \n 정부를 믿은 한별이의 잘못이었을까?",
      next: ["chapter3-bad-end"],
    },
  ],
  [
    "chapter3-bad-end",
    {
      text: "BAD END ~믿는 도끼에 발등 찍힌다~",
      screenBlack: "off",
      screenCenterBlack: "on",
      next: null,
      end: true,
    },
  ],
  [
    "chapter3-1400",
    {
      text: "아까도 말했지만 이번 일은 촌각을 다투는 일이었다.",
      isSelect: "off",
      next: ["chapter3-1500"],
    },
  ],
  [
    "chapter3-1500",
    {
      text: "정부를 믿지 못하는 것은 아니지만, 여러 행정 절차를 거치려면 오랜 시간이 필요할 것이다.",
      next: ["chapter3-1600"],
    },
  ],
  [
    "chapter3-1600",
    {
      text: "내가 직접 알아봐야겠어!",
      character: "한별",
      next: ["chapter3-1700"],
    },
  ],
  [
    "chapter3-1700",
    {
      text: "주변 지인들에게 부탁하는 것은 물론이고 주변의 보건소와 병원에 전화를 해서 백신을 맞을 수 있는지 알아보았다.",
      next: ["chapter3-1800"],
    },
  ],
  [
    "chapter3-1800",
    {
      text: "잠시 후",
      next: ["chapter3-1900"],
    },
  ],
  [
    "chapter3-1900",
    {
      text: "지잉~! 지잉~!",
      next: ["chapter3-2000"],
    },
  ],
  [
    "chapter3-2000",
    {
      text: "여보세요?",
      character: "한별",
      next: ["chapter3-2100"],
    },
  ],
  [
    "chapter3-2100",
    {
      text: "네, 엄마. 근처 병원에서 백신을 맞을 수 있다고요?",
      character: "한별",
      next: ["chapter3-2200"],
    },
  ],
  [
    "chapter3-2200",
    {
      text: "이틀 뒤 예악인거죠?",
      character: "한별",
      next: ["chapter3-2300"],
    },
  ],
  [
    "chapter3-2300",
    {
      text: "네, 그렇게 예약할게요.",
      character: "한별",
      next: ["chapter3-2400"],
    },
  ],
  [
    "chapter3-2400",
    {
      text: "다행히도 어머니께서 동네 병원에 전화를 걸어 예약에 성공하셨다.",
      screenBlack: "on",
      next: ["chapter3-2500"],
    },
  ],
  [
    "chapter3-2500",
    {
      text: "다행히도 어머니께서 동네 병원에 전화를 걸어 예약에 성공하셨다. \n 같은 방법으로 나뿐만 아니라 팀원 모두 동네 브루트포싱으로 1차접종 예약에 성공했다.",
      next: ["chapter3-2600"],
    },
  ],
  [
    "chapter3-2600",
    {
      text: "다행히도 어머니께서 동네 병원에 전화를 걸어 예약에 성공하셨다. \n 같은 방법으로 나뿐만 아니라 팀원 모두 동네 브루트포싱으로 1차접종 예약에 성공했다. \n 접종일은 바로 이틀 후인 8월 14일이었다.",
      next: ["chapter3-2700"],
    },
  ],
  [
    "chapter3-2700",
    {
      text: "다행히도 어머니께서 동네 병원에 전화를 걸어 예약에 성공하셨다. \n 같은 방법으로 나뿐만 아니라 팀원 모두 동네 브루트포싱으로 1차접종 예약에 성공했다. \n 접종일은 바로 이틀 후인 8월 14일이었다. \n 8월 14일은 UCPC 본선이기도 했는데, 접종 당일 타이레놀 한 알을 먹고 바로 서강대 앞 스터디 카페로 달려가 UCPC 본선을 치뤘다.",
      next: ["chapter3-2800"],
    },
  ],
  [
    "chapter3-2800",
    {
      text: "1차접종은 가능한 한 최대한 빠르게 했지만 2차접종을 앞당기는 것이 필요했다. Pfizer 백신은 6주 후에 접종이 가능하다.",
      next: ["chapter3-2900"],
    },
  ],
  [
    "chapter3-2900",
    {
      text: "1차접종은 가능한 한 최대한 빠르게 했지만 2차접종을 앞당기는 것이 필요했다. Pfizer 백신은 6주 후에 접종이 가능하다. \n 다행히도 접종 간격을 앞당기는 것은 보건소에 문의를 넣으면 비교적으로 쉽게 처리할 수 있었다. 양천구보건소에 수십 번 전화를 시도한 끝에 접종 간격을 4주로 단축할 수 있었다. 팀원 모두가 9월 11일에 2차접종을 완료했고 9월 말 출국 일정에 차질이 없게 되었다.",
      next: ["chapter4"],
    },
  ],
  [
    "chapter4",
    {
      text: "제 4장 ~세 번째 산: 여행 일정과 경비~ (TODO) \n 뒷 이야기는 https://blog.shift.moe/2022/06/20/icpc-moscow-1/ 에서 확인하실 수 있습니다.",
      screenBlack: "off",
      screenCenterBlack: "on",
      next: ["chapter4-100"],
      end: true,
    },
  ],
]);
