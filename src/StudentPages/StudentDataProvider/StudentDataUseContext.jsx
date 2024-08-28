import React, { createContext, useState } from 'react';

export const StudentDatauseContext = createContext();

export const StudentDatauseContextProvider = ({ children }) => {
  {/*DashBoard Variables*/ }
  const [personalInformation, setPersonalInformation] = useState({});
  const [academicBackground, setAcademicBackground] = useState({});
  const [professionalBackground, setProfessionalBackground] = useState({});
  const [achievementsAndAwards, setAchievementsAndAwards] = useState({});
  const [professionalNetworks, setProfessionalNetworks] = useState({});
  const [publications, setPublications] = useState({});
  const [personalStatement, setPersonalStatement] = useState({});
  const [openToWork, setOpenToWork] = useState({});

  {/*Startup Variables*/}
  const [basicInformation, setBasicInformation] = useState({});
  const [businessInformation, setBusinessInformation] = useState({});
  const [documentAndResources, setDocumentAndResources] = useState({});
  const [financialInformation, setFinancialInformation] = useState({});
  const [foundingTeam, setFoundingTeam] = useState({});
  const [mediaAndPress, setMediaAndPress] = useState({});
  const [pitchAndVision, setPitchAndVision] = useState({});
  const [teamInformation, setTeamInformation] = useState({});
  const [traction, setTraction] = useState({});

  return (
    <StudentDatauseContext.Provider value={{
      personalInformation,
      setPersonalInformation,
      academicBackground,
      setAcademicBackground,
      professionalBackground,
      setProfessionalBackground,
      achievementsAndAwards,
      setAchievementsAndAwards,
      professionalNetworks,
      setProfessionalNetworks,
      publications,
      setPublications,
      personalStatement,
      setPersonalStatement,
      openToWork,
      setOpenToWork,
      basicInformation,
      setBasicInformation,
      businessInformation,
      setBusinessInformation,
      documentAndResources,
      setDocumentAndResources,
      financialInformation,
      setFinancialInformation,
      foundingTeam,
      setFoundingTeam,
      mediaAndPress,
      setMediaAndPress,
      pitchAndVision,
      setPitchAndVision,
      teamInformation,
      setTeamInformation,
      traction,
      setTraction
    }}>
      {children}
    </StudentDatauseContext.Provider>
  );
};
