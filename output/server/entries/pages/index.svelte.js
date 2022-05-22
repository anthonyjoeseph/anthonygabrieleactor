import { c as create_ssr_component, v as validate_component } from "../../chunks/index-fa0ff56f.js";
import MainContent from "./components/MainContent.svelte.js";
/* empty css                                                            */import "./components/Contact.svelte.js";
const links = {
  reel: "https://www.youtube.com/watch?v=HkWQp_y0ccU",
  resume: "/images/resume.pdf"
};
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: `.wrapper.svelte-j18fnd{background-color:black;height:100vh;width:100vw;margin:-10px;padding:0;display:flex;position:relative}.wrapper.svelte-j18fnd::before{content:'';background-image:url("/images/GM0A2507.jpg");background-repeat:no-repeat;background-size:cover;background-position:center center;opacity:0.5;margin:-10px;position:absolute;top:0px;right:0px;bottom:0px;left:0px}.main-content.svelte-j18fnd{flex:1;transform:translateY(-30vh);width:50vw;border-radius:100;background-color:white;position:relative;align-self:center;justify-self:center;align-items:center}.svelte-j18fnd{overflow-x:hidden}`,
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-j18fnd"}" style="${"background-color: black;"}"><div class="${"main-content svelte-j18fnd"}">${validate_component(MainContent, "MainContent").$$render($$result, { links }, {}, {})}</div>





</div>`;
});
export { Routes as default };
