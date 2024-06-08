// src/Profile.js

const Profile = () => {
  const mydata = [
    {
      avatar:
        "https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg",
      name: "Giorgi Paksashvili",
      email: "giorgi.paksashvili.2@btu.edu.ge",
      bio: "A passionate developer who loves coding and creating amazing applications.",
    },
  ];

  return (
    <div className="profile-container">
      {mydata.map((each) => (
        <div key={each.email}>
          <img src={each.avatar} alt="Profile Avatar" className="avatar" />
          <h4 className="name">{each.name}</h4>
          <h3 className="email">{each.email}</h3>
          <p className="bio">{each.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
