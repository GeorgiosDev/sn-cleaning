// Modal.tsx
import ReactModal from 'react-modal';
import Privacy from './Privacy';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
    >
      <Privacy onClose={onClose} />
    </ReactModal>
  );
};

export default Modal;
