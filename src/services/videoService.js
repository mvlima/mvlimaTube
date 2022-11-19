import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://sgyawvzypohjxkmskumh.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneWF3dnp5cG9oanhrbXNrdW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTE1MzIsImV4cCI6MTk4Mzk2NzUzMn0.Hz2kKh4GFFwh-1iuVkNJonTL6pdH6-0xzYIHTzyJfvk";

const supabase = createClient(PROJECT_URL, API_KEY);

export default function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
