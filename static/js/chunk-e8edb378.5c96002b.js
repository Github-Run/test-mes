(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8edb378"],{8171:function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"e",(function(){return n})),o.d(t,"d",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"f",(function(){return s})),o.d(t,"b",(function(){return u}));var l=o("b775");function a(e){return Object(l["a"])({url:"/system/autocode/get/"+e,method:"get"})}function n(e){return Object(l["a"])({url:"/system/autocode/rule/list",method:"get",params:e})}function r(e){return Object(l["a"])({url:"/system/autocode/rule/"+e,method:"get"})}function i(e){return Object(l["a"])({url:"/system/autocode/rule",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/system/autocode/rule",method:"put",data:e})}function u(e){return Object(l["a"])({url:"/system/autocode/rule/"+e,method:"delete"})}},8678:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"工装夹具编码",prop:"toolCode"}},[o("el-input",{attrs:{placeholder:"请输入工装夹具编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.toolCode,callback:function(t){e.$set(e.queryParams,"toolCode",t)},expression:"queryParams.toolCode"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"工装夹具名称",prop:"toolName"}},[o("el-input",{attrs:{placeholder:"请输入工装夹具名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.toolName,callback:function(t){e.$set(e.queryParams,"toolName",t)},expression:"queryParams.toolName"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"工装夹具类型",prop:"toolTypeId"}},[o("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.form.toolTypeId,callback:function(t){e.$set(e.form,"toolTypeId",t)},expression:"form.toolTypeId"}},e._l(e.toolTypeOptions,(function(e){return o("el-option",{key:e.toolTypeId,attrs:{label:e.toolTypeName,value:e.toolTypeId}})})),1)],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"品牌","label-width":"60px",prop:"brand"}},[o("el-input",{attrs:{placeholder:"请输入品牌",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.brand,callback:function(t){e.$set(e.queryParams,"brand",t)},expression:"queryParams.brand"}})],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"型号","label-width":"60px",prop:"spec"}},[o("el-input",{attrs:{placeholder:"请输入型号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.spec,callback:function(t){e.$set(e.queryParams,"spec",t)},expression:"queryParams.spec"}})],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"状态","label-width":"60px",prop:"status"}},[o("el-select",{attrs:{placeholder:"请选择状态",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.mes_tool_status,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),o("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1)],1),o("el-row",{staticClass:"mb8",attrs:{gutter:10}},[o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:tm:tool:add"],expression:"['mes:tm:tool:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:tm:tool:edit"],expression:"['mes:tm:tool:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:tm:tool:remove"],expression:"['mes:tm:tool:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:tm:tool:export"],expression:"['mes:tm:tool:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),o("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.toolList},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),o("el-table-column",{attrs:{label:"编号",align:"center",prop:"toolCode"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:tm:tool:query"],expression:"['mes:tm:tool:query']"}],attrs:{type:"text"},on:{click:function(o){return e.handleView(t.row)}}},[e._v(e._s(t.row.toolCode))])]}}])}),o("el-table-column",{attrs:{label:"名称",align:"center",prop:"toolName","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"品牌",align:"center",prop:"brand","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"型号",align:"center",prop:"spec","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"类型",align:"center",prop:"toolTypeName"}}),o("el-table-column",{attrs:{label:"库存数量",align:"center",prop:"quantity"}}),o("el-table-column",{attrs:{label:"可用数量",align:"center",prop:"quantityAvail"}}),o("el-table-column",{attrs:{label:"保养维护类型",width:"100px",align:"center",prop:"maintenType"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.mes_mainten_type,value:t.row.maintenType}})]}}])}),o("el-table-column",{attrs:{label:"下次保养周期",width:"100px",align:"center",prop:"nextMaintenPeriod"}}),o("el-table-column",{attrs:{label:"下次保养日期",align:"center",prop:"nextMaintenDate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(e.parseTime(t.row.nextMaintenDate,"{y}-{m}-{d}")))])]}}])}),o("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.mes_tool_status,value:t.row.status}})]}}])}),o("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:tm:tool:edit"],expression:"['mes:tm:tool:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(o){return e.handleUpdate(t.row)}}},[e._v("修改")]),o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:tm:tool:remove"],expression:"['mes:tm:tool:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(o){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),o("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),o("el-dialog",{attrs:{title:e.title,visible:e.open,width:"960px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"工装夹具类型",prop:"toolTypeId"}},[o("el-select",{attrs:{placeholder:"请选择类型"},on:{change:e.onToolTypeChanged},model:{value:e.form.toolTypeId,callback:function(t){e.$set(e.form,"toolTypeId",t)},expression:"form.toolTypeId"}},e._l(e.toolTypeOptions,(function(e){return o("el-option",{key:e.toolTypeId,attrs:{label:e.toolTypeName,value:e.toolTypeId}})})),1)],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"工装夹具名称",prop:"toolName"}},[o("el-input",{attrs:{placeholder:"请输入工装夹具名称"},model:{value:e.form.toolName,callback:function(t){e.$set(e.form,"toolName",t)},expression:"form.toolName"}})],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"品牌",prop:"brand"}},[o("el-input",{attrs:{placeholder:"请输入品牌"},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"型号",prop:"spec"}},[o("el-input",{attrs:{placeholder:"请输入型号"},model:{value:e.form.spec,callback:function(t){e.$set(e.form,"spec",t)},expression:"form.spec"}})],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"工装夹具编号",prop:"toolCode"}},[o("el-input",{attrs:{placeholder:"请输入工装夹具编号"},model:{value:e.form.toolCode,callback:function(t){e.$set(e.form,"toolCode",t)},expression:"form.toolCode"}})],1)],1),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{"label-width":"80"}},["view"!=e.optType?o("el-switch",{attrs:{"active-color":"#13ce66","active-text":"自动生成"},on:{change:function(t){return e.handleAutoGenChange(e.autoGenFlag)}},model:{value:e.autoGenFlag,callback:function(t){e.autoGenFlag=t},expression:"autoGenFlag"}}):e._e()],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"数量",prop:"quantity"}},["Y"==e.form.codeFlag?o("el-input",{attrs:{readonly:""},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}}):o("el-input-number",{attrs:{min:0,placeholder:"请输入数量"},on:{blur:e.onQuantityChanged},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"可用数量",prop:"quantityAvail"}},[o("el-input",{attrs:{readonly:"",placeholder:"请输入可用数量"},model:{value:e.form.quantityAvail,callback:function(t){e.$set(e.form,"quantityAvail",t)},expression:"form.quantityAvail"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"保养维护类型",prop:"maintenType"}},[o("el-select",{attrs:{placeholder:"请选择保养维护类型"},model:{value:e.form.maintenType,callback:function(t){e.$set(e.form,"maintenType",t)},expression:"form.maintenType"}},e._l(e.dict.type.mes_mainten_type,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:12}},["REGULAR"==e.form.maintenType?o("el-form-item",{attrs:{label:"下一次保养日期",prop:"nextMaintenDate"}},[o("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择下一次保养日期"},model:{value:e.form.nextMaintenDate,callback:function(t){e.$set(e.form,"nextMaintenDate",t)},expression:"form.nextMaintenDate"}})],1):o("el-form-item",{attrs:{label:"下一次保养周期",prop:"nextMaintenPeriod"}},[o("el-input",{attrs:{placeholder:"请输入下一次保养周期"},model:{value:e.form.nextMaintenPeriod,callback:function(t){e.$set(e.form,"nextMaintenPeriod",t)},expression:"form.nextMaintenPeriod"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"状态"}},[o("el-radio-group",{attrs:{disabled:"disabled"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.dict.type.mes_tool_status,(function(t){return o("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"备注",prop:"remark"}},[o("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["view"==e.optType?o("el-button",{attrs:{type:"primary"},on:{click:e.cancel}},[e._v("返回")]):o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),o("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},a=[],n=o("5530"),r=(o("4de4"),o("d3b7"),o("d81d"),o("b775"));function i(e){return Object(r["a"])({url:"/mes/tm/tool/list",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/mes/tm/tool/"+e,method:"get"})}function u(e){return Object(r["a"])({url:"/mes/tm/tool",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/mes/tm/tool",method:"put",data:e})}function m(e){return Object(r["a"])({url:"/mes/tm/tool/"+e,method:"delete"})}var p=o("d6e7"),d=o("8171"),f={name:"Tool",dicts:["mes_tool_status","mes_mainten_type"],data:function(){return{autoGenFlag:!1,optType:void 0,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,toolList:[],toolTypeOptions:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,toolCode:null,toolName:null,brand:null,spec:null,toolTypeId:null,toolTypeCode:null,toolTypeName:null,quantity:null,quantityAvail:null,maintenType:null,nextMaintenPeriod:null,nextMaintenDate:null,status:null},form:{},rules:{toolName:[{required:!0,message:"工装夹具名称不能为空",trigger:"blur"}],toolTypeId:[{required:!0,message:"工装夹具类型不能为空",trigger:"blur"}],quantity:[{required:!0,message:"数量不能为空",trigger:"blur"}]}}},created:function(){this.getList(),this.getTypeList()},methods:{getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.toolList=t.rows,e.total=t.total,e.loading=!1}))},getTypeList:function(){var e=this;Object(p["d"])().then((function(t){e.toolTypeOptions=t.data}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={toolId:null,toolCode:null,toolName:null,brand:null,spec:null,toolTypeId:null,toolTypeCode:null,toolTypeName:null,quantity:null,quantityAvail:null,maintenType:"REGULAR",nextMaintenPeriod:null,nextMaintenDate:null,status:"STORE",createBy:null,createTime:null,updateBy:null,updateTime:null},this.autoGenFlag=!1,this.resetForm("form")},onToolTypeChanged:function(){var e=this,t=this.toolTypeOptions.filter((function(t){if(t.toolTypeId==e.form.toolTypeId)return t}));if(null!==t&&t.length>0&&"Y"==t[0].codeFlag)return this.form.quantity=1,this.form.quantityAvail=1,void(this.form.codeFlag="Y");this.form.codeFlag="N"},onQuantityChanged:function(){this.form.quantityAvail=this.form.quantity},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.toolId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加工装夹具清单",this.optType="add"},handleView:function(e){var t=this;this.reset();var o=e.toolId||this.ids;s(o).then((function(e){t.form=e.data,t.open=!0,t.title="查看工装夹具信息",t.optType="view"}))},handleUpdate:function(e){var t=this;this.reset();var o=e.toolId||this.ids;s(o).then((function(e){t.form=e.data,t.open=!0,t.title="修改工装夹具清单",t.optType="edit"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.toolId?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):u(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,o=e.toolId||this.ids;this.$modal.confirm('是否确认删除工装夹具清单编号为"'+o+'"的数据项？').then((function(){return m(o)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("tm/tool/export",Object(n["a"])({},this.queryParams),"tool_".concat((new Date).getTime(),".xlsx"))},handleAutoGenChange:function(e){var t=this;e?Object(d["c"])("TOOL_CODE").then((function(e){t.form.toolCode=e})):this.form.toolCode=null}}},y=f,h=o("2877"),b=Object(h["a"])(y,l,a,!1,null,null,null);t["default"]=b.exports},d6e7:function(e,t,o){"use strict";o.d(t,"e",(function(){return a})),o.d(t,"d",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"f",(function(){return s})),o.d(t,"b",(function(){return u}));var l=o("b775");function a(e){return Object(l["a"])({url:"/mes/tm/tooltype/list",method:"get",params:e})}function n(){return Object(l["a"])({url:"/mes/tm/tooltype/listAll",method:"get"})}function r(e){return Object(l["a"])({url:"/mes/tm/tooltype/"+e,method:"get"})}function i(e){return Object(l["a"])({url:"/mes/tm/tooltype",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/mes/tm/tooltype",method:"put",data:e})}function u(e){return Object(l["a"])({url:"/mes/tm/tooltype/"+e,method:"delete"})}}}]);