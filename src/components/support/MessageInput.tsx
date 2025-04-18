
import React, { useState } from "react";
import { Paperclip, Smile, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface MessageInputProps {
  onSend: (message: string, attachments: File[]) => void;
  placeholder?: string;
}

const ALLOWED_FILE_TYPES = "image/*,.pdf,.doc,.docx,.txt";
const EMOTICONS = ["😊", "😂", "🤔", "👍", "❤️", "😎", "🎉", "🙌", "👋", "🤝"];

export const MessageInput = ({ onSend, placeholder = "Type your message..." }: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      onSend(message, attachments);
      setMessage("");
      setAttachments([]);
    }
  };

  const insertEmoticon = (emoticon: string) => {
    setMessage(prev => prev + emoticon);
  };

  return (
    <div className="space-y-2">
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {attachments.map((file, index) => (
            <div key={index} className="flex items-center gap-1 bg-muted p-1 rounded text-sm">
              <span className="truncate max-w-[200px]">{file.name}</span>
              <button
                onClick={() => setAttachments(prev => prev.filter((_, i) => i !== index))}
                className="text-muted-foreground hover:text-destructive"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex gap-2">
        <div className="flex-1">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder}
            className="min-h-[80px]"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" type="button">
                <Smile className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2">
              <div className="grid grid-cols-5 gap-1">
                {EMOTICONS.map((emoticon) => (
                  <button
                    key={emoticon}
                    onClick={() => insertEmoticon(emoticon)}
                    className="p-2 hover:bg-muted rounded text-lg"
                  >
                    {emoticon}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          
          <input
            type="file"
            id="file-upload"
            multiple
            accept={ALLOWED_FILE_TYPES}
            onChange={handleFileChange}
            className="hidden"
          />
          
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
