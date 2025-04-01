/**
 * Sample image URLs that can be used when UploadThing is not working
 */
export const sampleImageUrls = [
  // Logo related images
  "/images/nothing-logo-white-removebg-preview.png",
  "/images/nothing-logo-dark.png",
  
  // Sample server icons
  "https://via.placeholder.com/150/4f46e5/ffffff?text=Study",
  "https://via.placeholder.com/150/7c3aed/ffffff?text=Chat",
  "https://via.placeholder.com/150/0ea5e9/ffffff?text=Group",
  "https://via.placeholder.com/150/10b981/ffffff?text=Team",
  "https://via.placeholder.com/150/f59e0b/ffffff?text=Class",
];

/**
 * Get a random sample image URL
 */
export const getRandomSampleImageUrl = (): string => {
  const randomIndex = Math.floor(Math.random() * sampleImageUrls.length);
  return sampleImageUrls[randomIndex];
}; 