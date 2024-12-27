import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import VideoCarousel from "../../components/home/VideoReview/VideoCrousels"
const Home = () => {

    const videoUrls = [
        
        "https://india.indewild.com/cdn/shop/videos/c/vp/db6714b94ec246c9a658a6686d10cd8a/db6714b94ec246c9a658a6686d10cd8a.HD-1080p-2.5Mbps-35644894.mp4?v=0",
        "https://india.indewild.com/cdn/shop/videos/c/vp/5c6096f66fae41719337c33ce651ca3e/5c6096f66fae41719337c33ce651ca3e.HD-720p-1.6Mbps-25812847.mp4?v=0",
        "https://india.indewild.com/cdn/shop/videos/c/vp/007dd602ddee405cacfb998d313bbfb4/007dd602ddee405cacfb998d313bbfb4.HD-720p-1.6Mbps-25812850.mp4?v=0",
        "https://india.indewild.com/cdn/shop/videos/c/vp/82f7e9429b65484a95722582fe90a81b/82f7e9429b65484a95722582fe90a81b.HD-1080p-2.5Mbps-35435054.mp4?v=0",
        "https://india.indewild.com/cdn/shop/videos/c/vp/da2b3fec99414938929b96adbf1310f8/da2b3fec99414938929b96adbf1310f8.HD-720p-1.6Mbps-25812846.mp4?v=0",
        "https://india.indewild.com/cdn/shop/videos/c/vp/9cf433c4f90c4927bd4318d6aec76041/9cf433c4f90c4927bd4318d6aec76041.HD-1080p-7.2Mbps-29085167.mp4?v=0",

      ]; 

  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <div className="my-24">
          <VideoCarousel videoUrls={videoUrls} />
        </div>
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
