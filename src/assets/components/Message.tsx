import React from "react";

interface MessageProps {
  msg_title: string;
  msg_desc: string;
  show: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const Message: React.FC<MessageProps> = ({
  msg_title,
  msg_desc,
  show,
  onClose,
  onDelete,
}) => {
  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex={-1}
      role="dialog"
    >
      <div
        className="modal-dialog"
        role="document"
        style={{ maxWidth: "500px" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{msg_title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <p>{msg_desc}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onDelete}>
              🗑️ Delete Task
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
