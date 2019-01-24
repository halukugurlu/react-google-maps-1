(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/controls/MapTypeControl.ts":function(o,e,A){"use strict";A.d(e,"a",function(){return t});var n=A("./src/controls/internal/useMapControl.ts");function t(o){var e=o.position,A=void 0===e?"TOP_RIGHT":e,t=o.style,a=void 0===t?"DEFAULT":t,r=o.mapTypeIds,s=void 0===r?["HYBRID","ROADMAP","SATELLITE","TERRAIN"]:r;return Object(n.a)(function(o){return{name:"mapTypeControl",options:{style:o.MapTypeControlStyle[a],position:o.ControlPosition[A],mapTypeIds:s.map(function(e){return e&&o.MapTypeId[e]})}}}),null}try{t.displayName="MapTypeControl",t.__docgenInfo={description:"",displayName:"MapTypeControl",props:{position:{defaultValue:null,description:"Position id. Used to specify the position of the control on the map.",name:"position",required:!1,type:{name:'"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT"'}},style:{defaultValue:null,description:"Style id. Used to select what style of map type control to display.",name:"style",required:!1,type:{name:'"DEFAULT" | "DROPDOWN_MENU" | "HORIZONTAL_BAR"'}},mapTypeIds:{defaultValue:null,description:"IDs of map types to show in the control.",name:"mapTypeIds",required:!1,type:{name:'("HYBRID" | "ROADMAP" | "SATELLITE" | "TERRAIN")[]'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/MapTypeControl.ts#MapTypeControl"]={docgenInfo:t.__docgenInfo,name:"MapTypeControl",path:"src/controls/MapTypeControl.ts#MapTypeControl"})}catch(a){}},"./src/controls/__docs__/MapTypeControl.mdx":function(o,e,A){"use strict";A.r(e),A.d(e,"default",function(){return E});var n=A("./node_modules/react/index.js"),t=A.n(n),a=A("./node_modules/@mdx-js/tag/dist/index.js"),r=A("./node_modules/docz/dist/index.m.js"),s=A("./src/__docs__/DocsComponents.tsx"),i=A("./src/controls/MapTypeControl.ts");function c(o){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"===typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function g(o,e){if(null==o)return{};var A,n,t=function(o,e){if(null==o)return{};var A,n,t={},a=Object.keys(o);for(n=0;n<a.length;n++)A=a[n],e.indexOf(A)>=0||(t[A]=o[A]);return t}(o,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(n=0;n<a.length;n++)A=a[n],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(o,A)&&(t[A]=o[A])}return t}function p(o,e){for(var A=0;A<e.length;A++){var n=e[A];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function B(o,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(o):e}function l(o){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function m(o,e){return(m=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}var E=function(o){function e(o){var A;return function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(A=B(this,l(e).call(this,o))).layout=null,A}var A,n,c;return function(o,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&m(o,e)}(e,t.a.Component),A=e,(n=[{key:"render",value:function(){var o=this.props,e=o.components,A=g(o,["components"]);return t.a.createElement(a.MDXTag,{name:"wrapper",components:e},t.a.createElement(a.MDXTag,{name:"h1",components:e,props:{id:"zoom-control"}},"Zoom Control"),t.a.createElement(a.MDXTag,{name:"p",components:e},"Controls display options of zoom control."),t.a.createElement(a.MDXTag,{name:"p",components:e},t.a.createElement(a.MDXTag,{name:"strong",components:e,parentName:"p"},"Google Maps Docs:")),t.a.createElement(a.MDXTag,{name:"ul",components:e},t.a.createElement(a.MDXTag,{name:"li",components:e,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"a",components:e,parentName:"li",props:{href:"https://developers.google.com/maps/documentation/javascript/reference#MapTypeId"}},"google.maps.MapTypeId")),t.a.createElement(a.MDXTag,{name:"li",components:e,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"a",components:e,parentName:"li",props:{href:"https://developers.google.com/maps/documentation/javascript/reference#ControlPosition"}},"google.maps.ControlPosition")),t.a.createElement(a.MDXTag,{name:"li",components:e,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"a",components:e,parentName:"li",props:{href:"https://developers.google.com/maps/documentation/javascript/reference#MapTypeControlStyle"}},"google.maps.MapTypeControlStyle")),t.a.createElement(a.MDXTag,{name:"li",components:e,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"a",components:e,parentName:"li",props:{href:"https://developers.google.com/maps/documentation/javascript/reference#MapTypeControlOptions"}},"google.maps.MapTypeControlOptions"))),t.a.createElement(r.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYbVTjgfVZnYeQ3RNfhPTgARyEkAB9bDDzgXDJFgs512ofQ4H4VVUAFe0oPYBCZksRJ5kcGghCgJCULlNDJAwrDdDRSgoDgSQGKYliQPYyi7Q1dggylLjTS1doZIdaDNB8ZDjTldoAAEYCIEQBlQQFhRgFSA1QXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnPyABYQvYAA2EKwvWMAQIAMR9aBEj8_hnEORFHUwdgAAUhH4JZDJ-OBIsRVKa3SmhnAgOzLnYABGWLwvkcErOoGyAEE5lc9hI2g8gbCgdBwyQzlXLEMaYxkdhUWcmBuGAQ8HKc7F5G3WtgEm6AZuCAAyM7xmYmBKGaY7ptm7gnvlMBQisntUHadgAH4NhO8NI3mq57tO1BeprKQZGrd8zFhWTMDAMIoCmQGFqWiHhpXGtE3kggcAyzIUmvAgDtrOtiPg2ZSbJusxOu1jBKgVcadW3aNv4bVzwywaAFUABlLH4ZmaaFfIPr4EBLF1UrsPsc8ADlLHPUUhexln2CiRjrofOBNoAbXaAAJABNG9RQabUwvlUVdUG7V9UG0qrfaZxBqVvm-YaJXnaV0VRUGhp5faABdcH1fYLdhakCmGOpqRcfxwniYOqRMehsxvxAPicLwuDCIp0jMwIOAcGLrAgIE_QGBo2TcaWaDccvAz9CWXH5eLTjtPYfgzSlaTLJrtT2AAcWELEYAYuBHYaBnsCmLT3TQz1K6wAhJFHyhx8n2fV_7we6N1IgJwX1CQBwT00FoARUHiIjolcHmYmEvfIPc-jZiWBjysoIcT-4s_PSa1ErMF-tE355BgBvLesw4B80oJ2DIndF4AMkBAi0KQx6wAtJrOAFooDwOnKguAkDMETxgXAhBAh-78j0AIRGRUKbT2_n8ac38hweRrCDcMVw27FiouDOGDpXrvWMjBOCTChAsKjOsAcP97hiLOBI34XAMhsLgOFTkVxUChASOwAAPnJLUTdiaMEoB4dQWwSbuXWNZOiODOJuQgVA2Ak8KHTkjLIxEcAS50FYDgPU9gABa2EHalWcNhae2EADS55jYAEJPx9QsBAZokY4k4PmhwsmXQCB9HMNohIVELDg3WDkvJdZnFkLuNPHeeNmEqKOMAc-OBZF3GQqweIjJNo4OQlufhfVL4ZHod0GOsw1EwlXnQdAdhD4vEYF_Qc6ju46H0GCEAi0smTglCcVASQeirIEN9K4GDN6wBwDgnAfNoh81nHzF4GR4j9MsoI6Ub0pSiNGTMca6w7LCDlG5AAHOFCwa1YCjWgpsCAKRCBXH4MmAATP5EK_AkLAv2bQ8F7AoDRCuMmRKSwoAxXYBaDq8L4WoqSewZprSKJgyuJ8tRmjDHmmMfoUx5jLEbNKWOcp0Y1aMEYaVBo9TpzU0TAxdy1LFnIV-ZETasqiDIVBRtYAyrkKIloZtDVV9elxyIuIoVIqMgHUSWDDOSgs6YVMmxISIk6YSRtVAUuWgKAgSruBfe4DiEMQZuxJBp8L60JvlAIhVTfVCWoS6LAYDBl0MlN0e1MBw1QHGZs4wphsZGDKpQMWoiuD1B5sQnIERVrzHICk5IExuiixeKI26BJugCT9SyKtGtZg4ATLyGROba3UCOewbYMBWjNCcvMetJzx7nJgTgZNpUe0fSousdNnb2COXWpwdABai3DlWguSx-ZJis3XfWzWV15hFkdTulgtVsWJA7ZmvkNZlX9o5lzXmAsUUGI5jbUqeoADq8sQkKx5p-5ZhtdTm0CbqRWg0-bYRvINFWIBF01mXZmxo2o7AnsQqO-AO64DDDGGgBtF7Gb3trF2msmtxIwB1v2waAhMiJEYIO4dZ6brNAnWci5iaHxiCebDaNslhHvJZIm5N3yIrztEW5fgUsZbm2HobQWIA0XKtGq-7m_MVNouo9raZo09b8BNmbC2lVlk2ztqE8z-U3bng9l7c8NnJbK39oHfgwcepXHE5JISjKtE6I4psiBPrfNQEjPY7gi1JNkxvseWFIA9MOsZpVVcP8PryM2WTZVVweOzBo8mtdsA9bKs88LGtH1cvTtndJ6gesKvGTK2rCwSXaPTKq1reYOsp1fJ8FF9gPgLptruDgXj6A9ZYGDpyNFxS0XyE5Ka7luTr7sAKVAJ5mds4rzXpU7ebrV7Oorm6sCEEwETTNLQWpSwIG1P9f_XuohkN9ReRemyu2YE1P21MNy5ALtJq-4wNb-j2PjtIT1uAjZ1hrY0Shl7tiR6kNC3oVeo1fsSkuwDoHBiuP_jyw2SMa3FtRrAfD97MwEICEHQIW7P2_u1MB4F4HOPwejdcJT41fKLDQ7METl7ImPq5GIWTqeQrAZXFw6D05uOYHWM4QNFsMvHHENqZGYXn3kcECJ8k1J6SYGZNXBMIQYwXRjHPIx4UnOab8EcDonIPxpSqHlDgr6xHW3bfqCigA1MLCw_A_2ZBmCRoQIgiwZldMR9wFTEcfaFbUnARqBBiA7ap1cprimUrKStnBAnifCbeQLpx0evlMuZ3j2XFh4enqV_9jXqui-1K15wHXmt9dq0N6MVbMBTfm4EJbsm1u2jTVWyHyAGAnezBd-YN3X2PcgHYN75rtY_cB6Dy-UPG4swR_MPMqmyeZvsDT0hDPPKs-zBz3z_PojC9S4YhTqnYvUhg7y-zxpNj5dtpf6NG7X26839mHfjIBvFDbXMaXXF_VvMmdvY3LvdgM3IQXvYWAfW3YfB3MfdoLyKnSfEjd3ZZefH3ZZf3HDTYScNfT4DfcccwSPHfF_JPVLNWQ_EpGsTPcwDAjIDbC1bOWNYNO-AgB-J-EuYuI7PQE7F7XDdgWZAgRgSwJYSwKJIdCZUCAzVjetSwRaNyUqWIbYKQpYc8LAcgKAUITAFjIdFQmQuQxIMQfjPqfnPNOAXUDlKUO5QdSMDpAw9qN6bYH4EYD8K4VwxkTgLDBwqCJbcpPw7oOJNyIHIbCXZoMI1yZ6fgMxCxPuJ7M1AeWhYZR0QUNnVwDwMFTZGAAAR1CHiDgEjBEE2HLCyMikyDyJgCZS8CEglFQBzxsJZFsHXByLqJcM6XcNQE8NGB8PYDiNsGqK6PyJCJW1sHsOSIICcJgB6LcPmiG34CKJKOfjn2IzCNaMvxZDPBmMsUsFcBSCkIUKmUCNmMbDCKuEsCZVRBnDnE2WYPEKCJaSEAiFw1LkoEcgeI-HiHCzCNNUYLaPMDPHMLgFOLnnOL2CCKuN6JuKZQYyY2MLY1UPLy2WW3MEjCRNcDvVsBxMSEWMZHfDJl-jCJ60jEjGwiwCWC4CwHmn6zpJJNrCuAOKlBwFYzKMBPmn8HYAJJRJUKsLSLMBBICPPGKPiD_TxCkMhxrFcBuLRQ8AVLf2yMyAiCqMjHlKsD1mUOaEsE83YCVO1N1KsANNYyuBNNuLRkaIpFQA0SuBtOaPRJSTGlsB-NiAvAlPC1cCWA8AW3RIsGeLREZCKSP0shALSWmKCPmM1Pmj0QMTiSjNmJjL9IgNrGeMRmEhgFDMYIr3f1cCOLnDcn2KCMLNjNDPhw8ELNGhLNmLLL9OAIjizVsF4NQA8B0U4BSB-C6E7xR0owjILOOPYAiLcirOOLTMDJP3MEzOIRzMpXh1cHBJrLHHBPLLf1QBsg8CXOLJXKHTKIbMpRdM1PBJwFgFnELBHMNJPLPJSAmAnIxPKRnOzPWFzKNGFDGlgHHFGn8mVE4DrBCGvLoFvLwF_IgE9093vPh1Y1GkXL3L1ggGDlDLzI3KmFcHsCmhyDclcB1KHUQtXErPQpOlGg8BwsSDwvDNrCPLiTIJyPVM1MIuml9IYsWAHSHX9Ky3TKnKNFKOfLVjDjDMmKn3RF4sYIvxEXaLgHdKlHFPWJlM1IVMNIRIdOEFtPROeI6KdHGIWNcGWMug0tVNyNgEjD9J-hCBwDWNKOMqBheNmJwFsE1N9KBOeyEyEV2LpDgG1CCBmBkviDkq1OkMUqsAaJUqdKeK4tsB8qgClImAcsNNpI8q8siqcueRcteXEvMBmE0PQvcDSHQDUUhMmQwAuM5UtwHBgFYDUWVJrCjQIEqqsHtNW0ZwMVKjZxiF8rRM2SPLKoqsWXiMiLnkZQDIfJWzWznIoqgr3NGjZLxk5IJwGsWR5LsH5MtKFOQpshYDADACuBapFAgHarUPcnkFDM_OmDgGytnDzDcifMbM5JwHSgEHPElDwEjGgv6w4vh26oADVejRpuq1FSLyKyZ4carvq3DRoar_rWNyLVwqLbBPKYBvKvSPEuhWBQbGQlgQbej2LhY_Azq_ALrMLxhhKkLawNqwAAbwa540beKyZ-L5tGznjcbzrcrTKyb2AAtCkzBwZNsrUgEGJnVy5tBK4TtPU6435G4rwW5BcYBzxNrLFrtiFxQwAFaYBHIsg7tlkHtI1PVNkycrt1hr9oFqkhUepFIl5rVaBV514i8zqvtQFZJzt0cYArk5jZwNbzauDb5J5H5oAKJUidbpbmbshxk_5llz5JBPaQ0bt8bcq1F7ah4IF4aZhOiuh9QDIRxQ6Pag1b5E6vKU6J507466IIFzxWB9BDZKhYABA7BM6UFI7Q1S7y7K6Mg_aqIA6GJG6sxa7PQO6y6aBI0XtY1MiFk5F0S0MKMrBiC0Ba0-wJVSgDk6hO1H0K8Dljkn9p0XabkUg7kr5HlKVx6LAs1rBuhp62qOI56FVigsVyqFxyND7l72AFUAsiBAgBBGyD72Aj6p7qIz735A9ihWsHxF6H1PJ8t9MX0QATNzZtRQN-BLN7ZHZYGQBXZ3ZPYlYkHfY3N5ZI0LAP6s1Kk_67AQZ18yIaAS4l6bEMLwx-0E5eFMB36TAV0_1NhzBignzigqpEJYgBoQgez7cegoBNDDL_xO0V1BphtOBdAtkyriEyGQh-xKBL49hmhY14ACAlhSiRwBjvCQg7BXAypdQGg77P6H79ChG6iGhrJ-1HT3AGGM0J7zwb46iRJr1hG7BihL6Qgx957aEr6WQTg3gwUzGdhjH-zjhbBhHYJAmk1BGdhAk_lrGQrbH96H7HhV1doCgl1H0l1GH0Mis8NsNA8ZBQmH7n0eEtQZ1nBnA2EMgYh4A7GV17BsVvECnmhT1imKHOFmm4B5YfQYB-17iCgGn0NHB8EjgIEch7qSMPBJRtgUghA3och61W1-bRH0NrBRiqAxn8xoAOJAhhjbAIA6iD1ggn48M_Ay6UCWgxwV18EEEcheTW0IEjhIoNySn1gZmdh5m2gMBRnhQBm0Qhn97cmJ6Nmhhm6jhNn_i8wRgWGSNnmBHNCsMp9iDNZQmxHWH9RBgZa-6CAr6Cx8RWlamIA8Mpm3dYnB0ch8E4gBdRjmC8w3psQ9H-xsUipuHzARheTgnKXaSOWbBJpVhiEvH2BihLHqAsWS7cX8W8R5HihyR40uAr66Wpzsh3maxqAmnNDvpIwb6aA16pcWcJXiFO6phsd16RsxXUAjWcX9AmVWBFH0BhnQXCRpgMAq6AjVgEgYW4WnniEjgAm6iLRuXkWSM0W1mJ725aACRogSNigNWKWr78b0B3XcRdF9nNHPXYBFgV1-hoUphAh7rugJhRiyI1WLBqAom6jNWdhtXVxdWCB9XJ0eNsWTWmdzWS5LXrWTW0U7WHWnXD7J7Rik33WoWvWchYXTniCQxSM54NY6BoR62AiV1IAuglmUXuhT0BJXA0AMgy29hUBRQoVCBq3tha21Z63G3uNp0u3cW22DWLlO2W3cWe3fC-3gX7GB2wXXXk3EFR2s2TmXQy6jhfWMh2g7BDIIENZfgCmgOV1W1N2QJt2XQBA93xXsWsWy7tXe2uB-3P7B3wW3Xf2iHoXx2fXiDnmwOoPIPsAXg7B4PEIt2d2UPOny2rXsXdRwgsPX2cP32V0v3h2iPM3vXJ3ugKPwPsWYRaE6PUWGPEOmPUO2OIFdQgOuPhi32KK8H8Pv2R27Auh5gshk3kg4gx2D1oAi3yO_XjhCZpON320WP93tRCZVP7WeONOQXP2XWBPIXiOTOJ313pajhURR6ZpjifI5x6OZgFPHPjjHH0BnP1OcmP28P-OIWPXjP_2_P4XLPURWq7AQvMQChQ27OQH1XUBouUg1aRR4vXPEu-PPPUu_3hP_PT1AhPg8MuAwVXAwAr5-x3BqI3b3yFUCgFOHxYBqvHXeP1n6vCPvOhPSORODn8hjmznwXLnR9bBNgqWCFhv7PqBLAzPYECFshxvcOv6h2GufOMuyPbP_6n48X-xBxamjOY74AFP9vkYg64uH8XOJu3Okuzu7BF3RiV2muiv_7PGiWRRnucrXvdvUB4nIhPvtWL234n7GqX7EF5tuPfvaupvzuZu0uSOAOSM_gu8wEvBFnVvG0XvN04ebwfnpkkedXcWrgOKKeiqOaOIDFFmYBR88wzX72N7rlZx6fKed6Hl1sXzsOcfUN3Pkvpuf3Zv0vQeIuRXtVagHuf4nuNgYfyGSvWP7ADkmfpfTutOvPCffPruJHihNhOwCgr7IenIdeLq9eKMH7qBDZtkChjfsfTeUuCfGv5v_OAGwGut0AHfHuofne0hXf77mQrXQ-2sfe1OavZf_uzeLu5vifW05WhBZjjJE2uWaeFPv58-NWaeTuua-oxCK6Zu7B1DNDGB1gR67g0Uv0QB43NDVYLB2-K22gq2KXu_gdEiD2j2CAT2h_e_FPiEOPHt1gp_rXlO1l5_lk0OQtoPJ_V-yvCZN-R_yvKu5-awp_yvYvd-O_UBRumQQAV-R_3v4A3Fsgz-9voBx-aen_4e_lPv3_Reiqv_r-j-t-hvWhH_xv7n9PedvWcCAIAEj8xsUAnvlv1L6WJjIUAoUoJjASikGIMWCOJIGqKkMpgNKdYMqjRRcI6AxA7pr02PDhQsmsBW9rX0V60oDeFLNFH32iYntmBo_PNmwPj6L9wg7AxfkBz4HodoO7A8riIMJgH8xBMXDAOwMv7sC7-h3e5nIJf6fd2BCPIgCoPj4_9GeNPdgUAKvgaDSu4A6KCkAMGsdYBOg-PogNEyoADB1AiVOlmMix8FUxAg5IqVmbfNFmfzAQLpkT4PgNMIAeBtZhTxdNzGsAS1vXyJro11grjOopW1gAns1Bo0J8l5j_r-ZmU0lSWjQHZSXF0SleRXNLTVyi5D8wNDuNXiVqMBlM-oPmNqDYCsoaAjYQnBWXfx6wIOegFisQgIASs2hwcL_MQjVq0BIwT5Yoc0M1hLAOhDEHodXn6EwAGcuiAXk22vZUwCcgWYYShWGy6gZgGWXoTACTr5006hkPvGNAZLRYOKFgGIbAE8qIwdEBAHmA0HFzCUqBi-ZwcLG5bCNwh--CwJ8zmYLNfmQkYUB8PCYVBYh_feIRSzUGPCWY6vKomjiyCb1ZwEWGBEsChHTZhYgDdAB1hox-ChseOTEeNjRFNZaaKItWEZieF_IARUIgEWiPJEUs3h1kAEV8I8G_CxmAI84TsJBExNNC4I1cASIPxNC1hk0GHugA2FbDq8n3NRAiJmDCjHBjeEunLSlCUljhQ1cYbMDmpjA8cBOYsB8D6Dhh1G6wzYdKMbyTlMSRwtGKcOGw-JcWHwCkAIAaAoV3AiIO5KiHSDV0NRmALUYxn0AJISaR1F8ksD1hTZGysosAJYgVGmiYaqSU9ENgFEE0pRA0e8i1nbQdDYxG5SMNGNyrJi4Ah-dPDWCUDsA9YaY7IBmIDGUpJWTdOvhUIhYQ5Dhow1cL3Rbirh0kPzWgOgGFi_QzRZMagFoLxqCjUY7YmmOMKbHZBIwwZeoiTRZhKB8C_FMmKz3wKMDNCAIjsWV3ZFcDF8i4w9pwKYGzj92PA9RluLX4z8BBe46fhPGEFHjRBZ48QbwRFALjawFbQmLFxvGsdZBR4-QQ_2zarjbxqAd7q_0FEQjw4-7PQYAQsEfjWORg73sBP_HbjfB6AUwf-OoBWCPotgkCfuzUGfdexW4iMtQFQk094xcEj_ojxp7jRH6fyDrHElPBjg1BqMemhhLDKQSJxFFcOJ2IZ7diCa6E5CZhNQBdjPuuE8OJWWYmjRNYZEs8F2MBiNlIJrHLiYROgjs92shpfiUNhkkCFKAAAKWcDQYqJWY_8VOPVj0Tw4uk3kcfmNGHDGAYqOsCtC6BgBNoPwTAEqjZibQ1UAjfwD0z6ZapyBfTXVJSjJjABT0ERRqroiGyHCyYjAPWjPgTzDFei3SWYPtC3FHQqGdAbSUFOtp_5k6oUyRA0lMmchtJUgE1OwWUDZw0EOObBDAjwRHcBAoaYXA_xQ6CEhax2AwB6lfjQQgx8taWtMPdqCAtQ2tBqVigITTw2p4deunc3QDTwB6qVTgBkXjTsBC0JCZKXAHFAMhkYalbZNQD2QZB4CylJoskyYJLTdkyQHBP2hiKP5BedwHYulVHAEBh4-CGZlAEngP4eefPHIAYgOml4ZcYVY0XEmjAgAccKKYjLiAwCjA4yCZHHKZTuk7scgl7aXMdKr4pV0BblAoTbUqmalMq5hK4IM1nBMoppwuOadcNyHNCcutAMYWOGmGTCWpvBWgIwAxk20sZyMRsBxVWnCgrgyQ1cDgmORjgLpZieIDdKJHFIZRxrOUQQFDFvVwxY0PGRDMzFDUjReSb0Z5OGrmBBp08RGRAHMJLBUYgsxfB0OmFES6ZVRZIeaJZnnTLpHMmBBpO9EME_RIs8HMWIorPERZuUy1PxDCwiR66IWWYMmkOw1ThCdU07A7Wlqy1gxCkWulrVSKqRgiNYQ2i4g_gG0hcNtaeKbS7jm1w622JKUbVtoa4i6XqHYXnU0qp106fUz0P1OzpR1iEuwrOQXUMja1xpRUZNE3xrCWAKB3QKEkVVYpsZnpI2BiBmLRRSx9RPDfqrB1QBcpqqfTG4nXNDIOCBo_aTuRlhzxiEkcjMb6v0HcDfYV-Vc_gK9ASBwA0cdAZNOZhbklwMogWdeV0E3lhYMxB0AxMvMSyJ8t5qmQ6QsNbmXzj5XcjcqfMdCOom-ggEQFkCvlLAd5OAUUB_IxyOoT5S8sLG_PXnxAa8KWdZMAtfn8B7iQQAgJ9RJYjAv5N8q9iNh-LwLEFXeZNEAoAHnyFUKCn-ahIfkZZUBueVyqdOdkpTHUluehOqVyhjRmZIOTjO20VEzz2Ic8vajQAao_ccZawqvHDOSmiT1yNkSLIIuTnyzVhNkaCHFhgBLBR5G5BxNxSlDChCSGSPkTZCbRCQMx2w4uaqVLmUABZi0BRXYHjKHU_RJiy2ZHJlp8yjFQ1NFkmMfllFoIesWRcHHuHo08xxQAACTABZF8gDMcUHcWkZ2IOi6iQxJlkmjVZLMBxWOAzFETXFfTYJTrL1g-K_F7kwJcEpBkugcg4S2mjmT9GyKkRJCxwZbO5ocErU9db2vwTdmuoPZDAMStYJ6B_Z9Qn1ewPyUsAFQ-giIGQlTJJiW4mFT09tmpkKjtQOlXSzCDADEA-C5gGQK4ESXaidLRlioywH0oao_zWl7SxjLiSkJ9L-5a1KYF0HmnfZO8ao69m0o6V7LhFFFOAKMrurChHqk0SMH1n2WcVjlLSPIM9U1hwhnlC2HMo3meJHLrh5-UaUPQmktQ2o4vTIEFnWC4h0AEwZ-q_VDKQo82iKtglDLQF55TpMI2gBCoWKgM7g4ua6JLlvnqJCBrUdqHiqhXxB1l7bHAHisWnGiTc5o-lRSsjD5A2oOAOFRMDGEUr8AMAMfslUxUOgwVRUOdJfGpUwqawWANFW_XWAMLtEGPOVcKXIVpUmlOKmAOKpoADKYERKsdCwqOlkqpMl8baooxoCSraVhq-PGapDkSyRqMBC5Fqv5lChL4OAGkgo1dWJAhVqqo0LDI1VwiUgOqwlcwtQWiy0UDWagODJZwBqLVPOKNRcgDWMrykzKhNcL0DURrUAp5aIGSFqyZrCUKQb1Y0oFz-q01IkglfIiGWGrFSzE-NUL1dopAuxsaoYj_IDVdik19qs5SNlbXMTDh0EbFA2zkmU8cAty8IHgAJREpFJXKtRhSjVh9qcUg6oqjgG7I8qsUE65ieZX8Dzwe2IKmGadMigTBLAlAbtZTyDUVriVBq0leGuiB4Arg_JFtWmslXTK41oa6NaWv4mvTyk-6vAGGGyChBEQlJSUOQCWD0k0YgG8yoVUfD0kMaDqutVvREl_KoZPNLCE7OVw081EtS4CPUvqlnZpaStNqYHJQwB1MqOwMUb1W7o8E-CvtEabuqaXR1BR-VSwOMgbkGYkiJVGRIshuJqIGqWOMqK1T2pQApCaiV5R9RRrjIyhvPZGnIikVTA2abkYjdsFI1yJka5VdDb0A9HcLNedwRvH9UWTuidRv1RZAzS4pk1bZnBAuaGj0U1EDFGG4Wp7IDq2iZg4QB8PoBeCJBHRuoiBHhoDkdSg51ELqXDUSpek-pFGn2hsVhyjTRSudBGnsPTpyU0o5oVRfMpWVoo0Ajm4uFcAc1ObMANAVze5oaqWA-Foi9OnhvE1gBBhCWgQISQQ1y41hqW8ILNN57bClakYOrcXEbyw0EqCNSKi1tQBpaGtYAPTVLVa2Zj7yw2pWoNqzBuRhtJNY8IZHG1qb9NV1CrVVrGqCU52c23nhNoICmbKl5m0sTQDoFV0BCLqTDaBDs1dSmpUoFWl5rNrtTzQ1GrFbRuNa4tDtLdauRYEY29VmNdgDimk3gCCMaAVoCJoGxqp4Id27AXSLhgPkQBNhFof7ZfG-CUA4d0aWJi8AtDIhVwesWQvIWIyWk1EWSiMPdOByUlmkbOFIPIn5LIgxAion7syXBiylkkdoqyO1B40bK2l01NFPW0yx5jsdyQXHSYT1L46UZgLN2vpJpScbFkPCh1oVvwGLIStuGiTTSm01y7NtC210HJsM0ljeZfs_mSrNeURlEyTOxELhOYJSyIl8OQRk6OQ4RDpq5lNiCSwhKoyUgjYLnZyApLCxIwesLzkrJhC4saMU2BaPgTQA5dmdOAKKO5udHM99ANGZWaTu8hizol_4-HObw11yJ5t2o_QF7ohbmFdGTclQvjrEnqwjyXnHiTTC86Rg495OzSeOMnFczawhoyJXrqxQtlnRJcTWM8rRi4AughkMuoDFNl5iudvLEPYiDKXmo8pvNWYMAm8qWjqpdSs7Q0tGnzs5QdYrMJsk747B_B3LOgqxziEciN9smEAFUCgBb7ghrHdccewpb-Dc2hAE_YIKU7hB_BEHYhPsG33bj2OQHR_di2g5UJT9b-9fpcwP1P706ZdV_XeKHIH78uoB7fscQP7-D8uOXEUFAZP5j4IDhMKZFAcv7-COuV_JQdiDfH-CVug0x_r_uf4fcaeBBl_thALEtiSD-E9QeQYP0KoqDb_Wg5JMFH-DFJzBwUVAcAnU4GDyyKEVwYJpQGwJkA_g_wFt7GChDuVKA-YPYOAHZguGLgNIeIPsCEJyA8QyAFkRl9UAKhmgz1DH12yI65muWUKhs21SGA8OdpR7AQz2Aok_g3CDjmwg4JsIRBgQFQf-JfDcI_cKw7Bj5i2Gok2EZwJYEGh2GHD2EJwy4bcMeGEgXhnLjsG8OpF4coScJDzFFB8x_BhAW4PcEeAXIccswWwB8EiCSAcEkgAo5IE0CRpRSUUZwL9hh38y-Iwuh4tLxl2rQ6jmw0aIeFCDEwPgf2OofzNgXtHHsjeaHZsOHWYRRofEUMqMbxj-BEgVkUaCOOmNDGcACMRBG5CWOUoujPRrwOgDvSzB5gvzDCuyqGPerRSZ4NWjsAfzOAxwjAJvT91eV_a4AAOy0KyItCg6AdTIGrTZCxDsyOIbkX6ScDGC8lkQjZKir8aul6xrD_h0I4EeCOwmA9HFCE_EChN-GAjQRkI3YeJnMqbj_MhgoZPKTImoAqJmw7CYxMImTpTSugAyC6D2BPDszb7tLrTQ4D4dgOt4x8Z3YiKpgRJ0aICY7wgnUAiQMEzriJMkmYTWJ-8qKehMBHiZTes0fDniO7AdyBAS49sGuXCxFT9yh6k9UGHmB-sYAVAH3sL0gpeCITfQhKF7yaSfROYjFT6tFKmGGgL1IdE0YKDyLUAzgP9V4nkT3GHWTKH01wFaOKnlyKp002qcbzUm-gSaek1cZGOhmw9XYcou6c9PwBMxjZGo0McOFpKUj2ENI3zHkDfRBGHgTIPCF1jysvEigELr9JSCKA0gkQMcJVrOisZuAvi1jPIDOjpcvhzZ4ANKdhPyAOG6wAFVxTlOrhNTmAT8gsWoAenyAXphgrbLqjbBji_4TQNQCELz7wImyfgLIv4AJYgQxIKoN4AyDI6fQ5IHA-sH4BAd8g1Abc8sn8g4Bbz_kV_fwHKBDHjI15_gOI3yB_gJkx5sFJgHJCUBEgDLfIG7QexBtiwe50ED_rRT8AogaAN8yoAjAaA_a0Fw_QjSmQIgHd15jij3B80JYOoiUHAACjvPo6oAMwPwHedf2-4QA-kQyB9FMhdB4LAAPQ6j3mcAiUSi5rS1BWhIg8F_C4ReIvxAyLrgCi__2zHyBNsIIbwEUdQCQAUgAEW5agFXPuoQAHkEALQF9BZBtz_ADVRaFAsHH-A4l-QEZaAA",__position:0,__code:"<DocsMap>\n  <MapTypeControl\n    style=\"DEFAULT\"\n    position=\"TOP_CENTER\"\n    mapTypeIds={['HYBRID', 'ROADMAP', 'SATELLITE', 'TERRAIN']}\n  />\n</DocsMap>",__scope:{props:this?this.props:A,DocsMap:s.b,MapTypeControl:i.a}},t.a.createElement(s.b,null,t.a.createElement(i.a,{style:"DEFAULT",position:"TOP_CENTER",mapTypeIds:["HYBRID","ROADMAP","SATELLITE","TERRAIN"]}))),t.a.createElement(r.f,{of:i.a}))}}])&&p(A.prototype,n),c&&p(A,c),e}()},"./src/controls/internal/useMapControl.ts":function(o,e,A){"use strict";A.d(e,"a",function(){return s});var n=A("./node_modules/react/index.js"),t=A("./src/context/GoogleMapsContext.ts"),a=A("./src/internal/useDeepCompareMemo.ts");function r(o,e,A){return e in o?Object.defineProperty(o,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):o[e]=A,o}function s(o){var e=Object(t.d)(),A=o(Object(t.f)()),s=A.name,i=A.options,c=Object(a.a)(function(){return i||{}},[i]);Object(n.useEffect)(function(){var o;return e.setOptions((r(o={},s,!0),r(o,"".concat(s,"Options"),c),o)),function(){var o;e.setOptions((r(o={},s,!1),r(o,"".concat(s,"Options"),void 0),o))}},[s,c])}try{s.displayName="useMapControl",s.__docgenInfo={description:"",displayName:"useMapControl",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/internal/useMapControl.ts#useMapControl"]={docgenInfo:s.__docgenInfo,name:"useMapControl",path:"src/controls/internal/useMapControl.ts#useMapControl"})}catch(i){}}}]);
//# sourceMappingURL=controls-docs-map-type-control.1430de2c2abd7a340e6e.js.map