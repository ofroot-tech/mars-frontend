'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function StepTwo() {
  const [serviceType, setServiceType] = useState('Removal Service');
  const [selectedTime, setSelectedTime] = useState('07:00 AM');
  const [itemsToRemove, setItemsToRemove] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const router = useRouter();

  // Load service type from localStorage on component mount
  useEffect(() => {
    try {
      const storedServiceType = localStorage.getItem('service_type');
      if (storedServiceType) setServiceType(storedServiceType);
    } catch (error) {
      console.error('Failed to load service_type from localStorage', error);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('service_type', serviceType);
      localStorage.setItem('time_slot', selectedTime);
      localStorage.setItem('items_to_remove', itemsToRemove);
      localStorage.setItem('date_of_removal', selectedDate.toISOString());
    } catch (error) {
      console.error('Failed to save to localStorage', error);
    }

    router.push('/online-booking/step-three');
  };

  return (
    <>
      <Head>
        <title>Step 2 | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

      <div id="wrapper">
        <Navbar name="Online Booking" />

        <div className="container mt-4">
          <h1 className="text-center">Choose a Time Slot</h1>

          <form onSubmit={handleSubmit} className="mt-4">
            <p className="btn btn-success btn-sm rounded-pill">{serviceType}</p>

            <div className="form-group">
              <label className="text-dark">Choose a time slot:</label>
              <p style={{ color: 'grey', fontSize: '75%' }}>
                Click below and select a time slot. May vary depending on availability.
              </p>
              <select
                className="form-control"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="07:00 AM">7:00 AM - 9:00 AM</option>
                <option value="09:00 AM">9:00 AM - 11:00 AM</option>
                <option value="11:00 AM">11:00 AM - 1:00 PM</option>
                <option value="01:00 PM">1:00 PM - 3:00 PM</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="text-dark">
                {serviceType === 'Lawn Service'
                  ? 'List details of the job'
                  : 'List the items you would like removed'}
              </label>
              <p style={{ color: 'grey', fontSize: '75%' }}>
                {serviceType === 'Lawn Service'
                  ? 'e.g., I have 3 areas I would like to have serviced'
                  : 'e.g., a mattress and a sofa in my basement'}
              </p>
              <textarea
                className="form-control"
                rows="2"
                placeholder="Enter details here..."
                value={itemsToRemove}
                onChange={(e) => setItemsToRemove(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group mt-3">
              <label className="text-dark">
                {serviceType === 'Lawn Service'
                  ? 'Pick a date for lawn service'
                  : 'Pick a date for pickup'}
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="form-control"
                dateFormat="MM/dd/yyyy"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}
