(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f6377b0","chunk-221c8d32","chunk-6098f0a5"],{1876:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.ipqclineList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"检测项名称",width:"120px",align:"center",prop:"indexName"}}),r("el-table-column",{attrs:{label:"检测项类型",width:"100px",align:"center",prop:"indexType"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.mes_index_type,value:t.row.indexType}})]}}])}),r("el-table-column",{attrs:{label:"检测工具",align:"center",prop:"qcTool"}}),r("el-table-column",{attrs:{label:"检测要求",align:"center",prop:"checkMethod"}}),r("el-table-column",{attrs:{label:"标准值",align:"center",prop:"standerVal"}}),r("el-table-column",{attrs:{label:"单位",align:"center",prop:"unitOfMeasure"}}),r("el-table-column",{attrs:{label:"误差上限",align:"center",prop:"thresholdMax"}}),r("el-table-column",{attrs:{label:"误差下限",align:"center",prop:"thresholdMin"}}),r("el-table-column",{attrs:{label:"致命缺陷数量",align:"center",prop:"crQuantity"}}),r("el-table-column",{attrs:{label:"严重缺陷数量",align:"center",prop:"majQuantity"}}),r("el-table-column",{attrs:{label:"轻微缺陷数量",align:"center",prop:"minQuantity"}}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return["view"!=e.optType?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:edit"],expression:"['mes:qc:ipqc:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleDefect(t.row)}}},[e._v("缺陷记录")]):e._e()]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("Defectrecord",{ref:"defectDialog",attrs:{qcId:e.defect_qcid,lineId:e.defect_qclineid,qcType:e.defect_qctype,optType:e.optType}})],1)},a=[],n=(r("d81d"),r("b775"));function o(e){return Object(n["a"])({url:"/mes/qc/ipqcline/list",method:"get",params:e})}var i=r("b74e"),s={name:"Ipqcline",dicts:["mes_index_type"],props:{ipqcId:null,optType:void 0},components:{Defectrecord:i["default"]},data:function(){return{defect_qcid:null,defect_qclineid:null,defect_qctype:"IPQC",loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,ipqclineList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,ipqcId:this.ipqcId,indexId:null,indexCode:null,indexName:null,indexType:null,qcTool:null,checkMethod:null,standerVal:null,unitOfMeasure:null,thresholdMax:null,thresholdMin:null,crQuantity:null,majQuantity:null,minQuantity:null},form:{},rules:{ipqcId:[{required:!0,message:"检验单ID不能为空",trigger:"blur"}],indexId:[{required:!0,message:"检测项ID不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.ipqclineList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={lineId:null,ipqcId:null,indexId:null,indexCode:null,indexName:null,indexType:null,qcTool:null,checkMethod:null,standerVal:null,unitOfMeasure:null,thresholdMax:null,thresholdMin:null,crQuantity:null,majQuantity:null,minQuantity:null,remark:null,attr1:null,attr2:null,attr3:null,attr4:null,createBy:null,createTime:null,updateBy:null,updateTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.lineId})),this.single=1!==e.length,this.multiple=!e.length},handleDefect:function(e){var t=this;this.defect_qcid=e.ipqcId,this.defect_qclineid=e.lineId,this.$nextTick((function(){t.$refs.defectDialog.showFlag=!0,t.$refs.defectDialog.getList()}))}}},c=s,u=r("2877"),d=Object(u["a"])(c,l,a,!1,null,null,null);t["default"]=d.exports},"287e":function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return s})),r.d(t,"b",(function(){return c}));var l=r("b775");function a(e){return Object(l["a"])({url:"/mes/pro/process/list",method:"get",params:e})}function n(){return Object(l["a"])({url:"/mes/pro/process/listAll",method:"get"})}function o(e){return Object(l["a"])({url:"/mes/pro/process/"+e,method:"get"})}function i(e){return Object(l["a"])({url:"/mes/pro/process",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/mes/pro/process",method:"put",data:e})}function c(e){return Object(l["a"])({url:"/mes/pro/process/"+e,method:"delete"})}},"3c65":function(e,t,r){"use strict";var l=r("23e7"),a=r("7b0b"),n=r("07fa"),o=r("3a34"),i=r("083a"),s=r("3511"),c=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=c||!u();l({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=a(this),r=n(t),l=arguments.length;if(l){s(r+l);var c=r;while(c--){var u=c+l;c in t?t[u]=t[c]:i(t,u)}for(var d=0;d<l;d++)t[d]=arguments[d]}return o(t,r+l)}})},8171:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return s})),r.d(t,"b",(function(){return c}));var l=r("b775");function a(e){return Object(l["a"])({url:"/system/autocode/get/"+e,method:"get"})}function n(e){return Object(l["a"])({url:"/system/autocode/rule/list",method:"get",params:e})}function o(e){return Object(l["a"])({url:"/system/autocode/rule/"+e,method:"get"})}function i(e){return Object(l["a"])({url:"/system/autocode/rule",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/system/autocode/rule",method:"put",data:e})}function c(e){return Object(l["a"])({url:"/system/autocode/rule/"+e,method:"delete"})}},"9f53":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"检验单编号",prop:"ipqcCode"}},[r("el-input",{attrs:{placeholder:"请输入检验单编号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.ipqcCode,callback:function(t){e.$set(e.queryParams,"ipqcCode",t)},expression:"queryParams.ipqcCode"}})],1),r("el-form-item",{attrs:{label:"检验类型",prop:"ipqcType"}},[r("el-select",{attrs:{placeholder:"请选择检验类型",clearable:""},model:{value:e.queryParams.ipqcType,callback:function(t){e.$set(e.queryParams,"ipqcType",t)},expression:"queryParams.ipqcType"}},e._l(e.dict.type.mes_ipqc_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"工单编号",prop:"workorderCode"}},[r("el-input",{attrs:{placeholder:"请输入工单编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.workorderCode,callback:function(t){e.$set(e.queryParams,"workorderCode",t)},expression:"queryParams.workorderCode"}})],1),r("el-form-item",{attrs:{label:"产品物料编码",prop:"itemCode"}},[r("el-input",{attrs:{placeholder:"请输入产品物料编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.itemCode,callback:function(t){e.$set(e.queryParams,"itemCode",t)},expression:"queryParams.itemCode"}})],1),r("el-form-item",{attrs:{label:"产品物料名称",prop:"itemName"}},[r("el-input",{attrs:{placeholder:"请输入产品物料名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.itemName,callback:function(t){e.$set(e.queryParams,"itemName",t)},expression:"queryParams.itemName"}})],1),r("el-form-item",{attrs:{label:"检测结果",prop:"checkResult"}},[r("el-select",{attrs:{placeholder:"请选择检验结果",clearable:""},model:{value:e.queryParams.checkResult,callback:function(t){e.$set(e.queryParams,"checkResult",t)},expression:"queryParams.checkResult"}},e._l(e.dict.type.mes_qc_result,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:add"],expression:"['mes:qc:ipqc:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:edit"],expression:"['mes:qc:ipqc:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:remove"],expression:"['mes:qc:ipqc:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:export"],expression:"['mes:qc:ipqc:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.ipqcList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"检验单编号",width:"150px",align:"center",prop:"ipqcCode"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:query"],expression:"['mes:qc:ipqc:query']"}],attrs:{type:"text"},on:{click:function(r){return e.handleView(t.row)}}},[e._v(e._s(t.row.ipqcCode))])]}}])}),r("el-table-column",{attrs:{label:"检验类型",align:"center",prop:"ipqcType"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.mes_ipqc_type,value:t.row.ipqcType}})]}}])}),r("el-table-column",{attrs:{label:"工单编号",width:"150px",align:"center",prop:"workorderCode"}}),r("el-table-column",{attrs:{label:"产品物料编码",width:"120px",align:"center",prop:"itemCode"}}),r("el-table-column",{attrs:{label:"产品物料名称",width:"150px",align:"center",prop:"itemName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"规格型号",align:"center",prop:"specification","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"单位",align:"center",prop:"unitOfMeasure"}}),r("el-table-column",{attrs:{label:"检测数量",align:"center",prop:"quantityCheck"}}),r("el-table-column",{attrs:{label:"检测结果",align:"center",prop:"checkResult"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.mes_qc_result,value:t.row.checkResult}})]}}])}),r("el-table-column",{attrs:{label:"检测日期",align:"center",prop:"inspectDate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.inspectDate,"{y}-{m}-{d}")))])]}}])}),r("el-table-column",{attrs:{label:"检测人员",align:"center",prop:"inspector"}}),r("el-table-column",{attrs:{label:"单据状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.mes_order_status,value:t.row.status}})]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return["PREPARE"==t.row.status?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:edit"],expression:"['mes:qc:ipqc:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]):e._e(),"PREPARE"==t.row.status?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:ipqc:remove"],expression:"['mes:qc:ipqc:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"960px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"检验单编号",prop:"ipqcCode"}},[r("el-input",{attrs:{placeholder:"请输入检验单编号"},model:{value:e.form.ipqcCode,callback:function(t){e.$set(e.form,"ipqcCode",t)},expression:"form.ipqcCode"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{"label-width":"80"}},["view"!=e.optType&&"PREPARE"==e.form.status?r("el-switch",{attrs:{"active-color":"#13ce66","active-text":"自动生成"},on:{change:function(t){return e.handleAutoGenChange(e.autoGenFlag)}},model:{value:e.autoGenFlag,callback:function(t){e.autoGenFlag=t},expression:"autoGenFlag"}}):e._e()],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"检验单名称",prop:"ipqcName"}},[r("el-input",{attrs:{placeholder:"请输入检验单名称"},model:{value:e.form.ipqcName,callback:function(t){e.$set(e.form,"ipqcName",t)},expression:"form.ipqcName"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"检验类型",prop:"ipqcType"}},[r("el-select",{attrs:{placeholder:"请选择检验类型"},model:{value:e.form.ipqcType,callback:function(t){e.$set(e.form,"ipqcType",t)},expression:"form.ipqcType"}},e._l(e.dict.type.mes_ipqc_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"工单编码",prop:"workorderCode"}},[null==e.form.ipqcId?r("el-input",{attrs:{placeholder:"请选择生产工单"},model:{value:e.form.workorderCode,callback:function(t){e.$set(e.form,"workorderCode",t)},expression:"form.workorderCode"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleWorkorderSelect},slot:"append"})],1):r("el-input",{model:{value:e.form.workorderCode,callback:function(t){e.$set(e.form,"workorderCode",t)},expression:"form.workorderCode"}})],1),r("WorkorderSelect",{ref:"woSelect",on:{onSelected:e.onWorkorderSelected}})],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"工单名称",prop:"workorderName"}},[r("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.workorderName,callback:function(t){e.$set(e.form,"workorderName",t)},expression:"form.workorderName"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"工作站编号",prop:"workstationCode"}},[r("el-input",{attrs:{placeholder:"请输入工作站编号"},model:{value:e.form.workstationCode,callback:function(t){e.$set(e.form,"workstationCode",t)},expression:"form.workstationCode"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleWorkstationSelect},slot:"append"})],1)],1),r("WorkstationSelect",{ref:"wsSelect",on:{onSelected:e.onWorkstationSelected}})],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"工作站名称",prop:"workstationName"}},[r("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.workstationName,callback:function(t){e.$set(e.form,"workstationName",t)},expression:"form.workstationName"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"检测数量",prop:"quantityCheck"}},[r("el-input",{attrs:{placeholder:"请输入检测数量"},model:{value:e.form.quantityCheck,callback:function(t){e.$set(e.form,"quantityCheck",t)},expression:"form.quantityCheck"}})],1)],1)],1),r("el-collapse",[r("el-collapse-item",[r("template",{slot:"title"},[e._v(" 更多信息"),r("i",{staticClass:"header-icon el-icon-info"})]),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"产品编码",prop:"itemCode"}},[r("el-input",{attrs:{placeholder:"请输入产品编码"},model:{value:e.form.itemCode,callback:function(t){e.$set(e.form,"itemCode",t)},expression:"form.itemCode"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"产品名称",prop:"itemName"}},[r("el-input",{attrs:{placeholder:"请输入产品名称"},model:{value:e.form.itemName,callback:function(t){e.$set(e.form,"itemName",t)},expression:"form.itemName"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"单位",prop:"unitOfMeasure"}},[r("el-input",{attrs:{placeholder:"请输入单位"},model:{value:e.form.unitOfMeasure,callback:function(t){e.$set(e.form,"unitOfMeasure",t)},expression:"form.unitOfMeasure"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"规格型号",prop:"specification"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.specification,callback:function(t){e.$set(e.form,"specification",t)},expression:"form.specification"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"工序编码",prop:"processCode"}},[r("el-input",{attrs:{placeholder:"请输入工序编码"},model:{value:e.form.processCode,callback:function(t){e.$set(e.form,"processCode",t)},expression:"form.processCode"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"工序名称",prop:"processName"}},[r("el-input",{attrs:{placeholder:"请输入工序名称"},model:{value:e.form.processName,callback:function(t){e.$set(e.form,"processName",t)},expression:"form.processName"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"任务编号",prop:"taskCode"}},[r("el-input",{attrs:{placeholder:"请输入任务编号"},model:{value:e.form.taskCode,callback:function(t){e.$set(e.form,"taskCode",t)},expression:"form.taskCode"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"任务名称",prop:"taskName"}},[r("el-input",{attrs:{placeholder:"请输入任务编号"},model:{value:e.form.taskCode,callback:function(t){e.$set(e.form,"taskCode",t)},expression:"form.taskCode"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"不合格数",prop:"quantityUnqualified"}},[r("el-input",{attrs:{placeholder:"请输入不合格数"},model:{value:e.form.quantityUnqualified,callback:function(t){e.$set(e.form,"quantityUnqualified",t)},expression:"form.quantityUnqualified"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"合格品数量",prop:"quantityQualified"}},[r("el-input",{attrs:{placeholder:"请输入合格品数量"},model:{value:e.form.quantityQualified,callback:function(t){e.$set(e.form,"quantityQualified",t)},expression:"form.quantityQualified"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"致命缺陷数量",prop:"crQuantity"}},[r("el-input",{attrs:{placeholder:"请输入致命缺陷数量"},model:{value:e.form.crQuantity,callback:function(t){e.$set(e.form,"crQuantity",t)},expression:"form.crQuantity"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"严重缺陷数量",prop:"majQuantity"}},[r("el-input",{attrs:{placeholder:"请输入严重缺陷数量"},model:{value:e.form.majQuantity,callback:function(t){e.$set(e.form,"majQuantity",t)},expression:"form.majQuantity"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"轻微缺陷数量",prop:"minQuantity"}},[r("el-input",{attrs:{placeholder:"请输入轻微缺陷数量"},model:{value:e.form.minQuantity,callback:function(t){e.$set(e.form,"minQuantity",t)},expression:"form.minQuantity"}})],1)],1)],1)],2)],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"检测日期",prop:"inspectDate"}},[r("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择检测日期"},model:{value:e.form.inspectDate,callback:function(t){e.$set(e.form,"inspectDate",t)},expression:"form.inspectDate"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"检测结果",prop:"checkResult"}},[r("el-select",{attrs:{placeholder:"请选择检验结果"},model:{value:e.form.checkResult,callback:function(t){e.$set(e.form,"checkResult",t)},expression:"form.checkResult"}},e._l(e.dict.type.mes_qc_result,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"检测人员",prop:"inspector"}},[r("el-input",{attrs:{placeholder:"请输入检测人员"},model:{value:e.form.inspector,callback:function(t){e.$set(e.form,"inspector",t)},expression:"form.inspector"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),null!=e.form.ipqcId?r("el-divider",{attrs:{"content-position":"center"}},[e._v("检测项")]):e._e(),null!=e.form.ipqcId?r("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[r("Ipqcline",{ref:"line",attrs:{ipqcId:e.form.ipqcId,optType:e.optType}})],1):e._e(),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["view"==e.optType||"PREPARE"!=e.form.status?r("el-button",{attrs:{type:"primary"},on:{click:e.cancel}},[e._v("返回")]):e._e(),"PREPARE"==e.form.status&&"view"!=e.optType?r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保 存")]):e._e(),"PREPARE"==e.form.status&&"view"!=e.optType&&null!=e.form.ipqcId?r("el-button",{attrs:{type:"success"},on:{click:e.handleFinish}},[e._v("完成")]):e._e(),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},a=[],n=r("5530"),o=(r("d81d"),r("b775"));function i(e){return Object(o["a"])({url:"/mes/qc/ipqc/list",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/mes/qc/ipqc/"+e,method:"get"})}function c(e){return Object(o["a"])({url:"/mes/qc/ipqc",method:"post",data:e})}function u(e){return Object(o["a"])({url:"/mes/qc/ipqc",method:"put",data:e})}function d(e){return Object(o["a"])({url:"/mes/qc/ipqc/"+e,method:"delete"})}var m=r("8171"),p=r("373b"),f=r("e820"),h=r("1876"),y={name:"Ipqc",components:{WorkorderSelect:p["a"],WorkstationSelect:f["a"],Ipqcline:h["default"]},dicts:["mes_ipqc_type","mes_qc_result","mes_order_status"],data:function(){return{autoGenFlag:!1,optType:void 0,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,ipqcList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,ipqcCode:null,ipqcName:null,ipqcType:null,templateId:null,workorderId:null,workorderCode:null,workorderName:null,taskId:null,taskCode:null,taskName:null,workstationId:null,workstationCode:null,workstationName:null,processId:null,processCode:null,processName:null,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,quantityCheck:null,quantityUnqualified:null,quantityQualified:null,crRate:null,majRate:null,minRate:null,crQuantity:null,majQuantity:null,minQuantity:null,checkResult:null,inspectDate:null,inspector:null,status:null},form:{},rules:{ipqcCode:[{required:!0,message:"请输入或生产检验单编号",trigger:"blur"}],ipqcType:[{required:!0,message:"请选择检验类型",trigger:"change"}],workorderCode:[{required:!0,message:"请选择生产工单",trigger:"blur"}],workstationCode:[{required:!0,message:"请选择工作站",trigger:"blur"}],quantityCheck:[{required:!0,message:"检测数量不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.ipqcList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={ipqcId:null,ipqcCode:null,ipqcName:null,ipqcType:null,templateId:null,workorderId:null,workorderCode:null,workorderName:null,taskId:null,taskCode:null,taskName:null,workstationId:null,workstationCode:null,workstationName:null,processId:null,processCode:null,processName:null,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,quantityCheck:null,quantityUnqualified:null,quantityQualified:null,crRate:null,majRate:null,minRate:null,crQuantity:null,majQuantity:null,minQuantity:null,checkResult:null,inspectDate:new Date,inspector:null,status:"PREPARE",remark:null,attr1:null,attr2:null,attr3:null,attr4:null,createBy:null,createTime:null,updateBy:null,updateTime:null},this.autoGenFlag=!1,this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.ipqcId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加过程检验单",this.optType="add"},handleUpdate:function(e){var t=this;this.reset();var r=e.ipqcId||this.ids;s(r).then((function(e){t.form=e.data,t.open=!0,t.title="修改过程检验单",t.optType="edit"}))},handleView:function(e){var t=this;this.reset();var r=e.ipqcId;s(r).then((function(e){t.form=e.data,t.open=!0,t.title="查看检验单信息",t.optType="view"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.ipqcId?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.form.ipqcId=t.data,e.getList()})))}))},handleFinish:function(){var e=this,t=this;null!=this.form.checkResult?this.$refs["form"].validate((function(r){r&&e.$modal.confirm("是否完成检验单编制？【完成后将不能更改】").then((function(){t.form.status="CONFIRMED",t.submitForm(),t.open=!1}))})):this.$modal.msgError("请选择检测结果！")},handleDelete:function(e){var t=this,r=e.ipqcId||this.ids;this.$modal.confirm('是否确认删除过程检验单编号为"'+r+'"的数据项？').then((function(){return d(r)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("qc/ipqc/export",Object(n["a"])({},this.queryParams),"ipqc_".concat((new Date).getTime(),".xlsx"))},handleWorkorderSelect:function(){this.$refs.woSelect.showFlag=!0},onWorkorderSelected:function(e){void 0!=e&&null!=e&&(this.form.workorderId=e.workorderId,this.form.workorderCode=e.workorderCode,this.form.workorderName=e.workorderName,this.form.itemId=e.productId,this.form.itemCode=e.productCode,this.form.itemName=e.productName,this.form.specification=e.productSpc,this.form.unitOfMeasure=e.unitOfMeasure)},handleWorkstationSelect:function(){this.$refs.wsSelect.showFlag=!0},onWorkstationSelected:function(e){void 0!=e&&null!=e&&(this.form.workstationId=e.workstationId,this.form.workstationCode=e.workstationCode,this.form.workstationName=e.workstationName)},handleAutoGenChange:function(e){var t=this;e?Object(m["c"])("IPQC_CODE").then((function(e){t.form.ipqcCode=e})):this.form.ipqcCode=null}}},b=y,q=r("2877"),k=Object(q["a"])(b,l,a,!1,null,null,null);t["default"]=k.exports},b74e:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showFlag?r("el-dialog",{attrs:{title:"缺陷记录",visible:e.showFlag,modal:!1,width:"80%",center:""},on:{"update:visible":function(t){e.showFlag=t}}},[r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:defectrecord:add"],expression:"['mes:qc:defectrecord:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:defectrecord:edit"],expression:"['mes:qc:defectrecord:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("常见缺陷")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.defectrecordList}},[r("el-table-column",{attrs:{label:"缺陷描述",width:"400px",align:"center",prop:"defectName"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{type:"textarea"},model:{value:t.row.defectName,callback:function(r){e.$set(t.row,"defectName",r)},expression:"scope.row.defectName"}})]}}],null,!1,3640348867)}),r("el-table-column",{attrs:{label:"缺陷等级",align:"center",prop:"defectLevel"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{model:{value:t.row.defectLevel,callback:function(r){e.$set(t.row,"defectLevel",r)},expression:"scope.row.defectLevel"}},e._l(e.dict.type.mes_defect_level,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}],null,!1,619354251)}),r("el-table-column",{attrs:{label:"缺陷数量",align:"center",prop:"defectQuantity"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input-number",{attrs:{min:1},model:{value:t.row.defectQuantity,callback:function(r){e.$set(t.row,"defectQuantity",r)},expression:"scope.row.defectQuantity"}})]}}],null,!1,3813605272)}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return["view"!=e.optType?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:defectrecord:remove"],expression:"['mes:qc:defectrecord:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,2243317798)})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["view"==e.optType?r("el-button",{attrs:{type:"primary"},on:{click:e.cancel}},[e._v("返回")]):r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:qc:defectrecord:update"],expression:"['mes:qc:defectrecord:update']"}],attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")]),r("el-button",{on:{click:function(t){e.showFlag=!1}}},[e._v("取 消")])],1)],1):e._e()},a=[],n=(r("3c65"),r("d3b7"),r("159b"),r("a434"),r("b775"));function o(e){return Object(n["a"])({url:"/mes/qc/defectrecord/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/mes/qc/defectrecord",method:"put",data:e})}function s(e){return Object(n["a"])({url:"/mes/qc/defectrecord/"+e,method:"delete"})}var c={name:"Defectrecord",dicts:["mes_defect_level"],props:{qcId:null,qcType:null,lineId:null,optType:null},watch:{qcId:function(){this.queryParams.qcId=this.qcId},qcType:function(){this.queryParams.qcType=this.qcType},lineId:function(){this.queryParams.lineId=this.lineId}},data:function(){return{showFlag:!1,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,defectrecordList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,qcType:this.qcType,qcId:this.qcId,lineId:this.lineId,defectName:null,defectLevel:null,defectQuantity:null}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.defectrecordList=t.rows,e.total=t.total,e.loading=!1}))},handleAdd:function(){var e={recordId:null,qcId:this.qcId,qcType:this.qcType,lineId:this.lineId,defectName:null,defectLevel:null,defectQuantity:null,flag:"add",remark:null};this.defectrecordList.unshift(e)},handleUpdate:function(e){},confirm:function(){var e=this;0!=this.defectrecordList.length&&i(this.defectrecordList).then((function(t){e.$modal.msgSuccess(t.msg),200===t.code&&(e.showFlag=!1,e.getList(),e.$parent.getList())}))},handleDelete:function(e,t){var r=t.recordId||this.ids,l=this;this.$modal.confirm("是否确认删除缺陷记录？").then((function(){l.defectrecordList.forEach((function(t,a,n){a==e&&("add"==l.defectrecordList[e].flag?l.defectrecordList.splice(e,1):s(r).then((function(e){l.getList()})))}))})),this.$parent.getList()}}},u=c,d=r("2877"),m=Object(d["a"])(u,l,a,!1,null,null,null);t["default"]=m.exports},dfb9:function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return s})),r.d(t,"b",(function(){return c}));var l=r("b775");function a(e){return Object(l["a"])({url:"/mes/md/workshop/list",method:"get",params:e})}function n(){return Object(l["a"])({url:"/mes/md/workshop/listAll",method:"get"})}function o(e){return Object(l["a"])({url:"/mes/md/workshop/"+e,method:"get"})}function i(e){return Object(l["a"])({url:"/mes/md/workshop",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/mes/md/workshop",method:"put",data:e})}function c(e){return Object(l["a"])({url:"/mes/md/workshop/"+e,method:"delete"})}},f1e6:function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return c}));var l=r("b775");function a(e){return Object(l["a"])({url:"/mes/pro/workorder/list",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/mes/pro/workorder/"+e,method:"get"})}function o(e){return Object(l["a"])({url:"/mes/pro/workorder",method:"post",data:e})}function i(e){return Object(l["a"])({url:"/mes/pro/workorder",method:"put",data:e})}function s(e){return Object(l["a"])({url:"/mes/pro/workorder/"+e,method:"delete"})}function c(e){return Object(l["a"])({url:"/mes/pro/workorder/listItems",method:"get",params:e})}},f356:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return s}));var l=r("b775");function a(e){return Object(l["a"])({url:"/mes/md/workstation/list",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/mes/md/workstation/"+e,method:"get"})}function o(e){return Object(l["a"])({url:"/mes/md/workstation",method:"post",data:e})}function i(e){return Object(l["a"])({url:"/mes/md/workstation",method:"put",data:e})}function s(e){return Object(l["a"])({url:"/mes/md/workstation/"+e,method:"delete"})}}}]);