'use client';

import { ForwardedRef, forwardRef } from 'react';
import styles from './SortButton.module.scss';
import { motion } from 'framer-motion';

export type TButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SortButton = motion(forwardRef(({ label, onClick }: TButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  
  return (
    <button
      value={label}
      ref={ref} type='button' className = {styles.sortButton} onClick={onClick}>
      {label}
    </button>
    );}
));

export { SortButton };