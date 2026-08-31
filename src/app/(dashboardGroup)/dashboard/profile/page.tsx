"use client";

import { useEffect, useState } from "react";
import { getMyProfile } from "@/service/getMyProfile";
import { updateMyProfile } from "@/service/updateMyProfile";
// import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  // const router = useRouter();

  // 1️⃣ Profile Data Fetching
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getMyProfile();

        if (res?.success && res?.data) {
          setFormData({
            name: res.data.name || "",
            email: res.data.email || "",
            phone: res.data.phone || "",
            role: res.data.role || "",
          });
        }
      } catch (error) {
        console.error("Fetch profile error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // 2️⃣ Profile Update Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const res = await updateMyProfile({
        name: formData.name,
        phone: formData.phone,
      });

      if (res?.success) {
        alert(res?.message || "Profile updated successfully!");

        window.location.reload();
      } else {
        alert(res?.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong!");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <p className="p-6">Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Profile Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={formData.email}
            disabled
            className="w-full p-2 border rounded-lg mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={updating}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {updating ? "Updating..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
