import React, { useState, useEffect } from "react";

import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Works } from "../Components/Works";
import { SocialMedia } from "../Components/SocialMedia";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
import { SEO } from "../Components/SEO";

import { Data as dataSchema } from "../Schemas/Data";
import { DataBr as ptBRContent } from "../Schemas/DataBr";
import { Menu as menuSchema } from "../Schemas/Menu";
import { LanguageToggleBr } from "../Components/ButtonBr";
import { LanguageToggleEn } from "../Components/ButtonEn";

export const Resume = ({ lang }) => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, aboutMe, skills, socialMedia, experience, titleAcademic, titleExperience, titleProyects } = dataSchema;
  const {
    profile: profileBr,
    aboutMe: aboutMeBr,
    skills: skillsBr,
    socialMedia: socialMediaBr,
    experience: experienceBr,
    titleAcademic: titleAcademicBr,
    titleExperience: titleExperienceBr,
    titleProyects: titleProyectsBr
  } = ptBRContent;

  const content =
    lang === "br" ? (
      <>
        <div className="language-toggle-container">
          <LanguageToggleBr />
          <LanguageToggleEn />
        </div>
        <SEO {...profileBr} {...aboutMeBr} />
        {!matches && <Menu {...menuSchema} />}
        <main className="l-main bd-container" id="bd-container">
          <div className="resume" id="area-cv">
            <div className="resume__left">
              <Profile
                {...profileBr}
                {...socialMediaBr}
                isMobileView={!matches}
              />
              <AboutMe {...aboutMeBr} />
              <Skills {...skillsBr} />
              <SocialMedia {...socialMediaBr} />
            </div>
            <div className="resume__right">
              <Works {...titleExperienceBr} {...experienceBr} />
              <Academic {...titleAcademicBr} {...experienceBr} />
              <Proyects {...titleProyectsBr} {...experienceBr} />
            </div>
          </div>
        </main>
      </>
    ) : (
      <>
        <div className="language-toggle-container">
          <LanguageToggleBr />
          <LanguageToggleEn />
        </div>
        <SEO {...profile} {...aboutMe} />
        {!matches && <Menu {...menuSchema} />}
        <main className="l-main bd-container" id="bd-container">
          <div className="resume" id="area-cv">
            <div className="resume__left">
              <Profile {...profile} {...socialMedia} isMobileView={!matches} />
              <AboutMe {...aboutMe} />
              <Skills {...skills} />
              <SocialMedia {...socialMedia} />
            </div>
            <div className="resume__right">
              <Works {...titleExperience} {...experience} />
              <Academic {...titleAcademic} {...experience} />
              <Proyects {...titleProyects} {...experience} />
            </div>
          </div>
        </main>
      </>
    );

  return content;
};
