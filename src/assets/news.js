const news = [
    {
      id: 0,
      title: "서울 비보이 페스티벌",
      date: "2024.03.1",
      desc: "<p>올해 2회차인 2024 서울비보이페스티벌은 초여름 한강을 배경으로 펼쳐지는 열정적인 브레이킹 문화를 온몸으로 체험할 수 있는 축제입니다.</p><p>지난 10년간 ‘서울시 대표 비보이단’ 공연과 교육, 작품제작으로 브레이킹 문화를 지원해 온 서울문화재단과 함께 2022년부터 페스티벌을 통해 스트리트 문화의 자유로움과 힘찬 에너지를 시민들에게 전달하고 있습니다. 국내 및 해외 우수한 힙합 아티스트들의 멋진 공연과 뜨거운 배틀의 열기, 다채로운 즐길거리가 마련되어 있습니다.</p>",
      hashtag: ["노들섬", "기획공연", "비보이"],
      imgUrl: "images/news1.jpg",
      detailImgUrl: "images/detail_img01.jpg",
    },
    {
      id: 1,
      title: "다이나믹 브레이킹 쇼",
      date: "2024.03.15",
      desc: "<p>다이나믹 브레이킹 쇼는 화려한 비보이 댄스와 역동적인 음악이 만나 극적인 무대를 선보이는 공연입니다.</p><p>이 공연은 최고 수준의 비보이 크루들이 참여하여 다채로운 스타일의 댄스를 선보입니다. 브레이킹, 팝핑, 락킹 등 다양한 장르의 댄스가 공존하며, 각 크루마다 고유한 캐릭터와 스타일을 보여줍니다.</p><p>다이나믹 브레이킹 쇼는 관객들에게 환상적인 시각적 경험을 제공합니다. 빠른 비트의 음악과 플리프와 터닝, 피토스 등의 트릭이 어우러져 극적인 무대를 연출합니다.</p><p>강렬한 댄스 모션과 정교한 움직임은 관객들을 감탄시키며, 열정적인 퍼포먼스는 관객들에게 감동과 재미를 선사합니다.</p>",
      hashtag: ["기획공연", "비보이", "비트박스"],
      imgUrl: "images/news2.jpg",
      detailImgUrl: "images/detail_img02.jpg",
    },
    {
      id: 2,
      title: "학교 축제 공연  찾아가는 비보이",
      date: "2024.04.5",
      desc: "<p>학교 축제 공연  찾아가는 비보이<br>누구도 따라 할 수 없는 기술로 중무장한<br>국가대표 브레이킹 크루!<br>신나는 음악과 펑키한 리듬과 흥 폭발!<br>국내최고 락킹 크루, 롤링핸즈!</p><p>두 팀과 DJ와 비트박스가 만난 스트릿댄스의<br>모든 것을 보여준다!<br>관객 참여형 스트릿댄스 렉처 공연,<br>비보이 브라더즈의 학교로 찾아가는 공연</p>",
      hashtag: ["학교축제", "비보이"],
      imgUrl: "images/news3.jpg",
      detailImgUrl: "images/detail_img03.jpg",
    },
  ];
  
  // news에서 데이터 하나 가져오기
  export const getNews = (id) => {
    return news.find((news => news.id === id));
  }

  export default news;