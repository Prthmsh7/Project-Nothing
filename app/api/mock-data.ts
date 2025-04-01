// Mock data for development without a database
export const servers = [
  {
    id: "1",
    name: "Main Server",
    channels: [
      { id: "1", name: "general", type: "TEXT" },
      { id: "2", name: "announcements", type: "TEXT" },
      { id: "3", name: "study-group", type: "TEXT" },
    ]
  },
  {
    id: "2",
    name: "Gaming Server",
    channels: [
      { id: "4", name: "minecraft", type: "TEXT" },
      { id: "5", name: "valorant", type: "TEXT" },
      { id: "6", name: "among-us", type: "TEXT" },
    ]
  },
  {
    id: "3",
    name: "Project Team",
    channels: [
      { id: "7", name: "planning", type: "TEXT" },
      { id: "8", name: "resources", type: "TEXT" },
      { id: "9", name: "deadlines", type: "TEXT" },
    ]
  },
  // Add your server ID from the error message
  {
    id: "df882739-0717-4baf-b988-b8ed865d5391",
    name: "Special Server",
    channels: [
      { id: "3302071e-b85d-4d41-870b-d4aeb275fbd6", name: "general", type: "TEXT" },
      { id: "special-announcements", name: "announcements", type: "TEXT" },
      { id: "special-chat", name: "chat", type: "TEXT" },
    ]
  }
]; 