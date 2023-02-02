import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EditThanks() {
  return (
    <div className="d-flex flex-column gap-4 pt-4 pb-4 container">
      <h2>THANK YOU!</h2>
      <p>
        Request submitted, you will soon receive an email confirming your
        changes after they are reviewed.
      </p>
      <Link to="/">
        <Button type="submit" className="btn-bg btn-text">
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}

export default EditThanks;
