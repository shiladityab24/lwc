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
          href: api_scoped_frag_id("#kansai-airport"),
        },
        key: 0,
      },
      [api_text("KIX")],
      160
    ),
    api_element(
      "map",
      stc0,
      [
        api_element(
          "area",
          {
            attrs: {
              href: api_scoped_frag_id("#eneos-gas"),
            },
            key: 2,
          },
          undefined,
          32
        ),
        api_element(
          "area",
          {
            attrs: {
              href: api_scoped_frag_id("#kawaramachi"),
            },
            key: 3,
          },
          undefined,
          32
        ),
      ],
      0
    ),
    api_element(
      "h1",
      {
        attrs: {
          id: api_scoped_id("kansai-airport"),
        },
        key: 4,
      },
      [api_text("Don't forget your passport!")],
      160
    ),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
