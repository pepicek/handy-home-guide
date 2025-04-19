
import React from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoPreviewProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({ isOpen, onOpenChange }) => {
  return (
    <>
      <div className="relative rounded-lg overflow-hidden bg-gray-900 mb-6 cursor-pointer group" onClick={() => onOpenChange(true)}>
        <div className="aspect-video bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-white">
            <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Play className="h-8 w-8 text-anthracite ml-1" />
            </div>
            <p className="font-medium">Watch how YelloPago works for visitors</p>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl p-0 bg-black">
          <div className="aspect-video w-full">
            <div className="flex items-center justify-center h-full text-white">
              <p className="text-center">Visitor onboarding video would play here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
