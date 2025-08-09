import React from "react";

const UserProfile = ({ name, bio, image }) => {
  return (
    <div
      className="bg-gray-100 my-20 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out 
        rounded-lg p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto"
    >
      <img
        src={image}
        alt={`${name}'s profile`}
        className="rounded-full mx-auto w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover transition-transform 
          duration-300 ease-in-out hover:scale-110"
      />
      <h2
        className="mt-4 text-center text-lg md:text-xl font-semibold transition-colors duration-300 
          ease-in-out hover:text-blue-500"
      >
        {name}
      </h2>
      <p
        className="mt-2 text-center text-sm md:text-base text-gray-600"
      >
        {bio}
      </p>
    </div>
  );
};

export default UserProfile;
