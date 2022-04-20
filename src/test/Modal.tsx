import { useState } from "react";
import { Dialog } from "@headlessui/react";

const MyDialog: React.FC = ({ children }) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => {}} className="shadow-lg p-2">
      {children}
      {/* <Dialog.Overlay className="bg-gray-500" /> */}
      <Dialog.Title>Deactivate account</Dialog.Title>
      <Dialog.Description>
        This will permanently deactivate your account
      </Dialog.Description>
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
      <button onClick={() => setIsOpen(false)}>Deactivate</button>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
    </Dialog>
  );
};
export default MyDialog;
