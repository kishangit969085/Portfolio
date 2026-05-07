import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor & AI Content Creator</h4>
                <h5>Freelance</h5>
              </div>
              <h3>Jan 2023 - Present</h3>
            </div>
            <p>
              Edited videos for social media and digital platforms. Created AI-generated videos and visual content for branding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Video Editor</h4>
                <h5>Digital Media Projects</h5>
              </div>
              <h3>Jan 2023 - Present</h3>
            </div>
            <p>
              Edited videos for social media, marketing, and branding projects. Created AI-generated videos and visuals for digital content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
