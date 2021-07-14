import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-redux-multilingual";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { getAllProducts } from "./actions";
// Features
import Layout from "./components/app";
import BlogPage from "./components/blogs/blog-page";
import Details from "./components/blogs/details";
// Blog Pages
import RightSide from "./components/blogs/right-sidebar";
import Cart from "./components/cart";
import checkOut from "./components/checkout";
import orderSuccess from "./components/checkout/success-page";
import CollectionFullWidth from "./components/collection/collection-full-width";
//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import CollectionMetro from "./components/collection/collection-metro";
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";
import CollectionRightSidebar from "./components/collection/collection-right-sidebar";
import Compare from "./components/compare/index";
// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols";
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols";
import ElementMultipleSlider from "./components/features/product/element-multiple-slider";
// Product Elements
import ElementProductBox from "./components/features/product/element-product-box";
import ElementProductNoSlider from "./components/features/product/element-product-no-slider";
import ElementProductSlider from "./components/features/product/element-product-slider";
import ElementProductTab from "./components/features/product/element-product-tab";
import ElementBanner from "./components/features/theme/element-banner";
import ElementCategory from "./components/features/theme/element-category";
import ElementRatio from "./components/features/theme/element-ratio";
import ElementService from "./components/features/theme/element-service";
import ElementSlider from "./components/features/theme/element-slider";
// Theme Element
import ElementTitle from "./components/features/theme/element-title";
// Layouts
import Fashion from "./components/layouts/fashion/main";
import PageNotFound from "./components/pages/404";
// Extra Pages
import aboutUs from "./components/pages/about-us";
import Collection from "./components/pages/collection";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Faq from "./components/pages/faq";
import ForgetPassword from "./components/pages/forget-password";
import Login from "./components/pages/login";
import lookbook from "./components/pages/lookbook";
import Register from "./components/pages/register";
import Search from "./components/pages/search";
import Accordian from "./components/products/accordian";
import Column from "./components/products/column";
import ColumnLeft from "./components/products/column-left";
import ColumnRight from "./components/products/column-right";
import LeftImage from "./components/products/left-image";
// Product Pages
import LeftSideBar from "./components/products/left-sidebar";
import NoSideBar from "./components/products/no-sidebar";
import RightImage from "./components/products/right-image";
import RightSideBar from "./components/products/right-sidebar";
import Vertical from "./components/products/vertical";
import wishList from "./components/wishlist";
import translations from "./constants/translations";
import "./index.scss";
// Import custom components
import store from "./store";

class Root extends React.Component {
  render() {
    store.dispatch(getAllProducts());

    return (
      <Provider store={store}>
        <IntlProvider translations={translations} locale="en">
          <BrowserRouter basename={"/"}>
            <ScrollContext>
              <Switch>
                <Layout>
                  {/*Routes For Layouts*/}
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    component={Fashion}
                  />

                  {/*Routes For Features (Product Collection) */}
                  <Route
                    path={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                    component={CollectionLeftSidebar}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                    component={CollectionNoSidebar}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/right-sidebar/collection`}
                    component={CollectionRightSidebar}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/full-width/collection`}
                    component={CollectionFullWidth}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/metro/collection`}
                    component={CollectionMetro}
                  />

                  {/*Routes For Single Product*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`}
                    component={LeftSideBar}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/right-sidebar/product/:id`}
                    component={RightSideBar}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/no-sidebar/product/:id`}
                    component={NoSideBar}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/col-left/product/:id`}
                    component={ColumnLeft}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/col-right/product/:id`}
                    component={ColumnRight}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/accordian/product/:id`}
                    component={Accordian}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/column/product/:id`}
                    component={Column}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/left-image/product/:id`}
                    component={LeftImage}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/right-image/product/:id`}
                    component={RightImage}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/vertical/product/:id`}
                    component={Vertical}
                  />

                  {/*Routes For custom Features*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/cart`}
                    component={Cart}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/wishlist`}
                    component={wishList}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/compare`}
                    component={Compare}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/checkout`}
                    component={checkOut}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/order-success`}
                    component={orderSuccess}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL}/sales/orders`}
                    component={aboutUs}
                  />

                  {/*Routes For Extra Pages*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/about-us`}
                    component={aboutUs}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/404`}
                    component={PageNotFound}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/lookbook`}
                    component={lookbook}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/login`}
                    component={Login}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/register`}
                    component={Register}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/search`}
                    component={Search}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/collection`}
                    component={Collection}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/forget-password`}
                    component={ForgetPassword}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/contact`}
                    component={Contact}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/dashboard`}
                    component={Dashboard}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/pages/faq`}
                    component={Faq}
                  />

                  {/*Features*/}
                  {/*Theme Elements*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-title`}
                    component={ElementTitle}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-banner`}
                    component={ElementBanner}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-slider`}
                    component={ElementSlider}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-category`}
                    component={ElementCategory}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-service`}
                    component={ElementService}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-ratio`}
                    component={ElementRatio}
                  />

                  {/*Product Elements*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-product-box`}
                    component={ElementProductBox}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-product-slider`}
                    component={ElementProductSlider}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`}
                    component={ElementProductNoSlider}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`}
                    component={ElementMultipleSlider}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/element-product-tab`}
                    component={ElementProductTab}
                  />

                  {/*Portfolios*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/portfolio-grid/:columns`}
                    component={GridCols}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/features/portfolio-masonary/:columns`}
                    component={MasonaryGridCols}
                  />

                  {/*Blog Pages*/}
                  <Route
                    path={`${process.env.PUBLIC_URL}/blog/right-sidebar`}
                    component={RightSide}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/blog/details`}
                    component={Details}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/blog/blog-page`}
                    component={BlogPage}
                  />

                  {/* <Route exact path="*" component={PageNotFound} /> */}
                </Layout>
              </Switch>
            </ScrollContext>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
