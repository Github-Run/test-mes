(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0ba2"],{"9e33":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"组成编码",prop:"partCode"}},[a("el-input",{attrs:{placeholder:"请输入组成编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.partCode,callback:function(t){e.$set(e.queryParams,"partCode",t)},expression:"queryParams.partCode"}})],1),a("el-form-item",{attrs:{label:"组成名称",prop:"partName"}},[a("el-input",{attrs:{placeholder:"请输入组成名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.partName,callback:function(t){e.$set(e.queryParams,"partName",t)},expression:"queryParams.partName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:autocode:part:add"],expression:"['system:autocode:part:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:autocode:part:edit"],expression:"['system:autocode:part:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:autocode:part:remove"],expression:"['system:autocode:part:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-close",size:"mini"},on:{click:e.handleClose}},[e._v("关闭")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.partList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"组成编码",align:"center",prop:"partCode"}}),a("el-table-column",{attrs:{label:"组成名称",align:"center",prop:"partName"}}),a("el-table-column",{attrs:{label:"分段序号",align:"center",prop:"partIndex"}}),a("el-table-column",{attrs:{label:"分段类型",align:"center",prop:"partType"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.sys_autocode_parttype,value:t.row.partType}})]}}])}),a("el-table-column",{attrs:{label:"分段长度",align:"center",prop:"partLength"}}),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:autocode:part:edit"],expression:"['system:autocode:part:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:autocode:part:remove"],expression:"['system:autocode:part:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"900px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,inline:!0,rules:e.rules,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分段编码",prop:"partCode"}},[a("el-input",{attrs:{placeholder:"请输入分段编码"},model:{value:e.form.partCode,callback:function(t){e.$set(e.form,"partCode",t)},expression:"form.partCode"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分段名称",prop:"partName"}},[a("el-input",{attrs:{placeholder:"请输入分段名称"},model:{value:e.form.partName,callback:function(t){e.$set(e.form,"partName",t)},expression:"form.partName"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分段序号",prop:"partIndex"}},[a("el-input-number",{attrs:{placeholder:"请输入分段序号"},model:{value:e.form.partIndex,callback:function(t){e.$set(e.form,"partIndex",t)},expression:"form.partIndex"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分段长度",prop:"partLength"}},[a("el-input-number",{attrs:{placeholder:"请输入分段长度"},model:{value:e.form.partLength,callback:function(t){e.$set(e.form,"partLength",t)},expression:"form.partLength"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分段类型",prop:"partType"}},[a("el-select",{model:{value:e.form.partType,callback:function(t){e.$set(e.form,"partType",t)},expression:"form.partType"}},e._l(e.dict.type.sys_autocode_parttype,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},["NOWDATE"==e.form.partType?a("el-form-item",{attrs:{label:"日期时间格式",prop:"dateFormat"}},[a("el-input",{attrs:{placeholder:"请输入日期时间格式"},model:{value:e.form.dateFormat,callback:function(t){e.$set(e.form,"dateFormat",t)},expression:"form.dateFormat"}})],1):e._e(),"INPUTCHAR"==e.form.partType?a("el-form-item",{attrs:{label:"输入字符",prop:"inputCharacter"}},[a("el-input",{attrs:{placeholder:"请填写输入字符"},model:{value:e.form.inputCharacter,callback:function(t){e.$set(e.form,"inputCharacter",t)},expression:"form.inputCharacter"}})],1):e._e(),"FIXCHAR"==e.form.partType?a("el-form-item",{attrs:{label:"固定字符",prop:"fixCharacter"}},[a("el-input",{attrs:{placeholder:"请填写固定字符"},model:{value:e.form.fixCharacter,callback:function(t){e.$set(e.form,"fixCharacter",t)},expression:"form.fixCharacter"}})],1):e._e(),"SERIALNO"==e.form.partType?a("el-form-item",{attrs:{label:"起始流水号",prop:"seriaStartNo"}},[a("el-input-number",{attrs:{placeholder:"请填写起始流水号"},model:{value:e.form.seriaStartNo,callback:function(t){e.$set(e.form,"seriaStartNo",t)},expression:"form.seriaStartNo"}})],1):e._e()],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},["SERIALNO"==e.form.partType?a("el-form-item",{attrs:{label:"流水号步长",prop:"seriaStep"}},[a("el-input-number",{attrs:{placeholder:"请填写流水号步长"},model:{value:e.form.seriaStep,callback:function(t){e.$set(e.form,"seriaStep",t)},expression:"form.seriaStep"}})],1):e._e()],1),a("el-col",{attrs:{span:12}},["SERIALNO"==e.form.partType?a("el-form-item",{attrs:{label:"是否循环",prop:"cycleFlag"}},[a("el-radio-group",{model:{value:e.form.cycleFlag,callback:function(t){e.$set(e.form,"cycleFlag",t)},expression:"form.cycleFlag"}},[a("el-radio",{attrs:{label:"Y"}},[e._v("是")]),a("el-radio",{attrs:{label:"N"}},[e._v("否")])],1)],1):e._e()],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},["SERIALNO"==e.form.partType&&"Y"==e.form.cycleFlag?a("el-form-item",{attrs:{label:"循环方式",prop:"cycleMethod"}},[a("el-select",{model:{value:e.form.cycleMethod,callback:function(t){e.$set(e.form,"cycleMethod",t)},expression:"form.cycleMethod"}},e._l(e.dict.type.sys_autocode_cyclemethod,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e()],1)],1),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],l=(a("d81d"),a("b775"));function s(e){return Object(l["a"])({url:"/system/autocode/part/list",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/system/autocode/part/"+e,method:"get"})}function i(e){return Object(l["a"])({url:"/system/autocode/part",method:"post",data:e})}function c(e){return Object(l["a"])({url:"/system/autocode/part",method:"put",data:e})}function p(e){return Object(l["a"])({url:"/system/autocode/part/"+e,method:"delete"})}var m={name:"Part",dicts:["sys_autocode_cyclemethod","sys_autocode_parttype"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,partList:[],title:"",open:!1,recentRuleId:void 0,queryParams:{pageNum:1,pageSize:10,ruleId:void 0,partCode:void 0,partName:void 0},form:{},rules:{partCode:[{required:!0,message:"组成编码不能为空",trigger:"blur"}],partName:[{required:!0,message:"组成名称不能为空",trigger:"blur"}],partIndex:[{required:!0,message:"组成序号不能为空",trigger:"blur"}]}}},created:function(){var e=this.$route.params&&this.$route.params.ruleId;this.recentRuleId=e,this.queryParams.ruleId=e,this.getList()},methods:{getList:function(){var e=this;this.loading=!0,s(this.queryParams).then((function(t){e.partList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={partCode:void 0,partName:void 0,partIndex:0,partLength:0,remark:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleClose:function(){var e={path:"/system/autocodeRule"};this.$tab.closeOpenPage(e)},resetQuery:function(){this.resetForm("queryForm"),this.queryParams.ruleId=this.recentRuleId,this.handleQuery()},handleAdd:function(){this.reset(),this.open=!0,this.title="添加规则组成",this.form.ruleId=this.recentRuleId},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.partId})),this.single=1!=e.length,this.multiple=!e.length},handleUpdate:function(e){var t=this;this.reset();var a=e.partId||this.ids;n(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改规则组成"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.partId?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):i(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.partId||this.ids;this.$modal.confirm('是否确认删除规则组成ID为"'+a+'"的数据项？').then((function(){return p(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))}}},u=m,d=a("2877"),f=Object(d["a"])(u,r,o,!1,null,null,null);t["default"]=f.exports}}]);