(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e285a7e"],{"374c":function(e,t,n){},"690a":function(e,t,n){"use strict";var a=n("374c"),i=n.n(a);i.a},fde1:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{ref:"file",attrs:{type:"file"},on:{change:e.handleFileChange}}),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("上传")])],1)])},i=[],l=(n("cadf"),n("551c"),n("097d"),n("0c6d"));function o(e){return Object(l["a"])({url:"/api/upload/",method:"POST",headers:{"Content-Type":"multipart/form-data"},data:e})}var r={data:function(){return{file:null}},methods:{handleFileChange:function(){this.file=this.$refs.file.files[0]},upload:function(){var e=new FormData;e.append("file",this.file),o(e)}}},u=r,c=(n("690a"),n("2877")),f=Object(c["a"])(u,a,i,!1,null,"7a42ef32",null);f.options.__file="UploadFile.vue";t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-4e285a7e.7c697303.js.map