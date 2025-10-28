import { useState } from "react";
import { Search, Send, ArrowLeft, MoreVertical, Phone, Video, Image as ImageIcon, Smile } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Message {
  id: number;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isGroup: boolean;
  isCoach: boolean;
  online?: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Jackson Hayes",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400",
    lastMessage: "Great session today! Keep up the good work 💪",
    timestamp: "2m ago",
    unread: 2,
    isGroup: false,
    isCoach: true,
    online: true,
  },
  {
    id: "2",
    name: "Boxing Squad",
    avatar: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400",
    lastMessage: "Mike: See you all tomorrow at 6am!",
    timestamp: "15m ago",
    unread: 5,
    isGroup: true,
    isCoach: false,
  },
  {
    id: "3",
    name: "Sarah Mitchell",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    lastMessage: "Thanks for rescheduling the session",
    timestamp: "1h ago",
    unread: 0,
    isGroup: false,
    isCoach: true,
    online: false,
  },
  {
    id: "4",
    name: "Tennis Partners",
    avatar: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400",
    lastMessage: "You: Anyone up for doubles this weekend?",
    timestamp: "3h ago",
    unread: 0,
    isGroup: true,
    isCoach: false,
  },
  {
    id: "5",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    lastMessage: "Let's focus on cardio next week",
    timestamp: "1d ago",
    unread: 0,
    isGroup: false,
    isCoach: true,
    online: true,
  },
  {
    id: "6",
    name: "Fitness Fam",
    avatar: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400",
    lastMessage: "Emma: New gym opening downtown! 🎉",
    timestamp: "2d ago",
    unread: 0,
    isGroup: true,
    isCoach: false,
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    senderId: "coach",
    text: "Hey! How are you feeling after yesterday's session?",
    timestamp: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    senderId: "me",
    text: "Pretty good! A bit sore but that's expected 😅",
    timestamp: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    senderId: "me",
    text: "The combinations drill was intense",
    timestamp: "10:32 AM",
    isMe: true,
  },
  {
    id: 4,
    senderId: "coach",
    text: "That's great to hear! The soreness means you're building muscle. Make sure to stretch and stay hydrated.",
    timestamp: "10:35 AM",
    isMe: false,
  },
  {
    id: 5,
    senderId: "coach",
    text: "For tomorrow, we'll work on footwork and defense. Bring your A-game! 💪",
    timestamp: "10:35 AM",
    isMe: false,
  },
  {
    id: 6,
    senderId: "me",
    text: "Sounds perfect! See you at 8am?",
    timestamp: "10:40 AM",
    isMe: true,
  },
  {
    id: 7,
    senderId: "coach",
    text: "Absolutely! See you then 👊",
    timestamp: "10:42 AM",
    isMe: false,
  },
];

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<Conversation | null>(null);
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, send message to backend
      setMessageText("");
    }
  };

  if (selectedChat) {
    return (
      <div className="h-full bg-white flex flex-col">
        {/* Chat Header */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-black/10 z-10">
          <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={() => setSelectedChat(null)}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-[#1a1a1a]" strokeWidth={2} />
              </button>
              <div className="relative">
                <ImageWithFallback
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {selectedChat.online && !selectedChat.isGroup && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#1a1a1a] font-semibold tracking-tight truncate">{selectedChat.name}</h3>
                <p className="text-xs text-gray-600 tracking-tight">
                  {selectedChat.isGroup ? `${Math.floor(Math.random() * 8) + 3} members` : selectedChat.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!selectedChat.isGroup && (
                <>
                  <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-all duration-200">
                    <Phone className="w-5 h-5 text-[#1a1a1a]" strokeWidth={2} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-all duration-200">
                    <Video className="w-5 h-5 text-[#1a1a1a]" strokeWidth={2} />
                  </button>
                </>
              )}
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-all duration-200">
                <MoreVertical className="w-5 h-5 text-[#1a1a1a]" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 bg-gray-50">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-[18px] px-4 py-3 ${
                  message.isMe
                    ? "bg-[#c6ff00] text-[#1a1a1a]"
                    : "bg-white text-[#1a1a1a] border border-black/10 shadow-sm"
                }`}
              >
                <p className="text-sm tracking-tight leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.isMe ? "text-[#1a1a1a]/60" : "text-gray-500"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-xl border-t border-black/10 px-5 py-4">
          <div className="max-w-md mx-auto flex items-end gap-2">
            <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200 flex-shrink-0">
              <ImageIcon className="w-5 h-5 text-gray-400" strokeWidth={2} />
            </button>
            <div className="flex-1 bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] px-4 py-3 flex items-center gap-2">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-white text-sm placeholder:text-gray-500 outline-none"
              />
              <button className="hover:opacity-70 transition-opacity">
                <Smile className="w-5 h-5 text-gray-400" strokeWidth={2} />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              className="w-10 h-10 bg-[#c6ff00] hover:bg-[#d4ff00] rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send className="w-5 h-5 text-black" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white">
      <div className="max-w-md mx-auto px-5 py-5">
        {/* Search Bar */}
        <div className="mb-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" strokeWidth={2} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search messages..."
              className="w-full bg-gray-50 border border-black/10 rounded-[16px] pl-12 pr-4 py-3.5 text-[#1a1a1a] placeholder:text-gray-500 focus:outline-none focus:border-[#c6ff00]/50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="space-y-2">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedChat(conversation)}
              className="w-full bg-white border border-black/10 hover:border-gray-300 rounded-[18px] p-4 transition-all duration-200 text-left shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <ImageWithFallback
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {conversation.online && !conversation.isGroup && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                  {conversation.isGroup && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#c6ff00] rounded-full flex items-center justify-center text-[10px] font-bold text-[#1a1a1a]">
                      {Math.floor(Math.random() * 8) + 3}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[#1a1a1a] font-semibold tracking-tight truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-600 flex-shrink-0 ml-2">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400 tracking-tight truncate pr-2">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-[#c6ff00] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-black">
                          {conversation.unread}
                        </span>
                      </div>
                    )}
                  </div>
                  {conversation.isCoach && (
                    <div className="mt-2">
                      <span className="inline-block px-2 py-0.5 bg-[#c6ff00]/10 text-[#c6ff00] text-xs font-semibold rounded-full">
                        Coach
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredConversations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No conversations found</p>
          </div>
        )}
      </div>
    </div>
  );
}
