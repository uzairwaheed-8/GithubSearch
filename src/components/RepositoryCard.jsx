/* eslint-disable react/prop-types */


const RepositoryCard = ({ repository }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg relative mb-8 p-6">
      <h2 className="text-2xl font-semibold">{repository.name}</h2>
      <p className="text-gray-500">By @{repository.owner.login}</p>
      <p className="text-gray-500">{repository.description || "No Description"}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Stars: {repository.stargazers_count || 0}</span>
        <span className="text-sm text-gray-600">Forks: {repository.forks_count || 0}</span>
      </div>
      <a
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        View Repository
      </a>
    </div>
  );
};

export default RepositoryCard;
