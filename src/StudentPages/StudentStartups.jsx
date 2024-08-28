import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentDatauseContext } from './StudentDataProvider/StudentDataUseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Startups from '../Data';

const StudentStartups = () => {

    const navigate = useNavigate();
    useEffect(() => {
        
    }, []);

    const CreateStartUp = () => {
        navigate("/studentCreateStartup")
    };

    const handleStartupClick = (id) => {
        console.log('Clicked startup with id:', id);
        navigate(`/studentStartupsDetails/${id}`)
    };

    return (
        <div>
            <div className='stu-portal-button-div'>
                <button className='stu-portal-button PrimaryColor1' onClick={CreateStartUp}>
                    <div>Create Startup</div>
                    <div><FontAwesomeIcon icon={faPlus} /></div>
                </button>
            </div>
            {Startups.Data.map((startup) => (
                <button
                    key={startup.id}
                    className='stu-portal-box-main-div'
                    style={{ width: '100%', padding: '0' }}
                    onClick={() => handleStartupClick(startup.id)}
                >
                    <div className='student-portal-subdiv1 PrimaryColor1'>
                        <span>My Startups</span>
                    </div>
                    <div className='student-portal-subdiv2' style={{ height: '30vh' }}>
                        <div className='stu-startup-card-name'>
                            <span>{startup.StartupName}</span>
                        </div>
                        <div className='stu-startup-card-logo'>
                            <img
                                src={startup.ImageURL}
                                alt={startup.StartupName}
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                    </div>
                </button>
            ))}
        </div>

    )
}

export default StudentStartups
