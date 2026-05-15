const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wordEngine-D5l8dY8W.js","assets/matter-RI5pnDm3.js","assets/vendor-ds3eMsMa.js","assets/styled-components-BwL9-xBl.js","assets/framer-motion-D4M_OxTT.js"])))=>i.map(i=>d[i]);
import{d as c,A as t,a8 as pe,a9 as P,aa as he,ab as ue,ac as ge,ad as me,ae as fe,af as xe,ag as G,ah as N,ai as be,aj as Y,ak as ye,R as ve,al as we}from"./vendor-ds3eMsMa.js";import{v as $e,s as je,y as n,o as ke}from"./styled-components-BwL9-xBl.js";import"./matter-RI5pnDm3.js";import{m as b}from"./framer-motion-D4M_OxTT.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const Se=$e`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-size: 16px !important;
    font-family: Inter, system-ui, sans-serif;
    font-weight: 400;
    transform: none !important;
    zoom: 1 !important;
    scale: 1 !important;
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
  }

  body {
    font-size: 1rem !important;
  }

  body {
    background: ${({theme:e})=>e.colors.bg};
    color: ${({theme:e})=>e.colors.text};
    font-family: Inter, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`,x={colors:{bg:"#0A0A0A",surface:"#262626",surfaceSoft:"#26262680",text:"#e5e7eb",textSoft:"#d2d2d2",muted:"#FAFAFA",accent:"#FFFFFF",orange:"#FF6900",orangeLight:"#FF690033",purple:"#AD46FF",purpleLight:"#AD46FF33",blue:"#00d4ff"},typography:{h1:{size:"3rem",weight:700},h2:{size:"2rem",weight:600},h3:{size:"1.5rem",weight:600},subtitle:{size:"1.4rem",weight:600},body:{size:"1.2rem",weight:400},bodySM:{size:"1rem",weight:400},tag:{size:"0.9rem",weight:400}},radius:{sm:"8px",md:"14px",lg:"20px",pill:"999px"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"40px",xxl:"64px",xxxl:"96px"},gradients:{primary:"linear-gradient(to right, #AD46FF, #FF6900)"},button:{paddingY:"14px",paddingX:"32px",iconSize:"18px",hoverLift:"translateY(-2px)",width:"175px",textWeightL:"600",textWeightM:"500",textSize:"0.95rem"},transitions:{default:"all 0.3s ease",fast:"all 0.2s ease",slow:"all 0.4s ease",colorDefault:"color 0.3s ease",colorFast:"color 0.2s ease",colorSlow:"color 0.4s ease",input:"border-color 0.2s ease-out, box-shadow 0.2s ease-out",fade:"opacity 0.3s ease-in-out"},container:{maxWidth:"1200px",maxLG:"992px",maxMD:"768px",maxSM:"576px"},shadows:{sm:"0 2px 4px rgba(0,0,0,0.1)",md:"0 4px 6px rgba(0,0,0,0.2)",lg:"0 8px 16px rgba(0,0,0,0.3)",glow:"0 0 0 2px #FF6900, 0 0 10px 4px #FF6900, 0 0 20px 6px #FF6900, 0 0 30px 8px #FF6900"}},Fe={...x},Ce={...x,colors:{...x.colors,bg:"#f8fafc",surface:"#ffffff",surfaceSoft:"#e5e7eb80",text:"#0f172a",textSoft:"#575555",muted:"#242f3e",accent:"#0A0A0A"}},J=c.createContext(void 0);function Te(){const e=c.useContext(J);if(!e)throw new Error("useThemeMode must be used within Providers");return e}function ze({children:e}){const o=()=>{if(typeof window<"u"){const s=localStorage.getItem("theme-mode");if(s==="light"||s==="dark")return s}return"dark"},[i,d]=c.useState(o);c.useEffect(()=>{localStorage.setItem("theme-mode",i)},[i]);const r=()=>{d(s=>s==="dark"?"light":"dark")},a=i==="dark"?Fe:Ce,l=c.useMemo(()=>({mode:i,toggleMode:r}),[i]);return t.jsx(J.Provider,{value:l,children:t.jsxs(je,{theme:a,children:[t.jsx(Se,{}),e]})})}const Q=c.createContext({engine:null,setEngine:()=>{}});function Ae({children:e}){const[o,i]=c.useState(null);return t.jsx(Q.Provider,{value:{engine:o,setEngine:i},children:e})}function K(){return c.useContext(Q)}const Ie=n.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({theme:e})=>e.colors.bg};
  border-bottom: 2px solid ${({theme:e})=>e.colors.surface};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`,Le=n.div`
  max-width: ${({theme:e})=>e.container.maxWidth};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.xl};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Me=n.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,De=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
`,Ee=n.a`
  color: ${({theme:e})=>e.colors.textSoft};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 4px 0;

  &:hover {
    color: ${({theme:e})=>e.colors.purple};
  }

  &:after {
    content: "";
    display: block;
    height: 2px;
    background: ${({theme:e})=>e.colors.bg};
    width: 0%;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover:after {
    width: 100%;
  }
`,Pe=n.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Be=n.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 16px;
  border-top: 1px solid rgba(161, 161, 161, 0.25);
  font-size: 12px;
`,O=n.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.accent};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0;
  font: inherit;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`,He=n.button`
  position: relative;
  width: 66px;
  height: 34px;
  background: ${({theme:e})=>e.colors.surface};
  border: 2px solid ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.radius.pill};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    border-color: ${({theme:e})=>e.colors.purple};
  }

  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background: ${({theme:e})=>e.colors.surface};
    border-radius: ${({theme:e})=>e.radius.pill};
    top: 2px;
    left: ${({$isLight:e})=>e?"32px":"2px"};
    transition: left 0.3s ease;
  }
`,V=n.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
`,Re=n.div`
  position: relative;
  display: inline-block;
`,We=n.input`
  height: 38px;
  min-width: 200px;
  padding: 0 ${({theme:e})=>e.spacing.lg} 0 ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.radius.pill};
  border: 1px solid ${({theme:e})=>e.colors.surface};
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.textSoft};
  outline: none;
  transition: ${({theme:e})=>e.transitions.input};

  &::placeholder {
    color: ${({theme:e})=>e.colors.muted};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.bg};
    box-shadow: 0 0 8px ${({theme:e})=>e.colors.bg};
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.bg};
  }
`;n.span`
  position: absolute;
  right: ${({theme:e})=>e.spacing.md};
  top: 50%;
  transform: translateY(-50%) scale(1);
  font-size: 16px;
  color: ${({theme:e})=>e.colors.muted};
  transition: ${({theme:e})=>e.transitions.input};

  ${Re}:hover & {
    transform: translateY(-50%) scale(1.2);
    color: ${({theme:e})=>e.colors.bg};
  }
`;function Ge({logoText:e,links:o,showSearch:i=!1,showThemeToggle:d=!0}){const{mode:r,toggleMode:a}=Te(),[l,s]=c.useState(""),{engine:u}=K();return t.jsx(Ie,{children:t.jsxs(Le,{children:[t.jsx(Me,{href:"#",children:e}),t.jsx(De,{children:o.map(p=>t.jsx(Ee,{href:p.href,children:p.label},p.href))}),t.jsxs(Pe,{children:[i&&t.jsx(We,{type:"search",placeholder:"Try me...",value:l,onChange:p=>s(p.target.value),onKeyDown:p=>{p.key==="Enter"&&l.trim()&&(u?.addWord(l),s(""))}}),d&&t.jsxs(He,{onClick:a,$isLight:r==="light","aria-label":"Toggle theme",children:[t.jsx(V,{children:"🌙"}),t.jsx(V,{children:"☀️"})]})]})]})})}function Ne(){const e=[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Get In Touch",href:"#getintouch"}];return t.jsxs(Ae,{children:[t.jsx(Ge,{logoText:"Maria Zhytnikova",links:e,showSearch:!0,showThemeToggle:!0}),t.jsx(pe,{})]})}const Ye=n.section`
  background: ${({$bg:e,theme:o})=>e||o.colors.bg};
  scroll-margin-top: 80px;
  padding: ${({theme:e})=>e.spacing.xxl};

  display: flex;
  justify-content: center;  // horizontal center
  align-items: center;      // vertical center
`;function C({id:e,children:o,$bg:i}){return t.jsx(Ye,{id:e,$bg:i,children:o})}const T=n.div`
  max-width: ${({theme:e})=>e.container.maxWidth};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xs};
  padding-top: ${({$paddingTop:e,theme:o})=>e??o.spacing.xs};

  padding-bottom: ${({$paddingBottom:e,theme:o})=>e??o.spacing.xs};
`,Oe=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 121 32",className:"logo",...e},c.createElement("path",{fill:"currentColor",d:"M115.89,13.7H97.74v-.06C98,9.89,101.46,6,106.81,6c5.1-.1,8.81,3.86,9.07, 7.62Zm.94-8A14.46,14.46,0,0,0,96.58,6a14.39,14.39,0,0,0-4.07,10.11,14.19,14.19, 0,0,0,14.35,14.3,13.71,13.71,0,0,0,7.72-2.29A14.75,14.75,0,0,0,120,21.45h-5.27a8.53,8.53, 0,0,1-7.9,4.61c-4.28,0-9-2.93-9.22-8.36v-.07h23.28A14.51,14.51,0,0,0,116.83,5.68Z"}),c.createElement("polygon",{fill:"currentColor",points:"74.87 30.31 90.95 10.69 83.42 10.69 83.42 1.69 66.32 1.69 66.32 10.69 58.79 10.69 74.87 30.31"}),c.createElement("path",{fill:"currentColor",d:"M51.59,21.74a.63.63,0,0,0,.82-.29l.06-.12,0-.07a.64.64,0,0,0,0-.07,1.64,1.64, 0,0,0-.07-1.61,2.15,2.15,0,0,0-1.89-.73c-.36,0-1.56.12-3.39.34h-.06c-1.62.16-2.66, 0-2.86-1.31-.16-1.11.06-1.84,4.43-2.54,4.93-.82,5.75.2,6.14.69l.14.17A6,6,0,0,1,56, 18.09a5.7,5.7,0,0,1,.33,1.47c0,.25,0,1.51,0,1.51a9.16,9.16,0,0,1-9.2,8.18,9.5,9.5,0,0, 1-9.47-9.13V4.36a1.7,1.7,0,0,1,1.68-1.61A1.61,1.61,0,0,1,41,4.36v9.7a.62.62,0,0,0,1.23, 0V11.68A1.71,1.71,0,0,1,44,10.16a2.77,2.77,0,0,1,3,2.4,9.74,9.74,0,0,1,.25,1.79A11, 11,0,0,0,45,15,1.77,1.77,0,0,0,44,13.46a.69.69,0,0,0-.76.21.5.5,0,0,0-.07.38.5.5,0,0,0, .21.3,1.15,1.15,0,0,1,.47.89,2.35,2.35,0,0,1,0,.47A2.4,2.4,0,0,0,43,18.06c.4,2.71,3.14, 2.44,4.18,2.34h.05c1.12-.13,2.91-.33,3.3-.33.57,0,.81.13.87.2s0,.26-.06.45a2.14,2.14,0,0, 1-.1.22.61.61,0,0,0,.31.81m3.52-7.15a5.14,5.14,0,0,0-2.75-.76c0-2-.27-3.44-1.28-4.49l-.18-.18a2.88, 2.88,0,0,1,1.92-.35h0a1.75,1.75,0,0,1,1.24.72c.76.94,1.14,2.82,1,5.06m-4.93-4.42c.74.77.91,1.93.94, 3.67a22.6,22.6,0,0,0-2.6.3,10.32,10.32,0,0,0-.28-1.88,4.24,4.24,0,0,0-1.51-2.49,2.06,2.06,0,0,1, 1.4-.53v0a3,3,0,0,1,2,.93m7.39,10.9c0-.33,0-1.11,0-1.11a6.45,6.45,0,0,0-.42-2.29,8.13,8.13,0,0, 0-.93-1.82c.14-1.18.43-5-1.21-7.07A3,3,0,0,0,53,7.6a3.75,3.75,0,0,0-3.1.85A3.77,3.77,0,0,0,48.13, 8a3.27,3.27,0,0,0-2.54,1.16A5.92,5.92,0,0,0,44.05,9a2.91,2.91,0,0,0-1.86.52V4.36a2.83,2.83,0,0, 0-2.85-2.83,2.9,2.9,0,0,0-2.92,2.83V19.8a10.79,10.79,0,0,0,10.7,10.67,10.39,10.39,0,0,0,10.45-9.4"}),c.createElement("path",{fill:"currentColor",d:"M24.34,25.45H20.55V17.61H12.13v7.84H8.37V6.55h3.76v7.6h8.42V6.55h3.79ZM32.71, 16A16.18,16.18,0,0,0,16.36,0,16.18,16.18,0,0,0,0,16,16.18,16.18,0,0,0,16.36,32,16.18,16.18,0,0,0,32.71,16Z"})),B=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,H=n(b.button)`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>`${e.button.paddingY} ${e.button.paddingX}`};
  border-radius: ${({theme:e})=>e.radius.pill};
  border: none;
  font-weight: ${({theme:e})=>e.button.textWeightL};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  text-decoration: none;
  white-space: nowrap;
  width: ${({theme:e})=>e.button.width};
`,ee=n(H)`
  background: ${({theme:e})=>e.gradients.primary};
  color: ${({theme:e})=>e.colors.accent};

  &:hover {
    transform: ${({theme:e})=>e.button.hoverLift};
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.purple}66;
  }
`,Ve=n(H)`
  width: 75%;
  background: ${({theme:e})=>e.gradients.primary};
  color: ${({theme:e})=>e.colors.accent};

  &:hover {
    transform: ${({theme:e})=>e.button.hoverLift};
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.purple}66;
  }
`,_e=n(H)`
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  border: 2px solid ${({theme:e})=>e.colors.surface};
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};

  &:hover {
    border-color: ${({theme:e})=>e.colors.purple};
    transform: ${({theme:e})=>e.button.hoverLift};
  }

  svg {
    width: ${({theme:e})=>e.button.iconSize};
    height: ${({theme:e})=>e.button.iconSize};
    flex-shrink: 0;
  }
`,qe=n.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.surface};
  border: 2px solid ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.radius.md};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: ${({theme:e})=>e.transitions.fast};

  color: ${({theme:e})=>e.colors.textSoft};
  font-weight: ${({theme:e})=>e.button.textWeightM};
  font-size: ${({theme:e})=>e.button.textSize};
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    transition: ${({theme:e})=>e.transitions.fast};
  }

  span {
    display: inline-block;
    transition: ${({theme:e})=>e.transitions.fast};
  }

  &:hover span {
    transform: translateX(6px); /* move text slightly to right */
  }

  &:hover svg {
    transform: translateX(6px); /* move icon with text */
  }
`,_=n(qe)`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.orange},
      ${({theme:e})=>e.colors.purple},
      ${({theme:e})=>e.colors.blue},
      ${({theme:e})=>e.colors.orange},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface}
    );
    background-size: 200% 100%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.purple};
  }
`,q=n.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text};
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`,Ue=n.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({theme:e})=>e.colors.surface};
  border: 2px solid ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.radius.md};
  margin-top: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  transition: ${({theme:e})=>e.transitions.fast};
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme:e})=>e.colors.text};
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.purple};
    transform: ${({theme:e})=>e.button.hoverLift};
  }

  &:hover svg {
    stroke: ${({theme:e})=>e.colors.purple};
  }
`,R=({buttons:e})=>t.jsx(B,{children:e.map(({href:o,Icon:i,label:d},r)=>t.jsx(Ue,{href:o,target:o.startsWith("mailto:")?void 0:"_blank",rel:o.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":d,children:t.jsx(i,{})},r))}),W=[{href:"https://github.com/MariiaZhytnikova",Icon:te,label:"GitHub"},{href:"https://www.linkedin.com/in/mariia-zhytnikova",Icon:Ze,label:"LinkedIn"},{href:"mailto:allusio@gmail.com",Icon:P,label:"Email"}];function te(e){return t.jsx("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}function Ze(e){return t.jsxs("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),t.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),t.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}function Xe(e){return t.jsxs("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"7 10 12 15 17 10"}),t.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}const Je=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,Qe=n.a`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.text};
  text-decoration: none;

  div {
    padding: ${({theme:e})=>e.spacing.xs};
    border-radius: ${({theme:e})=>e.radius.sm};
    background-color: ${({color:e,theme:o})=>e==="purple"?o.colors.purpleLight:o.colors.orangeLight};
    }

  &:hover {
    opacity: 0.8;
  }
`,oe=({items:e})=>t.jsx(Je,{children:e.map((o,i)=>{const d=o.icon;return t.jsxs(Qe,{href:o.href,color:o.color,children:[t.jsx("div",{children:t.jsx(d,{size:16,color:o.color==="purple"?"#a855f7":"#fb923c"})}),o.text]},i)})}),ne=[{icon:P,text:"allusio@gmail.com",href:"mailto:allusio@gmail.com",color:"purple"},{icon:he,text:"+358 465 760 200",href:"tel:+358465760200",color:"orange"},{icon:ue,text:"Helsinki, Finland",href:"#",color:"purple"}],Ke=[{content:"Hey!"},{content:"I'm Mariia Zhytnikova,"},{content:`A software engineering student in Helsinki with a background in 
    **biophysics research**, computational science, and data analysis. Today, I focus on 
    **backend development**, **systems programming**, and **full-stack applications**
    , combining my scientific mindset with modern software engineering.`},{content:`Currently, I’m studying at **Hive Helsinki (42 Network)**, a peer-to-peer
    programming school focused on project-based learning in **C**, **C++**, and
    **TypeScript**. The program emphasizes collaboration, code reviews, and
    problem-solving under pressure, while building real systems from scratch.
    It requires strong self-responsibility and time management, as there are
    no traditional lectures or teachers — learning is fully self-driven through
    projects and peer collaboration.`},{content:`Before transitioning into software engineering, I spent many years working in 
    **scientific research** in Kharkiv. I earned a **Ph.D. in Mathematical & Physical Sciences** 
    (Biophysics) after completing my studies in biophysics with honors at 
    [*Karazin University*](https://karazin.ua/en/).`},{content:`My research career at Institute of Radiophysics and Electronics NASU focused 
    on computational modeling of protein-DNA interactions, structural analysis, database 
    development, and scientific simulations. I worked with complex datasets, developed 
    research workflows, analyzed results, and contributed to scientific publications and 
    conferences.`},{content:`Alongside academic research, I also worked as a **scientific consultant** for 
    **biomedical projects connected with NIBR**, where I conducted literature reviews, 
    analyzed clinical and biological data, and prepared analytical reports for decision-making 
    processes. This experience strengthened my ability to process large amounts of information, 
    communicate technical ideas clearly, and approach problems analytically.`},{content:`Changing industries and moving to a new country was challenging, but my research 
    background prepared me well for continuous learning and adapting to unfamiliar problems. Many 
    skills turned out to be highly transferable: analytical thinking, persistence, working with 
    complex systems, and collaborating with people from different backgrounds.`},{content:`Outside of programming, I enjoy being in nature, discovering scenic landscapes, 
    playing board games, and doing DIY projects.
    I like trying new things and exploring new technologies in both crafting and
    coding.`}],S=n.div`
  color: ${({theme:e})=>e.colors.text};
  padding: ${({$padding:e})=>e??"0"};
  min-height: auto;
  width: ${({width:e})=>e??"100%"};
  height: ${({height:e})=>e??"auto"};
  text-align: ${({textAlign:e})=>e??"left"};
  display: flex;
  flex-direction: column;
`,et=n.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme:e})=>e.colors.surface};
  margin: ${({theme:e})=>e.spacing.sm} 0;
`,tt=n.h1`
  font-size: ${({theme:e})=>e.typography.h1.size};
  font-weight: ${({theme:e})=>e.typography.h1.weight};
  line-height: 1.2;
`,z=n.h2`
  font-size: ${({theme:e})=>e.typography.h2.size};
  font-weight: ${({theme:e})=>e.typography.h2.weight};
  line-height: 1.3;
  padding-bottom: ${({theme:e})=>e.spacing.md};
`,ot=n.h3`
  font-size: ${({theme:e})=>e.typography.h3.size};
  font-weight: ${({theme:e})=>e.typography.h3.weight};
`,A=n.p`
  font-size: ${({theme:e})=>e.typography.subtitle.size};
  font-weight: ${({theme:e})=>e.typography.subtitle.weight};
  color: ${({theme:e})=>e.colors.textSoft};
  margin-top: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,F=n.span`
  font-size: ${({theme:e})=>e.typography.body.size};
  font-weight: ${({theme:e})=>e.typography.body.weight};
  color: ${({theme:e})=>e.colors.muted};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  position: relative;
  cursor: default;
`;function nt({children:e}){return t.jsx(b.span,{initial:{opacity:0,y:-5},whileHover:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},style:{display:"inline-block",marginLeft:"0.3em"},children:e})}const ie=n.span`
  font-size: ${({theme:e})=>e.typography.bodySM.size};
  font-weight: ${({theme:e})=>e.typography.bodySM.weight};
  color: ${({theme:e})=>e.colors.textSoft};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,it=n(F)`
  color: inherit;
`,rt=n(tt)`
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`,$=n(A)`
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`;n(A)`
  background: ${({theme:e})=>e.colors.orange};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`;n.label`
  font-size: ${({theme:e})=>e.typography.tag.size};
  font-weight: ${({theme:e})=>e.typography.tag.weight};
  color: ${({theme:e})=>e.colors.textSoft};
  margin-bottom: 0.5rem;
`;const re=n.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* horizontal centering */
  gap: ${({theme:e})=>e.spacing.sm};
`,st=n(b.div)`
  width: 300px;
  height: auto;
  position: relative;
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.colors.surfaceSoft};
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,at=n.div`
  display: inline-flex;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.sm};

  span {
    margin-bottom: 0;
    line-height: 1;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing.md};
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text};
    transition: ${({theme:e})=>e.transitions.default};

    svg {
      height: 20px;
      width: auto;
      fill: currentColor;
      transition: ${({theme:e})=>e.transitions.default};
    }
  }

  &:hover a {
    color: ${({theme:e})=>e.colors.orange};
  }

  &:hover svg {
    color: ${({theme:e})=>e.colors.orange};
  }

  &:hover {
    transform: translateY(-2px);
  }
`,lt=n.div`
  position: relative;
  padding-right: ${({theme:e})=>e.spacing.lg};
`,ct=n.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: ${({theme:e})=>e.colors.surface};
  overflow: hidden;
`,dt=n.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    ${({theme:e})=>e.colors.orange},
    ${({theme:e})=>e.colors.purple},
    ${({theme:e})=>e.colors.blue},
    ${({theme:e})=>e.colors.purple},
    ${({theme:e})=>e.colors.orange}
  );
  opacity: 0.2;
`,pt=n(b.div)`
  position: absolute;
  width: 100%;
  height: 120px;
  filter: blur(6px);
`,ht=n(b.div)`
  position: absolute;
  width: 100%;
  height: 80px;
`,se=n.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.container.maxMD}) {
    grid-template-columns: 1fr;
  }
`,ae=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e,theme:o})=>e||o.spacing.lg};
`,le=n(ae)``,ce=n(ae)``;function ut({id:e}){const[o,i]=c.useState(0),d=c.useRef(null),r=l=>{if(d.current){const s=d.current.getBoundingClientRect(),u=l.clientY-s.top;i(u)}},a=l=>{const s=[x.colors.orange,x.colors.purple,x.colors.blue,x.colors.purple,x.colors.orange],u=Math.floor(l/100*s.length);return s[Math.min(u,s.length-1)]};return t.jsx(C,{id:e??"about",children:t.jsxs(T,{children:[t.jsxs(S,{height:"auto",children:[t.jsx(z,{children:"About Me"}),t.jsx(F,{children:"I’m a software developer student at Helsinki Hive, originally coming from a scientific research background."})]}),t.jsxs(se,{children:[t.jsx(le,{children:t.jsx(S,{height:"auto",$padding:"0",children:t.jsxs(re,{children:[t.jsx(st,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:300},children:t.jsx("img",{src:"./image.png",alt:"./image.png"})}),t.jsx(ot,{children:"Mariia Zhytnikova"}),t.jsx(at,{children:t.jsxs("a",{href:"https://www.hive.fi/about-hive/",target:"_blank",rel:"noopener noreferrer",children:[t.jsx(it,{children:"Student at"}),t.jsx(Oe,{})]})}),t.jsx(et,{}),t.jsx(oe,{items:ne}),t.jsx(R,{buttons:W}),t.jsx(ee,{as:"a",href:"#contact",children:"Get In Touch"})]})})}),t.jsx(ce,{children:t.jsxs(lt,{ref:d,onMouseMove:r,children:[t.jsxs(ct,{children:[t.jsx(dt,{}),t.jsx(pt,{style:{top:o-60,background:"linear-gradient(to bottom, transparent, currentColor, transparent)",color:a(o/(d.current?.clientHeight||1)*100)},transition:{type:"spring",stiffness:500,damping:30}}),t.jsx(ht,{style:{top:o-40,background:"linear-gradient(to bottom, transparent, currentColor, transparent)",color:a(o/(d.current?.clientHeight||1)*100)},transition:{type:"spring",stiffness:500,damping:30}})]}),Ke.map((l,s)=>t.jsx(ie,{as:"p",children:t.jsx(ge,{children:l.content})},s))]})})]})]})})}const de=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
`,j=n.div`
  position: relative;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 2px solid ${({theme:e})=>e.colors.surface};
  padding: ${({theme:e})=>e.spacing.lg};

  /* animated border layer */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;

    padding: 2px; /* border thickness */
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.orange},
      ${({theme:e})=>e.colors.purple},
      ${({theme:e})=>e.colors.blue},
      ${({theme:e})=>e.colors.purple},
      ${({theme:e})=>e.colors.orange},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface}
    );
    background-size: 200% 100%;

    /* mask to show ONLY border */
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
    animation: borderRun 2s linear infinite;
  }

  &:hover * {
    opacity: 1;
    animation: borderRun 2s linear infinite;
  }

  @keyframes borderRun {
    from {
      background-position: 200% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  }
`,gt=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${({theme:e})=>e.radius.sm};
  padding: ${({theme:e})=>e.spacing.lg};
  border: 2px solid ${({theme:e})=>e.colors.surface};
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions.default};

  & > * {
    position: relative;
    z-index: 1; /* content above lines */
  }

  /* hover lines container */
  .lines {
    position: absolute;
    inset: ${({theme:e})=>e.spacing.md};
    display: flex;
    justify-content: space-between;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 0;
  }

  &:hover .lines {
    opacity: 1;
  }

  .line {
    position: relative;
    width: 1px; /* line thickness */
    height: 100%;
    overflow: hidden;
  }

  /* the animated tail for each line */
  .line::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 30px; /* tail length, same as full-page */
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
    rgba(255,255,255,0) 0%, /* start invisible */
    #FF4500 50%,            /* solid color at halfway */
    #FF4500 100%
    );
    animation: drop 7s cubic-bezier(0.4, 0.26, 0, 0.97) infinite;
    animation-fill-mode: forwards;
  }

  /* staggered colors and delays */
  .line:nth-child(1)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #8A2BE2 75%, #8A2BE2 100%); animation-delay: 2.5s; }
  .line:nth-child(2)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #DC143C 75%, #DC143C 100%); animation-delay: 3.5s; }
  .line:nth-child(3)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FF4500 75%, #FF4500 100%); animation-delay: 0.5s; }
  .line:nth-child(4)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FF6900 75%, #FF6900 100%); animation-delay: 4.5s; }
  .line:nth-child(5)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFD700 75%, #FFD700 100%); animation-delay: 2s; }
  .line:nth-child(6)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFD700 75%, #FFD700 100%); animation-delay: 3.5s; }
  .line:nth-child(7)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #00FA9A 75%, #00FA9A 100%); animation-delay: 4s; }
  .line:nth-child(8)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #32CD32 75%, #32CD32 100%); animation-delay: 1s; }
  .line:nth-child(9)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #20B2AA 75%, #20B2AA 100%); animation-delay: 3s; }
  .line:nth-child(10)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #00BFFF 75%, #00BFFF 100%); animation-delay: 5s; }
  .line:nth-child(11)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #1E90FF 75%, #1E90FF 100%); animation-delay: 1.5s; }

  @keyframes drop {
    0% { top: -50%; }
    100% { top: 110%; }
  }

  /* Border glow and lift on hover */

  // &:hover {
  //   animation: borderGlow 3s ease-in-out infinite;
  //   transform: translateY(-4px);
  // }

  // @keyframes borderGlow {
  //   0% {
  //     box-shadow:
  //       0 0 0 2px #FF6900,
  //       0 0 10px #FF6900;
  //   }
  //   50% {
  //     box-shadow:
  //       0 0 0 2px #AD46FF,
  //       0 0 20px #AD46FF,
  //       0 0 30px #AD46FF;
  //   }
  //   100% {
  //     box-shadow:
  //       0 0 0 2px #FF6900,
  //       0 0 10px #FF6900;
  //   }
  // }
`,y=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: auto;
`,v=n.span`
  position: relative;
  display: inline-block;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.typography.tag.size};
  font-weight: ${({theme:e})=>e.typography.tag.weight};
  color: ${({theme:e})=>e.colors.textSoft};
  line-height: 1.6;
  border-radius: ${({theme:e})=>e.radius.pill};
  border: 1px solid ${({theme:e})=>e.colors.surface};
  transition: ${({theme:e})=>e.transitions.fast};

/* animated border layer */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;

    padding: 2px; /* border thickness */
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.orange},
      ${({theme:e})=>e.colors.purple},
      ${({theme:e})=>e.colors.blue},
      ${({theme:e})=>e.colors.purple},
      ${({theme:e})=>e.colors.orange},
      ${({theme:e})=>e.colors.surface},
      ${({theme:e})=>e.colors.surface}
    );
    background-size: 200% 100%;

    /* mask to show ONLY border */
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
    animation: borderRun 2s linear infinite;
  }

  @keyframes borderRun {
    from {
      background-position: 200% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  }
`,k={frontend:["React","TypeScript","Tailwind CSS","Styled Components"],backend:["Node.js","TypeScript","Go","Python","Express","Fastify","REST APIs"],database:["PostgreSQL","MariaDB","Redis","SQLite","MySQL"],devops:["Docker","Git","CI/CD","Linux","Nginx"],systems:["C","C++","POSIX","Low-level programming"]};function mt({id:e}){const o=ke();return t.jsx(C,{id:e,$bg:o.colors.surfaceSoft,children:t.jsx(T,{$paddingTop:"40px",$paddingBottom:"40px",children:t.jsxs(S,{height:"auto",children:[t.jsx(z,{children:"Skills & Technologies"}),t.jsxs(de,{children:[t.jsxs(j,{children:[t.jsx($,{children:"Frontend"}),t.jsx(y,{children:k.frontend.map(i=>t.jsx(v,{children:i},i))})]}),t.jsxs(j,{children:[t.jsx($,{children:"Backend"}),t.jsx(y,{children:k.backend.map(i=>t.jsx(v,{children:i},i))})]}),t.jsxs(j,{children:[t.jsx($,{children:"Database"}),t.jsx(y,{children:k.database.map(i=>t.jsx(v,{children:i},i))})]}),t.jsxs(j,{children:[t.jsx($,{children:"DevOps & Tools"}),t.jsx(y,{children:k.devops.map(i=>t.jsx(v,{children:i},i))})]}),t.jsxs(j,{children:[t.jsx($,{children:"Systems"}),t.jsx(y,{children:k.systems.map(i=>t.jsx(v,{children:i},i))})]})]})]})})})}const ft="/portfolio/assets/Maze_is_Lava-BAR8MH1x.png",xt="/portfolio/assets/DishDash-NcVmUuCQ.png",bt="/portfolio/assets/Hive_Game-Cfy4Dy58.png",yt=[{id:1,title:"Maze is lava",image:ft,description:"A full-stack multiplayer web-game with auth, chat and friends system",tech:["React","Vite","Tailwind CSS","Socket.io","TypeScript","Node.js","NestJS","Fastify","TypeORM","PostgreSQL","JWT","Swagger/OpenAPI","Jest","GitHub actions"],github:"https://github.com/Transcendence-surprise",live:"https://valinor.ink"},{id:2,title:"DishDash",image:xt,description:"🌱 A small tool with a big impact on food waste (Under development)",tech:["Node.js","Vite","TypeScript","React","Go","Rest API","GitHub actions","Deployment: GitHub Pages, Fly.io"],github:"https://github.com/MariiaZhytnikova/DishDash",live:"https://mariiazhytnikova.github.io/DishDash/"},{id:3,title:"Hive",image:bt,description:'Turn based web-game "The Hive", designed by John Yianni',tech:["Node.js","Vite","TypeScript","Deployment: GitHub Pages"],github:"https://github.com/MariiaZhytnikova/Hive-abstract-game",live:"https://mariiazhytnikova.github.io/Hive-abstract-game/"}];function vt({id:e}){return t.jsx(C,{id:e,children:t.jsxs(T,{children:[t.jsx(z,{children:"Featured Projects"}),t.jsx(de,{children:yt.map(o=>t.jsxs(gt,{children:[t.jsx("div",{className:"lines",children:Array.from({length:10}).map((i,d)=>t.jsx("div",{className:"line"},d))}),t.jsx(A,{children:o.title}),t.jsx(F,{children:o.description}),o.image&&t.jsx("img",{src:o.image,alt:o.title,style:{width:"100%",height:"180px",objectFit:"cover",borderRadius:"8px",marginTop:"12px"}}),t.jsx(y,{children:o.tech.map(i=>t.jsx(v,{children:i},i))}),t.jsxs(B,{children:[t.jsxs(_,{label:"GitHub",href:o.github,target:"_blank",rel:"noopener noreferrer","aria-label":`${o.title} GitHub`,children:[t.jsx(te,{}),t.jsx("span",{children:"GitHub"})]}),t.jsxs(_,{label:"Live Demo",href:o.live,target:"_blank",rel:"noopener noreferrer","aria-label":`${o.title} Live Demo`,children:[t.jsx(me,{}),t.jsx("span",{children:"Live Demo"})]})]})]},o.id))})]})})}const wt=n(b.div)`
  position: relative;
`,L=({delay:e=0,children:o})=>t.jsx(wt,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:e},children:o}),$t=`
# Privacy Agreement

**Last Updated: May 14, 2026**

## 1. Introduction
This Privacy Agreement ("Agreement") outlines how your personal information is collected, used, and protected when you interact with this portfolio website and submit contact forms.

## 2. Information We Collect
When you submit the contact form, we collect:
- Your name
- Your email address
- Your message content

## 3. How We Use Your Information
Your information is used solely for:
- Responding to your inquiry
- Contacting you regarding your message
- Improving our communication services

## 4. Third-Party Services
Your form data is processed through Formspree (formspree.io). Please review their privacy policy at https://formspree.io/privacy for details on how they handle your data.

## 5. Data Security
We take reasonable measures to protect your personal information from unauthorized access or disclosure.

## 6. Your Rights
You have the right to:
- Request access to your personal data
- Request deletion of your personal data
- Opt out of communications

## 7. Contact
For privacy concerns, you can reach out through the contact form on this website.

## 8. Changes to This Agreement
We may update this agreement periodically. Any changes will be noted with an updated "Last Updated" date.
`,jt=`
# Terms of Service

**Last Updated: May 14, 2026**

## 1. Agreement to Terms
By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement.

## 2. Use License
Permission is granted to temporarily download one copy of the materials (information or software) on this portfolio website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
- Modify or copy the materials
- Use the materials for any commercial purpose or for any public display
- Attempt to decompile or reverse engineer any software contained on the website
- Remove any copyright or other proprietary notations from the materials
- Transfer the materials to another person or "mirror" the materials on any other server

## 3. Disclaimer
The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## 4. Limitations
In no event shall the website owner or suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.

## 5. Accuracy of Materials
The materials appearing on this website could include technical, typographical, or photographic errors. The website does not warrant that any of the materials on its website are accurate, complete, or current.

## 6. Links
We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.

## 7. Modifications
We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.

## 8. Governing Law
These terms and conditions are governed by and construed in accordance with the laws applicable to the website, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.

## 9. Contact Information
If you have any questions about these Terms of Service, please contact us through the contact form on this website.
`,kt=n.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,M=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
`,D=n.div`
  color: ${({$focused:e,color:o,theme:i})=>e?o||i.colors.purple:i.colors.muted};
  transition: ${({theme:e})=>e.transitions.colorFast};
`,E=n(b.input)`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.sm};
  background-color: ${({theme:e})=>e.colors.surface};
  border: 2px solid ${({theme:e})=>e.colors.surfaceSoft};
  border-radius: ${({theme:e})=>e.radius.lg};
  color: ${({theme:e})=>e.colors.text};
  outline: none;
  transition: ${({theme:e})=>e.transitions.default};

  &:focus {
    border-color: ${({$focusColor:e,theme:o})=>e||o.colors.purple};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.muted};
  }
`,St=n(E).attrs({as:"textarea",rows:7})`
  resize: none;
`,Ft=n.span`
  color: ${({theme:e})=>e.colors.text};
  opacity: 0.3;
`,U=n.div`
  position: absolute;
  top: ${({$top:e})=>`${e}px`};
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Z=n.div`
  background-color: ${({theme:e})=>e.colors.surface};
  border-radius: 8px;
  padding: 32px;
  max-width: 600px;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({theme:e})=>e.colors.text};

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.6;
    font-family: inherit;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 8px;
  }
`;function Ct({id:e}){const[o,i]=c.useState({name:"",email:"",message:""}),[d,r]=c.useState(null),[a,l]=c.useState("idle"),[s,u]=c.useState(!1),[p,g]=c.useState(!1),[m,f]=c.useState(0);c.useEffect(()=>{if(a!=="idle"){const h=setTimeout(()=>l("idle"),3e3);return()=>clearTimeout(h)}},[a]),c.useEffect(()=>{if(s||p){const h=()=>{f(window.scrollY)};return h(),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}}},[s,p]);const w=h=>{i({...o,[h.target.name]:h.target.value})},I=async h=>{h.preventDefault(),l("idle"),(await fetch("https://formspree.io/f/mlgpyyjd",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(l("success"),i({name:"",email:"",message:""})):l("error")};return t.jsxs(C,{id:e??"getintouch",children:[t.jsx(T,{$paddingTop:"40px",$paddingBottom:"40px",children:t.jsxs(S,{height:"auto",children:[t.jsx(z,{children:"Get In Touch"}),t.jsxs(se,{children:[t.jsxs(le,{children:[t.jsx(ie,{children:"I'm always open to new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!"}),t.jsx(oe,{items:ne}),t.jsx(R,{buttons:W})]}),t.jsxs(ce,{children:[t.jsxs(kt,{onSubmit:I,children:[t.jsx(L,{delay:.3,children:t.jsxs(M,{children:[t.jsx(D,{$focused:d==="name",color:"#A855F7",children:t.jsx(fe,{size:20})}),t.jsx(E,{type:"text",id:"name",name:"name",value:o.name,placeholder:"your name",onFocus:()=>r("name"),onBlur:()=>r(null),onChange:w,required:!0})]})}),t.jsx(L,{delay:.4,children:t.jsxs(M,{children:[t.jsx(D,{$focused:d==="email",color:"#FB923C",children:t.jsx(P,{size:20})}),t.jsx(E,{type:"email",$focusColor:"#FB923C",id:"email",name:"email",value:o.email,placeholder:"your.email@example.com",onFocus:()=>r("email"),onBlur:()=>r(null),onChange:w,required:!0})]})}),t.jsx(L,{delay:.5,children:t.jsxs(M,{children:[t.jsx(D,{$focused:d==="message",color:"#A855F7",$alignTop:!0,children:t.jsx(xe,{size:20})}),t.jsx(St,{id:"message",name:"message",value:o.message,placeholder:"your message...",onFocus:()=>r("message"),onBlur:()=>r(null),onChange:w,required:!0})]})}),t.jsx(re,{children:t.jsxs(Ve,{type:"submit",children:[a==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{fontSize:16,lineHeight:1},children:"Send Message"}),t.jsx(G,{size:20})]}),a==="success"&&t.jsxs(t.Fragment,{children:[t.jsx(G,{size:20}),t.jsx("span",{style:{fontSize:16,lineHeight:1},children:"Sent!"})]}),a==="error"&&t.jsx("span",{style:{fontSize:16,lineHeight:1},children:"❌ Try again"})]})})]}),t.jsxs(Be,{children:[t.jsx("span",{style:{fontSize:12,lineHeight:1},children:"By using this form, you agree to our "}),t.jsx(O,{type:"button",onClick:()=>u(!0),children:"Privacy Agreement"}),t.jsx(Ft,{children:"•"}),t.jsx(O,{type:"button",onClick:()=>g(!0),children:"Terms of Service"})]})]})]})]})}),s&&N.createPortal(t.jsx(U,{$top:m,onClick:()=>u(!1),children:t.jsxs(Z,{onClick:h=>h.stopPropagation(),children:[t.jsx(q,{onClick:()=>u(!1),children:"×"}),t.jsx("pre",{children:$t})]})}),document.body),p&&N.createPortal(t.jsx(U,{$top:m,onClick:()=>g(!1),children:t.jsxs(Z,{onClick:h=>h.stopPropagation(),children:[t.jsx(q,{onClick:()=>g(!1),children:"×"}),t.jsx("pre",{children:jt})]})}),document.body)]})}const Tt="modulepreload",zt=function(e){return"/portfolio/"+e},X={},At=function(o,i,d){let r=Promise.resolve();if(i&&i.length>0){let u=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=l?.nonce||l?.getAttribute("nonce");r=u(i.map(p=>{if(p=zt(p),p in X)return;X[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${m}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":Tt,g||(f.as="script"),f.crossOrigin="",f.href=p,s&&f.setAttribute("nonce",s),document.head.appendChild(f),g)return new Promise((w,I)=>{f.addEventListener("load",w),f.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return r.then(l=>{for(const s of l||[])s.status==="rejected"&&a(s.reason);return o().catch(a)})};function It({id:e}){const o=c.useRef(null),i=c.useRef(null),{setEngine:d}=K();return c.useEffect(()=>{let r=0,a=!1;return(async()=>{const s=o.current;if(!s)return;const{WordEngine:u}=await At(async()=>{const{WordEngine:m}=await import("./wordEngine-D5l8dY8W.js");return{WordEngine:m}},__vite__mapDeps([0,1,2,3,4]));if(a||!s.isConnected)return;const p=new u(s);i.current=p,d(p);const g=()=>{a||(p.update(),r=window.requestAnimationFrame(g))};r=window.requestAnimationFrame(g)})(),()=>{a=!0,d(null),i.current?.destroy(),window.cancelAnimationFrame(r)}},[]),console.log("canvasRef:",o.current),t.jsx(C,{id:e,children:t.jsx(T,{children:t.jsxs(S,{height:"clamp(640px, 78vh, 920px)",style:{position:"relative",overflow:"hidden"},children:[t.jsx("div",{ref:o,style:{position:"absolute",inset:0,overflow:"hidden",height:"100%",width:"100%",pointerEvents:"auto",outline:"2px solid red"}}),t.jsx(rt,{children:"Hi, I'm Maria"}),t.jsx(A,{children:"Software Engineer"}),t.jsxs(F,{children:["I know exactly what I'm doing...",t.jsx(nt,{children:"But in a much more real sense, I have no idea what I'm doing."})]}),t.jsx(F,{children:"Software engineering student turning ideas into real, working software. I explore systems, debug issues, and refine solutions — everything from low-level programs to full-stack applications. I learn by doing, experimenting, and improving along the way."}),t.jsxs(B,{children:[t.jsx(ee,{as:"a",href:"#getintouch",children:"Get In Touch"}),t.jsxs(_e,{as:"a",href:"./CV-Mariia_Zhytnikova.pdf",download:!0,"aria-label":"Download CV as PDF",children:[t.jsx(Xe,{}),"Download CV"]})]}),t.jsx(R,{buttons:W})]})})})}function Lt(){return t.jsxs(t.Fragment,{children:[t.jsx(It,{id:"spotlight"}),t.jsx(ut,{id:"about"}),t.jsx(mt,{id:"skills"}),t.jsx(vt,{id:"projects"}),t.jsx(Ct,{id:"getintouch"})]})}function Mt(){return t.jsx(be,{children:t.jsx(Y,{element:t.jsx(Ne,{}),children:t.jsx(Y,{path:"/",element:t.jsx(Lt,{})})})})}ye.createRoot(document.getElementById("root")).render(t.jsx(ve.StrictMode,{children:t.jsx(ze,{children:t.jsx(we,{basename:"/portfolio/",children:t.jsx(Mt,{})})})}));export{x as t};
