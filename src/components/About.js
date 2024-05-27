import React from "react";

function About() {
  return (
    <div className="container mx-auto my-10 p-5 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-5">About FungiFusion</h2>
      <p className="mb-4">
        FungiFusion은 초기 단계 창업자와 혁신가들을 위한 독창적인 펀딩 및
        아이디어 검증 플랫폼입니다. 우리는 다양한 아이디어와 자원이 결합하여
        새로운 혁신을 만들어내는 생태계를 구축하고 있습니다.
      </p>
      <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
      <p className="mb-4">
        우리의 미션은 혁신적인 아이디어를 가진 창업자들이 초기 단계에서 시장
        반응을 테스트하고, 필요한 자금을 확보하여 성공적으로 사업을 성장시킬 수
        있도록 돕는 것입니다.
      </p>
      <h3 className="text-2xl font-bold mb-3">What We Offer</h3>
      <ul className="list-disc list-inside mb-4">
        <li>가상 크레딧 시스템을 통해 초기 자본 부담을 줄입니다.</li>
        <li>프리미엄 서비스를 통해 추가적인 지원과 마케팅을 제공합니다.</li>
        <li>
          커뮤니티 참여와 데이터 분석을 통해 유용한 인사이트를 제공합니다.
        </li>
      </ul>
      <h3 className="text-2xl font-bold mb-3">Join Us</h3>
      <p className="mb-4">
        FungiFusion과 함께라면 누구든지 창업할 수 있습니다. 우리의 커뮤니티에
        참여하여 당신의 아이디어를 개발하고, 한국의 미래 일론 머스크들이 될 수
        있도록 돕겠습니다.
      </p>
    </div>
  );
}

export default About;
