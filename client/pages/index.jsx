import Carousel from "../components/Carousel";
import { BASEURL } from "../components/URL/url";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import Link from "next/link";
import "swiper/css/bundle";
import { categories } from "../data/homePageData";
import SearchBar from "../components/Search Bar";
import { Layout } from "../components/Layout";
export default function Home() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Layout>
        <div className="hero">
          <Carousel />
          <div className="banner">
            <img src={`${BASEURL}images/banner/ad-banner-1.jpg`} alt="banner" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div class="typing-text">
                  <div class="static-txt">Who you are looking for </div>
                  <ul class="dynamic-txts">
                    <li>
                      <span>YouTuber</span>
                    </li>
                    <li>
                      <span>Designer</span>
                    </li>
                    <li>
                      <span>Developer</span>
                    </li>
                    <li>
                      <span>Freelancer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <SearchBar home={true} />
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 d-flex justify-content-around">
          <div className="col-md-3">
            <div className="side-ad-banner">
              <div className="img">
                <img
                  src={`${BASEURL}images/banner/ad-banner-1.jpg`}
                  alt="banner"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="swiper-container">
              <div className="main-heading pb-2">
                <h2>Categories</h2>
              </div>
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                modules={[Navigation]}
                navigation
                autoplay
              >
                {categories.map((category, index) => (
                  <SwiperSlide key={`swiper-${index}`}>
                    <img
                      src={`${BASEURL}images/categories/${category.image}`}
                      alt="Accountant"
                    />
                    <Link href="/explore">
                      <a>
                        <h4 style={{ color: "white" }}>{category.name}</h4>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="side-ad-banner">
              <div className="img">
                <img
                  src={`${BASEURL}images/banner/ad-banner-1.jpg`}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
