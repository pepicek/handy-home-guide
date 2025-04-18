
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface QuoteActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: "accept" | "decline";
}

const QuoteActionModal = ({ isOpen, onClose, onConfirm, type }: QuoteActionModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {type === "accept" ? "Accept Quote" : "Decline Quote"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {type === "accept" 
              ? "Are you sure you want to accept this quote? This will initiate the project workflow."
              : "Are you sure you want to decline this quote? This action cannot be undone."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className={type === "accept" ? "bg-green-600" : "bg-red-600"}>
            {type === "accept" ? "Accept" : "Decline"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default QuoteActionModal;
