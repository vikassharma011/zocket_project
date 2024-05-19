import React from 'react';

const ControlPanel = ({ caption, setCaption, cta, setCta, bgColor, setBgColor }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm">Caption:</label>
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} className="border p-2 w-full text-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm">CTA:</label>
        <input type="text" value={cta} onChange={(e) => setCta(e.target.value)} className="border p-2 w-full text-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm">Background Color:</label>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="border p-2 w-full text-sm" />
      </div>
    </div>
  );
};

export default ControlPanel;
