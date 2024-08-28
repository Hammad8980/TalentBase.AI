import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faCloud } from '@fortawesome/free-solid-svg-icons';
import Startups from '../Data';

const BasicInformation = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [startupName, setStartupName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [startupsData, setStartupsData] = useState(Startups.Data);

  const GoBack = () => {
    setStartupName(null);
    setSelectedFile(null);
    navigate(-1);
  }

  const handleFileChange = (event) => {
    let file = event.target.files[0];

    if (file && (file.type.startsWith('image/'))) {
      setSelectedFile(file);
    } else {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setSelectedFile(null);
      alert('Please select a valid image file (e.g., .jpg, .png, .gif, .svg, .webp)');
    }
  };
  const CreateStartup = () => {
    if (startupName === null) {
      alert('Please enter name for startup');
    }
    else if (selectedFile === null) {
      alert('Please select an image for your startup');
    }
    else {
      console.log("added");
    }

  }
  return (
    <>
      <div className='stu-portal-button-div'>
        <button className='stu-portal-button PrimaryColor1' onClick={GoBack}>
          <FontAwesomeIcon icon={faAnglesLeft} />
          <div>Discard</div>
        </button>
      </div>
      <div className="stu-portal-box-main-div">
        <div className="student-portal-main-container">
          <div className='student-portal-subdiv1 PrimaryColor1'><span>Basic Information</span></div>
          <div className='student-portal-subdiv2'>
            <table className="student-portal-table">
              <tbody>
                <tr>
                  <td className='student-portal-table-td-heading'>Startup Name*:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Ø Undefined"
                      value={startupName}
                      onChange={(e) => setStartupName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='student-portal-table-td-heading'>Logo*:</td>
                  <td className='student-portal-table-td-heading'>
                    <input
                      type="file"
                      required
                      onChange={handleFileChange}
                      ref={fileInputRef} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='stu-editor-update-button-div'>
        <button
          className='stu-editor-update-button PrimaryColor1'
          style={{ justifyContent: 'center', gap: '20px', display: 'flex', alignItems: 'center', fontSize: '1.3rem', overflow: 'hidden' }}
          onClick={CreateStartup}>
          <><FontAwesomeIcon icon={faCloud} /></>
          <>Create</>
        </button>
      </div>
    </>
  )
}

export default BasicInformation
