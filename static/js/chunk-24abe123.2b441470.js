(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24abe123"],{"4a8f":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/md/itemtype/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/mes/md/itemtype/list/exclude/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/mes/md/itemtype/"+e,method:"get"})}function l(){return Object(r["a"])({url:"/mes/md/itemtype/treeselect",method:"get"})}function u(e){return Object(r["a"])({url:"/mes/md/itemtype",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/mes/md/itemtype",method:"put",data:e})}function m(e){return Object(r["a"])({url:"/mes/md/itemtype/"+e,method:"delete"})}},"4e6a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"SN码",prop:"snCode"}},[n("el-input",{attrs:{placeholder:"请输入SN码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.snCode,callback:function(t){e.$set(e.queryParams,"snCode",t)},expression:"queryParams.snCode"}})],1),n("el-form-item",{attrs:{label:"产品物料编码",prop:"itemCode"}},[n("el-input",{attrs:{placeholder:"请输入产品物料编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.itemCode,callback:function(t){e.$set(e.queryParams,"itemCode",t)},expression:"queryParams.itemCode"}})],1),n("el-form-item",{attrs:{label:"产品物料名称",prop:"itemName"}},[n("el-input",{attrs:{placeholder:"请输入产品物料名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.itemName,callback:function(t){e.$set(e.queryParams,"itemName",t)},expression:"queryParams.itemName"}})],1),n("el-form-item",{attrs:{label:"批次号",prop:"batchCode"}},[n("el-input",{attrs:{placeholder:"请输入批次号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.batchCode,callback:function(t){e.$set(e.queryParams,"batchCode",t)},expression:"queryParams.batchCode"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:sn:add"],expression:"['mes:wm:sn:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:sn:export"],expression:"['mes:wm:sn:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),n("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.snList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{label:"产品编码",align:"center",prop:"itemCode"}}),n("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"itemName"}}),n("el-table-column",{attrs:{label:"规格型号",align:"center",prop:"specification"}}),n("el-table-column",{attrs:{label:"单位",align:"center",prop:"unitOfMeasure"}}),n("el-table-column",{attrs:{label:"批次号",align:"center",prop:"batchCode"}}),n("el-table-column",{attrs:{label:"SN码数量",align:"center",prop:"snNum"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:sn:query"],expression:"['mes:wm:sn:query']"}],attrs:{type:"text"},on:{click:function(n){return e.handleView(t.row)}}},[e._v(e._s(t.row.genDate))])]}}])}),n("el-table-column",{attrs:{label:"生成时间",align:"center",prop:"genDate",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.rtDate,"{y}-{m}-{d} {h}:{mi}:{s}")))])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:sn:edit"],expression:"['mes:wm:sn:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("导出/打印")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:sn:remove"],expression:"['mes:wm:sn:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"960px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"物料编码",prop:"itemCode"}},[n("el-input",{attrs:{readonly:"readonly",placeholder:"请选择物料编码"},model:{value:e.form.itemCode,callback:function(t){e.$set(e.form,"itemCode",t)},expression:"form.itemCode"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSelectProduct},slot:"append"})],1)],1),n("ItemSelect",{ref:"itemSelect",on:{onSelected:e.onItemSelected}})],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"物料名称",prop:"itemName"}},[n("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.itemName,callback:function(t){e.$set(e.form,"itemName",t)},expression:"form.itemName"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"规格型号",prop:"specification"}},[n("el-input",{attrs:{type:"textarea",readonly:"readonly"},model:{value:e.form.specification,callback:function(t){e.$set(e.form,"specification",t)},expression:"form.specification"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"批次号",prop:"batchCode"}},[n("el-input",{attrs:{placeholder:"请输入批次号"},model:{value:e.form.batchCode,callback:function(t){e.$set(e.form,"batchCode",t)},expression:"form.batchCode"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"SN码数量",prop:"snNum"}},[n("el-input-number",{attrs:{min:1,max:1e3,placeholder:"请输入需要生成的SN码数量"},model:{value:e.form.snNum,callback:function(t){e.$set(e.form,"snNum",t)},expression:"form.snNum"}})],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},a=[],o=n("5530"),i=(n("d81d"),n("d742")),l=n("25fa"),u={name:"Sn",components:{ItemSelect:l["a"]},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,snList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,snCode:null,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,batchCode:null},form:{},rules:{snNum:[{required:!0,message:"请输入需要生成的SN码数量",trigger:"blur"}],itemCode:[{required:!0,message:"产品物料不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(i["d"])(this.queryParams).then((function(t){e.snList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={snId:null,snCode:null,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,batchCode:null,remark:null,attr1:null,attr2:null,attr3:null,attr4:null,createBy:null,createTime:null,updateBy:null,updateTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.snId})),this.single=1!==e.length,this.multiple=!e.length},handleView:function(e){},handleAdd:function(){this.reset(),this.open=!0,this.title="生成SN码"},handleUpdate:function(e){var t=this;this.reset();var n=e.snId||this.ids;Object(i["c"])(n).then((function(e){t.form=e.data,t.open=!0,t.title="修改SN码"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(i["a"])(e.form).then((function(t){e.$modal.msgSuccess("生成成功"),e.open=!1,e.getList()}))}))},handleDelete:function(e){var t=this,n=e.snId||this.ids;this.$modal.confirm('是否确认删除SN码编号为"'+n+'"的数据项？').then((function(){return Object(i["b"])(n)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("wm/sn/export",Object(o["a"])({},this.queryParams),"sn_".concat((new Date).getTime(),".xlsx"))},handleSelectProduct:function(){this.$refs.itemSelect.showFlag=!0},onItemSelected:function(e){void 0!=e&&null!=e&&(this.form.itemId=e.itemId,this.form.itemCode=e.itemCode,this.form.itemName=e.itemName,this.form.specification=e.specification,this.form.unitOfMeasure=e.unitOfMeasure)}}},s=u,m=n("2877"),c=Object(m["a"])(s,r,a,!1,null,null,null);t["default"]=c.exports},5755:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/md/mditem/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/mes/md/mditem/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/mes/md/mditem",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/mes/md/mditem",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/mes/md/mditem/"+e,method:"delete"})}},8171:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n("b775");function a(e){return Object(r["a"])({url:"/system/autocode/get/"+e,method:"get"})}function o(e){return Object(r["a"])({url:"/system/autocode/rule/list",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/system/autocode/rule/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/system/autocode/rule",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/system/autocode/rule",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/system/autocode/rule/"+e,method:"delete"})}},c3e0:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/md/unitmeasure/list",method:"get",params:e})}function o(){return Object(r["a"])({url:"/mes/md/unitmeasure/listprimary",method:"get"})}function i(){return Object(r["a"])({url:"/mes/md/unitmeasure/selectall",method:"get"})}function l(e){return Object(r["a"])({url:"/mes/md/unitmeasure/"+e,method:"get"})}function u(e){return Object(r["a"])({url:"/mes/md/unitmeasure",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/mes/md/unitmeasure",method:"put",data:e})}function m(e){return Object(r["a"])({url:"/mes/md/unitmeasure/"+e,method:"delete"})}},d742:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/wm/sn/listSn",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/mes/wm/sn/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/mes/wm/sn",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/mes/wm/sn/"+e,method:"delete"})}}}]);