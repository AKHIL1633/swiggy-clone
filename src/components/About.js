import { useEffect, useState } from "react";

const About = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("https://api.github.com/users/AKHIL1633");
      const data = await res.json();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  return (
    <div className="about-page">
      <h1>About this project</h1>
      <p>
        A Swiggy clone built with React 18, React Router and Redux Toolkit.
        Restaurant and menu data is pulled live from Swiggy's public API
        through a small Express proxy.
      </p>

      {profile && (
        <div className="user-card">
          <img className="avatar" src={profile.avatar_url} alt={profile.login} />
          <h2>{profile.name || profile.login}</h2>
          {profile.location && <h3>{profile.location}</h3>}
          <h4>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              @{profile.login}
            </a>
          </h4>
        </div>
      )}
    </div>
  );
};

export default About;
