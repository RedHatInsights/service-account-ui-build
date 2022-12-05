(self.webpackChunksas_ui=self.webpackChunksas_ui||[]).push([[587],{40400:(e,t,n)=>{"use strict";n.d(t,{IU:()=>c,Jh:()=>a});var a,i=n(9922),s=n(93264);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a||(a={}));let r=0;function c({name:e,xOffset:t=0,yOffset:n=0,width:c,height:o,svgPath:l}){var d;return d=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{size:r,color:d,title:u,noVerticalAlign:m}=e,v=(0,i.__rest)(e,["size","color","title","noVerticalAlign"]),p=Boolean(u),h=(e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}})(r),C=-.125*Number.parseFloat(h),_=m?null:{verticalAlign:`${C}em`},g=[t,n,c,o].join(" ");return s.createElement("svg",Object.assign({style:_,fill:d,height:h,width:h,viewBox:g,"aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img"},v),p&&s.createElement("title",{id:this.id},u),s.createElement("path",{d:l}))}},d.displayName=e,d.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},d}},84213:(e,t,n)=>{"use strict";n.d(t,{MU:()=>i,ZP:()=>r,by:()=>s});var a=n(40400);const i={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},s=(0,a.IU)(i),r=s},690:(e,t,n)=>{"use strict";t.zS={name:"KeyIcon",height:1024,width:1024,svgPath:"M802,320 C748.980664,320 706,277.019336 706,224 C706,170.980664 748.980664,128 802,128 C855.019336,128 898,170.980664 898,224 C898,277.019336 855.019336,320 802,320 M704,0 C527.3,0 384,143.3 384,320 C383.937788,357.490503 390.505571,394.696657 403.4,429.9 L0,824.1 L0,1024 L192,1024 L192,896 L320,896 L320,768 L448,768 L597,622 C596.906403,621.881923 596.838304,621.745723 596.8,621.6 C631.220126,633.811107 667.47802,640.034477 704,640 C880.7,640 1024,496.7 1024,320 C1024,143.3 880.7,0 704,0",yOffset:0,xOffset:0},t._m=n(35183).createIcon(t.zS),t.ZP=t._m},95979:()=>{},66912:()=>{},77903:()=>{},59204:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(85893),i=n(93264),s=n(65834),r=n(690),c=(n(77903),n(95979),n(66912),n(30645)),o=n(88603);const l=({serviceAccount:e,close:t})=>{const{t:n}=(0,c.useTranslation)(["kasTemporaryFixMe"]),[l,d]=(0,i.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.C0,Object.assign({emptyStateProps:{variant:s.EmptyStateVariant.large},emptyStateIconProps:{icon:r.ZP},titleProps:{title:n("credentials_successfully_generated"),headingLevel:"h2",size:s.TitleSizes.lg}},{children:[(0,a.jsx)(s.TextContent,{children:(0,a.jsx)(s.Text,Object.assign({component:s.TextVariants.small,className:"pf-u-mt-lg"},{children:n("connect_to_the_kafka_instance_using_this_clientID_and_secret")}))}),(0,a.jsxs)(s.InputGroup,Object.assign({className:"pf-u-mt-lg"},{children:[(0,a.jsx)(s.InputGroupText,Object.assign({className:"mk--generate-credential__empty-state--input-group"},{children:n("client_id")})),(0,a.jsx)(s.ClipboardCopy,Object.assign({isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientID","data-ouia-component-id":"button-copy-clientID",textAriaLabel:n("client_id")},{children:null==e?void 0:e.client_id}))]})),(0,a.jsxs)(s.InputGroup,Object.assign({className:"pf-u-mt-md"},{children:[(0,a.jsx)(s.InputGroupText,Object.assign({className:"mk--generate-credential__empty-state--input-group"},{children:n("common.client_secret")})),(0,a.jsx)(s.ClipboardCopy,Object.assign({isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientSecret","data-ouia-component-id":"button-copy-clientSecret",textAriaLabel:n("common.client_secret")},{children:null==e?void 0:e.client_secret}))]})),(0,a.jsx)(s.TextContent,{children:(0,a.jsx)(s.Text,Object.assign({component:s.TextVariants.small,className:"pf-u-mt-lg"},{children:n("create_service_account_credentials_warning_message")}))}),(0,a.jsx)(s.Bullseye,Object.assign({className:"pf-u-mt-lg"},{children:(0,a.jsx)(s.Checkbox,{label:n("client_id_confirmation_checkbox_label"),isChecked:l,onChange:e=>{d(e)},id:"check-1",name:"check1",ouiaId:"checkbox"})})),(0,a.jsx)(s.Button,Object.assign({variant:"primary",isDisabled:!l,onClick:t,"data-testid":"modalCredentials-buttonClose",ouiaId:"button-close"},{children:n("close")}))]}))})}},45587:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CreateServiceAccountConnected:()=>g,default:()=>x});var a=n(9922),i=n(85893),s=n(93264),r=n(65834),c=n(81318),o=n(30645),l=n(75381);const d=e=>"error"===e.name.validated;var u=n(77459),m=n(50834),v=n(84213);const p=({serviceAccountRequest:e,createServiceAccount:t,setServiceAccountRequest:n,id:a})=>{const{t:c}=(0,o.useTranslation)(["kasTemporaryFixMe"]),[u,m]=(0,s.useState)(!1),p=e=>(void 0===e.name.value||""===e.name.value.trim()?(e.name.validated="error",e.name.errorMessage=c("common.this_is_a_required_field")):void 0===e.name.value||/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.name.value.trim())?void 0!==e.name.value&&e.name.value.length>l.Nw?(e.name.validated="error",e.name.errorMessage=c("serviceAccount.service_account_name_length_is_greater_than_expected",{maxLength:l.JB})):e.name.validated="success":(e.name.validated="error",e.name.errorMessage=c("common.input_filed_invalid_helper_text")),e),h=()=>{n({name:{value:""}})};return(0,i.jsxs)(r.Form,Object.assign({onSubmit:a=>{a.preventDefault(),m(!0);const i=p(e);n(Object.assign({},i)),d(i)||t().then((()=>h()))},id:a},{children:[(0,i.jsx)((()=>u&&d(e)?(0,i.jsx)(r.FormAlert,{children:(0,i.jsx)(r.Alert,{variant:"danger",title:c("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})}):(0,i.jsx)(i.Fragment,{})),{}),(0,i.jsx)(r.FormGroup,Object.assign({label:c("serviceAccount.short_description"),isRequired:!0,fieldId:"text-input-short-description",helperTextInvalid:e.name.errorMessage,validated:e.name.validated,helperText:c("common.input_filed_invalid_helper_text"),labelIcon:(0,i.jsx)(r.Popover,Object.assign({headerContent:(0,i.jsx)("div",{children:c("serviceAccount.short_description_popover_title")}),bodyContent:(0,i.jsx)("div",{children:c("serviceAccount.short_description_popover_body")})},{children:(0,i.jsx)("button",Object.assign({"aria-label":c("serviceAccount.short_description_popover_button"),onClick:e=>e.preventDefault(),className:"pf-c-form__group-label-help"},{children:(0,i.jsx)(v.ZP,{noVerticalAlign:!0})}))}))},{children:(0,i.jsx)(r.TextInput,{isRequired:!0,type:"text",id:"text-input-short-description",name:"text-input-short-description",value:e.name.value,onChange:e=>{n((t=>{const n=Object.assign(Object.assign({},t),{name:{value:e}});return p(n)}))},validated:e.name.validated,autoFocus:!0,ouiaId:"text-input"})}))]}))};var h=n(59204);const C="create_service_account_form";var _;!function(e){e.CreateServiceAccount="CreateServiceAccount",e.Credentials="Credentials"}(_||(_={}));const g=({onCreate:e,title:t,hideModal:n})=>{const{t:v}=(0,o.useTranslation)(["kasTemporaryFixMe"]),g=(0,u.a)(),{kas:{apiBasePath:x}}=(0,m.useConfig)()||{kas:{}},{addAlert:b}=(0,m.useAlert)()||{},[j,f]=(0,s.useState)({name:{value:""}}),[A,y]=(0,s.useState)(!1),[S,O]=(0,s.useState)(_.CreateServiceAccount),[k,I]=(0,s.useState)(),w=()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==g?void 0:g.sas_ui.getToken();if(t)try{const n=new c.SecurityApi(new c.Configuration({accessToken:t,basePath:x}));y(!0);const a=yield n.createServiceAccount((e=>{if(void 0===e.name.value)throw new Error("ServiceAccountRequest.name must not be undefined");return{name:e.name.value}})(j)).then((e=>null==e?void 0:e.data));I(a),O(_.Credentials),b&&b({title:v("serviceAccount.service_account_creation_success_message"),variant:r.AlertVariant.success}),e&&e()}catch(e){(e=>{var t;let n;(0,l.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason),b&&b({title:v("something_went_wrong"),variant:r.AlertVariant.danger,description:n})})(e)}y(!1)})),T=()=>{n()};return(0,i.jsx)(r.Modal,Object.assign({id:"modalCreateSAccount",variant:r.ModalVariant.medium,title:S===_.CreateServiceAccount?t:"",isOpen:!0,onClose:T,appendTo:l.wx,actions:S===_.CreateServiceAccount?[(0,i.jsx)(r.Button,Object.assign({variant:"primary",type:"submit",form:C,isDisabled:d(j)||A,spinnerAriaValueText:v("submitting_request"),isLoading:A,"data-testid":"modalCreateServiceAccount-buttonSubmit",ouiaId:"button-create"},{children:"Create"}),"submit"),(0,i.jsx)(r.Button,Object.assign({variant:"link",onClick:T,"data-testid":"modalCreateServiceAccount-buttonCancel",ouiaId:"button-cancel"},{children:v("cancel")}),"cancel")]:[],ouiaId:"modal-CredentialsSuccess",showClose:!1},{children:(0,i.jsx)((()=>{if(S===_.CreateServiceAccount)return(0,i.jsx)(p,{createServiceAccount:w,setServiceAccountRequest:f,serviceAccountRequest:j,id:C});if(void 0===k)throw new Error("resetServiceAccount must not be undefined");return(0,i.jsx)(h.Z,{serviceAccount:k,close:n})}),{})}))},x=g}}]);
//# sourceMappingURL=587.c8ba431d.js.map