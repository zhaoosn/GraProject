(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b845f11"],{2927:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticClass:"do-exam-title",staticStyle:{"background-color":"#F5F5DC"}},[n("el-col",{attrs:{span:24}},t._l(t.answer.answerItems,(function(e){return n("span",{key:e.itemOrder},[n("el-tag",{staticClass:"do-exam-title-tag",attrs:{type:t.questionDoRightTag(e.doRight)},on:{click:function(n){return t.goAnchor("#question-"+e.itemOrder)}}},[t._v(t._s(e.itemOrder))])],1)})),0)],1),n("el-row",{staticClass:"do-exam-title-hidden"},[n("el-col",{attrs:{span:24}},t._l(t.answer.answerItems,(function(e){return n("span",{key:e.itemOrder},[n("el-tag",{staticClass:"do-exam-title-tag"},[t._v(t._s(e.itemOrder))])],1)})),0)],1),n("el-container",{staticClass:"app-item-contain"},[n("el-header",{staticClass:"align-center"},[n("h1",[t._v(t._s(t.form.name))]),n("div",[n("span",{staticClass:"question-title-padding"},[t._v("试卷得分："+t._s(t.answer.score))]),n("span",{staticClass:"question-title-padding"},[t._v("试卷耗时："+t._s(t.formatSeconds(t.answer.doTime)))])])]),n("el-main",[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:t.form,"label-width":"100px"}},t._l(t.form.titleItems,(function(e,s){return n("el-row",{key:s},[n("h3",[t._v(t._s(e.name))]),0!==e.questionItems.length?n("el-card",{staticClass:"exampaper-item-box"},t._l(e.questionItems,(function(e){return n("el-form-item",{key:e.itemOrder,staticClass:"exam-question-item",attrs:{label:e.itemOrder+".","label-width":"50px",id:"question-"+e.itemOrder}},[n("QuestionAnswerShow",{attrs:{qType:e.questionType,question:e,answer:t.answer.answerItems[e.itemOrder-1]}})],1)})),1):t._e()],1)})),1)],1)],1)],1)},i=[],a=n("b49e"),o=n("7736"),r=n("ed08"),l=n("ff3e"),c=n("ed24"),u={components:{QuestionAnswerShow:l["a"]},data:function(){return{form:{},formLoading:!1,answer:{id:null,score:0,doTime:0,answerItems:[],doRight:!1}}},created:function(){var t=this.$route.query.id,e=this;t&&0!==parseInt(t)&&(e.formLoading=!0,c["a"].read(t).then((function(t){e.form=t.response.paper,e.answer=t.response.answer,e.formLoading=!1})))},methods:{formatSeconds:function(t){return Object(r["a"])(t)},questionDoRightTag:function(t){return this.enumFormat(this.doRightTag,t)},goAnchor:function(t){this.$el.querySelector(t).scrollIntoView({behavior:"instant",block:"center",inline:"nearest"})}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])("enumItem",["enumFormat"])),Object(o["e"])("enumItem",{doRightTag:function(t){return t.exam.question.answer.doRightTag}}))},d=u,m=(n("79dd"),n("cba8")),p=Object(m["a"])(d,s,i,!1,null,"15c1a324",null);e["default"]=p.exports},"79dd":function(t,e,n){"use strict";n("f816")},f816:function(t,e,n){},ff3e:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.qLoading,expression:"qLoading"}],staticStyle:{"line-height":"1.8"}},[1==t.qType||2==t.qType||3==t.qType||4==t.qType||5==t.qType?n("div",[1==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),n("div",{staticClass:"q-content"},[n("el-radio-group",{model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}},t._l(t.question.items,(function(e){return n("el-radio",{key:e.prefix,attrs:{label:e.prefix}},[n("span",{staticClass:"question-prefix"},[t._v(t._s(e.prefix)+".")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(e.content)}})])})),1)],1)]):2==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),n("div",{staticClass:"q-content"},[n("el-checkbox-group",{model:{value:t.answer.contentArray,callback:function(e){t.$set(t.answer,"contentArray",e)},expression:"answer.contentArray"}},t._l(t.question.items,(function(e){return n("el-checkbox",{key:e.prefix,attrs:{label:e.prefix}},[n("span",{staticClass:"question-prefix"},[t._v(t._s(e.prefix)+".")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(e.content)}})])})),1)],1)]):3==t.qType?n("div",[n("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:t._s(t.question.title)}}),n("span",{staticStyle:{"padding-right":"10px"}},[t._v("(")]),n("el-radio-group",{model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}},t._l(t.question.items,(function(e){return n("el-radio",{key:e.prefix,attrs:{label:e.prefix}},[n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(e.content)}})])})),1),n("span",{staticStyle:{"padding-left":"10px"}},[t._v(")")])],1):4==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),null!==t.answer.contentArray?n("div",t._l(t.question.items,(function(e){return n("el-form-item",{key:e.prefix,staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{label:e.prefix,"label-width":"50px"}},[n("el-input",{model:{value:t.answer.contentArray[e.prefix-1],callback:function(n){t.$set(t.answer.contentArray,e.prefix-1,n)},expression:"answer.contentArray[item.prefix-1]"}})],1)})),1):t._e()]):5==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),n("div",[n("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}})],1)]):t._e(),n("div",{staticClass:"question-answer-show-item",staticStyle:{"margin-top":"15px"}},[n("span",{staticClass:"question-show-item"},[t._v("结果：")]),n("el-tag",{attrs:{type:t.doRightTagFormatter(t.answer.doRight)}},[t._v(" "+t._s(t.doRightTextFormatter(t.answer.doRight))+" ")])],1),n("div",{staticClass:"question-answer-show-item"},[n("span",{staticClass:"question-show-item"},[t._v("分数：")]),n("span",[t._v(t._s(t.question.score))])]),n("div",{staticClass:"question-answer-show-item"},[n("span",{staticClass:"question-show-item"},[t._v("难度：")]),n("el-rate",{staticClass:"question-show-item",attrs:{disabled:""},model:{value:t.question.difficult,callback:function(e){t.$set(t.question,"difficult",e)},expression:"question.difficult"}})],1),n("br"),n("div",{staticClass:"question-answer-show-item",staticStyle:{"line-height":"1.8"}},[n("span",{staticClass:"question-show-item"},[t._v("解析：")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.question.analyze)}})]),n("div",{staticClass:"question-answer-show-item"},[n("span",{staticClass:"question-show-item"},[t._v("正确答案：")]),1==t.qType||2==t.qType||5==t.qType?n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.question.correct)}}):t._e(),3==t.qType?n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.trueFalseFormatter(t.question))}}):t._e(),4==t.qType?n("span",[t._v(t._s(t.question.correctArray))]):t._e()])]):n("div")])},i=[],a=n("b49e"),o=(n("51b3"),n("5a05"),n("89a8"),n("7736")),r={name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},answer:{type:Object,default:function(){return{id:null,content:"",contentArray:[],doRight:!1}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{trueFalseFormatter:function(t){return t.items.filter((function(e){return e.prefix===t.correct}))[0].content},doRightTagFormatter:function(t){return this.enumFormat(this.doRightTag,t)},doRightTextFormatter:function(t){return this.enumFormat(this.doRightEnum,t)}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])("enumItem",["enumFormat"])),Object(o["e"])("enumItem",{doRightEnum:function(t){return t.exam.question.answer.doRightEnum},doRightTag:function(t){return t.exam.question.answer.doRightTag}}))},l=r,c=n("cba8"),u=Object(c["a"])(l,s,i,!1,null,null,null);e["a"]=u.exports}}]);