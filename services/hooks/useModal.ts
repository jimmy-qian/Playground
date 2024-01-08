import * as React from 'react';

import { ModalContext } from 'services/contexts';

export const useModal = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error('Components should be rendered inside the ModalProvider component');
  }

  return context;
};
