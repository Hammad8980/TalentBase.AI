import React, { createContext, useState } from 'react';

export const StudentDataEditoruseContext = createContext();

export const StudentDataEditoruseContextProvider = ({ children }) => {
  {/*DashBoard Variables for Edit*/ }
  const [localPersonalInformation, setLocalPersonalInformation] = useState({});
  const [localAcademicBackground, setLocalAcademicBackground] = useState({});
  const [localProfessionalBackground, setLocalProfessionalBackground] = useState({});
  const [localAchievementsAndAwards, setLocalAchievementsAndAwards] = useState({});
  const [localProfessionalNetworks, setLocalProfessionalNetworks] = useState({});
  const [localPublications, setLocalPublications] = useState({});
  const [localPersonalStatement, setLocalPersonalStatement] = useState({});
  const [localOpenToWork, setLocalOpenToWork] = useState({});

  {/*Startup Variables*/}
  const [localBasicInformation, setLocalBasicInformation] = useState({});
  const [localBusinessInformation, setLocalBusinessInformation] = useState({});
  const [localDocumentAndResources, setLocalDocumentAndResources] = useState({});
  const [localFinancialInformation, setLocalFinancialInformation] = useState({});
  const [localFoundingTeam, setLocalFoundingTeam] = useState({});
  const [localMediaAndPress, setLocalMediaAndPress] = useState({});
  const [localPitchAndVision, setLocalPitchAndVision] = useState({});
  const [localTeamInformation, setLocalTeamInformation] = useState({});
  const [localTraction, setLocalTraction] = useState({});

  return (
    <StudentDataEditoruseContext.Provider value={{
      localPersonalInformation,
      setLocalPersonalInformation,
      localAcademicBackground,
      setLocalAcademicBackground,
      localProfessionalBackground,
      setLocalProfessionalBackground,
      localAchievementsAndAwards,
      setLocalAchievementsAndAwards,
      localProfessionalNetworks,
      setLocalProfessionalNetworks,
      localPublications,
      setLocalPublications,
      localPersonalStatement,
      setLocalPersonalStatement,
      localOpenToWork,
      setLocalOpenToWork,
      localBasicInformation,
      setLocalBasicInformation,
      localBusinessInformation,
      setLocalBusinessInformation,
      localDocumentAndResources,
      setLocalDocumentAndResources,
      localFinancialInformation,
      setLocalFinancialInformation,
      localFoundingTeam,
      setLocalFoundingTeam,
      localMediaAndPress,
      setLocalMediaAndPress,
      localPitchAndVision,
      setLocalPitchAndVision,
      localTeamInformation,
      setLocalTeamInformation,
      localTraction,
      setLocalTraction
    }}>
      {children}
    </StudentDataEditoruseContext.Provider>
  );
};
