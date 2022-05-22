import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/index-fa0ff56f.js";
import Contact from "./Contact.svelte.js";
var MainContent_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');.main-content.svelte-f3hkt0{padding:20px 20px;display:flex;justify-content:space-around;align-items:center;height:150px}a.svelte-f3hkt0,p.svelte-f3hkt0{font-size:1.5em}a.svelte-f3hkt0{opacity:0.5;text-decoration:none;color:rgba(0, 0, 0, 0.693);transition:.5s}a.svelte-f3hkt0:hover{opacity:1}:root{font-family:Inter}p.svelte-f3hkt0{font-size:x-large}header.svelte-f3hkt0{font-size:xx-large}",
  map: null
};
const MainContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links } = $$props;
  const contactInfo = {
    phone: "(631) 743-0728",
    email: "anthony@anthonygabrieleactor.com"
  };
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css);
  return `<container class="${"main-content svelte-f3hkt0"}"><header class="${"svelte-f3hkt0"}">anthony gabriele</header>

<div class="${"contact"}">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}

<a${add_attribute("href", `mailto:${contactInfo.email}`, 0)} class="${"svelte-f3hkt0"}">${escape(contactInfo.email)}</a>
<p class="${"svelte-f3hkt0"}">${escape(contactInfo.phone)}</p>

<a${add_attribute("href", links.reel, 0)} class="${"svelte-f3hkt0"}">reel</a> | <a${add_attribute("href", links.resume, 0)} class="${"svelte-f3hkt0"}">resume</a></div>
</container>`;
});
export { MainContent as default };
