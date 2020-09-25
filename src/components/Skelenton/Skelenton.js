import React from "react"
import ContentLoader from "react-content-loader";

const Skelenton  = () => {
    return (
        <ContentLoader 
    speed={2}
    width={320}
    height={280}
    viewBox="0 0 320 280"
    backgroundColor="#d0cdcd"
    foregroundColor="#ffffff"
    style={{border: '4px solid gray', borderRadius: '8px'}}
  >
    <rect x="52" y="194" rx="9" ry="9" width="209" height="19" /> 
    <rect x="93" y="249" rx="9" ry="9" width="121" height="16" /> 
    <circle cx="156" cy="99" r="86" /> 
    <rect x="18" y="223" rx="8" ry="8" width="279" height="12" />
  </ContentLoader>
    )
}

export default Skelenton;