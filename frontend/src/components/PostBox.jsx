import React from 'react';

const PostBox = ({ postContent, githubUrl, selectedFile, setPostContent, setGithubUrl, setSelectedFile, onGenerate }) => {
  return (
    <div className="form-section">
      <h2>What do you want to write about?</h2>
      <textarea
        placeholder="Eg. 'Promote my photography course to get new signups. Registration closes in 3 days.'"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />

      <input
        type="text"
        className="github-url-input"
        placeholder="Paste GitHub repo URL (optional)"
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
      />

      <input
        type="file"
        className="file-upload-input"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />

      <button onClick={onGenerate}>✨ Generate post</button>
    </div>
  );
};

export default PostBox;