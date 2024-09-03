// components/Recommended.js
export default function Recommended() {
    return (
      <section id="recommended" className="p-6 bg-gray-700 text-white rounded-lg shadow-md w-full mb-6">
        <h2 className="text-2xl font-bold mb-4">Recommended</h2>
        <p className="text-lg leading-relaxed">
          Based on your interests and experiences, I recommend exploring these resources:
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-4">
          <li>Salesforce Training Courses</li>
          <li>Networking Events in the Tech Industry</li>
          <li>Books on Sales Strategies and Techniques</li>
        </ul>
      </section>
    );
  }
  