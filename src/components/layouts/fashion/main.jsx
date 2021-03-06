import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  svgFreeShipping,
  svgoffer,
  svgservice,
} from "../../../services/script";
import "../../common/index.scss";
import SpecialProducts from "../common/products";
// Import custom components
import TopCollection from "./top-collection";

class Fashion extends Component {
  componentDidMount() {
    document.getElementById("color").setAttribute("href", `#`);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>ESHOP - Shop what you wanted</title>
          <meta name="description" content="EShop – " />
        </Helmet>

        {/*collection banner*/}
        <section className="pb-0">
          <div className="container">
            <div className="row partition2">
              <div className="col-md-6">
                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>
                  <div className="collection-banner p-right text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sub-banner1.jpg`}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="contain-banner">
                      <div>
                        <h4>save 30%</h4>
                        <h2>men</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>
                  <div className="collection-banner p-right text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="contain-banner">
                      <div>
                        <h4>save 60%</h4>
                        <h2>women</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*collection banner end*/}

        <TopCollection type={"women"} />

        {/*Parallax banner*/}
        <section className="p-0">
          <div className="full-banner parallax-banner1 parallax text-center p-left">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="banner-contain">
                    <h2>2021</h2>
                    <h3>fashion trends</h3>
                    <h4>special offer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Parallax banner End*/}

        <SpecialProducts />

        {/*service layout*/}
        <div className="container">
          <section className="service border-section small-section ">
            <div className="row">
              <div className="col-md-4 service-block">
                <div className="media">
                  <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                  <div className="media-body">
                    <h4>free shipping</h4>
                    <p>free shipping world wide</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 service-block">
                <div className="media">
                  <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                  <div className="media-body">
                    <h4>24 X 7 service</h4>
                    <p>online service for new customer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 service-block">
                <div className="media">
                  <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                  <div className="media-body">
                    <h4>festival offer</h4>
                    <p>new online special festival offer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Fashion;
