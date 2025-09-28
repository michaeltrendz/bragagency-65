export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Have a project in mind? Let’s talk! Fill out the form below or reach out
        directly, and our team will get back to you.
      </p>

      <form className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
