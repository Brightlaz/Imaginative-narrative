import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Footer from './Footer';

export default () => (
  <PDFViewer>
    <Footer />
  </PDFViewer>
);