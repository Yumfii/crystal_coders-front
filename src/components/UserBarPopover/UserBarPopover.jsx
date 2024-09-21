import React, { useState } from 'react';
import CSS from './UserBarPopover.module.css';
import { TbSettings } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import Modal from 'components/Modal/Modal';
import UserSettingsModal from 'components/UserSettingsModal/UserSettingsModal';

const UserBarPopover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={CSS.popoverBlock}>
      <button type='button' className={`${CSS.popoverBtn}`}>
        <TbSettings className={CSS.settingsIcon} onClick={handleOpenModal} />
        Settings
      </button>
      <button type='button' className={`${CSS.popoverBtn} ${CSS.transparentBtn}`}>
        <LuLogOut />
        Log out
      </button>

      {isModalOpen &&
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <UserSettingsModal />
        </Modal>
      }
    </div>
  );
};

export default UserBarPopover;
