document.addEventListener("DOMContentLoaded", function() {

  var steps = document.querySelectorAll(".step");
  var indicators = document.querySelectorAll(".step-indicator");
  var currentStep = 0;

  var cvData = {
    personal: {},
    profileImage: "",
    education: [],
    experience: [],
    skills: [],
    objective: "",
    activities: "",
    liveProject: ""
  };

  function showStep(index) {
    for (var i = 0; i < steps.length; i++) {
      steps[i].classList.remove("active");
      indicators[i].classList.remove("active");
    }
    steps[index].classList.add("active");
    indicators[index].classList.add("active");
    window.scrollTo(0, 0);
  }

  function showToast(msg) {
    var container = document.getElementById("toastContainer");
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(function() { toast.classList.add("show"); }, 10);
    setTimeout(function() {
      toast.classList.remove("show");
      setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
  }

  document.getElementById("profileImage").addEventListener("change", function(e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(evt) {
        cvData.profileImage = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById("next1").onclick = function() {
    var name = document.getElementById("name").value.trim();
    if (!name) {
      showToast("Please enter your full name");
      return;
    }
    cvData.personal.name = name;
    cvData.personal.title = document.getElementById("title").value.trim();
    cvData.personal.location = document.getElementById("location").value.trim();
    cvData.personal.phone = document.getElementById("phone").value.trim();
    cvData.personal.email = document.getElementById("email").value.trim();
    currentStep = 1;
    showStep(currentStep);
  };

  document.getElementById("prev2").onclick = function() {
    currentStep = 0;
    showStep(currentStep);
  };

  document.getElementById("next2").onclick = function() {
    cvData.education = [];
    if (document.getElementById("degree1").value || document.getElementById("institute1").value) {
      cvData.education.push({
        degree: document.getElementById("degree1").value,
        institute: document.getElementById("institute1").value,
        year: document.getElementById("year1").value,
        desc: document.getElementById("eduDesc1").value
      });
    }
    if (document.getElementById("degree2").value || document.getElementById("institute2").value) {
      cvData.education.push({
        degree: document.getElementById("degree2").value,
        institute: document.getElementById("institute2").value,
        year: document.getElementById("year2").value,
        desc: document.getElementById("eduDesc2").value
      });
    }
    currentStep = 2;
    showStep(currentStep);
  };

  document.getElementById("prev3").onclick = function() {
    currentStep = 1;
    showStep(currentStep);
  };

  document.getElementById("next3").onclick = function() {
    cvData.experience = [];
    if (document.getElementById("company1").value || document.getElementById("role1").value) {
      cvData.experience.push({
        company: document.getElementById("company1").value,
        role: document.getElementById("role1").value,
        year: document.getElementById("expYear1").value,
        desc: document.getElementById("expDesc1").value
      });
    }
    if (document.getElementById("company2").value || document.getElementById("role2").value) {
      cvData.experience.push({
        company: document.getElementById("company2").value,
        role: document.getElementById("role2").value,
        year: document.getElementById("expYear2").value,
        desc: document.getElementById("expDesc2").value
      });
    }
    currentStep = 3;
    showStep(currentStep);
  };

  document.getElementById("prev4").onclick = function() {
    currentStep = 2;
    showStep(currentStep);
  };

  document.getElementById("next4").onclick = function() {
    // Get skills
    var skillsText = document.getElementById("skills").value;
    cvData.skills = [];
    if (skillsText) {
      var parts = skillsText.split(",");
      for (var i = 0; i < parts.length; i++) {
        var s = parts[i].trim();
        if (s) cvData.skills.push(s);
      }
    }
    
    cvData.objective = document.getElementById("objective").value;
    cvData.activities = document.getElementById("activities").value;
    cvData.liveProject = document.getElementById("liveProject").value;

    // Fill preview
    document.getElementById("cvName").innerText = cvData.personal.name || "";
    document.getElementById("cvTitle").innerText = cvData.personal.title || "";
    document.getElementById("cvLocation").innerText = cvData.personal.location || "";
    document.getElementById("cvPhone").innerText = cvData.personal.phone || "";
    document.getElementById("cvEmail").innerText = cvData.personal.email || "";

    var img = document.getElementById("cvProfileImage");
    if (cvData.profileImage) {
      img.src = cvData.profileImage;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

    document.getElementById("cvObjective").innerText = cvData.objective || "";
    document.getElementById("cvObjectiveSection").style.display = cvData.objective ? "block" : "none";

    document.getElementById("cvActivities").innerText = cvData.activities || "";
    document.getElementById("cvActivitiesSection").style.display = cvData.activities ? "block" : "none";

    var linkEl = document.getElementById("cvPortfolioLink");
    if (cvData.liveProject) {
      linkEl.href = cvData.liveProject;
      linkEl.innerText = cvData.liveProject;
      document.getElementById("cvPortfolioSection").style.display = "block";
    } else {
      document.getElementById("cvPortfolioSection").style.display = "none";
    }

    var skillsDiv = document.getElementById("cvSkillsList");
    skillsDiv.innerHTML = "";
    for (var i = 0; i < cvData.skills.length; i++) {
      var span = document.createElement("span");
      span.className = "skill-tag";
      span.innerText = cvData.skills[i];
      skillsDiv.appendChild(span);
    }
    document.getElementById("cvSkillsSection").style.display = cvData.skills.length > 0 ? "block" : "none";

    var expDiv = document.getElementById("cvExperienceList");
    expDiv.innerHTML = "";
    for (var i = 0; i < cvData.experience.length; i++) {
      var item = cvData.experience[i];
      var div = document.createElement("div");
      div.className = "cv-item";
      div.innerHTML = '<div class="cv-item-header"><div class="cv-item-title">' + (item.role || "") + '</div><div class="cv-item-date">' + (item.year || "") + '</div></div><div class="cv-item-subtitle">' + (item.company || "") + '</div><div class="cv-item-desc">' + (item.desc || "") + '</div>';
      expDiv.appendChild(div);
    }
    document.getElementById("cvExperienceSection").style.display = cvData.experience.length > 0 ? "block" : "none";

    var eduDiv = document.getElementById("cvEducationList");
    eduDiv.innerHTML = "";
    for (var i = 0; i < cvData.education.length; i++) {
      var item = cvData.education[i];
      var div = document.createElement("div");
      div.className = "cv-item";
      div.innerHTML = '<div class="cv-item-header"><div class="cv-item-title">' + (item.degree || "") + '</div><div class="cv-item-date">' + (item.year || "") + '</div></div><div class="cv-item-subtitle">' + (item.institute || "") + '</div><div class="cv-item-desc">' + (item.desc || "") + '</div>';
      eduDiv.appendChild(div);
    }
    document.getElementById("cvEducationSection").style.display = cvData.education.length > 0 ? "block" : "none";

    // GO TO STEP 5
    currentStep = 4;
    showStep(4);
  };

  document.getElementById("prev5").onclick = function() {
    currentStep = 3;
    showStep(currentStep);
  };

  document.getElementById("downloadPdf").onclick = function() {
    var btn = document.getElementById("downloadPdf");
    btn.innerText = "Generating...";
    btn.disabled = true;

    html2pdf()
      .set({
        margin: 0.5,
        filename: "CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
      })
      .from(document.getElementById("cvPreview"))
      .save()
      .then(function() {
        btn.innerText = "Download PDF";
        btn.disabled = false;
      });
  };

  showStep(0);

});
