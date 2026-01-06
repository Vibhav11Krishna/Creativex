import React, { useState } from "react";
import { jsPDF } from "jspdf";

const Resume = () => {
  const [certificateFile, setCertificateFile] = useState(null);
  const [projectFile, setProjectFile] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};
  const display = (value) => value || "—";

  const sections = [
    {
      title: "Personal Information",
      items: [
        { label: "Name", value: display(profile.fullName) },
        { label: "Role", value: display(profile.role) },
        { label: "Email", value: display(profile.email) },
        { label: "Phone", value: display(profile.phone) },
        { label: "Location", value: display(profile.location) }
      ]
    },
    {
      title: "Education",
      items: [
        { label: "Degree", value: display(profile.educationLevel) },
        { label: "Institution", value: display(profile.institution) },
        { label: "Stream", value: display(profile.stream) },
        { label: "Performance", value: display(profile.performance) },
        { label: "Preferred Domain", value: display(profile.preferredDomain) }
      ]
    },
    {
      title: "Certificates",
      items: [
        {
          label: "AWS Certified Solutions Architect",
          value: certificateFile ? certificateFile.name : "—"
        }
      ]
    },
    {
      title: "Projects",
      items: [
        {
          label: "Portfolio Website",
          value: projectFile ? projectFile.name : "Built with React"
        }
      ]
    },
    {
      title: "Career Goal",
      items: [{ label: "", value: display(profile.careerGoal) }]
    }
  ];

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) console.log("Uploaded resume:", file.name);
  };

  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCertificateFile(file);
      console.log("Uploaded certificate:", file.name);
    }
  };

  const handleProjectUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProjectFile(file);
      console.log("Uploaded project:", file.name);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    let y = 20;

    if (profilePhoto) {
      doc.addImage(profilePhoto, "JPEG", 150, 10, 40, 40);
    }

    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("Curriculum Vitae", 20, y);
    y += 20;

    doc.setFont("times", "normal");
    doc.setFontSize(12);

    sections.forEach((section) => {
      doc.setFont("times", "bold");
      doc.text(section.title + ":", 20, y);
      y += 10;

      doc.setFont("times", "normal");
      section.items.forEach((item) => {
        const line = item.label ? `${item.label}: ${item.value}` : item.value;
        const lines = doc.splitTextToSize(line, 170);
        doc.text(lines, 25, y);
        y += lines.length * 7;
      });

      y += 10;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("student-cv.pdf");
  };

  return (
     <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-10  pr-5 pl- 90 w-[1200px] ml-65">
    
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold mb-4 text-[#0B1F5C]">Resume Builder</h1>
        <p className="text-base text-[#0B1F5C]/70">
          Upload your resume, certificates, project files, and profile photo — then download a personalized CV.
        </p>
      </div>

   
      <div className="space-y-6">
       
        <div>
          <label className="block text-lg font-semibold mb-2">Upload Your Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleUpload}
            className="font-semibold border border-gray-300 p-2 rounded-md w-full text-sm bg-white cursor-pointer"
          />
        </div>

       
        <div>
          <label className="block text-lg font-semibold mb-2">Upload Certificate (e.g. AWS)</label>
          <input
            type="file"
            accept=".pdf,.png,.jpg"
            onChange={handleCertificateUpload}
            className="font-semibold border border-gray-300 p-2 rounded-md w-full text-sm bg-white cursor-pointer"
          />
        </div>

        
        <div>
          <label className="block text-lg font-semibold mb-2">Upload Project File</label>
          <input
            type="file"
            accept=".zip,.pdf,.docx"
            onChange={handleProjectUpload}
            className="font-semibold border border-gray-300 p-2 rounded-md w-full text-sm bg-white cursor-pointer"
          />
        </div>

      
        <div>
          <label className="block text-lg font-semibold mb-2">Upload Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="font-semibold border border-gray-300 p-2 rounded-md w-full text-sm bg-white cursor-pointer"
          />
        </div>
      </div>

     
      <hr className="border-t border-gray-300 my-6" />

      
      <div className="text-center">
        <button
          onClick={handleDownload}
          className="bg-[#0B1F5C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#09204A] transition"
        >
          Download CV Template
        </button>
      </div>
    </div>
  );
};

export default Resume;