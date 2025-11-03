// This utility has been replaced by the DemoForm component
// The DemoForm component now handles all demo request functionality
// including form validation and database storage

export const handleDemoRequest = () => {
  // This function is now deprecated
  // Use the DemoForm component instead for proper form handling
  console.warn('handleDemoRequest is deprecated. Use DemoForm component instead.');
};

// Export types for the demo form
export interface DemoFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}