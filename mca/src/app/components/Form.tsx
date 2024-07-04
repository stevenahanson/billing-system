"use client";
import Button from "../ui-components/Button";

const SimulationForm = ({ startDate, endDate, onSimulate }) => {
  const startBilling = "2022-01-01";
  const endBilling = "2022-02-01";

  const handleSimulateClick = () => {
    onSimulate(startDate, endDate);
  };

  return (
    <section className="bg-white shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Billing Simulation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            value={startBilling}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            value={endBilling}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <Button onClick={handleSimulateClick}>Run Billing</Button>
      </div>
    </section>
  );
};

export default SimulationForm;
