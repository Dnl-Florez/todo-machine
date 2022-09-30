import React from 'react';
import { FiX, FiPlus, FiCheck, FiArrowLeftCircle } from "react-icons/fi";

const contentIcon = {
  checkIcon: <FiCheck />,
  deleteIcon: <FiX />,
  createIcon: <FiPlus />,
  backIcon: <FiArrowLeftCircle />
}

const classIcon = {
    checkIcon:"Icon Icon-check",
    deleteIcon:"Icon Icon-delete",
    createIcon: 'Icon Icon-create',
    backIcon: 'TodoForm-button--cancel'
}

const TodoIcon = ({
  icon,
  clickAction,
  addClass
}) => {
  return(
    <span
      className={`${classIcon[icon]} ${addClass || ""}`}
      onClick={clickAction}
    >
      {contentIcon[icon]}
    </span>
  );
}

export { TodoIcon };
