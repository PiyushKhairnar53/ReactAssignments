import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import { Customer } from './Customer';
import { useNavigate, useLocation } from 'react-router-dom';
import ModalComponent from '../../components/ModalComponent';
import { Modal } from 'react-bootstrap';

const ViewAttorney = () => {

  return (
    <div>
      <div className="text-center mt-2">
        <h4>Attorney List</h4>
      </div>      
    </div>
  );
}

export default ViewAttorney;
