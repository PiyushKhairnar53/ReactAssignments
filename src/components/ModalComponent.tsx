import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ModalComponent: React.FC<any> = ({ props }) => {

  const [show, setShow] = useState(false);
  const [custStreet, setStreet] = useState<string>('');
  const [custName, setName] = useState<string>('');
  const [custAge, setAge] = useState<any>('');
  const [custContactNo, setContactNo] = useState<string>('');
  const [custCity, setCity] = useState<string>('');
  const [custZipcode, setZipcode] = useState<string>('');
  const [custState, setState] = useState<string>('');
  const [custCountry, setCountry] = useState<string>('');

  const id: any = props;

  useEffect(() => {
    if (id) {
      axios.get(`https://localhost:44367/api/Customer/${id}`)
        .then(res => {
          console.log(res)
          setName(res.data.name);
          setAge(res.data.age);
          setContactNo(res.data.contactNo);
          setStreet(res.data.street);
          setCity(res.data.city);
          setZipcode(res.data.zipcode);
          setState(res.data.state);
          setCountry(res.data.country);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [id]);

  if (custStreet === '') {
    setStreet('Not Mentioned');
  }
  if (custCity === '') {
    setCity('Not Mentioned');
  }
  if (custZipcode === '') {
    setZipcode('Not Mentioned');
  }
  if (custState === '') {
    setState('Not Mentioned');
  }
  if (custCountry === '') {
    setCountry('Not Mentioned');
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
    <div>

      <Modal.Header closeButton>
        <Modal.Title>Customer : {custName}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className='row d-flex'>
            <p className='text-left'><strong>Age :</strong> {custAge}</p>
          </div>
          <div className='row d-flex'>
            <p className='text-left'><strong>Contact No :</strong> {custContactNo}</p>
          </div>
          <div className='row d-flex'>
            <p className='text-left'><strong>Street :</strong> {custStreet}</p>
          </div>
          <div className='row d-flex'>
            <p className='text-left'><strong>City :</strong> {custCity}</p>
          </div>
          <div className='row d-flex'>
            <p className='text-left'><strong>Zipcode :</strong> {custZipcode}</p>
          </div>
          <div className='row d-flex'>
            <p className='text-left'><strong>State :</strong> {custState}</p>
          </div>
          <div className='row d-flex'>
            <p className='text-left'><strong>Country :</strong> {custCountry}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>

    </div>
  )

}

export default ModalComponent