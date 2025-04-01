import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Sign-in Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="relative w-24 h-24 mx-auto">
                <Image 
                  src="/images/nothing-logo-dark.png"
                  alt="Nothing Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <h2 className="text-2xl font-bold mt-4 dark:text-white">Welcome back!</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Sign in to your account to continue</p>
          </div>
          
          <SignIn />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side - Image/Illustration */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-b from-indigo-600 to-indigo-900 p-12 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">The Ultimate Study Oasis</h1>
          <p className="text-white/90 text-lg mb-8">
            Connect with classmates, organize study groups, and collaborate on projects all in one place.
          </p>
          <div className="relative h-72 w-full">
            <Image
              src="/images/nothing-logo-white-removebg-preview.png"
              alt="Study Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 