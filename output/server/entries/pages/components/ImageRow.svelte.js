import { c as create_ssr_component, a as each, v as validate_component } from "../../../chunks/index-fa0ff56f.js";
import Image from "./shared/Image.svelte.js";
/* empty css                                                               */const css = {
  code: ".imageGrid.svelte-1d541p2{display:flex;overflow-x:hidden}.imageContainer.svelte-1d541p2{width:15vw;height:15vw;overflow:hidden}",
  map: null
};
const ImageRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imgUrls = [
    "images/headshots/headshot1.jpg",
    "images/headshots/headshot2.jpg",
    "images/headshots/headshot1.jpg",
    "images/GM0A2507.jpg",
    "images/headshots/headshot1.jpg",
    "images/GM0A2507.jpg",
    "images/GM0A2642.jpg",
    "images/GM0A2507.jpg",
    "images/headshots/headshot1.jpg",
    "images/headshots/headshot2.jpg",
    "images/GM0A2507.jpg"
  ];
  $$result.css.add(css);
  return `<div class="${"imageGrid svelte-1d541p2"}">${each(imgUrls, (url) => {
    return `<div class="${"imageContainer svelte-1d541p2"}">${validate_component(Image, "Image").$$render($$result, {
      url,
      style: "width: 20vw; min-height: 20vw; "
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      url,
      style: "width: 20vw; min-height: 20vw; "
    }, {}, {})}
</div>`;
  })}
</div>`;
});
export { ImageRow as default };
