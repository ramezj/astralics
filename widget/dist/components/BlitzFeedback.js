"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlitzFeedback;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function BlitzFeedback(props) {
  const [loading, setLoading] = (0, _react.useState)(false);
  const [feedback, setFeedback] = (0, _react.useState)();
  const [rating, setRating] = (0, _react.useState)(2);
  const [email, setEmail] = (0, _react.useState)();
  const [text, setText] = (0, _react.useState)("Submit Feedback");
  const submitFeedback = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://blitzfeedback.up.railway.app/api/feedback/new/".concat(props.projectId), {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        body: feedback,
        rating: rating,
        email: email
      })
    });
    const res = await response.json();
    if (res.ok === true) {
      setLoading(false);
      setText('Feedback Received! 🚀');
    } else if (res.ok === false) {
      setLoading(false);
      setText(res.response);
    }
    console.log(res);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "card w-96 bg-gray-950 shadow-xl duration-300"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "card-title font-extrabold justify-center text-white"
  }, "Rate your overall experience"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap gap-4 justify-center w-full"
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.dev, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    className: "w-12 h-10 bg-red-500 flex items-center justify-center rounded-md cursor-pointer",
    onClick: () => {
      setRating(1);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-white flex justify-center"
  }, "1")), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.dev, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    className: "w-12 h-10 bg-orange-300 flex items-center justify-center rounded-md cursor-pointer",
    onClick: () => {
      setRating(2);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-white flex justify-center"
  }, "2")), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.dev, {
    whileHover: {
      scale: 1.1
    },
    className: "w-12 h-10 bg-yellow-300 flex items-center justify-center rounded-md cursor-pointer",
    onClick: () => {
      setRating(3);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-white flex justify-center"
  }, "3")), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.dev, {
    whileHover: {
      scale: 1.1
    },
    className: "w-12 h-10 bg-green-300 flex items-center justify-center rounded-md cursor-pointer",
    onClick: () => {
      setRating(4);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-white flex justify-center"
  }, "4")), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.dev, {
    whileHover: {
      scale: 1.1
    },
    className: "w-12 h-10 bg-green-600 flex items-center justify-center rounded-md cursor-pointer",
    onClick: () => {
      setRating(5);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-white flex justify-center"
  }, "5")), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("textarea", {
    value: feedback,
    onChange: e => {
      setFeedback(e.target.value);
    },
    className: "textarea w-full mt-2 focus:outline-none bg-gray-900 font-bold",
    placeholder: "Leave your feedback here"
  }), /*#__PURE__*/_react.default.createElement("input", {
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    type: "text",
    placeholder: "john@doe.com",
    className: "input w-full mt-2 focus:outline-none bg-gray-900 font-bold text-sm -mt-1"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    onClick: submitFeedback,
    className: "btn w-full text-white normal-case bg-[#4c44e4] outline-none border-none hover:bg-[#2d2888] font-bold"
  }, loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "loading loading-spinner loading-xs"
  }), "Loading") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, text)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-actions justify-end"
  }))));
}