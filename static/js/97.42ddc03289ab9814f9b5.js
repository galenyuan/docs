webpackJsonp([97],{172:function(t,s,_){t.exports=_(229)},229:function(t,s,_){var v=_(2)(null,_(342),null,null);t.exports=v.exports},342:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("section",[_("h1",[t._v("Datetime picker")]),t._v(" "),_("blockquote",[_("p",[t._v("日期时间选择器，支持自定义类型。")])]),t._v(" "),_("hr"),t._v(" "),_("h2",[t._v("引入")]),t._v(" "),t._m(0),t._v(" "),_("h2",[t._v("例子")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),_("h2",[t._v("API")]),t._v(" "),t._m(10),_("h2",[t._v("Events")]),t._v(" "),t._m(11)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("pre",[_("code",{staticClass:"language-javascript"},[_("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { DatetimePicker } "),_("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),_("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.component(DatetimePicker.name, DatetimePicker);\n")])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("p",[_("code",[t._v("v-model")]),t._v(" 属性为组件的绑定值。")])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("p",[_("code",[t._v("type")]),t._v(" 属性表示 "),_("code",[t._v("datetime-picker")]),t._v(" 组件的类型，它有三个可能的值：")])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ul",[_("li",[_("code",[t._v("datetime")]),t._v(": 日期时间选择器，可选择年、月、日、时、分，"),_("code",[t._v("value")]),t._v(" 值为一个 "),_("code",[t._v("Date")]),t._v(" 对象")]),t._v(" "),_("li",[_("code",[t._v("date")]),t._v(": 日期选择器，可选择年、月、日，"),_("code",[t._v("value")]),t._v(" 值为一个 "),_("code",[t._v("Date")]),t._v(" 对象")]),t._v(" "),_("li",[_("code",[t._v("time")]),t._v(": 时间选择器，可选择时、分，"),_("code",[t._v("value")]),t._v(" 值为一个格式为 "),_("code",[t._v("HH:mm")]),t._v(" 的字符串")])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("p",[_("code",[t._v("datetime-picker")]),t._v(" 提供了两个供外部调用的方法："),_("code",[t._v("open")]),t._v(" 和 "),_("code",[t._v("close")]),t._v("，分别用于打开和关闭选择器。")])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("pre",[_("code",{staticClass:"language-html"},[_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v("\n    "),_("span",{staticClass:"hljs-attr"},[t._v("ref")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"picker"')]),t._v("\n    "),_("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"time"')]),t._v("\n    "),_("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"pickerValue"')]),t._v(">")]),t._v("\n  "),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),_("span",{staticClass:"javascript"},[t._v("\n  "),_("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),_("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    "),_("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      openPicker() {\n        "),_("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$refs.picker.open();\n      }\n    }\n  };\n")]),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("p",[t._v("可以为选项提供自定义模板。模板须为一个包含了 "),_("code",[t._v("{value}")]),t._v(" 的字符串，"),_("code",[t._v("{value}")]),t._v(" 会被解析为相应选项的值。")])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("pre",[_("code",{staticClass:"language-html"},[_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"pickerVisible"')]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("year-format")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"{value} 年"')]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("month-format")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"{value} 月"')]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("date-format")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"{value} 日"')]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("p",[t._v("当点击确认按钮时会触发 "),_("code",[t._v("confirm")]),t._v(" 事件，参数为当前 value 的值。")])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("pre",[_("code",{staticClass:"language-html"},[_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"pickerVisible"')]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"time"')]),t._v("\n  "),_("span",{staticClass:"hljs-attr"},[t._v("@confirm")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"handleConfirm"')]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("div",{staticClass:"table-container"},[_("table",{staticClass:"table"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("组件的类型")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'datetime', 'date', 'time'")]),t._v(" "),_("td",[t._v("'datetime'")])]),t._v(" "),_("tr",[_("td",[t._v("cancelText")]),t._v(" "),_("td",[t._v("取消按钮文本")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("'取消'")])]),t._v(" "),_("tr",[_("td",[t._v("confirmText")]),t._v(" "),_("td",[t._v("确定按钮文本")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("'确定'")])]),t._v(" "),_("tr",[_("td",[t._v("startDate")]),t._v(" "),_("td",[t._v("日期的最小可选值")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("十年前的 1 月 1 日")])]),t._v(" "),_("tr",[_("td",[t._v("endDate")]),t._v(" "),_("td",[t._v("日期的最大可选值")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("十年后的 12 月 31 日")])]),t._v(" "),_("tr",[_("td",[t._v("startHour")]),t._v(" "),_("td",[t._v("小时的最小可选值")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("endHour")]),t._v(" "),_("td",[t._v("小时的最大可选值")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("23")])]),t._v(" "),_("tr",[_("td",[t._v("yearFormat")]),t._v(" "),_("td",[t._v("年份模板")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("'{value}'")])]),t._v(" "),_("tr",[_("td",[t._v("monthFormat")]),t._v(" "),_("td",[t._v("月份模板")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("'{value}'")])]),t._v(" "),_("tr",[_("td",[t._v("dateFormat")]),t._v(" "),_("td",[t._v("日期模板")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("'{value}'")])]),t._v(" "),_("tr",[_("td",[t._v("hourFormat")]),t._v(" "),_("td",[t._v("小时模板")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("'{value}'")])]),t._v(" "),_("tr",[_("td",[t._v("minuteFormat")]),t._v(" "),_("td",[t._v("分钟模板")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("'{value}'")])])])])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("div",{staticClass:"table-container"},[_("table",{staticClass:"table"},[_("thead",[_("tr",[_("th",[t._v("事件名称")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("confirm")]),t._v(" "),_("td",[t._v("点击确认按钮时的回调函数")]),t._v(" "),_("td",[t._v("目前的选择值")])])])])])}]}}});
//# sourceMappingURL=97.42ddc03289ab9814f9b5.js.map