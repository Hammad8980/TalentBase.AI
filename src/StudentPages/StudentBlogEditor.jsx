import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const StudentBlogEditor = () => {
  const navigate = useNavigate();

  const subjectRef = useRef();
  const errorRef = useRef();

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [keyValue, setKeyValue] = useState("");
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);

  useEffect(() => {
    subjectRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorDisplay(false);
  }, [keyValue]);

  useEffect(() => {
    if (errorDisplay && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [errorDisplay]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && keyValue.trim()) {
      e.preventDefault();
      const trimmedKeyValue = keyValue.trim();
      if (!keywords.includes(trimmedKeyValue)) {
        setKeywords([...keywords, trimmedKeyValue]);
        setKeyValue('');
        setError(""); // Clear error if successfully added
        setErrorDisplay(false);
      } else {
        setError("This tag already exists");
        setErrorDisplay(true);
      }
    }
  };

  const Publish = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Publish clicked");
  };

  const GoBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <div className='stu-portal-button-div'>
        <button className='stu-portal-button PrimaryColor1' onClick={GoBack}>
          <FontAwesomeIcon icon={faAnglesLeft} />
          <div>Discard</div>
        </button>
      </div>
      <div className='stu-portal-box-main-div'>
        <div className='student-portal-subdiv1 PrimaryColor1'>
          <span>Type Here</span>
        </div>
        <div className='student-portal-subdiv2'>
          <form style={{ width: "100%" }}>
            <div className="stu-blog-editor-form-div">
              <label htmlFor="subject" className="OffScreen">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                className="stu-blog-editor-form-elements stu-blog-editor-subject"
                placeholder="Subject (100 characters)"
                ref={subjectRef}
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                maxLength={150}
                required
              />
            </div>

            <div className="stu-blog-editor-form-div">
              <label htmlFor="body" className="OffScreen">
                Body:
              </label>
              <textarea
                id="body"
                className="stu-blog-editor-form-elements stu-blog-editor-body"
                placeholder="Write your blog"
                onChange={(e) => setBody(e.target.value)}
                value={body}
                required
              />
            </div>
          </form>
        </div>
      </div>

      <div className='stu-portal-box-main-div'>
        <div className='student-portal-subdiv1 PrimaryColor1'>
          <span>Keywords</span>
        </div>
        <div className='student-portal-subdiv2'>
          <form style={{ width: "100%" }}>
            <div className="stu-blog-editor-form-div">
              <label htmlFor="keywords" className="OffScreen">
                Keywords:
              </label>
              <input
                type="text"
                id="keywords"
                className="stu-blog-editor-form-elements stu-blog-editor-keyword"
                placeholder="Keywords, Press enter to add them. (20 characters)"
                value={keyValue}
                maxLength={20}
                onChange={(e) => setKeyValue(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-describedby="checkKeyword"
                aria-invalid={errorDisplay ? 'true' : 'false'}
                required
              />
            </div>

            <p id="checkKeyword"
              ref={errorRef}
              className={errorDisplay ? "stu-blog-editor-form-error-box" : "OffScreen"}>
              {error}
            </p>

            <div className="keywords-list">
              {keywords.map((keyword, index) => (
                <span key={index} className="keyword-item">
                  {keyword}
                </span>
              ))}
            </div>

            <div className='stu-blog-editor-publish-div'>
              <button className='stu-blog-editor-publish SecondaryColor' onClick={Publish}>Publish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentBlogEditor
