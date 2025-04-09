import { useState } from "react";
import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showProfileImage, setShowProfileImage] = useState(false);

  if (!selectedUser) return null;

  return (
    <div className="p-2.5 border-b border-base-300 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div
              className="size-10 rounded-full relative cursor-pointer"
              onClick={() => setShowProfileImage(true)}
            >
              <img
                src={selectedUser.profilepic || "/avatar.png"}
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close chat button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>

      {/* Fullscreen image viewer */}
      {showProfileImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setShowProfileImage(false)}
        >
          <div className="relative">
            <img
              src={selectedUser.profilepic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="object-contain max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white"
              onClick={(e) => {
                e.stopPropagation(); // Prevent backdrop click from closing
                setShowProfileImage(false);
              }}
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ChatHeader;
