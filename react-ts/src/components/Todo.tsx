import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoElement: React.FC<Props> = ({ todo }) => {
  return <li> {todo.text} </li>;
};
