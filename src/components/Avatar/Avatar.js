import React from 'react';
import style from './Avatar.module.css';

const Avatar = (props) => {
  return (
    <span style={{backgroundColor: props.bgColor}} className={style.avatar}>
      <img
        style={{margin: props.margin}}
        src={props.img}
        width={props.width}
        alt={props.alt} />
    </span>
  )
}

export default Avatar
