import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  closeNav() {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  }

  handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function(value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };
  handleSubTwoMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function(value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };
  handleSubThreeMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function(value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };
  handleSubFourMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function(value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="sidebar-overlay"
          onClick={this.closeNav}
        ></a>
        <nav>
          <a onClick={this.closeNav}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
            </div>
          </a>
          <ul id="sub-menu" className="sidebar-menu">
            <li>
              <Link to="#" onClick={(e) => this.handleMegaSubmenu(e)}>
                clothing
                <span className="sub-arrow"></span>
              </Link>
              <ul className="mega-menu clothing-menu">
                <li>
                  <div className="row m-0">
                    <div className="col-xl-4">
                      <div className="link-section">
                        <h5>women's fashion</h5>
                        <ul>
                          <li>
                            <Link to="left-sidebar/collection">dresses</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">skirts</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">
                              westarn wear
                            </Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">ethic wear</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">sport wear</Link>
                          </li>
                        </ul>
                        <h5>men's fashion</h5>
                        <ul>
                          <li>
                            <Link to="left-sidebar/collection">
                              sports wear
                            </Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">
                              western wear
                            </Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">ethic wear</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="link-section">
                        <h5>accessories</h5>
                        <ul>
                          <li>
                            <Link to="left-sidebar/collection">
                              fashion jewellery
                            </Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">
                              caps and hats
                            </Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">
                              precious jewellery
                            </Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">necklaces</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">earrings</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">wrist wear</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">ties</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">cufflinks</Link>
                          </li>
                          <li>
                            <Link to="left-sidebar/collection">
                              pockets squares
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                bags
                <span className="sub-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="left-sidebar/collection">shopper bags</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">laptop bags</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">clutches</Link>
                </li>
                <li>
                  <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)}>
                    purses
                    <span className="sub-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="left-sidebar/collection">purses</Link>
                    </li>
                    <li>
                      <Link to="left-sidebar/collection">wallets</Link>
                    </li>
                    <li>
                      <Link to="left-sidebar/collection">leathers</Link>
                    </li>
                    <li>
                      <Link to="left-sidebar/collection">satchels</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                footwear
                <span className="sub-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="left-sidebar/collection">sport shoes</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">formal shoes</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">casual shoes</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">watches</Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                Accessories
                <span className="sub-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="left-sidebar/collection">fashion jewellery</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">caps and hats</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">precious jewellery</Link>
                </li>
                <li>
                  <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)}>
                    more..
                    <span className="sub-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="left-sidebar/collection">necklaces</Link>
                    </li>
                    <li>
                      <Link to="left-sidebar/collection">earrings</Link>
                    </li>
                    <li>
                      <Link to="left-sidebar/collection">wrist wear</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => this.handleSubThreeMenu(e)}>
                        accessories
                        <span className="sub-arrow"></span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="left-sidebar/collection">ties</Link>
                        </li>
                        <li>
                          <Link to="left-sidebar/collection">cufflinks</Link>
                        </li>
                        <li>
                          <Link to="left-sidebar/collection">
                            pockets squares
                          </Link>
                        </li>
                        <li>
                          <Link to="left-sidebar/collection">helmets</Link>
                        </li>
                        <li>
                          <Link to="left-sidebar/collection">scarves</Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={(e) => this.handleSubFourMenu(e)}
                          >
                            more...
                            <span className="sub-arrow"></span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="left-sidebar/collection">
                                accessory gift sets
                              </Link>
                            </li>
                            <li>
                              <Link to="left-sidebar/collection">
                                travel accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="left-sidebar/collection">
                                phone cases
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="left-sidebar/collection">belts & more</Link>
                    </li>
                    <li>
                      <Link to="left-sidebar/collection">wearable</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="left-sidebar/collection">house of design</Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                beauty & personal care
                <span className="sub-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="left-sidebar/collection">makeup</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">skincare</Link>
                </li>
                <li>
                  <Link to="left-sidebar/collection">premium beaty</Link>
                </li>
                <li>
                  <Link to="#" onClick={(e) => this.handleSuTwobmenu(e)}>
                    more
                    <span className="sub-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">fragrances</Link>
                    </li>
                    <li>
                      <Link to="#">luxury beauty</Link>
                    </li>
                    <li>
                      <Link to="#">hair care</Link>
                    </li>
                    <li>
                      <Link to="#">tools & brushes</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">home & decor</Link>
            </li>
            <li>
              <Link to="#">kitchen</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
