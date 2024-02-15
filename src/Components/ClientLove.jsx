import React from "react";
import { Client_top } from "../Data/Client_Data";
import { Client_bottom } from "../Data/Client_Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/clientLove.css";

function ClientLove() {
  const settings = {
    dots: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: null,
    nextArrow: null,
  };
  return (
    <>
      <div className="Client_top">
        {Client_top.map((product, index) => {
          return (
            <div key={index} className="Client_top1">
              <h3>{product.name}</h3>
              <h2>{product.name2}</h2>
            </div>
          );
        })}
      </div>
      <div className="fix-client">
        <div className="Client">
          <div className="Client_bottom">
            {Client_bottom.map((product, index) => {
              return (
                <div className="" key={index}>
                  <div className="Client_bottom1">
                    <img src={product.img} alt="not found" />
                    <p>{product.p}</p>

                    <div className="Client_bottom_star">
                      {product.img2.map((star, starindex) => (
                        <img key={starindex} src={star} alt="" />
                      ))}
                    </div>
                  </div>
                  <div className="Owner">
                    <img src={product.img3} alt="" />
                    <h2>{product.name}</h2>
                    <h3>{product.position}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="slider-client">
        <Slider {...settings}>
          {Client_bottom.map((product, index) => {
            return (
              <div>
                <div className="Client">
                  <div className="Client_bottom">
                    <div className="" key={index}>
                      <div className="Client_bottom1">
                        <img src={product.img} alt="not found" />
                        <p>{product.p}</p>

                        <div className="Client_bottom_star">
                          {product.img2.map((star, starindex) => (
                            <img key={starindex} src={star} alt="" />
                          ))}
                        </div>
                      </div>
                      <div className="Owner">
                        <img src={product.img3} alt="" />
                        <h2>{product.name}</h2>
                        <h3>{product.position}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div>
            <h3>SECOND SLIDE</h3>
          </div>
          <div>
            <h3>THIRD SLIDE</h3>
          </div>
          <div>
            <h3>FORTH SLIDE</h3>
          </div> */}
        </Slider>
      </div>
    </>
  );
}

export default ClientLove;
