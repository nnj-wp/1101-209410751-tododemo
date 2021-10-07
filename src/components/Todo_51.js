import { useState } from 'react';
import Backdrop_51 from './Backdrop_51';
import Modal_51 from './Modal_51';


function Todo_51(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler(){
    setShowModal(true);
  }

  function closeModalHandler(){
    setShowModal(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick = {showModalHandler}>Delete</button>
        </div>
      </div>
      {showModal && <Backdrop_51 onClose= {closeModalHandler}/>}
      {showModal && <Modal_51 text = 'Are yor sure ??' onClose= {closeModalHandler}/>}
    </div>
  );
}

export default Todo_51;
