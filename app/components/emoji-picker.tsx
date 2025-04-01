"use client";

import { Smile } from "lucide-react";
import { useTheme } from "next-themes";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/app/components/ui/popover";

// Common emojis
const EMOJIS = [
  "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", 
  "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙",
  "👍", "👌", "👏", "🔥", "❤️", "😎", "🥳", "🤔", "🤗", "🤭",
  "😐", "😶", "😏", "😒", "🙄", "😬", "🤫", "🤐", "😷", "🤒",
  "😴", "😪", "😵", "🤯", "🥴", "😕", "😟", "🙁", "😮", "😲"
];

interface EmojiPickerProps {
  onChange: (value: string) => void;
}

export const EmojiPicker = ({
  onChange
}: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger>
        <Smile
          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
        />
      </PopoverTrigger>
      <PopoverContent 
        side="right" 
        sideOffset={40}
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md rounded-md p-2 w-[320px] h-[240px] overflow-auto"
      >
        <div className="grid grid-cols-8 gap-2">
          {EMOJIS.map((emoji) => (
            <button
              key={emoji}
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1 rounded-md text-xl transition"
              onClick={() => onChange(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
} 