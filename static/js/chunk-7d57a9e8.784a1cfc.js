(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d57a9e8"],{"4a8f":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/md/itemtype/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/mes/md/itemtype/list/exclude/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/mes/md/itemtype/"+e,method:"get"})}function l(){return Object(r["a"])({url:"/mes/md/itemtype/treeselect",method:"get"})}function s(e){return Object(r["a"])({url:"/mes/md/itemtype",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/mes/md/itemtype",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/mes/md/itemtype/"+e,method:"delete"})}},5755:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/md/mditem/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/mes/md/mditem/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/mes/md/mditem",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/mes/md/mditem",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/mes/md/mditem/"+e,method:"delete"})}},8171:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n("b775");function a(e){return Object(r["a"])({url:"/system/autocode/get/"+e,method:"get"})}function o(e){return Object(r["a"])({url:"/system/autocode/rule/list",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/system/autocode/rule/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/system/autocode/rule",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/system/autocode/rule",method:"put",data:e})}function m(e){return Object(r["a"])({url:"/system/autocode/rule/"+e,method:"delete"})}},"84fd":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/md/bom/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/mes/md/bom/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/mes/md/bom",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/mes/md/bom",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/mes/md/bom/"+e,method:"delete"})}},a304:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},["view"!=e.optType?n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:md:bom:add"],expression:"['mes:md:bom:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")]),n("ItemSelect",{ref:"itemSelect",on:{onSelected:e.onItemSelected}})],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:md:bom:remove"],expression:"['mes:md:bom:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),n("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1):e._e(),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.bomList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{label:"物料编码",align:"center",prop:"bomItemCode"}}),n("el-table-column",{attrs:{label:"物料名称",align:"center",prop:"bomItemName","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"规格",align:"center",prop:"bomItemSpec","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"单位",width:"60px",align:"center",prop:"unitOfMeasure"}}),n("el-table-column",{attrs:{label:"使用比例",width:"90px",align:"center",prop:"quantity"}}),n("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark","show-overflow-tooltip":!0}}),"view"!=e.optType?n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:md:bom:edit"],expression:"['mes:md:bom:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["mes:md:bom:remove"],expression:"['mes:md:bom:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}],null,!1,4117021130)}):e._e()],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"BOM物料编码",prop:"bomItemCode"}},[n("el-input",{attrs:{readonly:"",placeholder:"请输入BOM物料编码"},model:{value:e.form.bomItemCode,callback:function(t){e.$set(e.form,"bomItemCode",t)},expression:"form.bomItemCode"}})],1),n("el-form-item",{attrs:{label:"BOM物料名称",prop:"bomItemName"}},[n("el-input",{attrs:{readonly:"",placeholder:"请输入BOM物料名称"},model:{value:e.form.bomItemName,callback:function(t){e.$set(e.form,"bomItemName",t)},expression:"form.bomItemName"}})],1),n("el-form-item",{attrs:{label:"BOM物料规格",prop:"bomItemSpec"}},[n("el-input",{attrs:{readonly:"",type:"textarea",placeholder:"请输入内容"},model:{value:e.form.bomItemSpec,callback:function(t){e.$set(e.form,"bomItemSpec",t)},expression:"form.bomItemSpec"}})],1),n("el-form-item",{attrs:{label:"BOM物料单位",prop:"unitOfMeasure"}},[n("el-input",{attrs:{readonly:"",placeholder:"请输入BOM物料单位"},model:{value:e.form.unitOfMeasure,callback:function(t){e.$set(e.form,"unitOfMeasure",t)},expression:"form.unitOfMeasure"}})],1),n("el-form-item",{attrs:{label:"物料使用比例",prop:"quantity"}},[n("el-input-number",{attrs:{precision:4,step:.1,min:0,placeholder:"请输入物料使用比例"},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1),n("el-form-item",{attrs:{label:"备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},a=[],o=(n("d81d"),n("d3b7"),n("159b"),n("84fd")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showFlag?n("el-dialog",{attrs:{title:"物料产品选择",visible:e.showFlag,modal:!1,width:"80%",center:""},on:{"update:visible":function(t){e.showFlag=t}}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:4,xs:24}},[n("div",{staticClass:"head-container"},[n("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请输入分类名称",clearable:"",size:"small","prefix-icon":"el-icon-search"},model:{value:e.itemTypeName,callback:function(t){e.itemTypeName=t},expression:"itemTypeName"}})],1),n("div",{staticClass:"head-container"},[n("el-tree",{ref:"tree",attrs:{data:e.itemTypeOptions,props:e.defaultProps,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.handleNodeClick}})],1)]),n("el-col",{attrs:{span:20,xs:24}},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[n("el-form-item",{attrs:{label:"物料编码",prop:"itemCode"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入物料编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.itemCode,callback:function(t){e.$set(e.queryParams,"itemCode",t)},expression:"queryParams.itemCode"}})],1),n("el-form-item",{attrs:{label:"物料名称",prop:"itemName"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入物料名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.itemName,callback:function(t){e.$set(e.queryParams,"itemName",t)},expression:"queryParams.itemName"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.itemList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),e.columns[0].visible?n("el-table-column",{key:"itemCode",attrs:{label:"物料编码",width:"120",align:"center",prop:"itemCode"}}):e._e(),e.columns[1].visible?n("el-table-column",{key:"itemName",attrs:{label:"物料名称","min-width":"120",align:"left",prop:"itemName","show-overflow-tooltip":!0}}):e._e(),e.columns[2].visible?n("el-table-column",{key:"specification",attrs:{label:"规格型号",align:"left",prop:"specification","show-overflow-tooltip":!0}}):e._e(),e.columns[3].visible?n("el-table-column",{key:"unitOfMeasure",attrs:{label:"单位",align:"center",prop:"unitOfMeasure","show-overflow-tooltip":!0}}):e._e(),e.columns[4].visible?n("el-table-column",{key:"itemOrProduct",attrs:{label:"物料/产品",align:"center",prop:"itemOrProduct","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[n("dict-tag",{attrs:{options:e.dict.type.mes_item_product,value:t.row.itemOrProduct}})]}}],null,!1,2047508773)}):e._e(),e.columns[5].visible?n("el-table-column",{key:"itemTypeName",attrs:{label:"所属分类",align:"center",prop:"itemTypeName",width:"120"}}):e._e(),e.columns[6].visible?n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}],null,!1,3078210614)}):e._e()],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.confirmSelect}},[e._v("确 定")]),n("el-button",{on:{click:function(t){e.showFlag=!1}}},[e._v("取 消")])],1)],1):e._e()},l=[],s=(n("4de4"),n("5755")),m=(n("c3e0"),n("8171"),n("5f87"),n("4a8f")),u=n("ca17"),c=n.n(u),d=(n("542c"),{name:"MdItemSelect",dicts:["sys_yes_no","mes_item_product"],components:{Treeselect:c.a},data:function(){return{showFlag:!1,ids:[],selectedRows:[],single:!0,multiple:!0,showSearch:!0,total:0,itemList:null,itemTypeOptions:void 0,itemTypeName:void 0,defaultProps:{children:"children",label:"label"},queryParams:{pageNum:1,pageSize:10,itemCode:void 0,itemName:void 0,itemTypeId:0},columns:[{key:0,label:"物料/产品编码",visible:!0},{key:1,label:"物料/产品名称",visible:!0},{key:2,label:"规格型号",visible:!0},{key:3,label:"单位",visible:!0},{key:4,label:"物料/产品",visible:!0},{key:5,label:"物料分类",visible:!0},{key:6,label:"创建时间",visible:!0}]}},watch:{itemTypeName:function(e){this.$refs.tree.filter(e)}},created:function(){this.getList(),this.getTreeselect()},methods:{getList:function(){var e=this;this.loading=!0,Object(s["d"])(this.queryParams).then((function(t){e.itemList=t.rows,e.total=t.total,e.loading=!1}))},getTreeselect:function(){var e=this;Object(m["f"])().then((function(t){e.itemTypeOptions=t.data}))},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(e){this.queryParams.itemTypeId=e.id,this.handleQuery()},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.itemId})),this.single=1!=e.length,this.multiple=!e.length,this.selectedRows=e},confirmSelect:function(){this.ids!=[]&&0!=this.ids.length?(this.$emit("onSelected",this.selectedRows),this.showFlag=!1):this.$notify({title:"提示",type:"warning",message:"请至少选择一条数据!"})}}}),p=d,f=n("2877"),h=Object(f["a"])(p,i,l,!1,null,null,null),b=h.exports,y={name:"Bom",components:{ItemSelect:b},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,bomList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,itemId:this.itemId,bomItemId:null,bomItemCode:null,bomItemName:null,bomItemSpec:null,unitOfMeasure:null,quantity:null,enableFlag:null,attr1:null,attr2:null,attr3:null,attr4:null},form:{},rules:{quantity:[{required:!0,message:"物料使用比例不能为空",trigger:"blur"}]}}},props:{optType:void 0,itemId:void 0},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(o["d"])(this.queryParams).then((function(t){e.bomList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={bomId:null,itemId:null,bomItemId:null,bomItemCode:null,bomItemName:null,bomItemSpec:null,unitOfMeasure:null,itemOrProduct:null,quantity:null,enableFlag:"Y",remark:null,attr1:null,attr2:null,attr3:null,attr4:null,createBy:null,createTime:null,updateBy:null,updateTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.bomId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.$refs.itemSelect.showFlag=!0},handleUpdate:function(e){var t=this;this.reset();var n=e.bomId||this.ids;Object(o["c"])(n).then((function(e){t.form=e.data,t.open=!0,t.title="修改产品BOM关系"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(o["e"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()}))}))},handleDelete:function(e){var t=this,n=e.bomId||this.ids;this.$modal.confirm('是否确认删除产品BOM关系编号为"'+n+'"的数据项？').then((function(){return Object(o["b"])(n)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},onItemSelected:function(e){var t=this;this.form.itemId=this.itemId,void 0!=e&&null!=e&&e.forEach((function(e){t.form.bomItemId=e.itemId,t.form.bomItemCode=e.itemCode,t.form.bomItemName=e.itemName,t.form.bomItemSpec=e.specification,t.form.unitOfMeasure=e.unitOfMeasure,t.form.itemOrProduct=e.itemOrProduct,t.form.quantity=1,t.form.enableFlag="Y";Object(o["a"])(t.form).then((function(e){t.$modal.msgSuccess("新增成功"),t.getList()}))}))}}},g=y,v=Object(f["a"])(g,r,a,!1,null,null,null);t["default"]=v.exports},c3e0:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n("b775");function a(e){return Object(r["a"])({url:"/mes/md/unitmeasure/list",method:"get",params:e})}function o(){return Object(r["a"])({url:"/mes/md/unitmeasure/listprimary",method:"get"})}function i(){return Object(r["a"])({url:"/mes/md/unitmeasure/selectall",method:"get"})}function l(e){return Object(r["a"])({url:"/mes/md/unitmeasure/"+e,method:"get"})}function s(e){return Object(r["a"])({url:"/mes/md/unitmeasure",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/mes/md/unitmeasure",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/mes/md/unitmeasure/"+e,method:"delete"})}}}]);