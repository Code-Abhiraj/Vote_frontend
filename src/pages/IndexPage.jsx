import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function IndexPage() {
  // Sample data for cards with colors

  const constituencies = {
    All_Over: [
      { title: "BJP", description: "Bhartiya Janta Party", votes: 56, color: "bg-orange-200" },
      { title: "Congress", description: "Indian National Congress", votes: 45, color: "bg-blue-200" },
      { title: "AAP", description: "Aam Aadmi Party", votes: 34, color: "bg-green-200" },
      { title: "CPI", description: "Communist Party of India", votes: 20, color: "bg-red-200" },
      { title: "SP", description: "Samajwadi Party", votes: 25, color: "bg-pink-200" },
      { title: "NCP", description: "Nationalist Congress Party", votes: 30, color: "bg-yellow-200" },
      { title: "Shiv Sena", description: "Shiv Sena Party", votes: 15, color: "bg-gray-200" },
      { title: "TMC", description: "Trinamool Congress", votes: 18, color: "bg-teal-200" },
    ],
    Constituency1: [
      { title: "BJP", description: "Bhartiya Janta Party", votes: 56, color: "bg-orange-200" },
      { title: "Congress", description: "Indian National Congress", votes: 45, color: "bg-blue-200" },
    ],
    Constituency2: [
      { title: "AAP", description: "Aam Aadmi Party", votes: 34, color: "bg-green-200" },
      { title: "CPI", description: "Communist Party of India", votes: 20, color: "bg-red-200" },
    ],
    Constituency3: [
      { title: "SP", description: "Samajwadi Party", votes: 25, color: "bg-pink-200" },
      { title: "NCP", description: "Nationalist Congress Party", votes: 30, color: "bg-yellow-200" },
    ],
  };

  // State for the selected constituency
  const navigate = useNavigate();
  const [selectedConstituency, setSelectedConstituency] = useState("All_Over");
  const [voterID, setVoterID] = useState("");
  const [officerID, setOfficerID] = useState("");

  // Handle Voter ID submission
  const handleVoterIDSubmit = () => {
    navigate("/OtpVerify"); 
  };

  // Handle Officer ID submission
  const handleOfficerIDSubmit = () => {
    navigate("/OtpVerify"); 
  };

  return (
    <>
      <div className="p-4">
        <label htmlFor="constituency" className="block text-sm font-medium text-gray-700 mb-2">
          Select Constituency:
        </label>
        <select
          id="constituency"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={selectedConstituency}
          onChange={(e) => setSelectedConstituency(e.target.value)}
        >
          {Object.keys(constituencies).map((constituency) => (
            <option key={constituency} value={constituency}>
              {constituency}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 h-screen text-justify">
        {/* Cards Section */}
        <div className="grid grid-cols-4 gap-4 p-4">
          {constituencies[selectedConstituency].map((party, index) => (
            <Card key={index} className={`flex flex-col ${party.color}`}>
              <CardHeader>
                <CardTitle>{party.title}</CardTitle>
                <CardDescription>{party.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Votes</p>
              </CardContent>
              <CardFooter>
                <p>{party.votes}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center items-center">
          <Tabs
            defaultValue="account"
            className="w-[400px] bg-slate shadow-md rounded-md border border-gray-200 p-4"
          >
            <TabsList className="flex gap-2 border-b border-gray-300 mb-4">
              <TabsTrigger
                value="account"
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
              >
                Voter
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
              >
                Officer
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="text-gray-700">
              <label
                htmlFor="voterID"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Enter your Voter ID
              </label>
              <input
                id="voterID"
                type="text"
                placeholder="Enter Voter ID"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={voterID}
                onChange={(e) => setVoterID(e.target.value)}
              />
              
              <button
                onClick={handleVoterIDSubmit}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Submit Voter ID
              </button>
            </TabsContent>
            <TabsContent value="password" className="text-gray-700">
              <label
                htmlFor="officerID"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Enter your Officer ID
              </label>
              <input
                id="officerID"
                type="text"
                placeholder="Enter Officer ID"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={officerID}
                onChange={(e) => setOfficerID(e.target.value)}
              />
              <button
                onClick={handleOfficerIDSubmit}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Submit Officer ID
              </button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
