import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { getFunctions, httpsCallable } from "firebase/functions";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    age: "",
    institutionName: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const functions = getFunctions();
      const sendOtp = httpsCallable(functions, "sendOtp");
      await sendOtp({ email: form.email });
      setOtpSent(true);
      alert("OTP sent to your email");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otpDoc = await db.collection("otps").doc(form.email).get();
    if (otpDoc.exists && otpDoc.data().otp === otp) {
      await auth.createUserWithEmailAndPassword(form.email, "defaultPassword");
      const user = auth.currentUser;
      await db.collection("users").doc(user.uid).set(form);
      alert("Registered successfully!");
    } else {
      alert("Invalid OTP");
    }
  };
  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={otpSent ? handleVerifyOtp : handleRegister}>
        {!otpSent && (
          <>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact No (Optional)</label>
              <input
                type="text"
                className="form-control"
                name="contactNo"
                value={form.contactNo}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Institution Name</label>
              <input
                type="text"
                className="form-control"
                name="institutionName"
                value={form.institutionName}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        {otpSent && (
          <div className="form-group">
            <label>Enter OTP</label>
            <input
              type="text"
              className="form-control"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          {otpSent ? "Verify OTP" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
