import React from 'react';
import { Modal } from 'antd';

function GoogleModal({ visible, onClose, children }) {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      destroyOnClose={true}
      closable={true}
    >
      {children}
    </Modal>
  );
}

export default GoogleModal;
