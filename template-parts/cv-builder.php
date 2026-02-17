<!-- CV Builder Template Part -->

<div class="container" id="cvBuilder">

  <!-- Progress Indicators -->
  <div class="progress">
    <div class="step-indicator active">Personal Info</div>
    <div class="step-indicator">Education</div>
    <div class="step-indicator">Experience</div>
    <div class="step-indicator">Skills & Projects</div>
    <div class="step-indicator">Preview</div>
  </div>

  <!-- Step 1: Personal Information -->
  <div class="step active" id="step1">
    <h3>Personal Information</h3>
    <label for="profileImage">Profile Image</label>
    <input type="file" id="profileImage" accept="image/*" />

    <label for="name">Full Name</label>
    <input id="name" type="text" placeholder="Enter your full name" />

    <label for="title">Title</label>
    <input id="title" type="text" placeholder="e.g. Software Developer" />

    <label for="location">Location</label>
    <input id="location" type="text" placeholder="City, Country" />

    <label for="phone">Phone</label>
    <input id="phone" type="text" placeholder="+880 1234 567890" />

    <label for="email">Email</label>
    <input id="email" type="text" placeholder="example@mail.com" />

    <div class="button-group">
      <div></div>
      <button class="next-btn" id="next1">Next</button>
    </div>
  </div>

  <!-- Step 2: Education -->
  <div class="step" id="step2">
    <h3>Education</h3>
    <h4>Education 1</h4>
    <label>Degree 1</label>
    <input id="degree1" type="text" placeholder="Bachelor of Science in CSE" />
    <label>Institute 1</label>
    <input id="institute1" type="text" placeholder="University Name" />
    <label>Year 1</label>
    <input id="year1" type="text" placeholder="2018 - 2022" />
    <label>Description 1</label>
    <textarea id="eduDesc1" placeholder="Brief description about this degree"></textarea>

    <h4>Education 2</h4>
    <label>Degree 2</label>
    <input id="degree2" type="text" placeholder="Master of Science in CSE" />
    <label>Institute 2</label>
    <input id="institute2" type="text" placeholder="University Name" />
    <label>Year 2</label>
    <input id="year2" type="text" placeholder="2022 - 2024" />
    <label>Description 2</label>
    <textarea id="eduDesc2" placeholder="Brief description about this degree"></textarea>

    <div class="button-group">
      <button class="prev-btn" id="prev2">Previous</button>
      <button class="next-btn" id="next2">Next</button>
    </div>
  </div>

  <!-- Step 3: Work Experience -->
  <div class="step" id="step3">
    <h3>Experience</h3>
    <h4>Job 1</h4>
    <label>Company 1</label>
    <input id="company1" type="text" placeholder="Company Name" />
    <label>Role 1</label>
    <input id="role1" type="text" placeholder="Job Title" />
    <label>Year 1</label>
    <input id="expYear1" type="text" placeholder="2022 - Present" />
    <label>Description 1</label>
    <textarea id="expDesc1" placeholder="Your responsibilities or achievements"></textarea>

    <h4>Job 2</h4>
    <label>Company 2</label>
    <input id="company2" type="text" placeholder="Company Name" />
    <label>Role 2</label>
    <input id="role2" type="text" placeholder="Job Title" />
    <label>Year 2</label>
    <input id="expYear2" type="text" placeholder="2019 - 2022" />
    <label>Description 2</label>
    <textarea id="expDesc2" placeholder="Your responsibilities or achievements"></textarea>

    <div class="button-group">
      <button class="prev-btn" id="prev3">Previous</button>
      <button class="next-btn" id="next3">Next</button>
    </div>
  </div>

  <!-- Step 4: Skills & Projects -->
  <div class="step" id="step4">
    <h3>Skills & Projects</h3>
    <label>Skills (comma separated)</label>
    <input id="skills" type="text" placeholder="JavaScript, HTML, CSS, React" />

    <label>Objective</label>
    <textarea id="objective" placeholder="Write a short career objective"></textarea>

    <label>Activities</label>
    <textarea id="activities" placeholder="Extra activities, volunteer work, hobbies"></textarea>

    <label>Live Project / Portfolio Link</label>
    <input id="liveProject" type="text" placeholder="https://yourportfolio.com" />

    <div class="button-group">
      <button class="prev-btn" id="prev4">Previous</button>
      <button class="next-btn" id="next4">Generate Preview</button>
    </div>
  </div>

  <!-- Step 5: CV Preview -->
  <div class="step" id="step5">
    <h3>Preview</h3>
    <p class="helper-text">Review your CV below. Click "Download PDF" to save it.</p>
    
    <div id="cvPreview">

      <!-- CV Header -->
      <div class="cv-header">
        <div class="cv-header-text">
          <h1 id="cvName"></h1>
          <div id="cvTitle"></div>
          <div class="cv-contact-info">
            <div id="cvLocation"></div>
            <div id="cvPhone"></div>
            <div id="cvEmail"></div>
          </div>
        </div>
        <div class="cv-header-photo">
          <img id="cvProfileImage" alt="Profile" class="cv-photo" />
        </div>
      </div>

      <!-- Objective Section -->
      <div id="cvObjectiveSection" class="cv-section">
        <h4 class="cv-section-head">Objective</h4>
        <p id="cvObjective"></p>
      </div>

      <!-- Experience Section -->
      <div id="cvExperienceSection" class="cv-section">
        <h4 class="cv-section-head">Experience</h4>
        <div id="cvExperienceList"></div>
      </div>

      <!-- Education Section -->
      <div id="cvEducationSection" class="cv-section">
        <h4 class="cv-section-head">Education</h4>
        <div id="cvEducationList"></div>
      </div>

      <!-- Skills Section -->
      <div id="cvSkillsSection" class="cv-section">
        <h4 class="cv-section-head">Skills</h4>
        <div id="cvSkillsList" class="skills-grid"></div>
      </div>

      <!-- Activities Section -->
      <div id="cvActivitiesSection" class="cv-section">
        <h4 class="cv-section-head">Activities</h4>
        <p id="cvActivities"></p>
      </div>

      <!-- Portfolio Section -->
      <div id="cvPortfolioSection" class="cv-section">
        <h4 class="cv-section-head">Portfolio</h4>
        <a id="cvPortfolioLink" href="#" target="_blank" class="cv-link"></a>
      </div>

    </div>

    <div class="button-group">
      <button class="prev-btn" id="prev5">Edit</button>
      <button class="download-btn" id="downloadPdf">Download PDF</button>
    </div>
  </div>

</div>

<!-- Toast Container -->
<div id="toastContainer" class="toast-container"></div>



<!-- <script>
  const cvBuilder = document.getElementById('cvBuilder');
  const inputFields = cvBuilder.querySelectorAll('input, textarea');
  const data = {};
  inputFields.forEach(input => {
    input.addEventListener('input', (e) => {
      data[input.id] = input.value;
      console.log(e.target);
      console.log(data);
      
    });
  });
</script> -->