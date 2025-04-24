import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const UploadImages = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [totalSize, setTotalSize] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => 
      ['image/jpeg', 'image/png', 'image/gif'].includes(file.type) && 
      file.size <= 25 * 1024 * 1024
    );

    if (validFiles.length + files.length > 10) {
      alert('Maximum 10 images allowed');
      return;
    }

    const newFiles = [...files, ...validFiles];
    setFiles(newFiles);
    
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) return;
  
    const itemId = localStorage.getItem('home_item_id');
    if (!itemId) {
      alert('No item ID found. Please go back and add product details.');
      return;
    }
  
    setIsUploading(true);
    setUploadError(null);
  
    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append('item_photo', file);
        formData.append('item_id', itemId); // Append item_id to the form data
  
        const response = await axios.post('http://127.0.0.1:8000/api/photo/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        
        return response.data;  // response.data contains item_id and item_name
      });
  
      const results = await Promise.all(uploadPromises);
      console.log('Upload results:', results);
  
      // If you want to display item_name or use it for further processing:
      results.forEach(result => {
        const { item_id, item_name } = result;
        console.log(`Uploaded photo for item: ${item_name} (ID: ${item_id})`);
      });
  
      navigate('/finalize');
    } catch (error) {
      console.error('Error uploading images:', error);
      setUploadError(
        error.response?.data?.message || 
        'Failed to upload images. Please try again.'
      );
    } finally {
      setIsUploading(false);
    }
  };
  

  const handlePrevious = () => {
    navigate('/productdetails');
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(0)} MB`;
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-white text-gray-800">
      {/* Left Side */}
      <div className="lg:w-1/3 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
        <div className="absolute inset-0 bg-gray-800/90"></div>
        <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">Product Images Matter</h1>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                High-quality images can increase your product's visibility by up to 40%. Show your product from multiple angles and in different contexts to help customers make informed decisions.
              </p>
              <div className="bg-gray-700/80 p-5 rounded-lg backdrop-blur-sm border border-gray-600">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Image Tips</h3>
                    <ul className="list-disc list-inside text-gray-200 space-y-1">
                      <li>Use natural lighting when possible</li>
                      <li>Show product from multiple angles</li>
                      <li>Include a photo with scale reference</li>
                      <li>Keep background clean and simple</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/80 p-5 rounded-lg backdrop-blur-sm border border-gray-600">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-200 space-y-1">
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

      {/* Right Side */}
      <div className="lg:w-2/3 bg-white p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress Stepper */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Upload Product Images</h1>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-3 left-8 right-8 h-1 bg-gray-200 z-0">
                <div className="h-full bg-gray-600 w-2/3"></div>
              </div>
              {['Description', 'Media', 'Finalize'].map((step, index) => (
                <div key={step} className="flex flex-col items-center z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    index <= 1 ? 'bg-gray-700 text-white' : 'border border-gray-300 text-gray-500 bg-white'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`mt-1 text-xs ${index <= 1 ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Storage used</span>
                <span className="text-xs text-gray-500">{formatFileSize(totalSize)} / 25 MB</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-gray-700 h-2 rounded-full" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>

            {uploadError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                {uploadError}
              </div>
            )}

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
              <div className="flex flex-col items-center justify-center">
                <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-gray-700">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">JPG, PNG or GIF (max. 25MB each)</p>
                <input 
                  type="file" 
                  id="file-upload" 
                  className="hidden" 
                  multiple 
                  accept="image/jpeg,image/png,image/gif" 
                  onChange={handleFileChange}
                />
                <label 
                  htmlFor="file-upload" 
                  className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md cursor-pointer transition duration-150"
                >
                  Select Files
                </label>
              </div>
            </div>

            {files.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Selected Files ({files.length}/10)</h3>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-700 line-clamp-1">{file.name}</p>
                          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFile(index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                className="px-6 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-150"
                disabled={isUploading}
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                disabled={files.length === 0 || isUploading}
                className={`px-6 py-2 text-sm font-medium rounded-md transition duration-150 ${
                  files.length === 0 || isUploading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-700 text-white hover:bg-gray-800'
                }`}
              >
                {isUploading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </span>
                ) : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImages;