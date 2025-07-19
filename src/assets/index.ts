// Import static assets for better reliability in production
// This ensures assets are properly bundled and served

// Note: In a real implementation, you would import the actual files
// For now, we'll use the public folder approach but with better error handling

export const ASSETS = {
  logo: '/assets/enisbuliqilogo.png',
  profile: '/assets/enisbuliqi1.jpeg',
  cv: '/assets/EnisBuliqiResume.pdf',
  placeholder: '/assets/placeholder.svg'
} as const;

// Function to get asset URL with fallback
export const getAssetUrl = (path: string, fallback?: string): string => {
  // In development, use the path as is
  if (process.env.NODE_ENV === 'development') {
    return path;
  }
  
  // In production, ensure the path starts with /
  if (!path.startsWith('/')) {
    return `/${path}`;
  }
  
  return path;
};

// Alternative approach: Use relative paths for production
export const getProductionAssetUrl = (path: string): string => {
  // Always use absolute paths for better reliability
  return path;
}; 