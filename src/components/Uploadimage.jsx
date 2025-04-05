import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadImages = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [totalSize, setTotalSize] = useState(0);

  const handleFileChange = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => 
      ['image/jpeg', 'image/png', 'image/gif'].includes(file.type) && 
      file.size <= 25 * 1024 * 1024 // 25MB limit
    );

    if (validFiles.length + files.length > 10) {
      alert('Maximum 10 images allowed');
      return;
    }

    const newFiles = [...files, ...validFiles];
    setFiles(newFiles);
    
    // Calculate total size
    const newTotalSize = newFiles.reduce((sum, file) => sum + file.size, 0);
    setTotalSize(newTotalSize);
    setUploadProgress(Math.min(100, (newTotalSize / (25 * 1024 * 1024)) * 100));
  }, [files]);

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    const newTotalSize = newFiles.reduce((sum, file) => sum + file.size, 0);
    setTotalSize(newTotalSize);
    setUploadProgress(Math.min(100, (newTotalSize / (25 * 1024 * 1024)) * 100));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically upload the files to your server
    console.log('Files to upload:', files);
    // Then navigate to the next step
    navigate('/finalize');
  };

  const handlePrevious = () => {
    navigate('/description');
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(0)} MB`;
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Information Panel with Background */}
      <div className="lg:w-1/3 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
        <div className="absolute inset-0 bg-indigo-900/80"></div>
        <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">Product Images Matter</h1>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                High-quality images can increase your product's visibility by up to 40%. Show your product from multiple angles and in different contexts to help customers make informed decisions.
              </p>
              
              <div className="bg-white/20 p-5 rounded-lg backdrop-blur-sm border border-white/30">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Image Tips</h3>
                    <ul className="list-disc list-inside text-white/90 space-y-1">
                      <li>Use natural lighting when possible</li>
                      <li>Show product from multiple angles</li>
                      <li>Include a photo with scale reference</li>
                      <li>Keep background clean and simple</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 p-5 rounded-lg backdrop-blur-sm border border-white/30">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Requirements</h3>
                    <ul className="list-disc list-inside text-white/90 space-y-1">
                      <li>Maximum 10 images per product</li>
                      <li>25MB maximum per image</li>
                      <li>JPG, PNG, or GIF formats</li>
                      <li>Minimum 500px width/height</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-2/3 bg-gray-50 p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress Stepper */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Upload Product Images</h1>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-3 left-8 right-8 h-1 bg-gray-200 z-0">
                <div className="h-full bg-indigo-600 w-2/3"></div>
              </div>
              {['Description', 'Media', 'Finalize'].map((step, index) => (
                <div key={step} className="flex flex-col items-center z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    index <= 1 ? 'bg-indigo-600 text-white' : 'border border-gray-300 text-gray-500 bg-white'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`mt-1 text-xs ${index <= 1 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Section */}
          <div className="space-y-5">
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Add product photos (max 10)</h2>
              
              {/* Upload Button */}
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p className="mb-1 text-sm text-gray-500 font-medium">Drag & drop images here</p>
                  <p className="text-xs text-gray-500">or click to browse files</p>
                  <p className="text-xs text-gray-400 mt-2">Max-size 25MB each. JPG, PNG, GIF</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                  multiple
                  accept="image/jpeg,image/png,image/gif"
                />
              </label>

              {/* Uploaded Files List */}
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <div>
                        <p className="text-gray-800 text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              {files.length > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{uploadProgress.toFixed(0)}%</span>
                    <span>{formatFileSize(totalSize)} / 25 MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button 
              type="button"
              onClick={handlePrevious}
              className="flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Previous
            </button>
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={files.length === 0}
              className={`flex items-center px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm ${
                files.length === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImages;