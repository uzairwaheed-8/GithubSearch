/* eslint-disable react/prop-types */


const IssueCard = ({ issue }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg relative mb-8 p-6">
      <h2 className="text-2xl font-semibold">{issue.title}</h2>
      <p className="text-gray-500">{issue.body || "No Description"}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Comments: {issue.comments}</span>
        <span className="text-sm text-gray-600">State: {issue.state}</span>
      </div>
      <a
        href={issue.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        View Issue
      </a>
    </div>
  );
};

export default IssueCard;
