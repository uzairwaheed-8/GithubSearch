/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const ProfileCard = ({ user }) => {
//   const [followerCount, setFollowerCount] = useState(0);
//   const [followingCount, setFollowingCount] = useState(0);
  const [data,setdata]= useState([]);
  

  const fetchData = async () => {
    const token='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'
    try {
    //   const followersRes = await fetch(user.followers_url, {
    //     headers: {
    //       Accept: "application/json",
    //       Authorization: `token ${token}`,
    //     },
    //   });
    //   const followersData = await followersRes.json();
    //   setFollowerCount(followersData.length);

     
    //   const followingRes = await fetch(`https://api.github.com/users/${user.login}/following`, {
    //     headers: {
    //       Accept: "application/json",
    //       Authorization: `token ${token}`,
    //     },
    //   });
    //   const followingData = await followingRes.json();
    //   setFollowingCount(followingData.length);

      const userRes = await fetch(user.url, {
        headers: {
          Accept: "application/json",
          Authorization: `token ${token}`,
        },
      });
      const userData = await userRes.json();
      setdata(userData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg relative mb-8 font-mono">
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(${user.avatar_url})`,
        }}
      />
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <div
          className="w-36 h-36 rounded-full bg-cover bg-center border-4 border-white shadow-lg"
          style={{
            backgroundImage: `url(${user.avatar_url})`,
          }}
        />
      </div>
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">@{user.login}</h2>
      </div>
      <div className="bg-blue-600 text-white p-6 mt-4">
        <ul className="flex justify-center space-x-2 lg:space-x-6">
          <li>
          <span>Followers</span>
            <span className="block text-lg lg:xl text-center">{data.followers}</span>
          </li>
          <li>
          <span>Following</span>
            <span className="block text-lg lg:xl text-center">{data.following}</span>
           
          </li>
          <li>
          <span>Repositories</span>
            <span className="block text-lg lg:xl text-center">{data.public_repos}</span>
          </li>
        </ul>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-center bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition "
        >
            <span className="font-bold">Go to GitHub</span>
        
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;