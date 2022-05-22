import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/index-fa0ff56f.js";
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { style } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<picture><source${add_attribute("srcset", url, 0)} type="${""}">
    <img${add_attribute("src", url, 0)}${add_attribute("style", style, 0)} alt="${""}"></picture>`;
});
export { Image as default };
