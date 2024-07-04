"use client";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";

type Advance = {
  repayment_start_date: string | number | Date;
  total_advanced: number;
  repayment_percentage: number;
};

type Result = {
  date: string;
  sales: string | number;
  billedAmount: string | number;
};

export default function Home() {
  const [results, setResults] = useState<Result[]>([]);
  const [advances, setAdvances] = useState<Advance[]>([]);
  const [showResults, setShowResults] = useState(false);

  const startDate = "2022-01-01";
  const endDate = "2022-02-01";

  useEffect(() => {
    fetch("https://run.mocky.io/v3/cc07e0cb-1086-4ec6-b523-f4e00e2a3e0b")
      .then((response) => response.json())
      .then((data) => {
        setAdvances(data.advances);
      });
  }, []);

  const simulate = (
    startDate: string,
    endDate: string,
    advances: {
      repayment_start_date: string | number | Date;
      total_advanced: number;
      repayment_percentage: number;
    }[]
  ) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let results: { date: string; sales: number; billedAmount: number }[] = [];

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const today = d.toISOString().split("T")[0];

      const newResults = advances
        .filter(
          (advance) => new Date(today) >= new Date(advance.repayment_start_date)
        )
        .map((advance) => ({
          date: today,
          sales: "£" + advance.total_advanced,
          billedAmount:
            "£" + advance.total_advanced * (advance.repayment_percentage / 100),
        }));

      results = [...results, ...newResults];
    }

    return results;
  };

  const handleSimulate = (startDate: any, endDate: any) => {
    const simulationResults = simulate(startDate, endDate, advances);
    setResults(simulationResults);
    setShowResults(true);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 h-full p-4">
        <main>
          <Form
            startDate={startDate}
            endDate={endDate}
            onSimulate={handleSimulate}
          />
          {showResults && <Results results={results} />}
        </main>
      </div>
    </>
  );
}
