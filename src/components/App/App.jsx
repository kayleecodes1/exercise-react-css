import React from 'react';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';

function App() {
  // Modal visibility state.
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  // Modal visibility handlers.
  const handleShowModal = React.useCallback(() => {
    setIsModalVisible(true);
  }, [setIsModalVisible]);
  const handleHideModal = React.useCallback(() => {
    setIsModalVisible(false);
  }, [setIsModalVisible]);

  return (
    <div className="App">
      <Button variant="default" onClick={handleHideModal}>Hide Modal</Button>
      <Button variant="primary" onClick={handleShowModal}>Show Modal</Button>
      <p>
        isModalVisible: {isModalVisible.toString()}
      </p>
      <Modal />
    </div>
  );
}

export default App;
