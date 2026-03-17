import React from "react";

function MenuItem(props) {
  const { icon: Icon, text, ...restProps } = props;
  return (
    <button className="btn  border-none shadow-none justify-start gap-2 hover:opacity-20 w-ful">
      <Icon {...restProps} />
      {text}
    </button>
  );
}

export default MenuItem;
