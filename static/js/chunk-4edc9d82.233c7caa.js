(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4edc9d82"],{"4a8f":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"g",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a("b775");function o(e){return Object(n["a"])({url:"/mes/md/itemtype/list",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/mes/md/itemtype/list/exclude/"+e,method:"get"})}function l(e){return Object(n["a"])({url:"/mes/md/itemtype/"+e,method:"get"})}function i(){return Object(n["a"])({url:"/mes/md/itemtype/treeselect",method:"get"})}function s(e){return Object(n["a"])({url:"/mes/md/itemtype",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/mes/md/itemtype",method:"put",data:e})}function u(e){return Object(n["a"])({url:"/mes/md/itemtype/"+e,method:"delete"})}},"7dd7":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("b775");function o(e){return Object(n["a"])({url:"/mes/wm/wmstock/list",method:"get",params:e})}},d20f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:rtvendor:add"],expression:"['mes:wm:rtvendor:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:rtvendor:remove"],expression:"['mes:wm:rtvendor:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.rtvendorlineList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"物料编码",width:"120px",align:"center",prop:"itemCode"}}),a("el-table-column",{attrs:{label:"物料名称",width:"150px",align:"center",prop:"itemName","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"规格型号",align:"center",prop:"specification","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"单位",align:"center",prop:"unitOfMeasure"}}),a("el-table-column",{attrs:{label:"退货数量",align:"center",prop:"quantityRted"}}),a("el-table-column",{attrs:{label:"批次号",align:"center",prop:"batchCode"}}),a("el-table-column",{attrs:{label:"仓库",align:"center",prop:"warehouseName"}}),a("el-table-column",{attrs:{label:"库区",align:"center",prop:"locationName"}}),a("el-table-column",{attrs:{label:"库位",align:"center",prop:"areaName"}}),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark","show-overflow-tooltip":!0}}),"view"!=e.optType?a("el-table-column",{attrs:{label:"操作",width:"100px",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:rtvendor:edit"],expression:"['mes:wm:rtvendor:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:wm:rtvendor:remove"],expression:"['mes:wm:rtvendor:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}],null,!1,3658382474)}):e._e()],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"960px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"产品物料编码",prop:"itemCode"}},[a("el-input",{attrs:{readonly:"readonly",placeholder:"请选择产品物料编码"},model:{value:e.form.itemCode,callback:function(t){e.$set(e.form,"itemCode",t)},expression:"form.itemCode"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSelectStock},slot:"append"})],1)],1),a("StockSelect",{ref:"stockSelect",attrs:{batchCode:e.batchCode,vendorId:e.vendorId},on:{onSelected:e.onStockSelected}})],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"产品物料名称",prop:"itemName"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.itemName,callback:function(t){e.$set(e.form,"itemName",t)},expression:"form.itemName"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"退货数量",prop:"quantityRted"}},[a("el-input-number",{attrs:{max:e.form.quantityMax,placeholder:"请输入退货数量"},model:{value:e.form.quantityRted,callback:function(t){e.$set(e.form,"quantityRted",t)},expression:"form.quantityRted"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"规格型号",prop:"specification"}},[a("el-input",{attrs:{readonly:"readonly",type:"textarea"},model:{value:e.form.specification,callback:function(t){e.$set(e.form,"specification",t)},expression:"form.specification"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"单位",prop:"unitOfMeasure"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.unitOfMeasure,callback:function(t){e.$set(e.form,"unitOfMeasure",t)},expression:"form.unitOfMeasure"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"批次号",prop:"batchCode"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.batchCode,callback:function(t){e.$set(e.form,"batchCode",t)},expression:"form.batchCode"}})],1)],1),a("el-col",{attrs:{span:8}})],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"仓库",prop:"warehouseName"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.warehouseName,callback:function(t){e.$set(e.form,"warehouseName",t)},expression:"form.warehouseName"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"库区",prop:"locationName"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.locationName,callback:function(t){e.$set(e.form,"locationName",t)},expression:"form.locationName"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"库位",prop:"areaName"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.areaName,callback:function(t){e.$set(e.form,"areaName",t)},expression:"form.areaName"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],r=(a("d81d"),a("b775"));function l(e){return Object(r["a"])({url:"/mes/wm/rtvendorline/list",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/mes/wm/rtvendorline/"+e,method:"get"})}function s(e){return Object(r["a"])({url:"/mes/wm/rtvendorline",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/mes/wm/rtvendorline",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/mes/wm/rtvendorline/"+e,method:"delete"})}var c=a("4fb9"),d={name:"Rtvendorline",components:{StockSelect:c["a"]},props:{optType:null,rtId:null,batchCode:null,vendorId:null},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,rtvendorlineList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,rtId:this.rtId,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,quantityRted:null,batchCode:null,warehouseId:null,warehouseCode:null,warehouseName:null,locationId:null,locationCode:null,locationName:null,areaId:null,areaCode:null,areaName:null},form:{rtId:this.rtId},rules:{itemId:[{required:!0,message:"产品物料不能为空",trigger:"blur"}],quantityRted:[{required:!0,message:"退货数量不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,l(this.queryParams).then((function(t){e.rtvendorlineList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={lineId:null,rtId:this.rtId,itemId:null,itemCode:null,itemName:null,specification:null,unitOfMeasure:null,quantityRted:null,batchCode:null,warehouseId:null,warehouseCode:null,warehouseName:null,locationId:null,locationCode:null,locationName:null,areaId:null,areaCode:null,areaName:null,remark:null,attr1:null,attr2:null,attr3:null,attr4:null,createBy:null,createTime:null,updateBy:null,updateTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.lineId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加供应商退货行"},handleUpdate:function(e){var t=this;this.reset();var a=e.lineId||this.ids;i(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改供应商退货行"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.lineId?m(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):s(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.lineId||this.ids;this.$modal.confirm('是否确认删除供应商退货行编号为"'+a+'"的数据项？').then((function(){return u(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleSelectStock:function(){this.$refs.stockSelect.showFlag=!0,this.$refs.stockSelect.getList()},onStockSelected:function(e){void 0!=e&&null!=e&&(this.form.materialStockId=e.materialStockId,this.form.itemId=e.itemId,this.form.itemCode=e.itemCode,this.form.itemName=e.itemName,this.form.specification=e.specification,this.form.unitOfMeasure=e.unitOfMeasure,this.form.batchCode=e.batchCode,this.form.warehouseId=e.warehouseId,this.form.warehouseCode=e.warehouseCode,this.form.warehouseName=e.warehouseName,this.form.locationId=e.locationId,this.form.locationCode=e.locationCode,this.form.locationName=e.locationName,this.form.areaId=e.areaId,this.form.areaCode=e.areaCode,this.form.areaName=e.areaName,this.form.quantityRted=e.quantityOnhand,this.form.quantityMax=e.quantityOnhand)}}},p=d,f=a("2877"),h=Object(f["a"])(p,n,o,!1,null,null,null);t["default"]=h.exports}}]);