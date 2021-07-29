(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2_-Wr",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__VGmXd"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2btH1",Modal:"Modal_Modal__1wGkG"}},14:function(e,t,a){},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__jouaJ"}},16:function(e,t,a){e.exports={Button:"button_Button__mGynk"}},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=a(13),l=a(4),i=a(5),u=a(7),m=a(6),h=a(14),d=a.n(h),g=a(9),p=(a(22),a(15)),b=a.n(p),j=a(11),f=a.n(j),y=a(1),v=function(e){var t=e.id,a=e.img,n=e.tags,r=e.onImgClick;return Object(y.jsx)("li",{className:f.a.ImageGalleryItem,onClick:function(){r(t)},children:Object(y.jsx)("img",{src:a,alt:n,className:f.a.ImageGalleryItemImage})})},S=function(e){var t=e.images,a=e.onImgClick;return Object(y.jsx)("ul",{className:b.a.ImageGallery,children:t&&t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags;return Object(y.jsx)(v,{id:t,img:n,tags:r,onImgClick:a},t)}))})},O=a(8),I=a.n(O),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()&&(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:I.a.Searchbar,children:Object(y.jsxs)("form",{onSubmit:this.handleSubmit,className:I.a.SearchForm,children:[Object(y.jsx)("button",{type:"submit",className:I.a.SearchFormButton,children:Object(y.jsx)("span",{className:I.a.SearchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{className:I.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleQueryChange})]})})}}]),a}(n.Component),x=a(16),k=a.n(x),C=function(e){var t=e.onClick;return Object(y.jsx)("button",{type:"button",onClick:t,className:k.a.Button,children:"Load more"})},w=a(12),M=a.n(w),F=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onEscCloseModal=function(t){"Escape"===t.code&&e.props.openModal()},e.onCloseModal=function(t){t.currentTarget===t.target&&e.props.openModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscCloseModal)}},{key:"render",value:function(){var e=this.props.modalImg;return Object(o.createPortal)(Object(y.jsx)("div",{className:M.a.Overlay,onClick:this.onCloseModal,children:Object(y.jsx)("div",{className:M.a.Modal,children:Object(y.jsx)("img",{src:e.largeImageURL,alt:e.tags})})}),F)}}]),a}(n.Component),N=a(17),B=a.n(N),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",images:[],page:1,status:"idle",loader:!1,openModal:!1,modalImg:null},e.handleBtnClick=function(){e.setState((function(e){return{page:e.page+1,loader:!0}}))},e.showModal=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e.onImgClick=function(t){var a=e.state.images.find((function(e){return e.id===t}));e.setState({modalImg:a}),e.showModal()},e.handleFormSubmit=function(t){e.setState({searchQuery:t,page:1})},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.page,o=n.searchQuery;(o!==t.searchQuery||r>t.page)&&(1===r&&this.setState({images:[]}),this.setState({loader:!0}),function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("21964701-aaf906e928d661c46acce114f","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Some proplems with server"))}))}(o,r).then((function(e){var t=e.hits;0===t.length&&g.b.error("Nothing was found for your query."),a.setState((function(e){return{status:"resolved",images:[].concat(Object(s.a)(e.images),Object(s.a)(t))}}))})).catch((function(){a.setState({status:"rejected"})})).finally((function(){a.setState({loader:!1}),a.state.images.length>12&&a.scroll()})))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.loader,r=e.openModal,o=e.modalImg;return Object(y.jsxs)("div",{className:d.a.App,children:[Object(y.jsx)(_,{onSubmit:this.handleFormSubmit}),"idle"===t&&null,"resolved"===t?Object(y.jsxs)("div",{children:[Object(y.jsx)(S,{images:a,onImgClick:this.onImgClick}),a.length>=12&&!1===n?Object(y.jsx)(C,{onClick:this.handleBtnClick}):null]}):null,n&&Object(y.jsx)(B.a,{className:"loader",type:"ThreeDots",color:"#FF0000",height:100,width:100}),"rejected"===t&&g.b.error("Some proplems with server"),r&&Object(y.jsx)(G,{openModal:this.showModal,modalImg:o}),Object(y.jsx)(g.a,{autoClose:3e3})]})}}]),a}(n.Component);c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3k_Hk",SearchForm:"Searchbar_SearchForm__2DKDA",SearchFormButton:"Searchbar_SearchFormButton__3Z6XG",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3FvmH",SearchFormInput:"Searchbar_SearchFormInput__Xb7xN"}}},[[44,1,2]]]);
//# sourceMappingURL=main.dce6ad25.chunk.js.map