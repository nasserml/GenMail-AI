import React from 'react'

export default function SocialIconsComponent({options, style , outerStyle}) {
  return (
    <div style={outerStyle}>
        {options?.map((option, index)=> (
            <img style={style} key={index} src={option?.icon} />
        ))}
    </div>
  )
}
