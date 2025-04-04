'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function ConfirmDetails() {
  const [formData, setFormData] = useState({
    serviceType: '',
    address: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    phoneType: '',
    dateOfRemoval: '',
    timeSlot: '',
    itemsToRemove: '',
  });

  const [editMode, setEditMode] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const data = {
        serviceType: localStorage.getItem('service_type') || '',
        address: localStorage.getItem('address') || '',
        unit: localStorage.getItem('unit') || '',
        city: localStorage.getItem('city') || '',
        state: localStorage.getItem('state') || '',
        zip: localStorage.getItem('zip') || '',
        country: localStorage.getItem('country') || '',
        firstName: localStorage.getItem('first_name') || '',
        lastName: localStorage.getItem('last_name') || '',
        email: localStorage.getItem('email') || '',
        phoneNumber: localStorage.getItem('phone_number') || '',
        phoneType: localStorage.getItem('phone_type') || '',
        dateOfRemoval: localStorage.getItem('date_of_removal') || '',
        timeSlot: localStorage.getItem('time_slot') || '',
        itemsToRemove: localStorage.getItem('items_to_remove') || '',
      };
      setFormData(data);
    } catch (err) {
      console.error('Error loading form data from localStorage:', err);
    }
  }, []);

  const handleEditToggle = (field) => {
    setEditMode((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    localStorage.setItem(field, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const requiredFields = [
      'firstName', 'lastName', 'email', 'phoneNumber', 'phoneType',
      'address', 'city', 'state', 'zip', 'country',
      'dateOfRemoval', 'timeSlot', 'serviceType', 'itemsToRemove',
    ];

    const missing = requiredFields.filter((field) => !formData[field]);
    if (missing.length > 0) {
      setMessage({
        type: 'error',
        text: `Missing required fields: ${missing.join(', ')}`,
      });
      setIsSubmitting(false);
      return;
    }

    console.log('Submitting formData:', formData);

    try {
      const response = await fetch('/api/online-booking/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: result.message });
      } else {
        setMessage({ type: 'error', text: result.error || 'Server error' });
      }
    } catch (err) {
      console.error('Error submitting booking:', err);
      setMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Confirm Pickup Details</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar name="Online Booking" />

      <div id="wrapper" className="container mt-4 pt-4">
        <p className="btn btn-success btn-sm rounded-pill">{formData.serviceType}</p>
        <h1>Confirm Details</h1>

        <ul className="list-group mt-3 pt-3">
          {[
            ['Address', 'address'],
            ['Unit #', 'unit'],
            ['City', 'city'],
            ['State', 'state'],
            ['ZIP Code', 'zip'],
            ['Country', 'country'],
            ['First Name', 'firstName'],
            ['Last Name', 'lastName'],
            ['Email', 'email'],
            ['Phone Number', 'phoneNumber'],
            ['Phone Type', 'phoneType'],
            ['Date of Removal', 'dateOfRemoval'],
            ['Time Slot', 'timeSlot'],
            ['Items to Remove', 'itemsToRemove'],
          ].map(([label, key]) => (
            <li className="list-group-item" key={key}>
              <strong>{label}:</strong>{' '}
              {editMode[key] ? (
                key === 'phoneType' || key === 'timeSlot' ? (
                  <select
                    className="form-control d-inline w-auto ml-2"
                    value={formData[key]}
                    onChange={(e) => handleInputChange(e, key)}
                  >
                    {key === 'phoneType' && (
                      <>
                        <option value="">Select</option>
                        <option value="home">Home</option>
                        <option value="business">Business</option>
                      </>
                    )}
                    {key === 'timeSlot' && (
                      <>
                        <option value="">Select</option>
                        <option value="07:00 AM">7:00 AM - 9:00 AM</option>
                        <option value="09:00 AM">9:00 AM - 11:00 AM</option>
                        <option value="11:00 AM">11:00 AM - 1:00 PM</option>
                        <option value="01:00 PM">1:00 PM - 3:00 PM</option>
                      </>
                    )}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="form-control d-inline w-auto ml-2"
                    value={formData[key]}
                    onChange={(e) => handleInputChange(e, key)}
                  />
                )
              ) : (
                <span className="ml-2">{formData[key]}</span>
              )}
              <span className="float-right edit-icon" onClick={() => handleEditToggle(key)}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </li>
          ))}
          <li className="list-group-item">
            <p className="mt-1 pt-1 text-danger" style={{ fontSize: '75%' }}>
              Note: A representative may reassign this slot depending on availability.
            </p>
          </li>
        </ul>

        {message && (
          <div
            className={`alert mt-3 ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}
            role="alert"
            aria-live="polite"
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 pt-2">
          <button type="submit" className="btn btn-success mr-3" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Confirm Details'}
          </button>
        </form>

        <Link href="/online-booking/edit-information" className="btn btn-dark mt-3">
          Back
        </Link>
      </div>

      <Footer />

      <style jsx>{`
        #wrapper {
          background-color: #ffffff;
          color: #000000;
          padding: 2rem;
        }

        h1 {
          color: #000000;
          margin-bottom: 1.5rem;
        }

        .list-group-item {
          background-color: #fafafa;
          border: 1px solid #ddd;
          padding: 1rem;
          font-size: 1rem;
        }

        strong {
          color: #000000;
        }

        .edit-icon {
          cursor: pointer;
          color: #007bff;
        }

        .form-control {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .btn {
          margin-top: 1rem;
        }

        a.btn-dark {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </>
  );
}
