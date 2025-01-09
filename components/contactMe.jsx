import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/messages/", {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        messagetext: formData.message,
      });
      console.log(response);
      alert("Message sent!");
    } catch (error) {
      console.error("There was an error sending the message!", error);
      alert("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800">Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-gray-100 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800">Phone</label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="bg-gray-100 border-gray-300"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-800">Email</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            className="bg-gray-100 border-gray-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-800">Message</label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="bg-gray-100 border-gray-300 min-h-[100px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full font-bold bg-black hover:bg-neutral-800 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message!"}
        </Button>
      </form>
    </>
  );
}
