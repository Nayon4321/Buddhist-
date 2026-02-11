
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { TripitakaStories } from './components/TripitakaStories';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { MediaGallery } from './components/MediaGallery';
import { AdminPanel } from './components/AdminPanel';
import { StoryDetail } from './components/StoryDetail';

// Reliable Buddha Image IDs from Unsplash for variety
const BUDDHA_IMAGE_IDS = [
  "1542317148-8b4990008544", "1596701062351-8c2c14d1fdd0", "1506126613408-eca07ce68773", 
  "1518005020951-eccb494ad742", "1590731213768-3f5f3e9c5222", "1528132599737-dbaa45068300",
  "1610473068533-9f5b66d79496", "1601056639371-33157e8f57f6", "1523438097201-51217c3999cd",
  "1543314539-71701a21695f", "1593951111002-861f1c9d81d2", "1615632709282-5369677332f1",
  "1507300454359-5989e5309385", "1529124238541-017e81cc13b3", "1616492921508-0129219089f6"
];

const getBuddhaImage = (index: number) => {
  const id = BUDDHA_IMAGE_IDS[index % BUDDHA_IMAGE_IDS.length];
  return `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`;
};

// 50 Tripitaka Stories titles
const TITLES = [
  "মহাসাধিকা বিশাখা", "কৃশা গৌতমী", "দস্যু অঙ্গুলিমাল", "অনাথপিণ্ডিক দাতা", "রাজপুত্র সিদ্ধার্থ ও হাঁস",
  "নন্দ ভিক্ষুর বৈরাগ্য", "ক্ষেমার জ্ঞান লাভ", "উপালি নাপিতের প্রব্রজ্যা", "সারিপুত্র ও মৌদগল্যায়ণ", "সুজাতার পরমান্ন দান",
  "বুদ্ধ ও হাতি নালাগিরি", "দেবদত্তের ষড়যন্ত্র", "মহাপ্রজাপতি গৌতমীর সংঘ গঠন", "অজাতশত্রুর অনুতাপ", "বিম্বিসার ও বুদ্ধ",
  "আম্রপালী ও বুদ্ধ", "সিগালাবাদ সুত্তের শিক্ষা", "চন্দকামার গল্প", "পটাচারা ও তাঁর দুঃখ মুক্তি", "বাজিরা ভিক্ষুণী",
  "আলবক যক্ষ ও বুদ্ধ", "চুণ্ড কর্মকারের শেষ দান", "আনন্দ ও বুদ্ধের শেষ মুহূর্ত", "সুভদ্রের প্রব্রজ্যা", "অশোকের বৌদ্ধ ধর্ম গ্রহণ",
  "মিলিন্দ পঞ হ", "বানর রাজের ত্যাগ", "কুশ জাতকের শিক্ষা", "শিবী রাজার দান", "সস জাতকের গল্প",
  "রাখাল বালকের ভক্তি", "যমক বগ্গ শিক্ষা", "চিত্ত বগ্গ সারকথা", "পুষ্প বগ্গ উপদেশ", "বাল বগ্গ কাহিনি",
  "পন্ডিত বগ্গ নীতি", "অরহন্ত বগ্গ মহিমা", "সহস্র বগ্গ বাণী", "পাপ বগ্গ সতকর্তা", "দন্ড বগ্গ বিচার",
  "জরা বগ্গ বাস্তবতা", "অত্ত বগ্গ আত্মশুদ্ধি", "মৈত্রী ভাবনার শক্তি", "উদ্দক রামপুত্ত ও বুদ্ধ", "আলারা কালামের শিক্ষা",
  "বোধিদ্রুম তলে বুদ্ধ", "ধর্মচক্র প্রবর্তন", "তপস্সু ও ভল্লিক", "যশ ও তাঁর মিত্রগণ", "কাসি ভরদ্বাজ"
];

const INITIAL_STORIES = TITLES.map((title, i) => ({
  id: i + 1,
  title,
  image: getBuddhaImage(i),
  content: `${title} - ভগবান বুদ্ধের অমূল্য শিক্ষার এক চমৎকার কাহিনি। এটি ত্রিপিটক থেকে সংগৃহীত। বুদ্ধের প্রতিটি বাণী আমাদের জীবনে সত্য, শান্তি এবং করুণার পথ দেখায়। এই গল্পের মাধ্যমে আমরা শিখি কীভাবে সঠিক প্রজ্ঞার মাধ্যমে দুঃখ থেকে মুক্তি পাওয়া যায়।`,
  moral: "শিক্ষা: ধর্মই পরম শান্তি এবং প্রজ্ঞাই মুক্তির একমাত্র উপায়।"
}));

const INITIAL_NEWS = [
  {
    id: 1,
    title: "International Wesak Day 2026",
    description: "Preparations are underway globally for the upcoming Wesak Day celebrations at Buddhist centers. Leaders from 50 countries will participate.",
    image: getBuddhaImage(0)
  },
  {
    id: 2,
    title: "New Monastery in Lumbini",
    description: "A major peace center is being constructed near the birthplace of Lord Buddha in Nepal to serve thousands of monks and pilgrims.",
    image: getBuddhaImage(1)
  },
  {
    id: 3,
    title: "Mindfulness for Global Peace",
    description: "New meditation program launched for international diplomats to encourage peaceful conflict resolution through Buddhist principles.",
    image: getBuddhaImage(2)
  }
];

const INITIAL_GALLERY = BUDDHA_IMAGE_IDS.slice(0, 10).map(id => `https://images.unsplash.com/photo-${id}?q=80&w=600&auto=format&fit=crop`);

const App: React.FC = () => {
  const [stories, setStories] = useState<any[]>(() => {
    const saved = localStorage.getItem('bnn_stories_v3');
    return saved ? JSON.parse(saved) : INITIAL_STORIES;
  });

  const [news, setNews] = useState<any[]>(() => {
    const saved = localStorage.getItem('bnn_news_v3');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [gallery, setGallery] = useState<string[]>(() => {
    const saved = localStorage.getItem('bnn_gallery_v3');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('bnn_stories_v3', JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    localStorage.setItem('bnn_news_v3', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('bnn_gallery_v3', JSON.stringify(gallery));
  }, [gallery]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <div className="bg-white border-b border-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <p className="text-4xl md:text-6xl text-amber-700 italic serif-font leading-tight font-bold">
                  “Spreading the Light of Dhamma Across the World”
              </p>
              <div className="w-48 h-2 bg-amber-500 mx-auto mt-12 rounded-full shadow-lg"></div>
          </div>
        </div>

        <section id="biography" className="bg-white">
          <Biography />
        </section>

        <section id="media" className="bg-amber-50/10">
          <MediaGallery images={gallery} />
        </section>

        <section id="stories" className="bg-white">
          <TripitakaStories 
            stories={stories} 
            onStorySelect={setSelectedStory} 
          />
        </section>

        <section id="news" className="bg-amber-50/20">
          <NewsSection newsItems={news} />
        </section>
      </main>

      <Footer onAdminClick={() => setIsAdminOpen(true)} />

      {selectedStory && (
        <StoryDetail 
          story={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}

      {isAdminOpen && (
        <AdminPanel 
          onClose={() => setIsAdminOpen(false)}
          stories={stories}
          setStories={setStories}
          news={news}
          setNews={setNews}
          gallery={gallery}
          setGallery={setGallery}
        />
      )}
    </div>
  );
};

export default App;
