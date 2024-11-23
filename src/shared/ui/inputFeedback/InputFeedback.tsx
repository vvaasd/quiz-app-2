import { Icon } from '@/shared/ui';
import { IconsEnum } from '@/shared/types';
import React from 'react';

interface InputFeedbackProps {
  error?: boolean;
  success?: boolean;
  errorMessage?: string;
  successMessage?: string;
  iconName?: IconsEnum;
  iconClassName?: string;
}

export const InputFeedback: React.FC<InputFeedbackProps> = ({
  error,
  success,
  errorMessage,
  successMessage,
  iconName = IconsEnum.danger,
  iconClassName = 'w-4 h-4 shrink-0',
}) => {
  if (error && errorMessage) {
    return (
      <div className="flex gap-1.5 items-center">
        <Icon name={iconName} className={iconClassName} />
        <p className="text-xs font-normal text-danger-200">{errorMessage}</p>
      </div>
    );
  }

  if (success && successMessage) {
    return (
      <div className="flex gap-1.5 items-center">
        <Icon name={IconsEnum.check} className={iconClassName} />
        <p className="text-xs font-normal text-success-200">{successMessage}</p>
      </div>
    );
  }
};