"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
// import Nav from './presentation'

var Home = (function (Component) {
    function Home() {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this);
        this.state = {};
    }

    _inherits(Home, Component);

    _prototypeProperties(Home, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement("div", { className: "nav-container" }),
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "space-sm" },
                            React.createElement(
                                "div",
                                { className: "container align-self-start" },
                                React.createElement(
                                    "div",
                                    { className: "row mb-5" },
                                    React.createElement("div", { className: "col text-center" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row justify-content-center" },
                                    React.createElement(
                                        "div",
                                        { className: "col-12 col-md-8 col-lg-7" },
                                        React.createElement(
                                            "div",
                                            { className: "card card-lg text-center" },
                                            React.createElement(
                                                "div",
                                                { className: "card-body" },
                                                React.createElement(
                                                    "div",
                                                    { className: "mb-4" },
                                                    React.createElement(
                                                        "h2",
                                                        { className: "mb-2" },
                                                        "Reset password"
                                                    ),
                                                    React.createElement(
                                                        "span",
                                                        null,
                                                        "Enter email address to reset password"
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row no-gutters justify-content-center" },
                                                    React.createElement(
                                                        "form",
                                                        { className: "text-left col-lg-8" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { "for": "reset-email" },
                                                                "Email Address"
                                                            ),
                                                            React.createElement("input", { className: "form-control form-control-lg", type: "email", name: "email", id: "reset-email", placeholder: "Email Address" })
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "text-center mb-4" },
                                                            React.createElement(
                                                                "button",
                                                                { type: "submit", className: "btn btn-primary btn-lg" },
                                                                "Reset password"
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Home;
})(Component);

module.exports = Home;