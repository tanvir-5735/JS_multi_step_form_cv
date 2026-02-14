// Run the code after the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all step sections
  const steps = document.querySelectorAll(".step");

  // Select all step indicators (progress circles)
  const indicators = document.querySelectorAll(".step-indicator");

  // Keep track of the current step (starts at 0)
  let currentStep = 0;

  // Object to store all CV data
  const cvData = {
    personal: {}, // Personal info
    profileImage: "", // Profile image base64
    education: [], // Education entries
    experience: [], // Experience entries
    skills: [], // Skills array
    objective: "", // Career objective
    activities: "", // Activities or achievements
    liveProject: "", // Portfolio/live project link
  };

  // ========================================
  // Function to show a specific step
  // ========================================
  function showStep(index) {
    for (let i = 0; i < steps.length; i++) {
      steps[i].classList.remove("active");
      indicators[i].classList.remove("active");
    }

    steps[index].classList.add("active");
    indicators[index].classList.add("active");
    window.scrollTo(0, 0);
  }

  // ========================================
  // Toast notification function
  // Shows temporary popup messages
  // ========================================
  function showToast(msg) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = msg;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ========================================
  // Profile image upload
  // ========================================
  document
    .getElementById("profileImage")
    .addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (evt) {
          cvData.profileImage = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

  // ========================================
  // STEP 1: Personal Info - Next
  // ========================================
  document.getElementById("next1").onclick = function () {
    const name = document.getElementById("name").value.trim();
    if (!name) {
      showToast("Please enter your full name");
      return;
    }
    cvData.personal = {
      name: name,
      title: document.getElementById("title").value.trim(),
      location: document.getElementById("location").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
    };
    currentStep = 1;
    showStep(currentStep);
  };

  // STEP 2: Education - Previous
  document.getElementById("prev2").onclick = function () {
    currentStep = 0;
    showStep(currentStep);
  };

  // STEP 2: Education - Next
  document.getElementById("next2").onclick = function () {
    cvData.education = [];

    if (document.getElementById("degree1").value || document.getElementById("institute1").value) {
      cvData.education.push({
        degree: document.getElementById("degree1").value,
        institute: document.getElementById("institute1").value,
        year: document.getElementById("year1").value,
        desc: document.getElementById("eduDesc1").value,
      });
    }

    if (document.getElementById("degree2").value || document.getElementById("institute2").value) {
      cvData.education.push({
        degree: document.getElementById("degree2").value,
        institute: document.getElementById("institute2").value,
        year: document.getElementById("year2").value,
        desc: document.getElementById("eduDesc2").value,
      });
    }

    currentStep = 2;
    showStep(currentStep);
  };

  // STEP 3: Experience - Previous
  document.getElementById("prev3").onclick = function () {
    currentStep = 1;
    showStep(currentStep);
  };

  // STEP 3: Experience - Next
  document.getElementById("next3").onclick = function () {
    cvData.experience = [];

    if (document.getElementById("company1").value || document.getElementById("role1").value) {
      cvData.experience.push({
        company: document.getElementById("company1").value,
        role: document.getElementById("role1").value,
        year: document.getElementById("expYear1").value,
        desc: document.getElementById("expDesc1").value,
      });
    }

    if (document.getElementById("company2").value || document.getElementById("role2").value) {
      cvData.experience.push({
        company: document.getElementById("company2").value,
        role: document.getElementById("role2").value,
        year: document.getElementById("expYear2").value,
        desc: document.getElementById("expDesc2").value,
      });
    }

    currentStep = 3;
    showStep(currentStep);
  };

  // STEP 4: Skills - Previous
  document.getElementById("prev4").onclick = function () {
    currentStep = 2;
    showStep(currentStep);
  };

  // STEP 4: Skills - Next (Generate Preview)
  document.getElementById("next4").onclick = function () {
    const skillsText = document.getElementById("skills").value;
    cvData.skills = skillsText
      ? skillsText.split(",").map(s => s.trim()).filter(s => s)
      : [];

    cvData.objective = document.getElementById("objective").value;
    cvData.activities = document.getElementById("activities").value;
    cvData.liveProject = document.getElementById("liveProject").value;

    // Build Preview - Personal Info
    document.getElementById("cvName").innerText = cvData.personal.name || "";
    document.getElementById("cvTitle").innerText = cvData.personal.title || "";
    document.getElementById("cvLocation").innerText = cvData.personal.location || "";
    document.getElementById("cvPhone").innerText = cvData.personal.phone || "";
    document.getElementById("cvEmail").innerText = cvData.personal.email || "";

    // Profile Image
    const img = document.getElementById("cvProfileImage");
    if (cvData.profileImage) {
      img.src = cvData.profileImage;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

    // Objective & Activities
    document.getElementById("cvObjective").innerText = cvData.objective || "";
    document.getElementById("cvObjectiveSection").style.display =
      cvData.objective ? "block" : "none";

    document.getElementById("cvActivities").innerText = cvData.activities || "";
    document.getElementById("cvActivitiesSection").style.display =
      cvData.activities ? "block" : "none";

    // Portfolio / Live Project
    const linkEl = document.getElementById("cvPortfolioLink");
    if (cvData.liveProject) {
      linkEl.href = cvData.liveProject;
      linkEl.innerText = cvData.liveProject;
      document.getElementById("cvPortfolioSection").style.display = "block";
    } else {
      document.getElementById("cvPortfolioSection").style.display = "none";
    }

    // Skills Section
    const skillsDiv = document.getElementById("cvSkillsList");
    skillsDiv.innerHTML = "";
    cvData.skills.forEach(s => {
      const span = document.createElement("span");
      span.className = "skill-tag";
      span.innerText = s;
      skillsDiv.appendChild(span);
    });
    document.getElementById("cvSkillsSection").style.display =
      cvData.skills.length > 0 ? "block" : "none";

    // Experience Section (template literal)
    const expDiv = document.getElementById("cvExperienceList");
    expDiv.innerHTML = "";
    cvData.experience.forEach(item => {
      const div = document.createElement("div");
      div.className = "cv-item";
      div.innerHTML = `
        <div class="cv-item-header">
          <div class="cv-item-title">${item.role || ""}</div>
          <div class="cv-item-date">${item.year || ""}</div>
        </div>
        <div class="cv-item-subtitle">${item.company || ""}</div>
        <div class="cv-item-desc">${item.desc || ""}</div>
      `;
      expDiv.appendChild(div);
    });
    document.getElementById("cvExperienceSection").style.display =
      cvData.experience.length > 0 ? "block" : "none";

    // Education Section (template literal)
    const eduDiv = document.getElementById("cvEducationList");
    eduDiv.innerHTML = "";
    cvData.education.forEach(item => {
      const div = document.createElement("div");
      div.className = "cv-item";
      div.innerHTML = `
        <div class="cv-item-header">
          <div class="cv-item-title">${item.degree || ""}</div>
          <div class="cv-item-date">${item.year || ""}</div>
        </div>
        <div class="cv-item-subtitle">${item.institute || ""}</div>
        <div class="cv-item-desc">${item.desc || ""}</div>
      `;
      eduDiv.appendChild(div);
    });
    document.getElementById("cvEducationSection").style.display =
      cvData.education.length > 0 ? "block" : "none";

    currentStep = 4;
    showStep(4);
  };

  // STEP 5: Preview - Previous
  document.getElementById("prev5").onclick = function () {
    currentStep = 3;
    showStep(currentStep);
  };

  // Download PDF
  document.getElementById("downloadPdf").onclick = function () {
    const btn = document.getElementById("downloadPdf");
    const oldText = btn.innerText;
    btn.innerText = "Generating...";
    btn.disabled = true;

    html2pdf()
      .set({
        margin: 0.5,
        filename: `${cvData.personal.name || "CV"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(document.getElementById("cvPreview"))
      .save()
      .then(() => {
        btn.innerText = oldText;
        btn.disabled = false;
      });
  };

  // Initialize the first step
  showStep(0);
});
