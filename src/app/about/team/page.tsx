export default function Team() {
  const teamMembers = [
    { name: "Kevin", role: "Lead Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Daisy", role: "Project Manager" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                  <span className="text-3xl">{member.name[0]}</span>
                </div>
              </div>
              <h2 className="card-title mt-4">{member.name}</h2>
              <p className="text-base-content/70">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}