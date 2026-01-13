import { useEffect, useState } from "react";
import { X, MessageSquare, Phone } from "lucide-react";

const COURSES = ["Guitar", "Ukulele", "Bass", "Vocal", "Other"];

const WhatsAppCTA = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(COURSES[0]);
  const [submitting, setSubmitting] = useState(false);

  // Auto-show after 8 seconds on the home page
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    if (!name.trim()) return false;
    if (!phone.trim()) return false;
    if (!/^[0-9+\-\s]{6,20}$/.test(phone)) return false;
    return true;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) {
      alert("Please enter a valid name and phone number.");
      return;
    }
    setSubmitting(true);

    const number = "919035905406"; // WhatsApp number with country code (+91)
    const text = `Hi, I'm ${name}. I'm interested in ${course} course. My phone: ${phone}. Please contact me.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp chat
    window.open(url, "_blank");

    // Small delay then close modal and reset
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      setName("");
      setPhone("");
      setCourse(COURSES[0]);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-50 flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full shadow-lg ring-2 ring-primary/30 transition-all"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare size={18} />
        <span className="hidden sm:inline font-medium">Contact via WhatsApp</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <form
            onSubmit={handleSubmit}
            className="relative bg-card w-full max-w-md p-6 rounded-2xl border border-border shadow-soft z-10"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-md text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Quick Enquiry</h3>
                <p className="text-sm text-muted-foreground">Send us your details and we'll get back on WhatsApp.</p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block">
                <span className="text-sm text-muted-foreground">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full bg-background/50 border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm text-muted-foreground">Phone</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full bg-background/50 border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="+91 9XXXXXXXXX"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm text-muted-foreground">Course</span>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="mt-1 w-full bg-background/50 border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {COURSES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </label>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-md text-sm bg-background border border-border text-foreground hover:bg-background/90"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 rounded-md text-sm bg-primary text-primary-foreground font-semibold hover:opacity-95 disabled:opacity-60"
                >
                  {submitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default WhatsAppCTA;
