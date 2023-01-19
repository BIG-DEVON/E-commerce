exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 9163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AP": () => (/* reexport */ components_Cart),
  "LE": () => (/* reexport */ components_FooterBanner),
  "yo": () => (/* reexport */ components_HeroBanner),
  "Ar": () => (/* reexport */ components_Layout),
  "xs": () => (/* reexport */ components_Product)
});

// UNUSED EXPORTS: Footer, Navbar

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/Footer.jsx





const Footer = () => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/external_react_default().createElement("p", null, " \xA9 2022 Devon All rights reserved. "), /*#__PURE__*/external_react_default().createElement("p", {
    className: "icons"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "https://www.instagram.com/accounts/login/"
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiFillInstagram, null)), /*#__PURE__*/external_react_default().createElement("a", {
    href: "https://twitter.com/Devon5335"
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineTwitter, null))));
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: ../../../AppData/Roaming/npm/node_modules/next/head.js
var head = __webpack_require__(5030);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ../../../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(11);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./context/StateContext.js
var StateContext = __webpack_require__(9727);
;// CONCATENATED MODULE: ./components/Navbar.jsx







const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities
  } = (0,StateContext/* useStateContext */.F)();
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/external_react_default().createElement("p", {
    className: "logo"
  }, /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: "/"
  }, "Devon's Store")), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "cart-icon",
    onClick: () => setShowCart(true)
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineShopping, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "cart-item-qty"
  }, totalQuantities)), showCart && /*#__PURE__*/external_react_default().createElement(components_Cart, null));
};

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Layout.jsx





const Layout = ({
  children
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "layout"
  }, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("title", null, " Devon's Store")), /*#__PURE__*/external_react_default().createElement("header", null, /*#__PURE__*/external_react_default().createElement(components_Navbar, null)), /*#__PURE__*/external_react_default().createElement("main", {
    className: "main-container"
  }, children), /*#__PURE__*/external_react_default().createElement("footer", null, /*#__PURE__*/external_react_default().createElement(components_Footer, null)));
};

/* harmony default export */ const components_Layout = (Layout);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(7878);
;// CONCATENATED MODULE: ./components/Product.jsx




const Product = ({
  product: {
    image,
    name,
    slug,
    price
  }
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: `/product/${slug.current}`
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "product-card"
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(image && image[0]),
    width: 250,
    height: 250,
    className: "product-image"
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-name"
  }, name), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-price"
  }, "$", price))));
};

/* harmony default export */ const components_Product = (Product);
// EXTERNAL MODULE: ./pages/product/[slug].js
var _slug_ = __webpack_require__(3367);
;// CONCATENATED MODULE: ./components/HeroBanner.jsx






const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("p", {
    className: "beats-solo"
  }, heroBanner.smallText), /*#__PURE__*/external_react_default().createElement("h3", null, " ", heroBanner.midText, " "), /*#__PURE__*/external_react_default().createElement("h1", null, " ", heroBanner.largeText1), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(heroBanner.image),
    alt: "headphones",
    className: "hero-banner-image "
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: `/product/${heroBanner.product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, " ", heroBanner.buttonText)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "desc"
  }, /*#__PURE__*/external_react_default().createElement("h5", null, " Description"), /*#__PURE__*/external_react_default().createElement("p", null, heroBanner.desc)))));
};

/* harmony default export */ const components_HeroBanner = (HeroBanner);
;// CONCATENATED MODULE: ./components/FooterBanner.jsx





const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image
  }
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/external_react_default().createElement("p", null, discount), /*#__PURE__*/external_react_default().createElement("h3", null, largeText1), /*#__PURE__*/external_react_default().createElement("h3", null, largeText2), /*#__PURE__*/external_react_default().createElement("p", null, saleTime)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/external_react_default().createElement("p", null, smallText), /*#__PURE__*/external_react_default().createElement("h3", null, midText), /*#__PURE__*/external_react_default().createElement("p", null, desc), /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: `/product/${product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(image),
    className: "footer-banner-image"
  })));
};

/* harmony default export */ const components_FooterBanner = (FooterBanner);
// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__(1946);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(943);
;// CONCATENATED MODULE: ./lib/getStripe.js

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = (0,stripe_js_.loadStripe)("pk_test_51LD7vfFsw5rKEqsXg93zUc3B4rOh6AypyoEbS93u4fYbLoIdObIJV2vvUChg5ImAoCWJVxJFaT85VgzW0VK0j3JG00ECX3nrQX");
  }

  return stripePromise;
};

/* harmony default export */ const lib_getStripe = (getStripe);
;// CONCATENATED MODULE: ./components/Cart.jsx









const Cart = () => {
  const cartRef = (0,external_react_.useRef)();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove
  } = (0,StateContext/* useStateContext */.F)();

  const handleCheckout = async () => {
    const stripe = await lib_getStripe();
    const response = await fetch("/api/stripe/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    });
    if (response.statusCode === 500) return;
    const data = await response.json();
    external_react_hot_toast_default().loading("Redirecting...");
    stripe.redirectToCheckout({
      sessionId: data.id
    });
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "cart-wrapper",
    ref: cartRef
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "cart-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "cart-heading",
    onClick: () => setShowCart(false)
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineLeft, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "heading"
  }, "Your Cart"), /*#__PURE__*/external_react_default().createElement("span", {
    className: "cart-num-items"
  }, "(", totalQuantities, " items)")), cartItems.length < 1 && /*#__PURE__*/external_react_default().createElement("div", {
    className: "empty-cart"
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineShopping, {
    size: 150
  }), /*#__PURE__*/external_react_default().createElement("h3", null, "Your shopping bag is empty"), /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: "/"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    onClick: () => setShowCart(false),
    className: "btn"
  }, "Continue Shopping"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "product-container"
  }, cartItems.length >= 1 && cartItems.map(item => /*#__PURE__*/external_react_default().createElement("div", {
    className: "product",
    key: item._id
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(item?.image[0]),
    className: "cart-product-image"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "item-desc"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "flex top"
  }, /*#__PURE__*/external_react_default().createElement("h5", null, item.name), /*#__PURE__*/external_react_default().createElement("h4", null, "$", item.price)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "flex bottom"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("p", {
    className: "quantity-desc"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "minus",
    onClick: () => toggleCartItemQuanitity(item._id, 'dec')
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineMinus, null)), /*#__PURE__*/external_react_default().createElement("span", {
    className: "num",
    onClick: ""
  }, item.quantity), /*#__PURE__*/external_react_default().createElement("span", {
    className: "plus",
    onClick: () => toggleCartItemQuanitity(item._id, 'inc')
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlinePlus, null)))), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "remove-item",
    onClick: () => onRemove(item)
  }, /*#__PURE__*/external_react_default().createElement(ti_.TiDeleteOutline, null))))))), cartItems.length >= 1 && /*#__PURE__*/external_react_default().createElement("div", {
    className: "cart-bottom"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "total"
  }, /*#__PURE__*/external_react_default().createElement("h3", null, "Subtotal:"), /*#__PURE__*/external_react_default().createElement("h3", null, "$", totalPrice)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "btn",
    onClick: handleCheckout
  }, "Pay with Stripe")))));
};

/* harmony default export */ const components_Cart = (Cart);
;// CONCATENATED MODULE: ./components/index.js








/***/ }),

/***/ 7878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'cuwqqyie',
  dataset: 'production',
  apiVersion: '2022-06-16',
  useCdn: 'true',
  token: process.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => builder.image(source);

/***/ }),

/***/ 3367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7878);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9163);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9727);






const ProductDetails = ({
  product,
  products
}) => {
  const {
    image,
    name,
    details,
    price
  } = product;
  const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    decQty,
    incQty,
    qty,
    onAdd,
    setShowCart
  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__/* .useStateContext */ .F)();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-detail-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(image && image[index]),
    className: "product-detail-image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "small-images-container"
  }, image?.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    key: i,
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(item),
    className: i === index ? 'small-image selected-image' : 'small-image',
    onMouseEnter: () => setIndex(i)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-detail-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "(20)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Details: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "price"
  }, "$", price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quantity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Quantity:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "quantity-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "minus",
    onClick: decQty
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineMinus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "num"
  }, qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "plus",
    onClick: incQty
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlinePlus, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "add-to-cart",
    onClick: () => onAdd(product, qty)
  }, "Add to Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "buy-now",
    onClick: handleBuyNow
  }, "Buy Now")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "maylike-products-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "You may also like"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "maylike-products-container track"
  }, products.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_3__/* .Product */ .xs, {
    key: item._id,
    product: item
  }))))));
};

const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;
  const products = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(query);
  const paths = products.map(product => ({
    params: {
      slug: product.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking'
  };
};
const getStaticProps = async ({
  params: {
    slug
  }
}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(query);
  const products = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(productsQuery);
  console.log(product);
  return {
    props: {
      products,
      product
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);

/***/ }),

/***/ 5030:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8893)


/***/ })

};
;