import { useState } from "react";
import "./TodoList.css";
import Message from "./Message";

function TodoList() {
  const [ifOptionsVisible, setOptionsVisible] = useState(true);
  const [ifInputWindowVisible, setInputWindowVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoDict, setTodoDict] = useState<Record<string, string>>({});
  const [listSelected, setListSelected] = useState(-1);
  const [selectedTask, setSelectedTask] = useState<{
    title: string;
    desc: string;
  } | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Add Task handler
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      setTodoDict((prev) => ({ ...prev, [title]: description }));
      setTitle("");
      setDescription("");
      setInputWindowVisible(false);
      setOptionsVisible(true);
    }
  };

  // Close modal handler
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
    setListSelected(-1);
  };

  // Delete selected task
  const handleDeleteTask = () => {
    if (listSelected === -1) return;
    const titles = Object.keys(todoDict);
    const titleToDelete = titles[listSelected];
    const newDict = { ...todoDict };
    delete newDict[titleToDelete];
    setTodoDict(newDict);
    handleCloseModal();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 todo-card">
        <h3 className="text-center mb-4">📝 My To-Do List</h3>

        <div className="row">
          {/* Left Column - Saved Tasks */}
          <div className="col-md-4 border-end">
            <h5 className="mb-3">Saved Tasks</h5>
            <ul className="list-group">
              {Object.entries(todoDict).map(([title, desc], index) => (
                <li
                  key={title}
                  className={
                    listSelected === index
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  onClick={() => {
                    setListSelected(index);
                    setSelectedTask({ title, desc });
                    setShowModal(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <strong>{title}</strong>: {desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Actions */}
          <div className="col-md-8 ps-md-5 mt-2 mt-md-0">
            {ifOptionsVisible && (
              <>
                <h5 className="mb-4">Actions</h5>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setOptionsVisible(false);
                      setInputWindowVisible(true);
                    }}
                  >
                    ➕ Add New Task
                  </button>
                  <button
                    className="btn btn-danger"
                    disabled={listSelected === -1}
                    onClick={handleDeleteTask}
                  >
                    🗑️ Delete Task
                  </button>
                </div>
              </>
            )}

            {ifInputWindowVisible && (
              <div className="card shadow-sm mt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title">Enter Details</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => {
                        setInputWindowVisible(false);
                        setOptionsVisible(true);
                        setTitle("");
                        setDescription("");
                      }}
                    />
                  </div>
                  <form onSubmit={handleAddTask}>
                    <div className="mb-3">
                      <label htmlFor="titleInput" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="titleInput"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="descriptionInput" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="descriptionInput"
                        placeholder="Enter a detailed description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTask && (
        <Message
          msg_title={selectedTask.title}
          msg_desc={selectedTask.desc}
          show={showModal}
          onClose={handleCloseModal}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}

export default TodoList;
