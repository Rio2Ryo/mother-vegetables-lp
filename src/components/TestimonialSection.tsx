"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "東京都 A.K様 (42歳)",
      comment: "朝のメイクが本当に楽になりました。毛穴が目立たなくなり、肌が陶器のように滑らかに。夕方になってもテカリや崩れがなく、朝の仕上がりがそのまま続きます。もう手放せません！",
      beforeImage: "Before Photo 1",
      afterImage: "After Photo 1"
    },
    {
      id: 2,
      name: "大阪府 M.S様 (38歳)",
      comment: "初めて使った時の感動が忘れられません。本当に陶器のような滑らかな肌になりました。特に小鼻周りの毛穴が全く目立たなくなって、素肌に自信が持てるように。メイク直しの回数も激減しました。",
      beforeImage: "Before Photo 2",
      afterImage: "After Photo 2"
    },
    {
      id: 3,
      name: "神奈川県 Y.T様 (35歳)",
      comment: "仕事で一日中マスクをしていても化粧崩れしにくく、本当に快適です。肌への負担も感じず、むしろ使い続けるうちに肌の調子が良くなってきました。友人にも『肌がキレイになった』と褒められます。",
      beforeImage: "Before Photo 3",
      afterImage: "After Photo 3"
    }
  ];

  const surveyResults = [
    { label: "化粧崩れが減った", percentage: 98 },
    { label: "肌の調子が良くなった", percentage: 95 },
    { label: "陶器肌になれた", percentage: 97 },
    { label: "リピートしたい", percentage: 99 }
  ];

  return (
    <>
      <section id="voice" className="py-20 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm text-[#b8860b] mb-4 tracking-wider">お客様の声</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">
              実際にご使用いただいた<br />
              お客様の喜びの声
            </h2>
            <div className="w-20 h-1 bg-[#b8860b] mx-auto" />
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Testimonial Cards */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex justify-center">
                    <div className="testimonial-card rounded-3xl p-6 md:p-8 bg-gradient-to-br from-gray-900 to-black border border-[#b8860b]/20 hover:border-[#b8860b]/40 transition-all duration-500 w-full max-w-md">
                      <div className="flex flex-col items-center">
                        <div className="w-full">
                          <h4 className="text-base md:text-lg font-light mb-4 md:mb-6 text-[#b8860b] tracking-wider">使用前</h4>
                          <div 
                            className="relative aspect-square bg-gray-900 rounded-2xl overflow-hidden mb-4 md:mb-6 group cursor-pointer transition-all duration-300 hover:border hover:border-[#b8860b]/30"
                            onClick={() => setModalImage(`before${testimonial.id}`)}
                          >
                            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                              <p className="text-gray-400">{testimonial.beforeImage}</p>
                            </div>
                            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-black/90 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-[#b8860b]/30">
                              <p className="text-xs md:text-sm font-medium text-[#b8860b]">Before</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <path fill="currentColor" d="M15,3H9V5H15M19,5H21V7H19M19,9H21V11H19M19,13H21V15H19M19,17H21V19H19M17,21H15V23H17M13,21H11V23H13M9,21H7V23H9M5,21H3V19H5M5,17H3V15H5M5,13H3V11H5M5,9H3V7H5M21,21H19V19H17V21H15V19H13V21H11V19H9V21H7V19H5V21H3V3H5V5H7V3H9V5H11V3H13V5H15V3H17V5H19V3H21M19,19V5H5V19H19M9,8V16L15,12L9,8Z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full">
                          <h4 className="text-base md:text-lg font-light mb-4 md:mb-6 text-[#b8860b] tracking-wider">使用後</h4>
                          <div 
                            className="relative aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden mb-4 md:mb-6 group cursor-pointer transition-all duration-300 hover:border hover:border-[#b8860b]/30"
                            onClick={() => setModalImage(`after${testimonial.id}`)}
                          >
                            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                              <p className="text-gray-400">{testimonial.afterImage}</p>
                            </div>
                            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-gradient-to-r from-[#b8860b] to-[#d4c4b0] text-black px-3 md:px-4 py-1 md:py-2 rounded-full">
                              <p className="text-xs md:text-sm font-medium">After</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <path fill="currentColor" d="M15,3H9V5H15M19,5H21V7H19M19,9H21V11H19M19,13H21V15H19M19,17H21V19H19M17,21H15V23H17M13,21H11V23H13M9,21H7V23H9M5,21H3V19H5M5,17H3V15H5M5,13H3V11H5M5,9H3V7H5M21,21H19V19H17V21H15V19H13V21H11V19H9V21H7V19H5V21H3V3H5V5H7V3H9V5H11V3H13V5H15V3H17V5H19V3H21M19,19V5H5V19H19M9,8V16L15,12L9,8Z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-sm md:text-base text-gray-300 mb-3 font-light leading-relaxed">
                              "{testimonial.comment}"
                            </p>
                            <p className="text-xs md:text-sm text-[#b8860b]">{testimonial.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Survey Results */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 mt-12 md:mt-16 border border-[#b8860b]/20">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-white">ご愛用者様アンケート結果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {surveyResults.map((result, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm md:text-base text-gray-300">{result.label}</span>
                      <span className="font-bold text-sm md:text-base text-[#b8860b]">{result.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-[#b8860b] to-[#d4c4b0] h-3 rounded-full transition-all duration-1000"
                        style={{width: `${result.percentage}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-400 text-center mt-4">※2024年10月実施 n=500</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setModalImage(null)}
          >
            ×
          </button>
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-light mb-6 text-center">
              {modalImage.startsWith('before') ? '使用前の肌状態' : '使用後の肌状態'}
            </h3>
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-xl">
                {modalImage.startsWith('before') ? 'Before' : 'After'} Photo {modalImage.slice(-1)}
              </p>
            </div>
            <p className="text-center mt-6 text-gray-600">
              {modalImage.startsWith('before') ? '毛穴・凹凸が目立つ肌の状態' : '陶器のような滑らかな肌へ変化'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}