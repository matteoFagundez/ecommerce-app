// src/components/CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';
import currencyService from '../services/currencyService';

const CurrencyConverter = ({ priceUSD }) => {
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState('EUR');
  const [convertedPrice, setConvertedPrice] = useState(priceUSD);

  useEffect(() => {
    currencyService.getRates().then(data => {
      setRates(data.rates);
    });
  }, []);

  useEffect(() => {
    if (rates[currency]) {
      setConvertedPrice((priceUSD * rates[currency]).toFixed(2));
    }
  }, [currency, rates, priceUSD]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Price in {currency}</Card.Title>
        <Card.Text>{convertedPrice} {currency}</Card.Text>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="4">
              Convert to
            </Form.Label>
            <Col sm="8">
              <Form.Control
                as="select"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
              >
                {Object.keys(rates).map(rate => (
                  <option key={rate} value={rate}>
                    {rate}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CurrencyConverter;
