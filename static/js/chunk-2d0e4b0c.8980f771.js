(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4b0c"],{"90fe":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index)+" ")]}}])}),e("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),e("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.author))])]}}])}),e("el-table-column",{attrs:{label:"Pageviews",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])}),e("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{attrs:{type:t._f("statusFilter")(a.row.status)}},[t._v(t._s(a.row.status))])]}}])}),e("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Display_time",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{staticClass:"el-icon-time"}),e("span",[t._v(t._s(a.row.display_time))])]}}])})],1)],1)},s=[],n=a("b775");function i(t){return Object(n["a"])({url:"/vue-admin-template/table/list",method:"get",params:t})}var r={filters:{statusFilter(t){const e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data(){return{list:null,listLoading:!0}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,i().then(t=>{this.list=t.data.items,this.listLoading=!1})}}},o=r,u=a("2877"),c=Object(u["a"])(o,l,s,!1,null,null,null);e["default"]=c.exports}}]);