import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
       <circle cx="128" cy="128" r="128" /> 
    <rect x="6" y="262" rx="11" ry="11" width="254" height="27" /> 
    <rect x="0" y="305" rx="0" ry="0" width="256" height="58" /> 
    <rect x="7" y="382" rx="0" ry="0" width="88" height="46" /> 
    <rect x="20" y="455" rx="0" ry="0" width="0" height="2" /> 
    <rect x="118" y="379" rx="0" ry="0" width="129" height="61" /> 
    <rect x="180" y="462" rx="0" ry="0" width="0" height="9" /> 
    <rect x="178" y="430" rx="0" ry="0" width="2" height="10" />
  </ContentLoader>
)

export default Sceleton