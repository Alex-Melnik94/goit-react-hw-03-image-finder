(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2_-Wr",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__VGmXd"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2btH1",Modal:"Modal_Modal__1wGkG"}},16:function(e,t,a){e.exports={Button:"button_Button__mGynk"}},17:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=a(3),l=a(4),i=a(6),u=a(5),m=a(8),h=a.n(m),d=a(1),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()&&(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:h.a.Searchbar,children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.SearchForm,children:[Object(d.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(d.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleQueryChange})]})})}}]),a}(n.Component),g=a(14),b=a(9),j=a.n(b),f=a(12),y=a.n(f),v=function(e){var t=e.images,a=e.onClick;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags;return Object(d.jsx)("li",{className:y.a.ImageGalleryItem,onClick:function(){a(t)},children:Object(d.jsx)("img",{src:n,alt:r,className:y.a.ImageGalleryItemImage})},t)}))},O=a(15),S=a.n(O),_=a(16),I=a.n(_),x=function(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",onClick:t,className:I.a.Button,children:"Load more"})},k=a(13),w=a.n(k),C=document.querySelector("#modal-root"),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onEscCloseModal=function(t){"Escape"===t.code&&e.props.openModal()},e.onCloseModal=function(t){t.currentTarget===t.target&&e.props.openModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscCloseModal)}},{key:"render",value:function(){var e=this.props.modalImg;return Object(o.createPortal)(Object(d.jsx)("div",{className:w.a.Overlay,onClick:this.onCloseModal,children:Object(d.jsx)("div",{className:w.a.Modal,children:Object(d.jsx)("img",{src:e.largeImageURL,alt:e.tags})})}),C)}}]),a}(n.Component),F=a(10),G=(a(43),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,status:"idle",loader:!1,openModal:!1,modalImg:null},e.handleBtnClick=function(){e.setState((function(e){return{page:e.page+1,loader:!0}}))},e.showModal=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e.onImgClick=function(t){var a=e.state.images.find((function(e){return e.id===t}));e.setState({modalImg:a}),e.showModal()},e.fetchImages=function(t,a){return fetch("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("21964701-aaf906e928d661c46acce114f","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Some proplems with server"))})).then((function(t){var a=t.hits;0===a.length&&F.b.error("Nothing was found for your query."),e.setState((function(e){return{status:"resolved",images:[].concat(Object(g.a)(e.images),Object(g.a)(a))}}))})).catch((function(){e.setState({status:"rejected"})})).finally((function(){e.setState({loader:!1}),e.state.images.length>12&&e.scroll()}))},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.query,r=a.initialPage,o=this.state.page;n!==e.query&&(this.setState({images:[],page:1,loader:!0}),this.fetchImages(n,r)),this.state.page>t.page&&this.fetchImages(n,o)}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.loader,r=e.openModal,o=e.modalImg;return Object(d.jsxs)("div",{className:j.a.container,children:["idle"===t&&null,"resolved"===t?Object(d.jsxs)("div",{className:j.a.container,children:[Object(d.jsx)("ul",{className:j.a.ImageGallery,children:Object(d.jsx)(v,{images:a,onClick:this.onImgClick})}),a.length>=12&&!1===n?Object(d.jsx)(x,{onClick:this.handleBtnClick}):null]}):null,n&&Object(d.jsx)(S.a,{type:"ThreeDots",color:"#FF0000",height:100,width:100}),"rejected"===t&&F.b.error("Some proplems with server"),r&&Object(d.jsx)(M,{openModal:this.showModal,modalImg:o}),Object(d.jsx)(F.a,{autoClose:3e3})]})}}]),a}(n.PureComponent)),N=a(17),B=a.n(N),Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",page:1},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.page;return Object(d.jsxs)("div",{className:B.a.App,children:[Object(d.jsx)(p,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(G,{query:t,initialPage:a})]})}}]),a}(n.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3k_Hk",SearchForm:"Searchbar_SearchForm__2DKDA",SearchFormButton:"Searchbar_SearchFormButton__3Z6XG",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3FvmH",SearchFormInput:"Searchbar_SearchFormInput__Xb7xN"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__jouaJ",container:"ImageGallery_container__24qEt"}}},[[44,1,2]]]);
//# sourceMappingURL=main.2fee6dfc.chunk.js.map