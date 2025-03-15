import React, { useState, useEffect } from "react";
import "./styles.css";

const StudentData = () => {
  const [aadharNo, setAadharNo] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Google Form URL - Replace with your actual form URL
  const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL;
  // Function to generate form URL with prefilled Aadhar
  const getFormUrl = (action, aadharNumber) => {
    const baseUrl = GOOGLE_FORM_URL;
    // Assuming the form has a field for Aadhar Number with entry.123456789 as its identifier
    // Replace with your actual form field identifiers
    return `${baseUrl}?usp=pp_url&entry.123456789=${aadharNumber}&entry.actionType=${action}`;
  };

  // Format the Aadhar number with spaces for better readability
  const formatAadhar = (input) => {
    const digitsOnly = input.replace(/\D/g, "");
    let formatted = "";
    
    for (let i = 0; i < digitsOnly.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += " ";
      formatted += digitsOnly[i];
    }
    
    return formatted;
  };

  // Handle loading animation
  useEffect(() => {
    let interval;
    
    if (loading) {
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 90) return 90;
          return prev + 10;
        });
      }, 300);
    } else {
      setLoadingProgress(0);
    }
    
    return () => clearInterval(interval);
  }, [loading]);

  const fetchStudentData = async () => {
    setError("");
    setStudentData(null);
    setLoading(true);

    if (!/^\d{12}$/.test(aadharNo.replace(/\s/g, ""))) {
      setError("Please enter a valid 12-digit Aadhar Number.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_GOOGLE_SCRIPT_URL}?aadharNo=${aadharNo.replace(/\s/g, "")}&key=${import.meta.env.VITE_SECRET_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setStudentData(data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Error fetching student data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchStudentData();
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatAadhar(input);
    setAadharNo(formattedInput);
  };

  const handleEditDetails = () => {
    const editUrl = getFormUrl("edit", aadharNo.replace(/\s/g, ""));
    window.open(editUrl, "_blank");
  };

  const handleAddDetails = () => {
    const addUrl = getFormUrl("add", aadharNo.replace(/\s/g, ""));
    window.open(addUrl, "_blank");
  };

  // Format key names for display
  const formatKeyName = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  return (
    <div className="bg-animated">
      <div className="card">
        <div className="card-header">
          <div className="logo-container">
            <div className="logo"></div>
          </div>
          <h2>Student Data Lookup</h2>
          <p className="subtitle">Verify and manage student information securely</p>
        </div>
        
        <div className="search-section">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Aadhar Number"
              value={aadharNo}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="custom-input"
              maxLength={14} // Account for spaces
              autoComplete="off"
            />
            <div className="input-icon"></div>
          </div>

          <button
            onClick={fetchStudentData}
            disabled={loading || aadharNo.replace(/\s/g, "").length !== 12}
            className="custom-button search-button"
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <span className="button-icon search-icon"></span>
                <span>Search</span>
              </>
            )}
          </button>
        </div>

        {loading && (
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        )}

        {error && (
          <div className="message-container error-message">
            <div className="message-icon error-icon"></div>
            <div className="message-content">
              <p>{error}</p>
              {error.includes("not found") && (
                <button 
                  className="action-button add-button"
                  onClick={handleAddDetails}
                >
                  <span className="button-icon add-icon"></span>
                  <span>Fill New Form</span>
                </button>
              )}
            </div>
          </div>
        )}

        {!loading && !error && !studentData && (
          <div className="empty-state">
            <div className="empty-icon"></div>
            <p>Enter an Aadhar Number to search for student details</p>
          </div>
        )}

        {studentData && (
          <div className="details-container">
            <div className="details-header">
              <h3>Student Details</h3>
              <div className="badge verified-badge">
                <span className="badge-icon"></span>
                <span>Verified</span>
              </div>
              <button 
                className="action-button edit-button"
                onClick={handleEditDetails}
                title="Edit Student Details"
              >
                <span className="button-icon edit-icon"></span>
                <span>Edit</span>
              </button>
            </div>
            
            <div className="table-container">
              <table className="custom-table">
                <tbody>
                  {Object.entries(studentData).map(([key, value], index) => (
                    <tr 
                      key={key} 
                      style={{animationDelay: `${index * 0.05}s`}}
                      className="table-row"
                    >
                      <td className="field-name">{formatKeyName(key)}</td>
                      <td className="field-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="action-footer">
              <button className="action-button print-button" onClick={() => window.print()}>
                <span className="button-icon print-icon"></span>
                <span>Print</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentData;