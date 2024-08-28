import { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import "./StudentLayout.css";
import Sidebar from "../Components/NavbarPage/StudentSidebar";
import { StudentDatauseContextProvider, StudentDatauseContext } from "../StudentPages/StudentDataProvider/StudentDataUseContext";
import { StudentDataEditoruseContextProvider } from "../StudentPages/StudentDataProvider/StudentDataEditorUseContext";
const UserLayout = () => {
    return (
        <StudentDatauseContextProvider>
            <StudentDataEditoruseContextProvider>
                <StudentLayoutContent />
            </StudentDataEditoruseContextProvider>
        </StudentDatauseContextProvider>
    );
};

const StudentLayoutContent = () => {
    const {
        personalInformation, setPersonalInformation,
        setAcademicBackground,
        setProfessionalBackground,
        setAchievementsAndAwards,
        setProfessionalNetworks,
        setPublications,
        setPersonalStatement,
        setOpenToWork
    } = useContext(StudentDatauseContext);
    useEffect(() => {
        setPersonalInformation({
            Name: "John Doe",
            Email: "john.doe@example.com",
            PhoneNumber: "+1 (555) 123-4567",
            PersonalWebsite: "https://johnswebsite.com",
            LinkedIn: "https://linkedin.com/in/johndoe",
            Location: "New York, NY"
        });

        setAcademicBackground({
            YearOfCompletion: "2024",
            CurrentEducation: "BSCS",
            Degree: "Bachelors in Computer Science"
        });

        setProfessionalBackground({
            CurrentPosition: "Manager",
            EducationalBackground: "BSCS",
            Skills: "Something"
        });

        setAchievementsAndAwards({
            Achievements: "Lots of.....",
            Awards: "Gold Medal"
        });

        setProfessionalNetworks({
            Mentors: "Ali Doe",
            Association: "Something"
        });

        setPublications({
            Articles: "https://linkedin.com/in/johndoe",
            Interviews: "Interviews"
        });

        setPersonalStatement({
            Goals: "These are my goals",
            Visions: "This is my vision",
            Biography: "This is my biography"
        });

        setOpenToWork({
            Jobs: true,
            Projects: true,
            Internships: true,
            Funding: false,
            Acquisition: true,
            Collaborations: false
        });
    }, [
        setPersonalInformation,
        setAcademicBackground,
        setProfessionalBackground,
        setAchievementsAndAwards,
        setProfessionalNetworks,
        setPublications,
        setPersonalStatement,
        setOpenToWork
    ]);

    return (
        <main className="StudentLayout">
            <Sidebar />
            <div style={{ width: "100%" }}>
                <div className="stu-dash-main">
                    <div className="stu-dash-header PrimaryColor1">
                        <div>
                            <h2>Welcome back, {personalInformation.Name}!</h2>
                            <p>Always stay updated in your student portal</p>
                        </div>
                        <div className='stu-dash-header-div2'>
                            <img src="./StudentPortal.png" alt="A Sad Happy Student" />
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", padding: "20px", overflow: "hidden" }}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default UserLayout;
