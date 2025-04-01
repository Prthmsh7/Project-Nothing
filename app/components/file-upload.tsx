"use client";

import { FileIcon, X, Link as LinkIcon, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { UploadDropzone } from "@/app/lib/uploadthing";
import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { sampleImageUrls } from "@/app/lib/sampleUrls";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({
  onChange,
  value,
  endpoint
}: FileUploadProps) => {
  const [useDirectUrl, setUseDirectUrl] = useState(false);
  const [showSampleImages, setShowSampleImages] = useState(false);
  const [directUrl, setDirectUrl] = useState("");
  const fileType = value?.split(".").pop();

  const handleDirectUrlSubmit = () => {
    if (directUrl) {
      onChange(directUrl);
      setDirectUrl("");
    }
  };

  const handleSampleImageSelect = (url: string) => {
    onChange(url);
    setShowSampleImages(false);
  };

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value}
          alt="Upload"
          className="rounded-full"
        />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a 
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  if (useDirectUrl) {
    return (
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Enter image URL"
            value={directUrl}
            onChange={(e) => setDirectUrl(e.target.value)}
            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
          />
          <Button 
            onClick={handleDirectUrlSubmit}
            type="button"
            size="sm"
          >
            Use
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => setUseDirectUrl(false)}
            variant="link"
            type="button"
            size="sm"
            className="text-xs"
          >
            Switch to upload
          </Button>
          <Button
            onClick={() => {
              setShowSampleImages(!showSampleImages);
            }}
            variant="link"
            type="button"
            size="sm"
            className="text-xs flex items-center gap-1"
          >
            <ImageIcon className="h-3 w-3" />
            {showSampleImages ? "Hide samples" : "Show sample images"}
          </Button>
        </div>
        
        {showSampleImages && (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {sampleImageUrls.map((url, index) => (
              <div 
                key={index} 
                className="relative h-16 w-16 cursor-pointer border border-gray-200 rounded-md overflow-hidden hover:opacity-80 transition"
                onClick={() => handleSampleImageSelect(url)}
              >
                <Image
                  fill
                  src={url}
                  alt={`Sample ${index + 1}`}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2">
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setUseDirectUrl(true)}
          variant="link"
          type="button"
          size="sm"
          className="text-xs flex items-center gap-1"
        >
          <LinkIcon className="h-3 w-3" />
          Use direct URL
        </Button>
        <Button
          onClick={() => {
            setUseDirectUrl(true);
            setShowSampleImages(true);
          }}
          variant="link"
          type="button"
          size="sm"
          className="text-xs flex items-center gap-1"
        >
          <ImageIcon className="h-3 w-3" />
          Use sample image
        </Button>
      </div>
    </div>
  )
} 