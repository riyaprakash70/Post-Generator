import React from 'react';

const PlatformButtons = ({ onClickHandlers }) => (
  <div className="platforms">
    <h3>Share on:</h3>
    <div className="platform-buttons">
      <button className="platform-btn instagram" onClick={onClickHandlers.instagram}>Instagram</button>
      <button className="platform-btn linkedin" onClick={onClickHandlers.linkedin}>LinkedIn</button>
      <button className="platform-btn twitter" onClick={onClickHandlers.twitter}>Twitter</button>
      <button className="platform-btn facebook" onClick={onClickHandlers.facebook}>Facebook</button>
      <button className="platform-btn whatsapp" onClick={onClickHandlers.whatsapp}>WhatsApp</button>
    </div>
  </div>
);

export default PlatformButtons;