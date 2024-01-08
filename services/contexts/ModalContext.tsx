'use client';

import * as React from 'react';

export const ModalContext = React.createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openedModalId, setOpenedModalId] = React.useState<string | null>(null);

  const onOpenModal = (modalId: string) => {
    if (openedModalId === modalId) return;

    setOpenedModalId(modalId);
  };

  const onCloseModal = () => {
    setOpenedModalId(null);
  };

  return (
    <ModalContext.Provider
      value={{
        openedModalId,
        isModalOpened: Boolean(openedModalId),
        onOpenModal,
        onCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

type ModalContextProps = {
  openedModalId: string | null;
  isModalOpened: boolean;
  onOpenModal: (modalId: string) => void;
  onCloseModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};
