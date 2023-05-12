import { registerTemplate } from "lwc";
const stc0 = {
  key: 1,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    fid: api_scoped_frag_id,
    t: api_text,
    h: api_element,
    gid: api_scoped_id,
  } = $api;
  return [
    api_element(
      "a",
      {
        attrs: {
          href: api_scoped_frag_id($cmp.narita),
        },
        key: 0,
      },
      [api_text("KIX")],
      72
    ),
    api_element(
      "map",
      stc0,
      [
        api_element(
          "area",
          {
            attrs: {
              href: api_scoped_frag_id("#haneda"),
            },
            key: 2,
          },
          undefined,
          8
        ),
        api_element(
          "area",
          {
            attrs: {
              href: api_scoped_frag_id("#chubu"),
            },
            key: 3,
          },
          undefined,
          8
        ),
      ],
      64
    ),
    api_element(
      "h1",
      {
        attrs: {
          id: api_scoped_id("#narita"),
        },
        key: 4,
      },
      [api_text("Time to travel!")],
      72
    ),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
