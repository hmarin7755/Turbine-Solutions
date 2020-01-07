import React from "react"
import PropTypes from "prop-types"
import { Modal } from "react-bootstrap"

import "./modal.scss"

const PortfolioModal = ({ show, onHide, children }) => {

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {children}
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0"><b>We've got what you need!</b></h2>
                <hr className="divider light my-4"/>
                <p className="text-white mb-4">Start Bootstrap has everything you need to get your new website up
                  and
                  running in no time! Choose one of our open source, free to download, and easy to use themes! No
                  strings
                  attached!</p>
              </div>
            </div>
          </div>
      </Modal.Body>
    </Modal>
  );
}

PortfolioModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default PortfolioModal