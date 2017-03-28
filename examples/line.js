(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["createG2"] = factory();
	else
		root["createG2"] = factory();
})(this, function() {
return webpackJsonpcreateG2([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _g2React = __webpack_require__(26);

	var _g2React2 = _interopRequireDefault(_g2React);

	var _g = __webpack_require__(15);

	var _react = __webpack_require__(25);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _data = __webpack_require__(37);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Line = (0, _g2React2.default)(function (chart) {
	  chart.line().position('time*price').color('name').shape('spline').size(2);
	  chart.render();
	});

	var MyComponent = _react2.default.createClass({
	  displayName: 'MyComponent',
	  getInitialState: function getInitialState() {
	    return {
	      data: [],
	      width: 500,
	      height: 250,
	      plotCfg: {
	        margin: [10, 100, 50, 120]
	      }
	    };
	  },
	  changeHandler: function changeHandler() {
	    this.setState({
	      data: _data2.default.slice(_data2.default.length / 2, _data2.default.length - 1)
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(Line, {
	        data: this.state.data,
	        width: this.state.width,
	        height: this.state.height,
	        plotCfg: this.state.plotCfg
	      }),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.changeHandler },
	        'Change Data'
	      )
	    );
	  }
	});

		_reactDom2.default.render(_react2.default.createElement(MyComponent, null), document.getElementById('__react-content'));

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = [
		{
			"time": "9/1",
			"price": 10,
			"name": "商品A"
		},
		{
			"time": "9/1",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/2",
			"price": 12,
			"name": "商品A"
		},
		{
			"time": "9/2",
			"price": 32,
			"name": "商品B"
		},
		{
			"time": "9/3",
			"price": 11,
			"name": "商品A"
		},
		{
			"time": "9/3",
			"price": 35,
			"name": "商品B"
		},
		{
			"time": "9/4",
			"price": 15,
			"name": "商品A"
		},
		{
			"time": "9/4",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/5",
			"price": 20,
			"name": "商品A"
		},
		{
			"time": "9/5",
			"price": 42,
			"name": "商品B"
		},
		{
			"time": "9/6",
			"price": 22,
			"name": "商品A"
		},
		{
			"time": "9/6",
			"price": 35,
			"name": "商品B"
		},
		{
			"time": "9/7",
			"price": 21,
			"name": "商品A"
		},
		{
			"time": "9/7",
			"price": 36,
			"name": "商品B"
		},
		{
			"time": "9/8",
			"price": 25,
			"name": "商品A"
		},
		{
			"time": "9/8",
			"price": 31,
			"name": "商品B"
		},
		{
			"time": "9/9",
			"price": 31,
			"name": "商品A"
		},
		{
			"time": "9/9",
			"price": 35,
			"name": "商品B"
		},
		{
			"time": "9/10",
			"price": 32,
			"name": "商品A"
		},
		{
			"time": "9/10",
			"price": 36,
			"name": "商品B"
		},
		{
			"time": "9/11",
			"price": 28,
			"name": "商品A"
		},
		{
			"time": "9/11",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/12",
			"price": 29,
			"name": "商品A"
		},
		{
			"time": "9/12",
			"price": 42,
			"name": "商品B"
		},
		{
			"time": "9/13",
			"price": 40,
			"name": "商品A"
		},
		{
			"time": "9/13",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/14",
			"price": 41,
			"name": "商品A"
		},
		{
			"time": "9/14",
			"price": 38,
			"name": "商品B"
		},
		{
			"time": "9/15",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/15",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/16",
			"price": 50,
			"name": "商品A"
		},
		{
			"time": "9/16",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/17",
			"price": 65,
			"name": "商品A"
		},
		{
			"time": "9/17",
			"price": 38,
			"name": "商品B"
		},
		{
			"time": "9/18",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/18",
			"price": 36,
			"name": "商品B"
		},
		{
			"time": "9/19",
			"price": 50,
			"name": "商品A"
		},
		{
			"time": "9/19",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/20",
			"price": 51,
			"name": "商品A"
		},
		{
			"time": "9/20",
			"price": 29,
			"name": "商品B"
		},
		{
			"time": "9/21",
			"price": 65,
			"name": "商品A"
		},
		{
			"time": "9/21",
			"price": 28,
			"name": "商品B"
		},
		{
			"time": "9/22",
			"price": 60,
			"name": "商品A"
		},
		{
			"time": "9/22",
			"price": 25,
			"name": "商品B"
		},
		{
			"time": "9/23",
			"price": 62,
			"name": "商品A"
		},
		{
			"time": "9/23",
			"price": 28,
			"name": "商品B"
		},
		{
			"time": "9/24",
			"price": 65,
			"name": "商品A"
		},
		{
			"time": "9/24",
			"price": 29,
			"name": "商品B"
		},
		{
			"time": "9/25",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/25",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/26",
			"price": 55,
			"name": "商品A"
		},
		{
			"time": "9/26",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/27",
			"price": 59,
			"name": "商品A"
		},
		{
			"time": "9/27",
			"price": 32,
			"name": "商品B"
		},
		{
			"time": "9/28",
			"price": 52,
			"name": "商品A"
		},
		{
			"time": "9/28",
			"price": 33,
			"name": "商品B"
		},
		{
			"time": "9/29",
			"price": 53,
			"name": "商品A"
		},
		{
			"time": "9/29",
			"price": 34,
			"name": "商品B"
		},
		{
			"time": "9/30",
			"price": 40,
			"name": "商品A"
		},
		{
			"time": "9/30",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/31",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/31",
			"price": 35,
			"name": "商品B"
		}
	];

/***/ }

})
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2xpbmUubWQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGF0YS5qc29uIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNyZWF0ZUcyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNyZWF0ZUcyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiaW1wb3J0IGNyZWF0ZUcyIGZyb20gJ2cyLXJlYWN0JztcbmltcG9ydCB7IFN0YXQgfSBmcm9tICdnMic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEuanNvbic7XG5cbmNvbnN0IExpbmUgPSBjcmVhdGVHMihjaGFydCA9PiB7XG4gIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSpwcmljZScpLmNvbG9yKCduYW1lJykuc2hhcGUoJ3NwbGluZScpLnNpemUoMik7XG4gIGNoYXJ0LnJlbmRlcigpO1xufSk7XG5cbmNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZGF0YS5zbGljZSgwLCBkYXRhLmxlbmd0aCAvIDIgLSAxKSxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgIHBsb3RDZmc6IHtcbiAgICAgICAgbWFyZ2luOiBbMTAsIDEwMCwgNTAsIDEyMF0sXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGRhdGEuc2xpY2UoZGF0YS5sZW5ndGggLyAyLCBkYXRhLmxlbmd0aCAtIDEpLFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmVcbiAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgd2lkdGg9e3RoaXMuc3RhdGUud2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXt0aGlzLnN0YXRlLmhlaWdodH1cbiAgICAgICAgICBwbG90Q2ZnPXt0aGlzLnN0YXRlLnBsb3RDZmd9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jaGFuZ2VIYW5kbGVyfT5DaGFuZ2UgRGF0YTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPE15Q29tcG9uZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19yZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2xpbmUubWRcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMVwiLFxuXHRcdFwicHJpY2VcIjogMTAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzFcIixcblx0XHRcInByaWNlXCI6IDMwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yXCIsXG5cdFx0XCJwcmljZVwiOiAxMixcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMlwiLFxuXHRcdFwicHJpY2VcIjogMzIsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzNcIixcblx0XHRcInByaWNlXCI6IDExLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8zXCIsXG5cdFx0XCJwcmljZVwiOiAzNSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvNFwiLFxuXHRcdFwicHJpY2VcIjogMTUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzRcIixcblx0XHRcInByaWNlXCI6IDQwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS81XCIsXG5cdFx0XCJwcmljZVwiOiAyMCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvNVwiLFxuXHRcdFwicHJpY2VcIjogNDIsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzZcIixcblx0XHRcInByaWNlXCI6IDIyLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS82XCIsXG5cdFx0XCJwcmljZVwiOiAzNSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvN1wiLFxuXHRcdFwicHJpY2VcIjogMjEsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzdcIixcblx0XHRcInByaWNlXCI6IDM2LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS84XCIsXG5cdFx0XCJwcmljZVwiOiAyNSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvOFwiLFxuXHRcdFwicHJpY2VcIjogMzEsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzlcIixcblx0XHRcInByaWNlXCI6IDMxLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS85XCIsXG5cdFx0XCJwcmljZVwiOiAzNSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTBcIixcblx0XHRcInByaWNlXCI6IDMyLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xMFwiLFxuXHRcdFwicHJpY2VcIjogMzYsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzExXCIsXG5cdFx0XCJwcmljZVwiOiAyOCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTFcIixcblx0XHRcInByaWNlXCI6IDQwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xMlwiLFxuXHRcdFwicHJpY2VcIjogMjksXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzEyXCIsXG5cdFx0XCJwcmljZVwiOiA0Mixcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTNcIixcblx0XHRcInByaWNlXCI6IDQwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xM1wiLFxuXHRcdFwicHJpY2VcIjogNDAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE0XCIsXG5cdFx0XCJwcmljZVwiOiA0MSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTRcIixcblx0XHRcInByaWNlXCI6IDM4LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xNVwiLFxuXHRcdFwicHJpY2VcIjogNDUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE1XCIsXG5cdFx0XCJwcmljZVwiOiA0MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTZcIixcblx0XHRcInByaWNlXCI6IDUwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xNlwiLFxuXHRcdFwicHJpY2VcIjogNDAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE3XCIsXG5cdFx0XCJwcmljZVwiOiA2NSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTdcIixcblx0XHRcInByaWNlXCI6IDM4LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xOFwiLFxuXHRcdFwicHJpY2VcIjogNDUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE4XCIsXG5cdFx0XCJwcmljZVwiOiAzNixcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTlcIixcblx0XHRcInByaWNlXCI6IDUwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xOVwiLFxuXHRcdFwicHJpY2VcIjogMzAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzIwXCIsXG5cdFx0XCJwcmljZVwiOiA1MSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjBcIixcblx0XHRcInByaWNlXCI6IDI5LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yMVwiLFxuXHRcdFwicHJpY2VcIjogNjUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzIxXCIsXG5cdFx0XCJwcmljZVwiOiAyOCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjJcIixcblx0XHRcInByaWNlXCI6IDYwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yMlwiLFxuXHRcdFwicHJpY2VcIjogMjUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzIzXCIsXG5cdFx0XCJwcmljZVwiOiA2Mixcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjNcIixcblx0XHRcInByaWNlXCI6IDI4LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yNFwiLFxuXHRcdFwicHJpY2VcIjogNjUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI0XCIsXG5cdFx0XCJwcmljZVwiOiAyOSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjVcIixcblx0XHRcInByaWNlXCI6IDQ1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yNVwiLFxuXHRcdFwicHJpY2VcIjogMzAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI2XCIsXG5cdFx0XCJwcmljZVwiOiA1NSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjZcIixcblx0XHRcInByaWNlXCI6IDQwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yN1wiLFxuXHRcdFwicHJpY2VcIjogNTksXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI3XCIsXG5cdFx0XCJwcmljZVwiOiAzMixcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjhcIixcblx0XHRcInByaWNlXCI6IDUyLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yOFwiLFxuXHRcdFwicHJpY2VcIjogMzMsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI5XCIsXG5cdFx0XCJwcmljZVwiOiA1Myxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjlcIixcblx0XHRcInByaWNlXCI6IDM0LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8zMFwiLFxuXHRcdFwicHJpY2VcIjogNDAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzMwXCIsXG5cdFx0XCJwcmljZVwiOiAzMCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMzFcIixcblx0XHRcInByaWNlXCI6IDQ1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8zMVwiLFxuXHRcdFwicHJpY2VcIjogMzUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH1cbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2V4YW1wbGVzL2RhdGEuanNvblxuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQS9CQTtBQUNBO0FBaUNBOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==