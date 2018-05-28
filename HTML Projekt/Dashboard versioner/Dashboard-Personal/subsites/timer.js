"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      hour: "1",
      minute: "00",
      ampmIndex: 0,
      ampm: "AM"
    };
    return _this;
  }

  _createClass(App, [{
    key: "changeHour",
    value: function changeHour(e) {
      if (e.target.value === "0") {
        this.setState({
          hour: "00"
        });
      } else if (parseInt(e.target.value) < 10) {
        this.setState({
          hour: e.target.value
        });
      } else {
        this.setState({
          hour: e.target.value
        });
      }
    }
  }, {
    key: "changeMinute",
    value: function changeMinute(e) {
      if (e.target.value === "0") {
        this.setState({
          minute: "00"
        });
      } else if (parseInt(e.target.value) < 10) {
        this.setState({
          minute: "0" + e.target.value
        });
      } else {
        this.setState({
          minute: e.target.value
        });
      }
    }
  }, {
    key: "setAmPm",
    value: function setAmPm(e) {
      if (e.target.value === "1") {
        this.setState({
          ampm: "PM",
          ampmIndex: 1
        });
      } else if (e.target.value === "0") {
        this.setState({
          ampm: "AM",
          ampmIndex: 0
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ampmStyles = {
        cursor: "pointer",
        color: this.state.ampm === "PM" ? "steelblue" : "yellow",
        transition: "all .3s ease-in"
      };
      var containerStyles = {
        background: this.state.ampm === "PM" ? "#152736" : "skyblue",
        transition: "all .3s ease-in"
      };

      return React.createElement(
        "div",
        { className: "container", style: containerStyles },
        React.createElement(
          "div",
          { className: "alarm" },
          React.createElement(
            "div",
            { className: "readout" },
            React.createElement(
              "span",
              null,
              this.state.hour
            ),
            React.createElement(
              "span",
              null,
              ":"
            ),
            React.createElement(
              "span",
              null,
              this.state.minute
            ),
            "\xA0",
            React.createElement(
              "span",
              { onClick: this.setAmPm.bind(this), style: ampmStyles },
              this.state.ampm
            )
          ),
          React.createElement(
            "div",
            { className: "sliders" },
            React.createElement("input", { onChange: this.changeHour.bind(this), type: "range", min: "1", max: "12", value: this.state.hour }),
            React.createElement("input", { onChange: this.changeMinute.bind(this), type: "range", max: "59", value: this.state.minute }),
            React.createElement("input", { onChange: this.setAmPm.bind(this), type: "range", max: "1", value: this.state.ampmIndex })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var mountNode = document.getElementById("app");
ReactDOM.render(React.createElement(App, null), mountNode);
