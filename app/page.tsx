import { currentProfile } from "@/app/lib/current-profile";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { BookOpen, Code, Globe, MessageSquare, Users } from "lucide-react";

const HomePage = async () => {
  const profile = await currentProfile();

  if (profile) {
    return redirect("/servers");
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen pb-24 relative bg-gradient-to-b from-gray-900 via-indigo-900 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Logo */}
        <div className="relative w-40 h-40 md:w-64 md:h-64 z-10 animate-float">
          <Image 
            src="/images/nothing-logo-white-removebg-preview.png"
            alt="Nothing Logo"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mt-8 text-center z-10 animate-fadeIn">
          The Ultimate Study Oasis
        </h1>
        
        {/* Subtitle */}
        <p className="text-white/80 max-w-2xl text-center text-md md:text-xl mt-6 px-4 z-10 animate-fadeIn">
          A comprehensive platform designed to streamline the academic experience by combining study group management, classroom interactions, and messaging into a single unified interface.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 mt-10 z-10 animate-fadeIn">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
            <Link href="/sign-in">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/sign-up">Create Account</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">
            Why Choose Our Platform?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                <MessageSquare className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Real-time Communication</h3>
              <p className="text-gray-600 dark:text-gray-300">Seamless messaging and discussions with your study groups and classmates.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Group Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">Create and manage study groups with ease, organize projects and assignments.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Academic Resources</h3>
              <p className="text-gray-600 dark:text-gray-300">Share and access study materials, notes, and resources within your groups.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                <Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Connect Globally</h3>
              <p className="text-gray-600 dark:text-gray-300">Collaborate with students and educators from around the world.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Versatile Functionality</h3>
              <p className="text-gray-600 dark:text-gray-300">From code sharing to media uploads, support for all file types and teaching methods.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="flex flex-col items-center text-center p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl shadow-sm border-2 border-indigo-200 dark:border-indigo-800">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Getting Started Is Easy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Sign up now and create your first study server in minutes.</p>
              <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/sign-up">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Nothing Study Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 