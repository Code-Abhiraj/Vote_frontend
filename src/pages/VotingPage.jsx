import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function VotingPage() {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();
  
    const candidates = [
      { name: "Candidate A", party: "Party 1", votes: 100 },
      { name: "Candidate B", party: "Party 2", votes: 75 },
      { name: "Candidate C", party: "Party 3", votes: 50 },
    ];
  
    const handleVoteClick = (candidate) => {
      setSelectedCandidate(candidate);
      setShowWarning(true);
    };
  
    const handleConfirmVote = () => {
      // Simulate voting logic
      alert(`You voted for ${selectedCandidate.name}!`);
      setShowWarning(false);
      navigate("/"); // Redirect to the home page
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Voting Page</h1>
        <Table className="w-full">
          <TableCaption>List of candidates in your constituency</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Party</TableHead>
              <TableHead className="text-right">Votes</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate, index) => (
              <TableRow key={index}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.party}</TableCell>
                <TableCell className="text-right">{candidate.votes}</TableCell>
                <TableCell className="text-center">
                  <button
                    onClick={() => handleVoteClick(candidate)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Vote
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        {/* Warning Dialog */}
        {showWarning && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
              <p className="text-gray text-lg mb-4">
                Are you sure you want to vote for{" "}
                <strong>{selectedCandidate?.name}</strong>?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowWarning(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmVote}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  