const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendOtp = functions.https.onCall(async (data, context) => {
  const { email } = data;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP to Firestore or Realtime Database with expiration time
  await admin.firestore().collection('otps').doc(email).set({
    otp,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // Send OTP to user's email (use an email service like SendGrid or Firebase Email Extension)
  // await sendEmail(email, otp); // Implement this function

  return { success: true };
});
