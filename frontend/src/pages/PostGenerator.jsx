import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Toast from '../components/Toast';
import '../styles/PostGenerator.css';

function PostGenerator() {
  const [userInput, setUserInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [platformPosts, setPlatformPosts] = useState({});
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const generatorRef = useRef(null);

  const socialPlatforms = [
    { name: 'Instagram', icon: '📸' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'Facebook', icon: '📘' },
    { name: 'WhatsApp', icon: '🟢' },
    { name: 'Telegram', icon: '📢' },
    { name: 'Threads', icon: '🧵' },
    { name: 'Reddit', icon: '👽' },
    { name: 'YouTube', icon: '🎥' },
  ];

  const handleGenerate = async () => {
  if (!userInput && !selectedFile) {
    setToastMessage('Please enter content or upload a file.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/post/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: userInput }),
    });

    const data = await response.json();

    if (data?.post) {
      const baseText = data.post;
      const fileName = selectedFile ? `Uploaded: ${selectedFile.name}` : '';

      const generated = {
        Instagram: `📸 ${baseText}\n${fileName}\n#creative #instagram`,
        LinkedIn: `💼 ${baseText}\n${fileName}\n#ProfessionalGrowth #LinkedInUpdate`,
        Twitter: `🐦 ${baseText.slice(0, 220)}\n${fileName}`,
        WhatsApp: `🟢 Share this with your circle: ${baseText}\n${fileName}`,
        Facebook: `📘 ${baseText}\n${fileName}`,
        Telegram: `📢 Update:\n${baseText}\n${fileName}`,
        Threads: `🧵 ${baseText}\n${fileName}`,
        Reddit: `👽 r/dev - ${baseText}\nFeedback welcome!`,
        YouTube: `🎥 Video incoming! ${baseText}\n${fileName}`,
      };

      setPlatformPosts(generated);
      setSelectedPlatform('');
      setToastMessage('Post generated! Select a platform to view.');
    } else {
      setToastMessage('Failed to generate post.');
    }
  } catch (err) {
    console.error('Frontend fetch error:', err);
    setToastMessage('An error occurred while generating the post.');
  }
};


  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setToastMessage('Copied to clipboard!');
  };

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="post-generator-wrapper" style={{ background: '#FFFFFF', color: '#333333' }}>
      {/* Hero Section */}
      <motion.section
        className="hero-top-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '6rem 2rem',
          minHeight: '450px',
          backgroundColor: '#F5F5F5',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <motion.span
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            background: 'linear-gradient(to right, #FAD0C4, #D96BA0)',
            color: '#2D2F4A',
            display: 'inline-block',
            fontWeight: '500',
            marginBottom: '1.5rem',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Effortlessly produce amazing Post Contents
        </motion.span>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#2D2F4A', margin: '1.2rem 0' }}>
          Post Generator Made Easy
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: '#333333' }}>
          Our user-friendly tool makes it simple to turn your content into engaging social posts.
        </p>
        <button
          onClick={scrollToGenerator}
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            background: '#2D2F4A',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </motion.section>

      <div style={{ marginTop: '4rem' }}></div>

      {/* Generator */}
      <motion.section
  className="hero"
  ref={generatorRef}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  style={{
    maxWidth: '1200px',
    width: '95%',
    margin: '0 auto',
    backgroundColor: '#2D2F4A',
    borderRadius: '20px',
    padding: '3rem 2rem',
  }}
>

        <h1>
          Create your next social media post with <span>one click ✨</span>
        </h1>

        <textarea
          placeholder="Write your content here or paste a link..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ width: '80%', padding: '1rem', marginBottom: '1rem', borderRadius: '10px' }}
        />

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          style={{ marginBottom: '1rem' }}
        />

        <button onClick={handleGenerate}>✨ Generate Post</button>

        {Object.keys(platformPosts).length > 0 && (
          <motion.div
            className="platform-icons"
            style={{ marginTop: '1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Choose a platform to view post:</h3>
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem' }}
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {socialPlatforms.map(({ name, icon }) => (
                <motion.button
                  key={name}
                  onClick={() => setSelectedPlatform(name)}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  style={{
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    background: selectedPlatform === name ? '#333' : '#fff',
                    color: selectedPlatform === name ? '#fff' : '#111',
                    cursor: 'pointer',
                  }}
                >
                  {icon} {name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {selectedPlatform && (
          <motion.div
            className="selected-post"
            style={{
              marginTop: '2rem',
              background: '#f5f5f5',
              color: 'black',
              padding: '1rem',
              borderRadius: '10px',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{selectedPlatform} Post</h2>
            <textarea
              readOnly
              value={platformPosts[selectedPlatform]}
              style={{
                width: '80%',
                padding: '1rem',
                borderRadius: '8px',
                background: '#fff',
                color: '#000',
              }}
            />
            <button onClick={() => handleCopy(platformPosts[selectedPlatform])}>
              Copy to Clipboard
            </button>
          </motion.div>
        )}
      </motion.section>

      <div style={{ marginTop: '5rem' }}></div>

      {/* Why Use Section */}
      <motion.section
        className="why-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="why-content">
          <div className="why-left">
            <h2>Why use our AI social media post generator?</h2>
            <p>
              Social media content creation is easier than ever with our tool. It helps
              you generate fresh, engaging posts without the need for brainstorming.
            </p>
            <button className="get-started-btn" onClick={scrollToGenerator}>
              Get started now →
            </button>
          </div>
          <div className="why-right">
            {[
              ['💡', 'Content ready in seconds', 'Effortlessly generate post ideas and captions in clicks.'],
              ['🧥', 'Tweak tone and length', 'Adjust your post’s style for any platform or brand tone.'],
              ['🖱', 'Repurpose for other platforms', 'Turn content into platform-specific posts easily.'],
              ['✨', 'Unlimited posts for free', 'Sign up to access unlimited AI-generated posts — free forever.'],
            ].map(([icon, title, desc], idx) => (
              <motion.div
                className="why-feature"
                key={title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <span className="icon">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Bottom Section */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>One tool, endless possibilities</h2>
        <p>
          Explore how our toolkit makes content creation and growth so much simpler.
        </p>
        <button onClick={scrollToGenerator}>Get started now →</button>
      </motion.section>

      {/* Toast */}
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
    </div>
  );
}

export default PostGenerator;
