// Types
export interface Channel {
  id: string;
  name: string;
  type: string;
}

export interface Server {
  id: string;
  name: string;
  channels: Channel[];
}

// Service functions
export const fetchServerById = async (serverId: string): Promise<Server> => {
  const response = await fetch(`/api/servers/${serverId}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch server data: ${response.statusText}`);
  }
  
  return response.json();
};

// Helper function to get a specific channel by ID
export const getChannelById = (server: Server, channelId: string): Channel | undefined => {
  return server.channels.find(channel => channel.id === channelId);
}; 