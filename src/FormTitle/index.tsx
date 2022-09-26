import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface FormTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  type?: 'point';
  title: string | React.ReactNode;
  other?: React.ReactChild;
}

const FormTitle: React.FC<FormTitleProps> = ({ title, other, className, type, ...props }) => {
  const typeClassName = type && { point: styles.pointTitle }[type];

  return (
    <div {...props} className={classnames(typeClassName || styles.formTitleWrapper, className)}>
      <div className={typeClassName || styles.formTitle}>{title}</div>
      {other}
    </div>
  );
};

export default FormTitle;
