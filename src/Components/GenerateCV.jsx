import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { POPPINS_FONT_B64 } from "../Utils/Constants";

export const GenerateCV = ({ email, location, telephone, social }) => {
  const [infoNodes, setInfoNodes] = useState([]);
  const [infoNodesText, setInfoNodesText] = useState([]);
  const [socialNodes, setSocialNodes] = useState([]);
  const [socialNodesText, setSocialNodesText] = useState([]);

  const generateResume = async () => {
    const originalViewportWidth = window.innerWidth;
    const originalViewportHeight = window.innerHeight;

    window.innerWidth = 1366;
    window.innerHeight = 768;

    prepareResume();

    const currentResourceURL = window.location.pathname;
    const isBRPage = currentResourceURL.includes("/br");

    const rootCV = document.getElementById("area-cv");
    const canvasCV = await html2canvas(rootCV).catch((e) => console.error(e));
    const imageCV = canvasCV.toDataURL("image/png");

    let pdf;
    let starterPositionY;

    if (isBRPage) {
      pdf = new jsPDF({ format: [450, 255] });
      starterPositionY = 436;
    } else {
      pdf = new jsPDF({ format: [430, 255] });
      starterPositionY = 418;
    }

    window.innerWidth = originalViewportWidth;
    window.innerHeight = originalViewportHeight;

    pdf.addImage(imageCV, "PNG", 0, 0);
    pdf.addFileToVFS("poppins-Medium.ttf", POPPINS_FONT_B64);
    pdf.addFont("poppins-Medium.ttf", "POPPINS_FONT_B64", "normal");
    pdf.setFont("POPPINS_FONT_B64");
    pdf.setTextColor(
      document.body.classList.contains("dark-theme") ? "#b5c4db" : "#4c566a"
    );
    pdf.setFontSize(11);
    pdf.text(location, 15, 72);
    pdf.text(email, 15, 82);
    pdf.text(telephone, 15, 92);

    const starterPositionX = 15;
    const sectionTitleElement = document.querySelector(
      ".social.section .section-title"
    );

    if (sectionTitleElement) {
      social.forEach((socialProp) => {
        pdf.textWithLink(socialProp.label, starterPositionX, starterPositionY, {
          url: socialProp.url,
        });

        starterPositionY += 9;
      });
    }

    rollbackResume();

    pdf.save("resume.pdf");
  };

  const prepareResume = () => {
    Array.from(document.getElementsByClassName("social__link")).forEach(
      (socialElement) =>
        socialElement.childNodes.forEach((iconElement) => {
          if (iconElement.textContent.trim().length > 0) {
            setSocialNodes(socialNodes.push(iconElement));
            setSocialNodesText(socialNodesText.push(iconElement.textContent));
            iconElement.textContent = null;
          }
        })
    );
    Array.from(document.getElementsByClassName("home__address")).map(
      (infoElement) =>
        infoElement.childNodes.forEach((iconElement) =>
          iconElement.childNodes.forEach((element) => {
            if (element.textContent.trim().length > 0) {
              setInfoNodes(infoNodes.push(element));
              setInfoNodesText(infoNodesText.push(iconElement.textContent));
              element.textContent = null;
            }
          })
        )
    );
    document.getElementById("resume__options").style.display = "none";
    document.getElementById("resume__generate").style.display = "none";
  };

  const rollbackResume = () => {
    infoNodes.forEach((e, i) => (e.textContent = infoNodesText[i]));
    socialNodes.forEach((e, i) => (e.textContent = socialNodesText[i]));
    setInfoNodes([]);
    setInfoNodesText([]);
    setSocialNodes([]);
    setSocialNodesText([]);
    document.getElementById("resume__options").style.display = "block";
    document.getElementById("resume__generate").style.display = "inline-grid";
  };

  return (
    <div className="generate__container" id="resume__generate">
      <button href="#" className="generate__btn" onClick={generateResume}>
        Download CV
      </button>
    </div>
  );
};
