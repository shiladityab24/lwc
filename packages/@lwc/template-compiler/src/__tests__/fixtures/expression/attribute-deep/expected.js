import { registerTemplate } from "lwc";
const stc0 = {
  key: 0,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const { ncls: api_normalize_class_name, h: api_element } = $api;
  return [
    api_element("section", stc0, [
      api_element("p", {
        className: api_normalize_class_name($cmp.bar.foo.baz),
        key: 1,
      }),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
