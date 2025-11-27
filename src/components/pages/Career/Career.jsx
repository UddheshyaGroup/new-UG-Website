import React, { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from 'emailjs-com';
import { Loader, X } from 'lucide-react';

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null,
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const jobs = [
    {
      title: 'Junior Graphic Designer cum Video Editor',
      requirements: '2+ years of experience in graphic design and video editing. Strong creativity and proficiency in Adobe Suite.',
      type: 'Full-time',
      level: 'Mid Level',
      department: 'Creative / Marketing Department',
    },
    {
      title: 'Graphic Designer Intern',
      requirements: 'Basic knowledge of Adobe Photoshop, Illustrator. Creative mindset and willingness to learn.',
      type: 'Intern (Full-Time)',
      level: 'Entry Level',
      department: 'Creative Department',
    },
  ];

  const openModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
    setError('');
    setSubmitStatus(null);
    setSubmitMessage('');
    setFormData({ name: '', email: '', phone: '', coverLetter: '', cv: null });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus(null);
    setSubmitMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB limit for Cloudinary
        setError('File size must be less than 2MB.');
        return;
      }
      setError('');
      setFormData((prev) => ({ ...prev, cv: file }));
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    formData.append('resource_type', 'raw'); // For PDFs

    const response = await fetch(import.meta.env.VITE_CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Cloudinary error:', errorData);
      throw new Error(`Failed to upload CV: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

    // Construct download URL
    const downloadUrl = `https://res.cloudinary.com/${cloudName}/raw/upload/fl_attachment/${data.public_id}`;
    return downloadUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.cv) {
      setError('Please fill all required fields and upload your CV.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid phone number (at least 10 digits).');
      setIsSubmitting(false);
      return;
    }

    try {
      // Step 1: Upload CV to Cloudinary
      const cvUrl = await uploadToCloudinary(formData.cv);

      // Step 2: Send email via EmailJS
      const templateParams = {
        applicant_name: formData.name,
        from_email: formData.email,
        applicant_phone: formData.phone,
        position_title: selectedJob,
        cover_letter: formData.coverLetter || 'No cover letter provided',
        cv_url: cvUrl,
        to_email: import.meta.env.VITE_EMAILJS_CAREER_EMAIL,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage(
          'Your application has been submitted successfully! We\'ll review it and get back to you soon.'
        );
        setFormData({ name: '', email: '', phone: '', coverLetter: '', cv: null });

        setTimeout(() => {
          closeModal();
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to submit your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen mt-8">
      <div className="container mx-auto px-6">

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900 mt-8">
            Careers at <span className="text-green-500">Uddheshya Group</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our dynamic team of innovators and help businesses achieve extraordinary growth.
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{job.title}</h2>

              <p className="text-gray-600 mb-2"><b>Employment Type:</b> {job.type}</p>
              <p className="text-gray-600 mb-2"><b>Level:</b> {job.level}</p>
              <p className="text-gray-600 mb-4"><b>Department:</b> {job.department}</p>

              <p className="text-gray-600 mb-6">{job.requirements}</p>

              <button
                onClick={() => openModal(job.title)}
                className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-md"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {jobs.length === 0 && (
          <p className="text-center text-xl text-gray-600">No open positions currently. Check back soon!</p>
        )}
      </div>

      {/* Apply Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-blue-900">
              Apply for {selectedJob}
            </h2>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-green-800 font-semibold text-center">
                  {submitMessage}
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-red-800 font-semibold text-center">
                  {submitMessage}
                </p>
              </motion.div>
            )}

            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />

              <textarea
                name="coverLetter"
                placeholder="Cover Letter (Optional)"
                value={formData.coverLetter}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />

              <div>
                <label className="block text-sm text-gray-600 mb-2">Upload CV (PDF, max 2MB) *</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  className="w-full p-3 border border-gray-300 rounded-lg 
                    file:mr-4 file:py-2 file:px-4 file:rounded 
                    file:border-0 file:text-sm file:font-semibold 
                    file:bg-green-100 file:text-green-700 
                    hover:file:bg-green-200 transition
                    disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                />
                {formData.cv && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected: {formData.cv.name}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-green-500 text-white font-bold rounded-lg 
                  hover:bg-green-600 transition transform hover:scale-105 shadow-md
                  disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none
                  flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>

            <button
              onClick={closeModal}
              disabled={isSubmitting}
              className="mt-6 mx-auto block py-2 px-6 bg-gray-300 text-gray-700 font-semibold 
                rounded-lg hover:bg-red-500 hover:text-white transition
                disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Career;
