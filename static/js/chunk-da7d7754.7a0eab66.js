(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da7d7754","chunk-baa3f698","chunk-01e982ad"],{1704:function(e,t,a){},"1ab2":function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return c}));var n=a("b775");function l(e){return Object(n["a"])({url:"/mes/wm/package/list",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/mes/wm/package/"+e,method:"get"})}function o(e){return Object(n["a"])({url:"/mes/wm/package",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/mes/wm/package",method:"put",data:e})}function s(e){return Object(n["a"])({url:"/mes/wm/package/"+e,method:"delete"})}function c(e){return Object(n["a"])({url:"/mes/wm/package/addsub",method:"put",data:e})}},"1fce":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"装箱单编号",prop:"packageCode"}},[a("el-input",{attrs:{placeholder:"请输入装箱单编号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.packageCode,callback:function(t){e.$set(e.queryParams,"packageCode",t)},expression:"queryParams.packageCode"}})],1),a("el-form-item",{attrs:{label:"条码内容",prop:"barcodeContent"}},[a("el-input",{attrs:{placeholder:"请输入条码内容",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.barcodeContent,callback:function(t){e.$set(e.queryParams,"barcodeContent",t)},expression:"queryParams.barcodeContent"}})],1),a("el-form-item",{attrs:{label:"销售订单编号",prop:"soCode"}},[a("el-input",{attrs:{placeholder:"请输入销售订单编号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.soCode,callback:function(t){e.$set(e.queryParams,"soCode",t)},expression:"queryParams.soCode"}})],1),a("el-form-item",{attrs:{label:"客户名称",prop:"clientName"}},[a("el-input",{attrs:{placeholder:"请输入客户名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.clientName,callback:function(t){e.$set(e.queryParams,"clientName",t)},expression:"queryParams.clientName"}})],1),a("el-form-item",{attrs:{label:"检查员名称",prop:"inspectorName"}},[a("el-input",{attrs:{placeholder:"请输入检查员名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.inspectorName,callback:function(t){e.$set(e.queryParams,"inspectorName",t)},expression:"queryParams.inspectorName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:package:add"],expression:"['mes:wm:package:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.packageList,"row-key":"packageId","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"装箱单编号",width:"180px",align:"center",prop:"packageCode"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:package:query"],expression:"['mes:wm:package:query']"}],attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleView(t.row)}}},[e._v(e._s(t.row.packageCode))])]}}])}),a("el-table-column",{attrs:{label:"装箱日期",align:"center",prop:"packageDate",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.packageDate,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"销售订单编号",width:"100px",align:"center",prop:"soCode"}}),a("el-table-column",{attrs:{label:"发票编号",align:"center",prop:"invoiceCode"}}),a("el-table-column",{attrs:{label:"客户编码",align:"center",prop:"clientCode"}}),a("el-table-column",{attrs:{label:"客户名称",width:"120px",align:"center",prop:"clientName","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"箱长度",align:"center",prop:"packageLength"}}),a("el-table-column",{attrs:{label:"箱宽度",align:"center",prop:"packageWidth"}}),a("el-table-column",{attrs:{label:"箱高度",align:"center",prop:"packageHeight"}}),a("el-table-column",{attrs:{label:"尺寸单位",align:"center",prop:"sizeUnit"}}),a("el-table-column",{attrs:{label:"净重",align:"center",prop:"netWeight"}}),a("el-table-column",{attrs:{label:"毛重",align:"center",prop:"crossWeight"}}),a("el-table-column",{attrs:{label:"重量单位",align:"center",prop:"weightUnit"}}),a("el-table-column",{attrs:{label:"检查员",align:"center",prop:"inspectorName"}}),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.mes_order_status,value:t.row.status}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return["PREPARE"==t.row.status?a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:package:edit"],expression:"['mes:wm:package:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]):e._e(),"PREPARE"==t.row.status?a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:package:remove"],expression:"['mes:wm:package:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"960px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-row",[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"装箱单编号",prop:"packageCode"}},[a("el-input",{attrs:{placeholder:"请输入装箱单编号"},model:{value:e.form.packageCode,callback:function(t){e.$set(e.form,"packageCode",t)},expression:"form.packageCode"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"80"}},["view"!=e.optType&&"PREPARE"==e.form.status?a("el-switch",{attrs:{"active-color":"#13ce66","active-text":"自动生成"},on:{change:function(t){return e.handleAutoGenChange(e.autoGenFlag)}},model:{value:e.autoGenFlag,callback:function(t){e.autoGenFlag=t},expression:"autoGenFlag"}}):e._e()],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"装箱日期",prop:"packageDate"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择装箱日期"},model:{value:e.form.packageDate,callback:function(t){e.$set(e.form,"packageDate",t)},expression:"form.packageDate"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:17}},[a("el-form-item",{attrs:{label:"销售订单编号",prop:"soCode"}},[a("el-input",{attrs:{placeholder:"请输入销售订单编号"},model:{value:e.form.soCode,callback:function(t){e.$set(e.form,"soCode",t)},expression:"form.soCode"}})],1)],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-image",{staticClass:"barcodeClass",attrs:{fit:"scale-down",src:e.form.barcodeUrl},on:{click:function(t){return e.handleUpdate(e.scope.row)}}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"客户编码",prop:"clientCode"}},[a("el-input",{attrs:{placeholder:"请输入客户编码"},model:{value:e.form.clientCode,callback:function(t){e.$set(e.form,"clientCode",t)},expression:"form.clientCode"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSelectClient},slot:"append"})],1)],1),a("ClientSelect",{ref:"clientSelect",on:{onSelected:e.onClientSelected}})],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"客户名称",prop:"clientName"}},[a("el-input",{attrs:{placeholder:"请输入客户名称"},model:{value:e.form.clientName,callback:function(t){e.$set(e.form,"clientName",t)},expression:"form.clientName"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"发票编号",prop:"invoiceCode"}},[a("el-input",{attrs:{placeholder:"请输入发票编号"},model:{value:e.form.invoiceCode,callback:function(t){e.$set(e.form,"invoiceCode",t)},expression:"form.invoiceCode"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"箱长度",prop:"packageLength"}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入箱长度"},model:{value:e.form.packageLength,callback:function(t){e.$set(e.form,"packageLength",t)},expression:"form.packageLength"}},[a("el-select",{staticClass:"width",attrs:{slot:"append"},slot:"append",model:{value:e.form.sizeUnit,callback:function(t){e.$set(e.form,"sizeUnit",t)},expression:"form.sizeUnit"}},e._l(e.measureOptions,(function(e){return a("el-option",{key:e.measureCode,attrs:{label:e.measureName,value:e.measureCode}})})),1)],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"箱宽度",prop:"packageWidth"}},[a("el-input",{attrs:{placeholder:"请输入箱宽度"},model:{value:e.form.packageWidth,callback:function(t){e.$set(e.form,"packageWidth",t)},expression:"form.packageWidth"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"箱高度",prop:"packageHeight"}},[a("el-input",{attrs:{placeholder:"请输入箱高度"},model:{value:e.form.packageHeight,callback:function(t){e.$set(e.form,"packageHeight",t)},expression:"form.packageHeight"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"净重",prop:"netWeight"}},[a("el-input",{attrs:{placeholder:"请输入净重"},model:{value:e.form.netWeight,callback:function(t){e.$set(e.form,"netWeight",t)},expression:"form.netWeight"}},[a("el-select",{attrs:{slot:"append"},slot:"append",model:{value:e.form.weightUnit,callback:function(t){e.$set(e.form,"weightUnit",t)},expression:"form.weightUnit"}},e._l(e.measureOptions,(function(e){return a("el-option",{key:e.measureCode,attrs:{label:e.measureName,value:e.measureCode}})})),1)],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"毛重",prop:"crossWeight"}},[a("el-input",{attrs:{placeholder:"请输入毛重"},model:{value:e.form.crossWeight,callback:function(t){e.$set(e.form,"crossWeight",t)},expression:"form.crossWeight"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"检查员名称",prop:"inspectorName"}},[a("el-input",{attrs:{placeholder:"请输入检查员名称"},model:{value:e.form.inspectorName,callback:function(t){e.$set(e.form,"inspectorName",t)},expression:"form.inspectorName"}})],1)],1)],1),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),null!=e.form.packageId?a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"子箱"}},[a("SubPackage",{ref:"subPackge",attrs:{parentId:e.form.packageId,optType:e.optType}})],1),a("el-tab-pane",{attrs:{label:"装箱清单"}},[a("Packageline",{ref:"packageLine",attrs:{packageId:e.form.packageId,optType:e.optType}})],1)],1):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["view"==e.optType||"PREPARE"!=e.form.status?a("el-button",{attrs:{type:"primary"},on:{click:e.cancel}},[e._v("返回")]):e._e(),"PREPARE"==e.form.status&&"view"!=e.optType?a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保 存")]):e._e(),"PREPARE"==e.form.status&&"view"!=e.optType&&null!=e.form.packageId?a("el-button",{attrs:{type:"success"},on:{click:e.doconfirm}},[e._v("完成")]):e._e(),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[],r=a("5530"),o=(a("d81d"),a("1ab2")),i=a("cc63"),s=a("522f"),c=a("9d1b"),u=a("c3e0"),m=a("8171"),d=a("ca17"),p=a.n(d),f=(a("542c"),{name:"Package",dicts:["mes_order_status"],components:{ClientSelect:i["a"],Packageline:s["default"],SubPackage:c["default"],Treeselect:p.a},data:function(){return{autoGenFlag:!1,optType:void 0,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,packageList:[],measureOptions:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,parentId:null,ancestors:null,packageCode:null,barcodeId:null,barcodeContent:null,barcodeUrl:null,packageDate:null,soCode:null,invoiceCode:null,clientId:null,clientCode:null,clientName:null,clientNick:null,packageLength:null,packageWidth:null,packageHeight:null,sizeUnit:null,netWeight:null,crossWeight:null,weightUnit:null,inspector:null,inspectorName:null,enableFlag:null},form:{},rules:{parentId:[{required:!0,message:"父箱ID不能为空",trigger:"blur"}],ancestors:[{required:!0,message:"所有父节点ID不能为空",trigger:"blur"}],packageDate:[{required:!0,message:"装箱日期不能为空",trigger:"blur"}]}}},created:function(){this.getList(),this.getUnits()},methods:{getList:function(){var e=this;this.loading=!0,Object(o["e"])(this.queryParams).then((function(t){e.packageList=e.handleTree(t.rows,"packageId","parentId"),e.total=t.total,e.loading=!1}))},normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.packageId,label:e.packageCode,children:e.children}},getUnits:function(){var e=this;Object(u["d"])().then((function(t){e.measureOptions=t.data}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={packageId:null,parentId:null,ancestors:null,packageCode:null,barcodeId:null,barcodeContent:null,barcodeUrl:null,packageDate:new Date,soCode:null,invoiceCode:null,clientId:null,clientCode:null,clientName:null,clientNick:null,packageLength:null,packageWidth:null,packageHeight:null,sizeUnit:null,netWeight:null,crossWeight:null,weightUnit:null,inspector:null,inspectorName:null,enableFlag:"Y",status:"PREPARE",remark:null,attr1:null,attr2:null,attr3:null,attr4:null,createBy:null,createTime:null,updateBy:null,updateTime:null},this.autoGenFlag=!1,this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.packageId})),this.single=1!==e.length,this.multiple=!e.length},handleSelectClient:function(){this.$refs.clientSelect.showFlag=!0},onClientSelected:function(e){void 0!=e&&null!=e&&(this.form.clientId=e.clientId,this.form.clientCode=e.clientCode,this.form.clientName=e.clientName)},handleAdd:function(){this.reset(),this.open=!0,this.title="添加装箱单",this.optType="add"},handleView:function(e){var t=this;this.reset();var a=e.packageId;Object(o["d"])(a).then((function(e){t.form=e.data,t.open=!0,t.title="查看装箱单信息",t.optType="view"}))},handleUpdate:function(e){var t=this;this.reset();var a=e.packageId||this.ids;Object(o["d"])(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改装箱单",t.optType="edit"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.packageId?Object(o["f"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(o["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},doconfirm:function(){var e=this;this.$modal.confirm("是否完成装箱单编制？【完成后将不能更改】").then((function(){e.form.status="FINISHED",e.submitForm()}))},handleDelete:function(e){var t=this,a=e.packageId||this.ids;this.$modal.confirm('是否确认删除装箱单编号为"'+a+'"的数据项？').then((function(){return Object(o["c"])(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("wm/package/export",Object(r["a"])({},this.queryParams),"package_".concat((new Date).getTime(),".xlsx"))},handleAutoGenChange:function(e){var t=this;e?Object(m["c"])("PACKAGE_CODE").then((function(e){t.form.packageCode=e})):this.form.packageCode=null}}}),h=f,g=(a("4184"),a("2877")),b=Object(g["a"])(h,n,l,!1,null,"0aad0a9e",null);t["default"]=b.exports},4184:function(e,t,a){"use strict";a("1704")},"522f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},["view"!=e.optType?a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:packageline:add"],expression:"['mes:wm:packageline:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:packageline:remove"],expression:"['mes:wm:packageline:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1):e._e(),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.packagelineList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"产品物料编码",width:"120px",align:"center",prop:"itemCode"}}),a("el-table-column",{attrs:{label:"产品物料名称",width:"150px",align:"center",prop:"itemName","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"规格型号",width:"150px",align:"center",prop:"specification","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"单位",align:"center",prop:"unitOfMeasure"}}),a("el-table-column",{attrs:{label:"装箱数量",align:"center",prop:"quantityPackage"}}),a("el-table-column",{attrs:{label:"生产工单编号",width:"150px",align:"center",prop:"workorderCode"}}),a("el-table-column",{attrs:{label:"批次号",align:"center",prop:"batchCode"}}),a("el-table-column",{attrs:{label:"有效期",align:"center",prop:"expireDate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.expireDate,"{y}-{m}-{d}")))])]}}])}),"view"!=e.optType?a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:packageline:edit"],expression:"['mes:wm:packageline:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:packageline:remove"],expression:"['mes:wm:packageline:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}],null,!1,434429962)}):e._e()],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"960px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"生产工单编号",prop:"workorderCode"}},[a("el-input",{attrs:{placeholder:"请输入生产工单编号"},model:{value:e.form.workorderCode,callback:function(t){e.$set(e.form,"workorderCode",t)},expression:"form.workorderCode"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleWorkorderSelect},slot:"append"})],1)],1),a("WorkorderSelect",{ref:"woSelect",on:{onSelected:e.onWorkorderSelected}})],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"批次号",prop:"batchCode"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.batchCode,callback:function(t){e.$set(e.form,"batchCode",t)},expression:"form.batchCode"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"装箱数量",prop:"quantityPackage"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入装箱数量"},model:{value:e.form.quantityPackage,callback:function(t){e.$set(e.form,"quantityPackage",t)},expression:"form.quantityPackage"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"产品物料编码",prop:"itemCode"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.itemCode,callback:function(t){e.$set(e.form,"itemCode",t)},expression:"form.itemCode"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"产品物料名称",prop:"itemName"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.itemName,callback:function(t){e.$set(e.form,"itemName",t)},expression:"form.itemName"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"单位",prop:"unitOfMeasure"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.unitOfMeasure,callback:function(t){e.$set(e.form,"unitOfMeasure",t)},expression:"form.unitOfMeasure"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"规格型号",prop:"specification"}},[a("el-input",{attrs:{type:"textarea",readonly:"readonly"},model:{value:e.form.specification,callback:function(t){e.$set(e.form,"specification",t)},expression:"form.specification"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[],r=a("5530"),o=(a("d81d"),a("b775"));function i(e){return Object(o["a"])({url:"/mes/wm/packageline/list",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/mes/wm/packageline/"+e,method:"get"})}function c(e){return Object(o["a"])({url:"/mes/wm/packageline",method:"post",data:e})}function u(e){return Object(o["a"])({url:"/mes/wm/packageline",method:"put",data:e})}function m(e){return Object(o["a"])({url:"/mes/wm/packageline/"+e,method:"delete"})}var d=a("373b"),p={name:"Packageline",components:{WorkorderSelect:d["a"]},props:{packageId:null,optType:null},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,packagelineList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,packageId:this.packageId,materialStockId:null,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,quantityPackage:null,workorderId:null,workorderCode:null,batchCode:null,warehouseId:null,warehouseCode:null,warehouseName:null,locationId:null,locationCode:null,locationName:null,areaId:null,areaCode:null,areaName:null,expireDate:null},form:{},rules:{packageId:[{required:!0,message:"装箱单ID不能为空",trigger:"blur"}],itemId:[{required:!0,message:"产品物料ID不能为空",trigger:"blur"}],quantityPackage:[{required:!0,message:"装箱数量不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.packagelineList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={lineId:null,packageId:this.packageId,materialStockId:null,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,quantityPackage:null,workorderId:null,workorderCode:null,batchCode:null,warehouseId:null,warehouseCode:null,warehouseName:null,locationId:null,locationCode:null,locationName:null,areaId:null,areaCode:null,areaName:null,expireDate:null,remark:null,attr1:null,attr2:null,attr3:null,attr4:null,createBy:null,createTime:null,updateBy:null,updateTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.lineId})),this.single=1!==e.length,this.multiple=!e.length},handleWorkorderSelect:function(){this.$refs.woSelect.showFlag=!0},onWorkorderSelected:function(e){void 0!=e&&null!=e&&(this.form.workorderId=e.workorderId,this.form.workorderCode=e.workorderCode,this.form.workorderName=e.workorderName,this.form.itemId=e.productId,this.form.itemCode=e.productCode,this.form.itemName=e.productName,this.form.specification=e.specification,this.form.unitOfMeasure=e.unitOfMeasure)},handleAdd:function(){this.reset(),this.open=!0,this.title="添加装箱明细"},handleUpdate:function(e){var t=this;this.reset();var a=e.lineId||this.ids;s(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改装箱明细"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.lineId?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.lineId||this.ids;this.$modal.confirm('是否确认删除装箱明细编号为"'+a+'"的数据项？').then((function(){return m(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("wm/packageline/export",Object(r["a"])({},this.queryParams),"packageline_".concat((new Date).getTime(),".xlsx"))}}},f=p,h=a("2877"),g=Object(h["a"])(f,n,l,!1,null,null,null);t["default"]=g.exports},8171:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"b",(function(){return c}));var n=a("b775");function l(e){return Object(n["a"])({url:"/system/autocode/get/"+e,method:"get"})}function r(e){return Object(n["a"])({url:"/system/autocode/rule/list",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/system/autocode/rule/"+e,method:"get"})}function i(e){return Object(n["a"])({url:"/system/autocode/rule",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/system/autocode/rule",method:"put",data:e})}function c(e){return Object(n["a"])({url:"/system/autocode/rule/"+e,method:"delete"})}},"9d1b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},["view"!=e.optType?a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:package:add"],expression:"['mes:wm:package:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:package:remove"],expression:"['mes:wm:package:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1):e._e(),a("PackageSelectSingle",{ref:"packageSelect",on:{onSelected:e.onPackageSelected}}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.packageList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"装箱单编号",width:"150px",align:"center",prop:"packageCode"}}),a("el-table-column",{attrs:{label:"装箱日期",align:"center",prop:"packageDate",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.packageDate,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"销售订单编号",width:"100px",align:"center",prop:"soCode"}}),a("el-table-column",{attrs:{label:"客户编码",align:"center",prop:"clientCode"}}),a("el-table-column",{attrs:{label:"客户名称",width:"120px",align:"center",prop:"clientName","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"箱长度",align:"center",prop:"packageLength"}}),a("el-table-column",{attrs:{label:"箱宽度",align:"center",prop:"packageWidth"}}),a("el-table-column",{attrs:{label:"箱高度",align:"center",prop:"packageHeight"}}),a("el-table-column",{attrs:{label:"尺寸单位",align:"center",prop:"sizeUnit"}}),a("el-table-column",{attrs:{label:"净重",align:"center",prop:"netWeight"}}),a("el-table-column",{attrs:{label:"毛重",align:"center",prop:"crossWeight"}}),a("el-table-column",{attrs:{label:"重量单位",align:"center",prop:"weightUnit"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return["view"!=e.optType?a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:package:remove"],expression:"['mes:wm:package:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},l=[],r=(a("d81d"),a("1ab2")),o=a("726a"),i={name:"SubPackage",dicts:["sys_yes_no"],components:{PackageSelectSingle:o["a"]},props:{parentId:null,optType:null},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,packageList:[],measureOptions:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,parentId:this.parentId,ancestors:null,packageCode:null,barcodeId:null,barcodeContent:null,barcodeUrl:null,packageDate:null,soCode:null,invoiceCode:null,clientId:null,clientCode:null,clientName:null,clientNick:null,packageLength:null,packageWidth:null,packageHeight:null,sizeUnit:null,netWeight:null,crossWeight:null,weightUnit:null,inspector:null,inspectorName:null,enableFlag:null},form:{},rules:{packageCode:[{required:!0,message:"箱不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(r["e"])(this.queryParams).then((function(t){e.packageList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.packageId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.$refs.packageSelect.showFlag=!0},onPackageSelected:function(e){var t=this,a={packageId:e.packageId,parentId:this.parentId};Object(r["b"])(a).then((function(e){t.$modal.msgSuccess("添加成功"),t.getList()}))},handleDelete:function(e){var t=this,a=e.packageId||this.ids;this.$modal.confirm('是否确认删除装箱单编号为"'+a+'"的数据项？').then((function(){return Object(r["c"])(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))}}},s=i,c=a("2877"),u=Object(c["a"])(s,n,l,!1,null,null,null);t["default"]=u.exports},c3e0:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a("b775");function l(e){return Object(n["a"])({url:"/mes/md/unitmeasure/list",method:"get",params:e})}function r(){return Object(n["a"])({url:"/mes/md/unitmeasure/listprimary",method:"get"})}function o(){return Object(n["a"])({url:"/mes/md/unitmeasure/selectall",method:"get"})}function i(e){return Object(n["a"])({url:"/mes/md/unitmeasure/"+e,method:"get"})}function s(e){return Object(n["a"])({url:"/mes/md/unitmeasure",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/mes/md/unitmeasure",method:"put",data:e})}function u(e){return Object(n["a"])({url:"/mes/md/unitmeasure/"+e,method:"delete"})}},f1e6:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return c}));var n=a("b775");function l(e){return Object(n["a"])({url:"/mes/pro/workorder/list",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/mes/pro/workorder/"+e,method:"get"})}function o(e){return Object(n["a"])({url:"/mes/pro/workorder",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/mes/pro/workorder",method:"put",data:e})}function s(e){return Object(n["a"])({url:"/mes/pro/workorder/"+e,method:"delete"})}function c(e){return Object(n["a"])({url:"/mes/pro/workorder/listItems",method:"get",params:e})}},fc13:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a("b775");function l(e){return Object(n["a"])({url:"/mes/md/client/list",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/mes/md/client/"+e,method:"get"})}function o(e){return Object(n["a"])({url:"/mes/md/client",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/mes/md/client",method:"put",data:e})}function s(e){return Object(n["a"])({url:"/mes/md/client/"+e,method:"delete"})}}}]);