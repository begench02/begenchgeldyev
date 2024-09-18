import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './flip-text.module.sass';

export const FlipText: FC<FlipTextProps> = (props) => {
  const { texts, className, ...rest } = props;
  const [curr_index, set_curr_index] = useState(0);

  useEffect(() => {
    const timeout_id = setTimeout(() => {
      set_curr_index((prev) => {
        return prev === texts.length - 1 ? 0 : prev + 1;
      });
    }, 5_000);

    return () => clearTimeout(timeout_id);
  }, [curr_index]);

  return (
    <div className={clsx(styles.main, className)} {...rest}>
      <AnimatePresence>
        {texts.map((text, index) =>
          index === curr_index ? (
            <motion.p className={styles.flip_text} animate={{ y: 0 }} initial={{ y: '-100px' }} transition={{ type: 'spring' }} key={index} exit={{ y: '200px' }}>
              {text.split(' ').map((word) => (
                <p className={styles.word}>{word}</p>
              ))}
            </motion.p>
          ) : null,
        )}
      </AnimatePresence>
    </div>
  );
};

type FlipTextProps = {
  texts: string[];
  className: string;
};
