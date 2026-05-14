const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wordEngine-J_mACqvd.js","assets/matter-CxdqVjog.js","assets/vendor-D5c3p9G-.js","assets/styled-components-BdEjY8QJ.js","assets/framer-motion-SJ2xKlBv.js"])))=>i.map(i=>d[i]);
import{d as p,A as t,a8 as re,a9 as M,aa as se,ab as ae,ac as le,ad as ce,ae as de,af as R,ag as pe,ah as P,ai as ge,R as he,aj as ue}from"./vendor-D5c3p9G-.js";import{v as me,s as xe,y as n,o as fe}from"./styled-components-BdEjY8QJ.js";import"./matter-CxdqVjog.js";import{m as f}from"./framer-motion-SJ2xKlBv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const be=me`
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
`,m={colors:{bg:"#0A0A0A",surface:"#262626",surfaceSoft:"#26262680",text:"#e5e7eb",textSoft:"#A1A1A1",muted:"#FAFAFA",accent:"#FFFFFF",orange:"#FF6900",orangeLight:"#FF690033",purple:"#AD46FF",purpleLight:"#AD46FF33",blue:"#00d4ff"},typography:{h1:{size:"3rem",weight:700},h2:{size:"2rem",weight:600},h3:{size:"1.5rem",weight:600},subtitle:{size:"1.4rem",weight:600},body:{size:"1.2rem",weight:400},bodySM:{size:"1rem",weight:400},tag:{size:"0.9rem",weight:400}},radius:{sm:"8px",md:"14px",lg:"20px",pill:"999px"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"40px",xxl:"64px",xxxl:"96px"},gradients:{primary:"linear-gradient(to right, #AD46FF, #FF6900)"},button:{paddingY:"14px",paddingX:"32px",iconSize:"18px",hoverLift:"translateY(-2px)",width:"175px",textWeightL:"600",textWeightM:"500",textSize:"0.95rem"},transitions:{default:"all 0.3s ease",fast:"all 0.2s ease",slow:"all 0.4s ease",colorDefault:"color 0.3s ease",colorFast:"color 0.2s ease",colorSlow:"color 0.4s ease",input:"border-color 0.2s ease-out, box-shadow 0.2s ease-out",fade:"opacity 0.3s ease-in-out"},container:{maxWidth:"1200px",maxLG:"992px",maxMD:"768px",maxSM:"576px"},shadows:{sm:"0 2px 4px rgba(0,0,0,0.1)",md:"0 4px 6px rgba(0,0,0,0.2)",lg:"0 8px 16px rgba(0,0,0,0.3)",glow:"0 0 0 2px #FF6900, 0 0 10px 4px #FF6900, 0 0 20px 6px #FF6900, 0 0 30px 8px #FF6900"}},ye={...m},ve={...m,colors:{...m.colors,bg:"#f8fafc",surface:"#ffffff",surfaceSoft:"#e5e7eb80",text:"#0f172a",textSoft:"#575555",muted:"#242f3e",accent:"#0A0A0A"}},O=p.createContext(void 0);function $e(){const e=p.useContext(O);if(!e)throw new Error("useThemeMode must be used within Providers");return e}function we({children:e}){const o=()=>{if(typeof window<"u"){const s=localStorage.getItem("theme-mode");if(s==="light"||s==="dark")return s}return"dark"},[i,d]=p.useState(o);p.useEffect(()=>{localStorage.setItem("theme-mode",i)},[i]);const r=()=>{d(s=>s==="dark"?"light":"dark")},a=i==="dark"?ye:ve,c=p.useMemo(()=>({mode:i,toggleMode:r}),[i]);return t.jsx(O.Provider,{value:c,children:t.jsxs(xe,{theme:a,children:[t.jsx(be,{}),e]})})}const V=p.createContext({engine:null,setEngine:()=>{}});function je({children:e}){const[o,i]=p.useState(null);return t.jsx(V.Provider,{value:{engine:o,setEngine:i},children:e})}function _(){return p.useContext(V)}const ke=n.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({theme:e})=>e.colors.bg};
  border-bottom: 2px solid ${({theme:e})=>e.colors.surface};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`,Fe=n.div`
  max-width: ${({theme:e})=>e.container.maxWidth};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.xl};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Se=n.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,Ce=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
`,ze=n.a`
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
`,Ae=n.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Ie=n.button`
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
`,W=n.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
`,Te=n.div`
  position: relative;
  display: inline-block;
`,Le=n.input`
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

  ${Te}:hover & {
    transform: translateY(-50%) scale(1.2);
    color: ${({theme:e})=>e.colors.bg};
  }
`;function Me({logoText:e,links:o,showSearch:i=!1,showThemeToggle:d=!0}){const{mode:r,toggleMode:a}=$e(),[c,s]=p.useState(""),{engine:g}=_();return t.jsx(ke,{children:t.jsxs(Fe,{children:[t.jsx(Se,{href:"#",children:e}),t.jsx(Ce,{children:o.map(l=>t.jsx(ze,{href:l.href,children:l.label},l.href))}),t.jsxs(Ae,{children:[i&&t.jsx(Le,{type:"search",placeholder:"Try me...",value:c,onChange:l=>s(l.target.value),onKeyDown:l=>{l.key==="Enter"&&c.trim()&&(g?.addWord(c),s(""))}}),d&&t.jsxs(Ie,{onClick:a,$isLight:r==="light","aria-label":"Toggle theme",children:[t.jsx(W,{children:"🌙"}),t.jsx(W,{children:"☀️"})]})]})]})})}function De(){const e=[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Get In Touch",href:"#getintouch"}];return t.jsxs(je,{children:[t.jsx(Me,{logoText:"Maria Zhytnikova",links:e,showSearch:!0,showThemeToggle:!0}),t.jsx(re,{})]})}const Ee=n.section`
  background: ${({$bg:e,theme:o})=>e||o.colors.bg};
  scroll-margin-top: 80px;
  padding: ${({theme:e})=>e.spacing.xxl};

  display: flex;
  justify-content: center;  // horizontal center
  align-items: center;      // vertical center
`;function F({id:e,children:o,$bg:i}){return t.jsx(Ee,{id:e,$bg:i,children:o})}const S=n.div`
  max-width: ${({theme:e})=>e.container.maxWidth};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xs};
  padding-top: ${({$paddingTop:e,theme:o})=>e??o.spacing.xs};

  padding-bottom: ${({$paddingBottom:e,theme:o})=>e??o.spacing.xs};
`,Be=e=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 121 32",className:"logo",...e},p.createElement("path",{fill:"currentColor",d:"M115.89,13.7H97.74v-.06C98,9.89,101.46,6,106.81,6c5.1-.1,8.81,3.86,9.07, 7.62Zm.94-8A14.46,14.46,0,0,0,96.58,6a14.39,14.39,0,0,0-4.07,10.11,14.19,14.19, 0,0,0,14.35,14.3,13.71,13.71,0,0,0,7.72-2.29A14.75,14.75,0,0,0,120,21.45h-5.27a8.53,8.53, 0,0,1-7.9,4.61c-4.28,0-9-2.93-9.22-8.36v-.07h23.28A14.51,14.51,0,0,0,116.83,5.68Z"}),p.createElement("polygon",{fill:"currentColor",points:"74.87 30.31 90.95 10.69 83.42 10.69 83.42 1.69 66.32 1.69 66.32 10.69 58.79 10.69 74.87 30.31"}),p.createElement("path",{fill:"currentColor",d:"M51.59,21.74a.63.63,0,0,0,.82-.29l.06-.12,0-.07a.64.64,0,0,0,0-.07,1.64,1.64, 0,0,0-.07-1.61,2.15,2.15,0,0,0-1.89-.73c-.36,0-1.56.12-3.39.34h-.06c-1.62.16-2.66, 0-2.86-1.31-.16-1.11.06-1.84,4.43-2.54,4.93-.82,5.75.2,6.14.69l.14.17A6,6,0,0,1,56, 18.09a5.7,5.7,0,0,1,.33,1.47c0,.25,0,1.51,0,1.51a9.16,9.16,0,0,1-9.2,8.18,9.5,9.5,0,0, 1-9.47-9.13V4.36a1.7,1.7,0,0,1,1.68-1.61A1.61,1.61,0,0,1,41,4.36v9.7a.62.62,0,0,0,1.23, 0V11.68A1.71,1.71,0,0,1,44,10.16a2.77,2.77,0,0,1,3,2.4,9.74,9.74,0,0,1,.25,1.79A11, 11,0,0,0,45,15,1.77,1.77,0,0,0,44,13.46a.69.69,0,0,0-.76.21.5.5,0,0,0-.07.38.5.5,0,0,0, .21.3,1.15,1.15,0,0,1,.47.89,2.35,2.35,0,0,1,0,.47A2.4,2.4,0,0,0,43,18.06c.4,2.71,3.14, 2.44,4.18,2.34h.05c1.12-.13,2.91-.33,3.3-.33.57,0,.81.13.87.2s0,.26-.06.45a2.14,2.14,0,0, 1-.1.22.61.61,0,0,0,.31.81m3.52-7.15a5.14,5.14,0,0,0-2.75-.76c0-2-.27-3.44-1.28-4.49l-.18-.18a2.88, 2.88,0,0,1,1.92-.35h0a1.75,1.75,0,0,1,1.24.72c.76.94,1.14,2.82,1,5.06m-4.93-4.42c.74.77.91,1.93.94, 3.67a22.6,22.6,0,0,0-2.6.3,10.32,10.32,0,0,0-.28-1.88,4.24,4.24,0,0,0-1.51-2.49,2.06,2.06,0,0,1, 1.4-.53v0a3,3,0,0,1,2,.93m7.39,10.9c0-.33,0-1.11,0-1.11a6.45,6.45,0,0,0-.42-2.29,8.13,8.13,0,0, 0-.93-1.82c.14-1.18.43-5-1.21-7.07A3,3,0,0,0,53,7.6a3.75,3.75,0,0,0-3.1.85A3.77,3.77,0,0,0,48.13, 8a3.27,3.27,0,0,0-2.54,1.16A5.92,5.92,0,0,0,44.05,9a2.91,2.91,0,0,0-1.86.52V4.36a2.83,2.83,0,0, 0-2.85-2.83,2.9,2.9,0,0,0-2.92,2.83V19.8a10.79,10.79,0,0,0,10.7,10.67,10.39,10.39,0,0,0,10.45-9.4"}),p.createElement("path",{fill:"currentColor",d:"M24.34,25.45H20.55V17.61H12.13v7.84H8.37V6.55h3.76v7.6h8.42V6.55h3.79ZM32.71, 16A16.18,16.18,0,0,0,16.36,0,16.18,16.18,0,0,0,0,16,16.18,16.18,0,0,0,16.36,32,16.18,16.18,0,0,0,32.71,16Z"})),D=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,E=n(f.button)`
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
`,Y=n(E)`
  background: ${({theme:e})=>e.gradients.primary};
  color: ${({theme:e})=>e.colors.accent};

  &:hover {
    transform: ${({theme:e})=>e.button.hoverLift};
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.purple}66;
  }
`,He=n(E)`
  width: 75%;
  background: ${({theme:e})=>e.gradients.primary};
  color: ${({theme:e})=>e.colors.accent};

  &:hover {
    transform: ${({theme:e})=>e.button.hoverLift};
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.purple}66;
  }
`,Re=n(E)`
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
`,Pe=n.a`
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

  &:hover {
    // border-color: ${({theme:e})=>e.colors.purple};
    // color: ${({theme:e})=>e.colors.purple};
  }

  &:hover span {
    transform: translateX(6px); /* move text slightly to right */
  }

  &:hover svg {
    transform: translateX(6px); /* move icon with text */
    // color: ${({theme:e})=>e.colors.purple};
  }
`,G=n(Pe)`
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

  // &:hover::before {
  //   animation: backgroundRunOnce 0.3s linear forwards;
  // }

  // @keyframes backgroundRunOnce {
  //   0% {
  //     opacity: 0;
  //     background-position: 200% 50%;
  //   }
  //   20% {
  //     opacity: 1;
  //     background-position: 150% 50%;
  //   }
  //   50% {
  //     opacity: 1;
  //     background-position: 100% 50%;
  //   }
  //   80% {
  //     opacity: 0.5;
  //     background-position: 50% 50%;
  //   }
  //   100% {
  //     opacity: 0;
  //     background-position: 0% 50%;
  //   }
  // }

  // @keyframes fadeOpacity {
  //   0% {
  //     opacity: 0;
  //   }
  //   20% {
  //     opacity: 1;
  //   }
  //   80% {
  //     opacity: 1;
  //   }
  //   100% {
  //     opacity: 0;
  //   }
  // }

  &:hover {
    color: ${({theme:e})=>e.colors.purple};
  }
`,We=n.a`
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
`,B=({buttons:e})=>t.jsx(D,{children:e.map(({href:o,Icon:i,label:d},r)=>t.jsx(We,{href:o,target:o.startsWith("mailto:")?void 0:"_blank",rel:o.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":d,children:t.jsx(i,{})},r))}),H=[{href:"https://github.com/MariiaZhytnikova",Icon:q,label:"GitHub"},{href:"https://www.linkedin.com/in/mariia-zhytnikova",Icon:Ge,label:"LinkedIn"},{href:"mailto:allusio@gmail.com",Icon:M,label:"Email"}];function q(e){return t.jsx("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}function Ge(e){return t.jsxs("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),t.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),t.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}function Ne(e){return t.jsxs("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"7 10 12 15 17 10"}),t.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}const Oe=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,Ve=n.a`
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
`,Z=({items:e})=>t.jsx(Oe,{children:e.map((o,i)=>{const d=o.icon;return t.jsxs(Ve,{href:o.href,color:o.color,children:[t.jsx("div",{children:t.jsx(d,{size:16,color:o.color==="purple"?"#a855f7":"#fb923c"})}),o.text]},i)})}),U=[{icon:M,text:"allusio@gmail.com",href:"mailto:allusio@gmail.com",color:"purple"},{icon:se,text:"+358 465 760 200",href:"tel:+358465760200",color:"orange"},{icon:ae,text:"Helsinki, Finland",href:"#",color:"purple"}],_e=[{content:"In November 2024, I joined Hive Helsinki, a fully project-based program. There, I’ve been diving into C and C++ projects, learning low-level system programming, and collaborating with talented peers to create innovative solutions. It’s been an exciting journey so far, and I’m eager to see where it takes me!"},{content:"Before moving into tech, I had the opportunity to work as a scientific consultant at NIBR and as a Research Officer at Institute of Radiophysics and Electronics NASU. This experience honed my problem-solving skills and deepened my appreciation for the power of programming in scientific research."},{content:"When I transitioned into tech, I realized many of my previous skills were directly transferable. My experience with data analysis, problem-solving, and working with complex systems has given me a strong foundation for learning programming languages and software development practices. I’m excited to apply these skills in new ways and continue growing as a developer."}],j=n.div`
  color: ${({theme:e})=>e.colors.text};
  padding: ${({$padding:e})=>e??"0"};
  min-height: auto;
  width: ${({width:e})=>e??"100%"};
  height: ${({height:e})=>e??"auto"};
  text-align: ${({textAlign:e})=>e??"left"};
  display: flex;
  flex-direction: column;
`,Ye=n.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme:e})=>e.colors.surface};
  margin: ${({theme:e})=>e.spacing.sm} 0;
`,qe=n.h1`
  font-size: ${({theme:e})=>e.typography.h1.size};
  font-weight: ${({theme:e})=>e.typography.h1.weight};
  line-height: 1.2;
`,C=n.h2`
  font-size: ${({theme:e})=>e.typography.h2.size};
  font-weight: ${({theme:e})=>e.typography.h2.weight};
  line-height: 1.3;
  padding-bottom: ${({theme:e})=>e.spacing.md};
`,Ze=n.h3`
  font-size: ${({theme:e})=>e.typography.h3.size};
  font-weight: ${({theme:e})=>e.typography.h3.weight};
`,z=n.p`
  font-size: ${({theme:e})=>e.typography.subtitle.size};
  font-weight: ${({theme:e})=>e.typography.subtitle.weight};
  color: ${({theme:e})=>e.colors.textSoft};
  margin-top: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,k=n.span`
  font-size: ${({theme:e})=>e.typography.body.size};
  font-weight: ${({theme:e})=>e.typography.body.weight};
  color: ${({theme:e})=>e.colors.muted};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  position: relative;
  cursor: default;
`;function Ue({children:e}){return t.jsx(f.span,{initial:{opacity:0,y:-5},whileHover:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},style:{display:"inline-block",marginLeft:"0.3em"},children:e})}const X=n.span`
  font-size: ${({theme:e})=>e.typography.bodySM.size};
  font-weight: ${({theme:e})=>e.typography.bodySM.weight};
  color: ${({theme:e})=>e.colors.textSoft};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Xe=n(k)`
  color: inherit;
`,Je=n(qe)`
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`,v=n(z)`
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`;n(z)`
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
`;const J=n.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* horizontal centering */
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.lg};
`,Qe=n(f.div)`
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
`,Ke=n.div`
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
`,et=n.div`
  position: relative;
  padding-right: ${({theme:e})=>e.spacing.lg};
`,tt=n.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: ${({theme:e})=>e.colors.surface};
  overflow: hidden;
`,ot=n.div`
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
`,nt=n(f.div)`
  position: absolute;
  width: 100%;
  height: 120px;
  filter: blur(6px);
`,it=n(f.div)`
  position: absolute;
  width: 100%;
  height: 80px;
`,Q=n.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.container.maxMD}) {
    grid-template-columns: 1fr;
  }
`,K=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e,theme:o})=>e||o.spacing.lg};
`,ee=n(K)``,te=n(K)``;function rt({id:e}){const[o,i]=p.useState(0),d=p.useRef(null),r=c=>{if(d.current){const s=d.current.getBoundingClientRect(),g=c.clientY-s.top;i(g)}},a=c=>{const s=[m.colors.orange,m.colors.purple,m.colors.blue,m.colors.purple,m.colors.orange],g=Math.floor(c/100*s.length);return s[Math.min(g,s.length-1)]};return t.jsx(F,{id:e??"about",children:t.jsxs(S,{children:[t.jsxs(j,{height:"auto",children:[t.jsx(C,{children:"About Me"}),t.jsx(k,{children:"I’m a software developer student at Helsinki Hive, originally coming from a scientific research background."})]}),t.jsxs(Q,{children:[t.jsx(ee,{children:t.jsx(j,{height:"auto",$padding:"0",children:t.jsxs(J,{children:[t.jsx(Qe,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:300},children:t.jsx("img",{src:"./image.png",alt:"./image.png"})}),t.jsx(Ze,{children:"Mariia Zhytnikova"}),t.jsx(Ke,{children:t.jsxs("a",{href:"https://www.hive.fi/about-hive/",target:"_blank",rel:"noopener noreferrer",children:[t.jsx(Xe,{children:"Student at"}),t.jsx(Be,{})]})}),t.jsx(Ye,{}),t.jsx(Z,{items:U}),t.jsx(B,{buttons:H}),t.jsx(Y,{as:"a",href:"#contact",children:"Get In Touch"})]})})}),t.jsx(te,{children:t.jsxs(et,{ref:d,onMouseMove:r,children:[t.jsxs(tt,{children:[t.jsx(ot,{}),t.jsx(nt,{style:{top:o-60,background:"linear-gradient(to bottom, transparent, currentColor, transparent)",color:a(o/(d.current?.clientHeight||1)*100)},transition:{type:"spring",stiffness:500,damping:30}}),t.jsx(it,{style:{top:o-40,background:"linear-gradient(to bottom, transparent, currentColor, transparent)",color:a(o/(d.current?.clientHeight||1)*100)},transition:{type:"spring",stiffness:500,damping:30}})]}),_e.map((c,s)=>t.jsx(X,{as:"p",children:c.content},s))]})})]})]})})}const oe=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
`,$=n.div`
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
`,st=n.div`
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
`,b=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: auto;
`,y=n.span`
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
`,w={frontend:["React","TypeScript","Tailwind CSS","Styled Components"],backend:["Node.js","TypeScript","Go","Python","Express","Fastify","REST APIs"],database:["PostgreSQL","MariaDB","Redis","SQLite","MySQL"],devops:["Docker","Git","CI/CD","Linux","Nginx"],systems:["C","C++","POSIX","Low-level programming"]};function at({id:e}){const o=fe();return t.jsx(F,{id:e,$bg:o.colors.surfaceSoft,children:t.jsx(S,{$paddingTop:"40px",$paddingBottom:"40px",children:t.jsxs(j,{height:"auto",children:[t.jsx(C,{children:"Skills & Technologies"}),t.jsxs(oe,{children:[t.jsxs($,{children:[t.jsx(v,{children:"Frontend"}),t.jsx(b,{children:w.frontend.map(i=>t.jsx(y,{children:i},i))})]}),t.jsxs($,{children:[t.jsx(v,{children:"Backend"}),t.jsx(b,{children:w.backend.map(i=>t.jsx(y,{children:i},i))})]}),t.jsxs($,{children:[t.jsx(v,{children:"Database"}),t.jsx(b,{children:w.database.map(i=>t.jsx(y,{children:i},i))})]}),t.jsxs($,{children:[t.jsx(v,{children:"DevOps & Tools"}),t.jsx(b,{children:w.devops.map(i=>t.jsx(y,{children:i},i))})]}),t.jsxs($,{children:[t.jsx(v,{children:"Systems"}),t.jsx(b,{children:w.systems.map(i=>t.jsx(y,{children:i},i))})]})]})]})})})}const lt="/portfolio/assets/Maze_is_Lava-BAR8MH1x.png",ct="/portfolio/assets/DishDash-NcVmUuCQ.png",dt="/portfolio/assets/Hive_Game-Cfy4Dy58.png",pt=[{id:1,title:"Maze is lava",image:lt,description:"A full-stack multiplayer web-game with auth, chat and friends system",tech:["React","Vite","Tailwind CSS","Socket.io","TypeScript","Node.js","NestJS","Fastify","TypeORM","PostgreSQL","JWT","Swagger/OpenAPI","Jest","GitHub actions"],github:"https://github.com/Transcendence-surprise",live:"https://valinor.ink"},{id:2,title:"DishDash",image:ct,description:"🌱 A small tool with a big impact on food waste ",tech:["Node.js","Vite","TypeScript","React","Go","Rest API","GitHub actions","Deployment: GitHub Pages, Fly.io"],github:"https://github.com/MariiaZhytnikova/DishDash",live:"https://mariiazhytnikova.github.io/DishDash/"},{id:3,title:"Hive",image:dt,description:"the Hive game, designed by John Yianni",tech:["Node.js","Vite","TypeScript","Deployment: GitHub Pages"],github:"https://github.com/MariiaZhytnikova/Hive-abstract-game",live:"https://mariiazhytnikova.github.io/Hive-abstract-game/"}];function gt({id:e}){return t.jsx(F,{id:e,children:t.jsxs(S,{children:[t.jsx(C,{children:"Featured Projects"}),t.jsx(oe,{children:pt.map(o=>t.jsxs(st,{children:[t.jsx("div",{className:"lines",children:Array.from({length:10}).map((i,d)=>t.jsx("div",{className:"line"},d))}),t.jsx(z,{children:o.title}),t.jsx(k,{children:o.description}),o.image&&t.jsx("img",{src:o.image,alt:o.title,style:{width:"100%",height:"180px",objectFit:"cover",borderRadius:"8px",marginTop:"12px"}}),t.jsx(b,{children:o.tech.map(i=>t.jsx(y,{children:i},i))}),t.jsxs(D,{children:[t.jsxs(G,{label:"GitHub",href:o.github,target:"_blank",rel:"noopener noreferrer","aria-label":`${o.title} GitHub`,children:[t.jsx(q,{}),t.jsx("span",{children:"GitHub"})]}),t.jsxs(G,{label:"Live Demo",href:o.live,target:"_blank",rel:"noopener noreferrer","aria-label":`${o.title} Live Demo`,children:[t.jsx(le,{}),t.jsx("span",{children:"Live Demo"})]})]})]},o.id))})]})})}const ht=n(f.div)`
  position: relative;
`,A=({delay:e=0,children:o})=>t.jsx(ht,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:e},children:o}),ut=n.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,I=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
`,T=n.div`
  color: ${({$focused:e,color:o,theme:i})=>e?o||i.colors.purple:i.colors.muted};
  transition: ${({theme:e})=>e.transitions.colorFast};
`,L=n(f.input)`
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
`,mt=n(L).attrs({as:"textarea",rows:7})`
  resize: none;
`;function xt({id:e}){const[o,i]=p.useState({name:"",email:"",message:""}),[d,r]=p.useState(null),[a,c]=p.useState("idle");p.useEffect(()=>{if(a!=="idle"){const l=setTimeout(()=>c("idle"),3e3);return()=>clearTimeout(l)}},[a]);const s=l=>{i({...o,[l.target.name]:l.target.value})},g=async l=>{l.preventDefault(),c("idle"),(await fetch("https://formspree.io/f/mlgpyyjd",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(c("success"),i({name:"",email:"",message:""})):c("error")};return t.jsx(F,{id:e??"getintouch",children:t.jsx(S,{$paddingTop:"40px",$paddingBottom:"40px",children:t.jsxs(j,{height:"auto",children:[t.jsx(C,{children:"Get In Touch"}),t.jsxs(Q,{children:[t.jsxs(ee,{children:[t.jsx(X,{children:"I'm always open to new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!"}),t.jsx(Z,{items:U}),t.jsx(B,{buttons:H})]}),t.jsx(te,{children:t.jsxs(ut,{onSubmit:g,children:[t.jsx(A,{delay:.3,children:t.jsxs(I,{children:[t.jsx(T,{$focused:d==="name",color:"#A855F7",children:t.jsx(ce,{size:20})}),t.jsx(L,{type:"text",id:"name",name:"name",value:o.name,placeholder:"your name",onFocus:()=>r("name"),onBlur:()=>r(null),onChange:s,required:!0})]})}),t.jsx(A,{delay:.4,children:t.jsxs(I,{children:[t.jsx(T,{$focused:d==="email",color:"#FB923C",children:t.jsx(M,{size:20})}),t.jsx(L,{type:"email",$focusColor:"#FB923C",id:"email",name:"email",value:o.email,placeholder:"your.email@example.com",onFocus:()=>r("email"),onBlur:()=>r(null),onChange:s,required:!0})]})}),t.jsx(A,{delay:.5,children:t.jsxs(I,{children:[t.jsx(T,{$focused:d==="message",color:"#A855F7",$alignTop:!0,children:t.jsx(de,{size:20})}),t.jsx(mt,{id:"message",name:"message",value:o.message,placeholder:"your message...",onFocus:()=>r("message"),onBlur:()=>r(null),onChange:s,required:!0})]})}),t.jsx(J,{children:t.jsxs(He,{type:"submit",children:[a==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{fontSize:16,lineHeight:1},children:"Send Message"}),t.jsx(R,{size:20})]}),a==="success"&&t.jsxs(t.Fragment,{children:[t.jsx(R,{size:20}),t.jsx("span",{style:{fontSize:16,lineHeight:1},children:"Sent!"})]}),a==="error"&&t.jsx("span",{style:{fontSize:16,lineHeight:1},children:"❌ Try again"})]})})]})})]})]})})})}const ft="modulepreload",bt=function(e){return"/portfolio/"+e},N={},yt=function(o,i,d){let r=Promise.resolve();if(i&&i.length>0){let g=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),s=c?.nonce||c?.getAttribute("nonce");r=g(i.map(l=>{if(l=bt(l),l in N)return;N[l]=!0;const h=l.endsWith(".css"),x=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${x}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":ft,h||(u.as="script"),u.crossOrigin="",u.href=l,s&&u.setAttribute("nonce",s),document.head.appendChild(u),h)return new Promise((ne,ie)=>{u.addEventListener("load",ne),u.addEventListener("error",()=>ie(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return r.then(c=>{for(const s of c||[])s.status==="rejected"&&a(s.reason);return o().catch(a)})};function vt({id:e}){const o=p.useRef(null),i=p.useRef(null),{setEngine:d}=_();return p.useEffect(()=>{let r=0,a=!1;return(async()=>{const s=o.current;if(!s)return;const{WordEngine:g}=await yt(async()=>{const{WordEngine:x}=await import("./wordEngine-J_mACqvd.js");return{WordEngine:x}},__vite__mapDeps([0,1,2,3,4]));if(a||!s.isConnected)return;const l=new g(s);i.current=l,d(l),l.addWord("Hello");const h=()=>{a||(l.update(),r=window.requestAnimationFrame(h))};r=window.requestAnimationFrame(h)})(),()=>{a=!0,d(null),i.current?.destroy(),window.cancelAnimationFrame(r)}},[]),console.log("canvasRef:",o.current),t.jsx(F,{id:e,children:t.jsx(S,{children:t.jsxs(j,{height:"clamp(640px, 78vh, 920px)",style:{position:"relative",overflow:"hidden"},children:[t.jsx("div",{ref:o,style:{position:"absolute",inset:0,overflow:"hidden",height:"100%",width:"100%",pointerEvents:"auto",outline:"2px solid red"}}),t.jsx(Je,{children:"Hi, I'm Maria"}),t.jsx(z,{children:"Software Engineer"}),t.jsxs(k,{children:["I know exactly what I'm doing...",t.jsx(Ue,{children:"But in a much more real sense, I have no idea what I'm doing."})]}),t.jsx(k,{children:"Software engineering student turning ideas into real, working software. I explore systems, debug issues, and refine solutions — everything from low-level programs to full-stack applications. I learn by doing, experimenting, and improving along the way."}),t.jsxs(D,{children:[t.jsx(Y,{as:"a",href:"#getintouch",children:"Get In Touch"}),t.jsxs(Re,{as:"a",href:"./CV-Mariia_Zhytnikova.pdf",download:!0,"aria-label":"Download CV as PDF",children:[t.jsx(Ne,{}),"Download CV"]})]}),t.jsx(B,{buttons:H})]})})})}function $t(){return t.jsxs(t.Fragment,{children:[t.jsx(vt,{id:"spotlight"}),t.jsx(rt,{id:"about"}),t.jsx(gt,{id:"projects"}),t.jsx(at,{id:"skills"}),t.jsx(xt,{id:"getintouch"})]})}function wt(){return t.jsx(pe,{children:t.jsx(P,{element:t.jsx(De,{}),children:t.jsx(P,{path:"/",element:t.jsx($t,{})})})})}ge.createRoot(document.getElementById("root")).render(t.jsx(he.StrictMode,{children:t.jsx(we,{children:t.jsx(ue,{basename:"/portfolio/",children:t.jsx(wt,{})})})}));export{m as t};
