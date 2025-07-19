import React, { useEffect, useState } from 'react';

const AssetTest: React.FC = () => {
  const [assetStatus, setAssetStatus] = useState<Record<string, boolean>>({});

  const testAssets = [
    '/enis-buliqi-logo-silver.png',
    '/enisbuliqi1.jpeg',
    '/EnisBuliqi-Resume.pdf',
    '/Enis/postet/album%20covers/MASQUERADE%20ARTCOVER.jpg'
  ];

  const testCV = async () => {
    try {
      const response = await fetch('/cv');
      if (response.ok) {
        console.log('✅ CV page loads successfully');
        setAssetStatus(prev => ({ ...prev, '/cv': true }));
      } else {
        console.error('❌ CV page failed to load:', response.status);
        setAssetStatus(prev => ({ ...prev, '/cv': false }));
      }
    } catch (error) {
      console.error('❌ CV page error:', error);
      setAssetStatus(prev => ({ ...prev, '/cv': false }));
    }
  };

  useEffect(() => {
    testAssets.forEach(asset => {
      if (asset === '/EnisBuliqi-Resume.pdf') {
        testCV();
      } else {
        const img = new Image();
        img.onload = () => {
          setAssetStatus(prev => ({ ...prev, [asset]: true }));
          console.log(`✅ Asset loaded: ${asset}`);
        };
        img.onerror = () => {
          setAssetStatus(prev => ({ ...prev, [asset]: false }));
          console.error(`❌ Asset failed: ${asset}`);
        };
        img.src = asset;
      }
    });
  }, []);

  return (
    <div className="fixed top-20 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-xs">
      <h3 className="font-bold mb-2">Asset Test</h3>
      {testAssets.map(asset => (
        <div key={asset} className="flex items-center gap-2">
          <span>{assetStatus[asset] ? '✅' : assetStatus[asset] === false ? '❌' : '⏳'}</span>
          <span className="truncate max-w-40">{asset.split('/').pop()}</span>
        </div>
      ))}
    </div>
  );
};

export default AssetTest; 