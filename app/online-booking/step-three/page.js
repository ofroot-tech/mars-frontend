'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function StepThree() {
  const [formData, setFormData] = useState({
    serviceType: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    phoneType: "home",
    itemsToRemove: "",
    dateOfRemoval: "",
    timeSlot: "07:00 AM",
  });

  const [labels, setLabels] = useState({
    serviceLabel1: "Pick-up Address",
    serviceLabel2: "Items Being Removed",
    serviceLabel3: "Date Of Removal",
    serviceLabel4: "Time for Pickup",
  });

  const router = useRouter();

  useEffect(() => {
    try {
      const stored = {
        serviceType: localStorage.getItem("service_type") || "Removal Service",
        itemsToRemove: localStorage.getItem("items_to_remove") || "",
        timeSlot: localStorage.getItem("time_slot") || "07:00 AM",
        dateOfRemoval: localStorage.getItem("date_of_removal") || "",
      };

      setFormData((prev) => ({
        ...prev,
        serviceType: stored.serviceType,
        itemsToRemove: stored.itemsToRemove,
        timeSlot: stored.timeSlot,
        dateOfRemoval: stored.dateOfRemoval
          ? new Date(stored.dateOfRemoval).toLocaleDateString("en-US")
          : "",
      }));

      if (stored.serviceType === "Lawn Service") {
        setLabels({
          serviceLabel1: "Lawn Service Address",
          serviceLabel2: "Details of Service",
          serviceLabel3: "Date of Service",
          serviceLabel4: "Time of Service",
        });
      }
    } catch (err) {
      console.error("Error loading Step-Two data:", err);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Store each input separately
      localStorage.setItem("service_type", formData.serviceType);
      localStorage.setItem("address", formData.address);
      localStorage.setItem("unit", formData.unit);
      localStorage.setItem("city", formData.city);
      localStorage.setItem("state", formData.state);
      localStorage.setItem("zip", formData.zip);
      localStorage.setItem("country", formData.country);
      localStorage.setItem("first_name", formData.firstName);
      localStorage.setItem("last_name", formData.lastName);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("phone_number", formData.phoneNumber);
      localStorage.setItem("phone_type", formData.phoneType);
      localStorage.setItem("items_to_remove", formData.itemsToRemove);
      localStorage.setItem("date_of_removal", formData.dateOfRemoval);
      localStorage.setItem("time_slot", formData.timeSlot);

      router.push("/online-booking/step-four");
    } catch (err) {
      console.error("Error storing Step-Three data:", err);
    }
  };

  return (
    <>
      <Head>
        <title>Step 3 | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container mt-4 pt-4">
        <Navbar name="Online Booking" />
        <p className="btn btn-success btn-sm rounded-pill mt-3 p-3">{formData.serviceType}</p>

        <form onSubmit={handleSubmit}>
          {/* Address Section */}
          <h2 className="mt-4">{labels.serviceLabel1}</h2>
          <div className="form-group">
            <label>Address:</label>
            <input name="address" className="form-control" placeholder="e.g., 480 West Broad Street" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Unit #:</label>
            <input name="unit" className="form-control" placeholder="e.g., Unit #420" value={formData.unit} onChange={handleChange} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City:</label>
              <input name="city" className="form-control" placeholder="e.g., Columbus" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group col-md-6">
              <label>State:</label>
              <input name="state" className="form-control" placeholder="e.g., Ohio" value={formData.state} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>ZIP Code:</label>
            <input name="zip" className="form-control" placeholder="e.g., 77002" value={formData.zip} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input name="country" className="form-control" placeholder="e.g., USA" value={formData.country} onChange={handleChange} />
          </div>

          {/* Contact Details */}
          <h2 className="mt-4">Contact Details</h2>
          <div className="form-group">
            <label>First Name:</label>
            <input name="firstName" className="form-control" placeholder="e.g., Donny" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input name="lastName" className="form-control" placeholder="e.g., Merkel" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input name="email" type="email" className="form-control" placeholder="e.g., name@example.com" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input name="phoneNumber" type="tel" className="form-control" placeholder="e.g., 7344489999" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number Type:</label>
            <select name="phoneType" className="form-control" value={formData.phoneType} onChange={handleChange}>
              <option value="home">Home</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Service Details */}
          <h2 className="mt-4">{labels.serviceLabel2}</h2>
          <div className="form-group">
            <input name="itemsToRemove" className="form-control" placeholder="List items being removed" value={formData.itemsToRemove} onChange={handleChange} />
          </div>

          <h2 className="mt-4">{labels.serviceLabel4}</h2>
          <div className="form-group">
            <select name="timeSlot" className="form-control" value={formData.timeSlot} onChange={handleChange}>
              <option value="07:00 AM">7:00 AM - 9:00 AM</option>
              <option value="09:00 AM">9:00 AM - 11:00 AM</option>
              <option value="11:00 AM">11:00 AM - 1:00 PM</option>
              <option value="01:00 PM">1:00 PM - 3:00 PM</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>

        <Footer />
      </div>
    </>
  );
}
